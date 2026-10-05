
# ApiKey

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**createdAt** | **string** |  |  [optional]
**expiredAt** | **string** |  |  [optional]
**id** | **string** |  |  [optional]
**lastRequestedAt** | **string** |  |  [optional]
**name** | **string** |  |  [optional]
**publicKey** | **string** |  |  [optional]
**secret** | **string** | The API key&#39;s secret. It is returned once, in the response that creates the key, and never again: store it when you receive it.  (Not a database column: only the secret&#39;s hash is stored.) |  [optional]
**status** | **string** |  |  [optional]
**truncatedSecret** | **string** |  |  [optional]
**ttl** | **string** |  |  [optional]
**type** | **string** |  |  [optional]
**updatedAt** | **string** |  |  [optional]
**user** | [**User**](User.md) |  |  [optional]



