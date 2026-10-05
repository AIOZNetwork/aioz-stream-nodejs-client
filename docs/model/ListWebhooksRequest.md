
# ListWebhooksRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**encodingFailed** | **boolean** |  |  [optional]
**encodingFinished** | **boolean** |  |  [optional]
**encodingStarted** | **boolean** |  |  [optional]
**fileReceived** | **boolean** |  |  [optional]
**limit** | **number** |  |  [optional]
**offset** | **number** |  |  [optional]
**orderBy** | [**ListWebhooksRequestOrderByEnum**](#ListWebhooksRequestOrderByEnum) |  |  [optional]
**partialFinished** | **boolean** |  |  [optional]
**search** | **string** |  |  [optional]
**sortBy** | [**ListWebhooksRequestSortByEnum**](#ListWebhooksRequestSortByEnum) |  |  [optional]



## Enum: ListWebhooksRequestOrderByEnum

Name | Value
---- | -----
Asc | &#39;asc&#39;
Desc | &#39;desc&#39;



## Enum: ListWebhooksRequestSortByEnum

Name | Value
---- | -----
CreatedAt | &#39;created_at&#39;
Name | &#39;name&#39;
Url | &#39;url&#39;



