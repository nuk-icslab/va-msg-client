# 5G Messaging Client

A demo repository to illustrate the usage of SEAL/VAL framework for 5G vertical application.  
Based on an awesome project [joaojosefilho/vuejsOidcClient](https://github.com/joaojosefilho/vuejsOidcClient)

## Features

- 3GPP Service Enabler Architecture Layer (SEAL)
  - Client library of Identity Management (IM)
  - Client library of Group Management (GM)
- Vertical Application Enabler Layer (VAL)
  - Provided object caching service
  - The inbox service offered to the application can be a personal inbox or a group inbox
  - The client can store/withdraw its object to/from the personal inbox or the joined group inbox
  - The server can store objects in any personal inbox or any group inbox
  - Both client and server retrieve the membership of the group from SEAL
- Vertical Application
  - Instant messaging through 5GS
  - The client download its code from the server
  - The server can publish messages to a client’s VAL personal inbox or a VAL group inbox
  - Clients can pull messages from its VAL inbox and the joined VAL group inbox
  - Clients can push messages to other’s VAL inbox and its VAL group inbox

## Installation

- Install [Node.js](https://nodejs.org/en/) first
- Then, execute the following command

```bash
npm install
```

## Usage

### For Development

```bash
npm run dev
```

- Then you can access `https://localhost/`

### For Production

```
npm run prod
```

- The bundled files will be placed at `/dist` directory
- Use webserver to host these files

## Configuration

- The config file of SEAL module located in `/src/services/SEAL/config.js`
