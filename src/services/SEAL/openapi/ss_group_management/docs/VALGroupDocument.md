# SsGroupManagement.VALGroupDocument

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**valGroupId** | **String** | The VAL group idenitity. | 
**grpDesc** | **String** | The text description of the VAL group. | [optional] 
**members** | [**[ValTargetUe]**](ValTargetUe.md) | The list of VAL User IDs or VAL UE IDs, which are members of the VAL group. | [optional] 
**valGrpConf** | **String** | Configuration data for the VAL group. | [optional] 
**valServiceIds** | **[String]** | The list of VAL services enabled on the group. | [optional] 
**suppFeat** | **String** | A string used to indicate the features supported by an API that is used as defined in clause 6.6 in 3GPP TS 29.500. The string shall contain a bitmask indicating supported features in hexadecimal representation Each character in the string shall take a value of \&quot;0\&quot; to \&quot;9\&quot;, \&quot;a\&quot; to \&quot;f\&quot; or \&quot;A\&quot; to \&quot;F\&quot; and shall represent the support of 4 features as described in table 5.2.2-3. The most significant character representing the highest-numbered features shall appear first in the string, and the character representing features 1 to 4 shall appear last in the string. The list of features and their numbering (starting with 1) are defined separately for each API. If the string contains a lower number of characters than there are defined features for an API, all features that would be represented by characters that are not present in the string are not supported | [optional] 
**resUri** | **String** | string providing an URI formatted according to IETF RFC 3986. | [optional] 
**locInfo** | [**LocationInfo**](LocationInfo.md) |  | [optional] 
**addLocInfo** | [**LocationArea5G**](LocationArea5G.md) |  | [optional] 
**extGrpId** | **String** | string containing a local identifier followed by \&quot;@\&quot; and a domain identifier. Both the local identifier and the domain identifier shall be encoded as strings that do not contain any \&quot;@\&quot; characters. See Clauses 4.6.2 and 4.6.3 of 3GPP TS 23.682 for more information. | [optional] 
**com5GLanType** | [**PduSessionType**](PduSessionType.md) |  | [optional] 


