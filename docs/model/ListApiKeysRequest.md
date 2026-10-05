
# ListApiKeysRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**limit** | **number** |  |  [optional]
**offset** | **number** |  |  [optional]
**orderBy** | [**ListApiKeysRequestOrderByEnum**](#ListApiKeysRequestOrderByEnum) |  |  [optional]
**search** | **string** |  |  [optional]
**sortBy** | [**ListApiKeysRequestSortByEnum**](#ListApiKeysRequestSortByEnum) |  |  [optional]
**type** | [**ListApiKeysRequestTypeEnum**](#ListApiKeysRequestTypeEnum) |  |  [optional]



## Enum: ListApiKeysRequestOrderByEnum

Name | Value
---- | -----
Asc | &#39;asc&#39;
Desc | &#39;desc&#39;



## Enum: ListApiKeysRequestSortByEnum

Name | Value
---- | -----
CreatedAt | &#39;created_at&#39;
Name | &#39;name&#39;



## Enum: ListApiKeysRequestTypeEnum

Name | Value
---- | -----
FullAccess | &#39;full_access&#39;
OnlyUpload | &#39;only_upload&#39;



