# PlaylistApi

All URIs are relative to *https://api.aiozstream.network/api*

| Method | Description | HTTP request |
| ------------- | ------------- | ------------- |
| [**create()**](PlaylistApi.md#create) | Create a playlist | **POST** /playlists/create |
| [**get()**](PlaylistApi.md#get) | Get a playlist | **GET** /playlists/{id} |
| [**update()**](PlaylistApi.md#update) | Update a playlist | **PATCH** /playlists/{id} |
| [**delete()**](PlaylistApi.md#delete) | Delete a playlist | **DELETE** /playlists/{id} |
| [**list()**](PlaylistApi.md#list) | List playlists | **POST** /playlists |
| [**deleteThumbnail()**](PlaylistApi.md#deleteThumbnail) | Delete a playlist thumbnail | **DELETE** /playlists/{id}/thumbnail |
| [**addMedia()**](PlaylistApi.md#addMedia) | Add media to playlists | **POST** /playlists/{id}/items |
| [**getPublic()**](PlaylistApi.md#getPublic) | Get a playlist for the player | **GET** /playlists/{id}/player.json |
| [**moveItem()**](PlaylistApi.md#moveItem) | Reorder a playlist | **PUT** /playlists/{id}/items |
| [**removeMedia()**](PlaylistApi.md#removeMedia) | Remove an item from playlists | **DELETE** /playlists/{id}/items/{item_id} |


<a name="create"></a>
## **`create()` - Create a playlist**


Creates an empty playlist in your workspace.

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **createPlaylistRequest** | [**CreatePlaylistRequest**](../model/CreatePlaylistRequest.md)| **yes**| Playlist |


### Return type

Promise<[**PlaylistResponse**](../model/PlaylistResponse.md)>.




---

<a name="get"></a>
## **`get()` - Get a playlist**


Returns one playlist and its items, ordered as you ask.

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **id** | **string**| **yes**| Playlist ID |
 | **orderBy** | **&#39;asc&#39; \| &#39;desc&#39;**| no|  |
 | **search** | **string**| no|  |
 | **sortBy** | **&#39;created_at&#39; \| &#39;title&#39; \| &#39;duration&#39; \| &#39;status&#39;**| no|  |


### Return type

Promise<[**PlaylistResponse**](../model/PlaylistResponse.md)>.




---

<a name="update"></a>
## **`update()` - Update a playlist**


Changes a playlist's name, tags or thumbnail, sent as multipart/form-data. The file field is the new thumbnail: a PNG or JPEG, judged by its content, whose name, if it has an extension, must agree with it. The handler also takes a JSON body (name, tags, metadata); metadata can only be changed that way, since a form cannot carry its key/value list.

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **id** | **string**| **yes**| Playlist ID |
 | **file** | **string \| Readable \| Buffer**| no| New thumbnail |
 | **name** | **string**| no| New name |
 | **tags** | **Array&lt;string&gt;**| no| New tags, one field per tag |


### Return type

Promise<[**ResponseSuccess**](../model/ResponseSuccess.md)>.




---

<a name="delete"></a>
## **`delete()` - Delete a playlist**


Deletes a playlist. The media in it is not deleted.

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **id** | **string**| **yes**| Playlist ID |


### Return type

Promise<[**ResponseSuccess**](../model/ResponseSuccess.md)>.




---

<a name="list"></a>
## **`list()` - List playlists**


Returns a page of the playlists in your workspace.

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **listPlaylistsRequest** | [**ListPlaylistsRequest**](../model/ListPlaylistsRequest.md)| **yes**| Filter and paging |


### Return type

Promise<[**ListPlaylistsResponse**](../model/ListPlaylistsResponse.md)>.




---

<a name="deleteThumbnail"></a>
## **`deleteThumbnail()` - Delete a playlist thumbnail**


Removes the thumbnail from a playlist.

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **id** | **string**| **yes**| Playlist ID |


### Return type

Promise<[**ResponseSuccess**](../model/ResponseSuccess.md)>.




---

<a name="addMedia"></a>
## **`addMedia()` - Add media to playlists**


Adds one or more media to one or more of your playlists.

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **id** | **string**| **yes**| Playlist ID |
 | **addMediaRequest** | [**AddMediaRequest**](../model/AddMediaRequest.md)| **yes**| Media and playlists |


### Return type

Promise<[**ResponseSuccess**](../model/ResponseSuccess.md)>.




---

<a name="getPublic"></a>
## **`getPublic()` - Get a playlist for the player**


Returns the payload the player needs to play a playlist, including its theme. No account required.

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **id** | **string**| **yes**| Playlist ID |


### Return type

Promise<[**ResponseSuccess**](../model/ResponseSuccess.md)>.




---

<a name="moveItem"></a>
## **`moveItem()` - Reorder a playlist**


Moves one item within a playlist. Send next_id to move it to the start, previous_id to move it to the end, or both to move it between two items.

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **id** | **string**| **yes**| Playlist ID |
 | **moveItemRequest** | [**MoveItemRequest**](../model/MoveItemRequest.md)| **yes**| Where to move it |


### Return type

Promise<[**ResponseSuccess**](../model/ResponseSuccess.md)>.




---

<a name="removeMedia"></a>
## **`removeMedia()` - Remove an item from playlists**


Removes one item from one or more of your playlists.

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **id** | **string**| **yes**| Playlist ID |
 | **itemId** | **string**| **yes**| Playlist item ID |
 | **removeMediaRequest** | [**RemoveMediaRequest**](../model/RemoveMediaRequest.md)| **yes**| Other playlists |


### Return type

Promise<[**ResponseSuccess**](../model/ResponseSuccess.md)>.




---

