# SsGroupManagement.DefaultApi

All URIs are relative to *https://example.com/ss-gm/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**groupDocumentsGet**](DefaultApi.md#groupDocumentsGet) | **GET** /group-documents | 
[**groupDocumentsGroupDocIdDelete**](DefaultApi.md#groupDocumentsGroupDocIdDelete) | **DELETE** /group-documents/{groupDocId} | 
[**groupDocumentsGroupDocIdGet**](DefaultApi.md#groupDocumentsGroupDocIdGet) | **GET** /group-documents/{groupDocId} | 
[**groupDocumentsGroupDocIdPut**](DefaultApi.md#groupDocumentsGroupDocIdPut) | **PUT** /group-documents/{groupDocId} | 
[**groupDocumentsPost**](DefaultApi.md#groupDocumentsPost) | **POST** /group-documents | 



## groupDocumentsGet

> [VALGroupDocument] groupDocumentsGet(opts)



Retrieves VAL group documents satisfying filter criteria

### Example

```javascript
import SsGroupManagement from 'ss_group_management';
let defaultClient = SsGroupManagement.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2ClientCredentials
let oAuth2ClientCredentials = defaultClient.authentications['oAuth2ClientCredentials'];
oAuth2ClientCredentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SsGroupManagement.DefaultApi();
let opts = {
  'valGroupId': "valGroupId_example", // String | String identifying the VAL group.
  'valServiceId': "valServiceId_example" // String | String identifying the Val service.
};
apiInstance.groupDocumentsGet(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **valGroupId** | **String**| String identifying the VAL group. | [optional] 
 **valServiceId** | **String**| String identifying the Val service. | [optional] 

### Return type

[**[VALGroupDocument]**](VALGroupDocument.md)

### Authorization

[oAuth2ClientCredentials](../README.md#oAuth2ClientCredentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json


## groupDocumentsGroupDocIdDelete

> groupDocumentsGroupDocIdDelete(groupDocId)



Deletes a VAL Group.

### Example

```javascript
import SsGroupManagement from 'ss_group_management';
let defaultClient = SsGroupManagement.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2ClientCredentials
let oAuth2ClientCredentials = defaultClient.authentications['oAuth2ClientCredentials'];
oAuth2ClientCredentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SsGroupManagement.DefaultApi();
let groupDocId = "groupDocId_example"; // String | String identifying an individual VAL group document resource.
apiInstance.groupDocumentsGroupDocIdDelete(groupDocId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupDocId** | **String**| String identifying an individual VAL group document resource. | 

### Return type

null (empty response body)

### Authorization

[oAuth2ClientCredentials](../README.md#oAuth2ClientCredentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/problem+json


## groupDocumentsGroupDocIdGet

> VALGroupDocument groupDocumentsGroupDocIdGet(groupDocId, opts)



Retrieves VAL group information satisfying filter criteria.

### Example

```javascript
import SsGroupManagement from 'ss_group_management';
let defaultClient = SsGroupManagement.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2ClientCredentials
let oAuth2ClientCredentials = defaultClient.authentications['oAuth2ClientCredentials'];
oAuth2ClientCredentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SsGroupManagement.DefaultApi();
let groupDocId = "groupDocId_example"; // String | String identifying an individual VAL group document resource.
let opts = {
  'groupMembers': true, // Boolean | When set to true indicates the group management server to send the members list information of the VAL group.
  'groupConfiguration': true // Boolean | When set to true indicates the group management server to send the group configuration information of the VAL group.
};
apiInstance.groupDocumentsGroupDocIdGet(groupDocId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupDocId** | **String**| String identifying an individual VAL group document resource. | 
 **groupMembers** | **Boolean**| When set to true indicates the group management server to send the members list information of the VAL group. | [optional] 
 **groupConfiguration** | **Boolean**| When set to true indicates the group management server to send the group configuration information of the VAL group. | [optional] 

### Return type

[**VALGroupDocument**](VALGroupDocument.md)

### Authorization

[oAuth2ClientCredentials](../README.md#oAuth2ClientCredentials)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json


## groupDocumentsGroupDocIdPut

> VALGroupDocument groupDocumentsGroupDocIdPut(groupDocId, vALGroupDocument)



Updates an individual VAL group document.

### Example

```javascript
import SsGroupManagement from 'ss_group_management';
let defaultClient = SsGroupManagement.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2ClientCredentials
let oAuth2ClientCredentials = defaultClient.authentications['oAuth2ClientCredentials'];
oAuth2ClientCredentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SsGroupManagement.DefaultApi();
let groupDocId = "groupDocId_example"; // String | String identifying an individual VAL group document resource
let vALGroupDocument = new SsGroupManagement.VALGroupDocument(); // VALGroupDocument | VAL group document to be updated in Group management server.
apiInstance.groupDocumentsGroupDocIdPut(groupDocId, vALGroupDocument, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupDocId** | **String**| String identifying an individual VAL group document resource | 
 **vALGroupDocument** | [**VALGroupDocument**](VALGroupDocument.md)| VAL group document to be updated in Group management server. | 

### Return type

[**VALGroupDocument**](VALGroupDocument.md)

### Authorization

[oAuth2ClientCredentials](../README.md#oAuth2ClientCredentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json


## groupDocumentsPost

> VALGroupDocument groupDocumentsPost(vALGroupDocument)



Creates a new VAL group document.

### Example

```javascript
import SsGroupManagement from 'ss_group_management';
let defaultClient = SsGroupManagement.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2ClientCredentials
let oAuth2ClientCredentials = defaultClient.authentications['oAuth2ClientCredentials'];
oAuth2ClientCredentials.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SsGroupManagement.DefaultApi();
let vALGroupDocument = new SsGroupManagement.VALGroupDocument(); // VALGroupDocument | 
apiInstance.groupDocumentsPost(vALGroupDocument, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vALGroupDocument** | [**VALGroupDocument**](VALGroupDocument.md)|  | 

### Return type

[**VALGroupDocument**](VALGroupDocument.md)

### Authorization

[oAuth2ClientCredentials](../README.md#oAuth2ClientCredentials)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json

