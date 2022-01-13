<template>
  <div class="d-flex justify-content-center col-lg-8 mx-auto">
    <div class="card col-lg-3">
      <div class="card-header font-weight-bold text-center">Group list</div>
      <a
        class="list-group-item list-group-item-action"
        :class="{ active: group.active }"
        v-for="group in groups"
        :key="group.name"
        @click="onGroupClick(group.name)"
      >
        {{ group.name }}
      </a>
    </div>
    <div class="col-lg-5 border" style="height: 90vh">
      <Chat
        v-if="visible"
        :participants="participants"
        :myself="myself"
        :messages="messages"
        :chat-title="chatTitle"
        :placeholder="placeholder"
        :colors="colors"
        :border-style="borderStyle"
        :hide-close-button="hideCloseButton"
        :close-button-icon-size="closeButtonIconSize"
        :submit-icon-size="submitIconSize"
        :submit-image-icon-size="submitImageIconSize"
        :load-more-messages="toLoad.length > 0 ? loadMoreMessages : null"
        :async-mode="asyncMode"
        :scroll-bottom="scrollBottom"
        :display-header="false"
        :send-images="false"
        :profile-picture-config="profilePictureConfig"
        :timestamp-config="timestampConfig"
        :link-options="linkOptions"
        :accept-image-types="'.png, .jpeg'"
        @onImageClicked="onImageClicked"
        @onImageSelected="onImageSelected"
        @onMessageSubmit="onMessageSubmit"
        @onType="onType"
        @onClose="onClose"
      />
    </div>
  </div>
</template>

<script>
import { Chat } from "vue-quick-chat";
import "vue-quick-chat/dist/vue-quick-chat.css";

export default {
  components: {
    Chat,
  },
  computed: {
    myself: function () {
      return {
        name: this.val_user_id,
        id: this.val_user_id,
        profilePicture: "",
      };
    },
  },
  mounted: function () {
    // [TODO] setTimeout is a bad idea
    window.setTimeout(async () => {
      try {
        let groups = await this.seal.gm.groupGetByUserId(this.val_user_id);
        this.groups = groups.map((d) => {
          return {
            name: d.valGroupId,
            active: false,
          };
        });
      } catch (err) {
        console.error(err);
      }
    }, 10);
  },
  data() {
    return {
      group_id: "",
      groups: [],
      visible: true,
      participants: [],

      messages: [],
      chatTitle: "",
      placeholder: "Type your message",
      colors: {
        header: {
          bg: "#1e81b0",
          text: "#fff",
        },
        message: {
          myself: {
            bg: "#fafafa",
            text: "#505050",
          },
          others: {
            bg: "#1e81b0",
            text: "#fff",
          },
          messagesDisplay: {
            bg: "#fff",
          },
        },
        submitIcon: "#76b5c5",
        submitImageIcon: "#76b5c5",
      },
      borderStyle: {
        topLeft: "0px",
        topRight: "0px",
        bottomLeft: "0px",
        bottomRight: "0px",
      },
      hideCloseButton: true,
      submitIconSize: 25,
      submitImageIconSize: 25,
      closeButtonIconSize: "20px",
      asyncMode: false,
      toLoad: [],
      scrollBottom: {
        messageSent: true,
        messageReceived: true,
      },
      displayHeader: false,
      profilePictureConfig: {
        others: false,
        myself: false,
        styles: {
          width: "30px",
          height: "30px",
          borderRadius: "50%",
        },
      },
      timestampConfig: {
        format: "HH:mm",
        relative: false,
      },
      linkOptions: {
        myself: {
          className: "myLinkClass",
          events: {
            click: function (e) {
              alert("Link clicked!");
            },
            mouseover: function (e) {
              alert("Link hovered!");
            },
          },
          format: function (value, type) {
            if (type === "url" && value.length > 50) {
              value = value.slice(0, 50) + "…";
            }
            return value;
          },
        },
        others: {
          className: "othersLinkClass",
          events: {
            click: function (e) {
              alert("Link clicked!");
            },
            mouseover: function (e) {
              alert("Link hovered!");
            },
          },
          format: function (value, type) {
            if (type === "url" && value.length > 50) {
              value = value.slice(0, 50) + "…";
            }
            return value;
          },
        },
      },
    };
  },
  methods: {
    onType: function (event) {
      //here you can set any behavior
    },
    loadMoreMessages(resolve) {
      setTimeout(() => {
        resolve(this.toLoad); //We end the loading state and add the messages
        //Make sure the loaded messages are also added to our local messages copy or they will be lost
        this.messages.unshift(...this.toLoad);
        this.toLoad = [];
      }, 1000);
    },
    onMessageSubmit: function (message) {
      /*
       * example simulating an upload callback.
       * It's important to notice that even when your message wasn't send
       * yet to the server you have to add the message into the array
       */
      this.val.obj.publish(this.val_user_id, this.group_id, message);
      //this.messages.push(message);

      /*
       * you can update message state after the server response
       */
      // timeout simulating the request
      setTimeout(() => {
        message.uploaded = true;
      }, 2000);
    },
    onClose() {
      this.visible = false;
    },
    onImageSelected(files, message) {},
    onImageClicked(message) {},

    async onGroupClick(group_name) {
      this.val.obj.unsubscribe(this.val_user_id, this.group_id);
      this.messages = [];
      this.group_id = group_name;
      for (let i = 0; i < this.groups.length; i++) {
        this.groups[i].active = this.groups[i].name === group_name;
      }
      this.participants = await this.fetchGroupMember(group_name);

      // Subscribe the new group
      this.val.obj.subscribe(
        this.val_user_id,
        this.group_id,
        this.onMessage.bind(this)
      );
    },
    async fetchGroupMember(group_name) {
      let group_info = await this.seal.gm.groupDocumentsGroupDocIdGet(
        group_name
      );

      console.info("Fetched member list", group_info);

      return group_info["members"].map((member) => {
        return {
          name: member["valUserId"],
          id: member["valUserId"],
          profilePicture: "",
        };
      });
    },
    async onMessage(msg) {
      console.info("[onmessage]", msg);
      this.messages.push({
        content: msg["message"],
        participantId: msg["user_id"],
        timestamp: msg["time"],
        uploaded: true,
        viewed: false,
        type: "text",
      });
      // {
      //     content: "received messages",
      //     myself: false,
      //     participantId: 1,
      //     timestamp: {
      //       year: 2019,
      //       month: 3,
      //       day: 5,
      //       hour: 20,
      //       minute: 10,
      //       second: 3,
      //       millisecond: 123,
      //     },
      //     type: "text",
      //   },
    },
  },
};
</script>