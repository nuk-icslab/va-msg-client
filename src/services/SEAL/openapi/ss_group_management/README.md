# ss_group_management

SsGroupManagement - JavaScript client for ss_group_management
API for SEAL Group management.
© 2021, 3GPP Organizational Partners (ARIB, ATIS, CCSA, ETSI, TSDSI, TTA, TTC).
All rights reserved.

This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 1.1.0-alpha.4
- Package version: 1.1.0-alpha.4
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install ss_group_management --save
```

Finally, you need to build the module:

```shell
npm run build
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

To use the link you just defined in your project, switch to the directory you want to use your ss_group_management from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

Finally, you need to build the module:

```shell
npm run build
```

#### git

If the library is hosted at a git repository, e.g.https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var SsGroupManagement = require('ss_group_management');

var defaultClient = SsGroupManagement.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2ClientCredentials
var oAuth2ClientCredentials = defaultClient.authentications['oAuth2ClientCredentials'];
oAuth2ClientCredentials.accessToken = "YOUR ACCESS TOKEN"

var api = new SsGroupManagement.DefaultApi()
var opts = {
  'valGroupId': "valGroupId_example", // {String} String identifying the VAL group.
  'valServiceId': "valServiceId_example" // {String} String identifying the Val service.
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.groupDocumentsGet(opts, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://example.com/ss-gm/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*SsGroupManagement.DefaultApi* | [**groupDocumentsGet**](docs/DefaultApi.md#groupDocumentsGet) | **GET** /group-documents | 
*SsGroupManagement.DefaultApi* | [**groupDocumentsGroupDocIdDelete**](docs/DefaultApi.md#groupDocumentsGroupDocIdDelete) | **DELETE** /group-documents/{groupDocId} | 
*SsGroupManagement.DefaultApi* | [**groupDocumentsGroupDocIdGet**](docs/DefaultApi.md#groupDocumentsGroupDocIdGet) | **GET** /group-documents/{groupDocId} | 
*SsGroupManagement.DefaultApi* | [**groupDocumentsGroupDocIdPut**](docs/DefaultApi.md#groupDocumentsGroupDocIdPut) | **PUT** /group-documents/{groupDocId} | 
*SsGroupManagement.DefaultApi* | [**groupDocumentsPost**](docs/DefaultApi.md#groupDocumentsPost) | **POST** /group-documents | 


## Documentation for Models

 - [SsGroupManagement.AccuracyFulfilmentIndicator](docs/AccuracyFulfilmentIndicator.md)
 - [SsGroupManagement.AccuracyFulfilmentIndicatorAnyOf](docs/AccuracyFulfilmentIndicatorAnyOf.md)
 - [SsGroupManagement.CivicAddress](docs/CivicAddress.md)
 - [SsGroupManagement.Ecgi](docs/Ecgi.md)
 - [SsGroupManagement.EllipsoidArc](docs/EllipsoidArc.md)
 - [SsGroupManagement.EllipsoidArcAllOf](docs/EllipsoidArcAllOf.md)
 - [SsGroupManagement.GADShape](docs/GADShape.md)
 - [SsGroupManagement.GNbId](docs/GNbId.md)
 - [SsGroupManagement.GeographicArea](docs/GeographicArea.md)
 - [SsGroupManagement.GeographicalCoordinates](docs/GeographicalCoordinates.md)
 - [SsGroupManagement.GlobalRanNodeId](docs/GlobalRanNodeId.md)
 - [SsGroupManagement.HorizontalVelocity](docs/HorizontalVelocity.md)
 - [SsGroupManagement.HorizontalVelocityWithUncertainty](docs/HorizontalVelocityWithUncertainty.md)
 - [SsGroupManagement.HorizontalWithVerticalVelocity](docs/HorizontalWithVerticalVelocity.md)
 - [SsGroupManagement.HorizontalWithVerticalVelocityAndUncertainty](docs/HorizontalWithVerticalVelocityAndUncertainty.md)
 - [SsGroupManagement.InvalidParam](docs/InvalidParam.md)
 - [SsGroupManagement.LdrType](docs/LdrType.md)
 - [SsGroupManagement.LdrTypeAnyOf](docs/LdrTypeAnyOf.md)
 - [SsGroupManagement.Local2dPointUncertaintyEllipse](docs/Local2dPointUncertaintyEllipse.md)
 - [SsGroupManagement.Local2dPointUncertaintyEllipseAllOf](docs/Local2dPointUncertaintyEllipseAllOf.md)
 - [SsGroupManagement.Local3dPointUncertaintyEllipsoid](docs/Local3dPointUncertaintyEllipsoid.md)
 - [SsGroupManagement.Local3dPointUncertaintyEllipsoidAllOf](docs/Local3dPointUncertaintyEllipsoidAllOf.md)
 - [SsGroupManagement.LocalOrigin](docs/LocalOrigin.md)
 - [SsGroupManagement.LocationArea5G](docs/LocationArea5G.md)
 - [SsGroupManagement.LocationInfo](docs/LocationInfo.md)
 - [SsGroupManagement.MinorLocationQoS](docs/MinorLocationQoS.md)
 - [SsGroupManagement.Ncgi](docs/Ncgi.md)
 - [SsGroupManagement.NetworkAreaInfo](docs/NetworkAreaInfo.md)
 - [SsGroupManagement.PduSessionType](docs/PduSessionType.md)
 - [SsGroupManagement.PduSessionTypeAnyOf](docs/PduSessionTypeAnyOf.md)
 - [SsGroupManagement.PlmnId](docs/PlmnId.md)
 - [SsGroupManagement.Point](docs/Point.md)
 - [SsGroupManagement.PointAllOf](docs/PointAllOf.md)
 - [SsGroupManagement.PointAltitude](docs/PointAltitude.md)
 - [SsGroupManagement.PointAltitudeAllOf](docs/PointAltitudeAllOf.md)
 - [SsGroupManagement.PointAltitudeUncertainty](docs/PointAltitudeUncertainty.md)
 - [SsGroupManagement.PointAltitudeUncertaintyAllOf](docs/PointAltitudeUncertaintyAllOf.md)
 - [SsGroupManagement.PointUncertaintyCircle](docs/PointUncertaintyCircle.md)
 - [SsGroupManagement.PointUncertaintyCircleAllOf](docs/PointUncertaintyCircleAllOf.md)
 - [SsGroupManagement.PointUncertaintyEllipse](docs/PointUncertaintyEllipse.md)
 - [SsGroupManagement.PointUncertaintyEllipseAllOf](docs/PointUncertaintyEllipseAllOf.md)
 - [SsGroupManagement.Polygon](docs/Polygon.md)
 - [SsGroupManagement.PolygonAllOf](docs/PolygonAllOf.md)
 - [SsGroupManagement.PositioningMethod](docs/PositioningMethod.md)
 - [SsGroupManagement.PositioningMethodAnyOf](docs/PositioningMethodAnyOf.md)
 - [SsGroupManagement.ProblemDetails](docs/ProblemDetails.md)
 - [SsGroupManagement.RelativeCartesianLocation](docs/RelativeCartesianLocation.md)
 - [SsGroupManagement.SupportedGADShapes](docs/SupportedGADShapes.md)
 - [SsGroupManagement.SupportedGADShapesAnyOf](docs/SupportedGADShapesAnyOf.md)
 - [SsGroupManagement.Tai](docs/Tai.md)
 - [SsGroupManagement.UncertaintyEllipse](docs/UncertaintyEllipse.md)
 - [SsGroupManagement.UncertaintyEllipsoid](docs/UncertaintyEllipsoid.md)
 - [SsGroupManagement.VALGroupDocument](docs/VALGroupDocument.md)
 - [SsGroupManagement.ValTargetUe](docs/ValTargetUe.md)
 - [SsGroupManagement.VelocityEstimate](docs/VelocityEstimate.md)
 - [SsGroupManagement.VerticalDirection](docs/VerticalDirection.md)


## Documentation for Authorization



### oAuth2ClientCredentials


- **Type**: OAuth
- **Flow**: application
- **Authorization URL**: 
- **Scopes**: N/A

