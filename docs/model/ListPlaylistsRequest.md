
# ListPlaylistsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**limit** | **number** |  |  [optional]
**metadata** | [**Array&lt;Metadata&gt;**](Metadata.md) |  |  [optional]
**offset** | **number** |  |  [optional]
**orderBy** | [**ListPlaylistsRequestOrderByEnum**](#ListPlaylistsRequestOrderByEnum) |  |  [optional]
**playlistType** | [**ListPlaylistsRequestPlaylistTypeEnum**](#ListPlaylistsRequestPlaylistTypeEnum) |  |  [optional]
**search** | **string** |  |  [optional]
**sortBy** | [**ListPlaylistsRequestSortByEnum**](#ListPlaylistsRequestSortByEnum) |  |  [optional]
**tags** | **Array&lt;string&gt;** |  |  [optional]



## Enum: ListPlaylistsRequestOrderByEnum

Name | Value
---- | -----
Asc | &#39;asc&#39;
Desc | &#39;desc&#39;



## Enum: ListPlaylistsRequestPlaylistTypeEnum

Name | Value
---- | -----
Video | &#39;video&#39;
Audio | &#39;audio&#39;



## Enum: ListPlaylistsRequestSortByEnum

Name | Value
---- | -----
CreatedAt | &#39;created_at&#39;
Name | &#39;name&#39;
Title | &#39;title&#39;



