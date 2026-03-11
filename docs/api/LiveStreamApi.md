# LiveStreamApi

All URIs are relative to *http://localhost/api*

| Method | Description | HTTP request |
| ------------- | ------------- | ------------- |
| [**uploadThumbnail()**](LiveStreamApi.md#uploadThumbnail) | Upload live stream media thumbnail | **POST** /live_streams/{id}/thumbnail |
| [**deleteThumbnail()**](LiveStreamApi.md#deleteThumbnail) | Delete live stream media thumbnail | **DELETE** /live_streams/{id}/thumbnail |
| [**addMulticast()**](LiveStreamApi.md#addMulticast) | Add live stream multicast | **POST** /live_streams/multicast/{stream_key} |
| [**createLiveStreamKey()**](LiveStreamApi.md#createLiveStreamKey) | Create live stream key | **POST** /live_streams |
| [**createStreaming()**](LiveStreamApi.md#createStreaming) | Create a new live stream media | **POST** /live_streams/{id}/streamings |
| [**deleteLiveStreamKey()**](LiveStreamApi.md#deleteLiveStreamKey) | Delete live stream key | **DELETE** /live_streams/{id} |
| [**deleteLiveStreamMulticast()**](LiveStreamApi.md#deleteLiveStreamMulticast) | Delete live stream multicast | **DELETE** /live_streams/multicast/{stream_key} |
| [**deleteStreaming()**](LiveStreamApi.md#deleteStreaming) | Delete live stream video | **DELETE** /live_streams/{id}/streamings/{stream_id} |
| [**getLiveStreamKey()**](LiveStreamApi.md#getLiveStreamKey) | Get live stream key | **GET** /live_streams/{id} |
| [**getLiveStreamKeys()**](LiveStreamApi.md#getLiveStreamKeys) | Get live stream key list | **GET** /live_streams |
| [**getLiveStreamMulticastByStreamKey()**](LiveStreamApi.md#getLiveStreamMulticastByStreamKey) | Get live stream multicast by stream key | **GET** /live_streams/multicast/{stream_key} |
| [**getLiveStreamPlayerInfo()**](LiveStreamApi.md#getLiveStreamPlayerInfo) | Get live stream video public | **GET** /live_streams/player/{id}/media |
| [**getLiveStreamStatisticByStreamMediaId()**](LiveStreamApi.md#getLiveStreamStatisticByStreamMediaId) | Get live stream statistic by stream media id | **GET** /live_streams/statistic/{stream_media_id} |
| [**getLiveStreamVideo()**](LiveStreamApi.md#getLiveStreamVideo) | Get live stream video | **GET** /live_streams/{id}/video |
| [**getMedias()**](LiveStreamApi.md#getMedias) | Get live stream media | **POST** /live_streams/{id}/media |
| [**getStreaming()**](LiveStreamApi.md#getStreaming) | Get live stream media streaming | **GET** /live_streams/{id}/streamings/{stream_id} |
| [**getStreamings()**](LiveStreamApi.md#getStreamings) | Get live stream media streamings | **GET** /live_streams/{id}/streamings |
| [**updateLiveStreamKey()**](LiveStreamApi.md#updateLiveStreamKey) | Update live stream key | **PUT** /live_streams/{id} |
| [**updateMedia()**](LiveStreamApi.md#updateMedia) | Update live stream media | **PUT** /live_streams/{id}/streamings |


<a name="uploadThumbnail"></a>
## **`uploadThumbnail()` - Upload live stream media thumbnail**


### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **id** | **string**| **yes**| live stream media&#39;s id |
 | **file** | **string \| Readable \| Buffer**| **yes**| file media to be uploaded |


### Return type

Promise<[**ResponseSuccess**](../model/ResponseSuccess.md)>.




---

<a name="deleteThumbnail"></a>
## **`deleteThumbnail()` - Delete live stream media thumbnail**


### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **id** | **string**| **yes**| live stream media&#39;s id |


### Return type

Promise<[**ResponseSuccess**](../model/ResponseSuccess.md)>.




---

<a name="addMulticast"></a>
## **`addMulticast()` - Add live stream multicast**


Add live stream multicast

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **streamKey** | **string**| **yes**| Live stream key. Use uuid |
 | **data** | [**UpsertLiveStreamMulticastInput**](../model/UpsertLiveStreamMulticastInput.md)| **yes**| data |


### Return type

Promise<[**GetLiveStreamMulticastResponse**](../model/GetLiveStreamMulticastResponse.md)>.




---

<a name="createLiveStreamKey"></a>
## **`createLiveStreamKey()` - Create live stream key**


Create live stream key

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **input** | [**CreateLiveStreamKeyRequest**](../model/CreateLiveStreamKeyRequest.md)| **yes**| CreateLiveStreamKeyRequest |


### Return type

Promise<[**CreateLiveStreamKeyResponse**](../model/CreateLiveStreamKeyResponse.md)>.




---

<a name="createStreaming"></a>
## **`createStreaming()` - Create a new live stream media**


Creates a new live stream media with the provided details

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **id** | **string**| **yes**| Live stream key ID |
 | **input** | [**CreateStreamingRequest**](../model/CreateStreamingRequest.md)| **yes**| CreateStreamingRequest |


### Return type

Promise<[**CreateStreamingResponse**](../model/CreateStreamingResponse.md)>.




---

<a name="deleteLiveStreamKey"></a>
## **`deleteLiveStreamKey()` - Delete live stream key**


Delete a live stream key by ID

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **id** | **string**| **yes**| Live stream key ID |


### Return type

Promise<[**ResponseSuccess**](../model/ResponseSuccess.md)>.




---

<a name="deleteLiveStreamMulticast"></a>
## **`deleteLiveStreamMulticast()` - Delete live stream multicast**


Delete live stream multicast

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **streamKey** | **string**| **yes**| Live stream key. UUID string format |


### Return type

Promise<[**ResponseSuccess**](../model/ResponseSuccess.md)>.




---

<a name="deleteStreaming"></a>
## **`deleteStreaming()` - Delete live stream video**


Delete live stream are created by a specific live stream key

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **id** | **string**| **yes**| Live stream key ID |
 | **streamId** | **string**| **yes**| Streaming ID |


### Return type

Promise<[**ResponseSuccess**](../model/ResponseSuccess.md)>.




---

<a name="getLiveStreamKey"></a>
## **`getLiveStreamKey()` - Get live stream key**


Get live stream key

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **id** | **string**| **yes**| ID |


### Return type

Promise<[**GetLiveStreamKeyResponse**](../model/GetLiveStreamKeyResponse.md)>.




---

<a name="getLiveStreamKeys"></a>
## **`getLiveStreamKeys()` - Get live stream key list**


Get live stream key list

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **search** | **string**| no| only support search by name |
 | **sortBy** | **&#39;created_at&#39; \| &#39;name&#39;**| no| sort by |
 | **orderBy** | **&#39;asc&#39; \| &#39;desc&#39;**| no| allowed: asc, desc. Default: asc |
 | **offset** | **number**| no| offset, allowed values greater than or equal to 0. |
 | **limit** | **number**| no| results per page. |
 | **type** | **&#39;audio&#39; \| &#39;video&#39;**| no| type of media. Enums(audio, video) default(video). |


### Return type

Promise<[**GetLiveStreamKeysListResponse**](../model/GetLiveStreamKeysListResponse.md)>.




---

<a name="getLiveStreamMulticastByStreamKey"></a>
## **`getLiveStreamMulticastByStreamKey()` - Get live stream multicast by stream key**


Get live stream multicast by stream key

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **streamKey** | **string**| **yes**| Live stream key. UUID string format |


### Return type

Promise<[**GetLiveStreamMulticastResponse**](../model/GetLiveStreamMulticastResponse.md)>.




---

<a name="getLiveStreamPlayerInfo"></a>
## **`getLiveStreamPlayerInfo()` - Get live stream video public**


Get live stream video public for a specific live stream key

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **id** | **string**| **yes**| Live stream key ID |


### Return type

Promise<[**GetLiveStreamVideoPublicResponse**](../model/GetLiveStreamVideoPublicResponse.md)>.




---

<a name="getLiveStreamStatisticByStreamMediaId"></a>
## **`getLiveStreamStatisticByStreamMediaId()` - Get live stream statistic by stream media id**


Get live stream statistic by stream media id

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **streamMediaId** | **string**| **yes**| Live stream media ID |


### Return type

Promise<[**GetLiveStreamStatisticResponse**](../model/GetLiveStreamStatisticResponse.md)>.




---

<a name="getLiveStreamVideo"></a>
## **`getLiveStreamVideo()` - Get live stream video**


Get a specific live stream video by ID

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **id** | **string**| **yes**| Live stream video ID |


### Return type

Promise<[**GetLiveStreamVideoResponse**](../model/GetLiveStreamVideoResponse.md)>.




---

<a name="getMedias"></a>
## **`getMedias()` - Get live stream media**


Get live stream media for a specific live stream key

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **id** | **string**| **yes**| Live stream key ID |
 | **data** | [**GetLiveStreamMediasRequest**](../model/GetLiveStreamMediasRequest.md)| **yes**| data |


### Return type

Promise<[**GetLiveStreamMediasResponse**](../model/GetLiveStreamMediasResponse.md)>.




---

<a name="getStreaming"></a>
## **`getStreaming()` - Get live stream media streaming**


Get live stream media streaming for a specific live stream key

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **id** | **string**| **yes**| Live stream key ID |
 | **streamId** | **string**| **yes**| Stream ID |


### Return type

Promise<[**GetStreamingResponse**](../model/GetStreamingResponse.md)>.




---

<a name="getStreamings"></a>
## **`getStreamings()` - Get live stream media streamings**


Get live stream media streamings for a specific live stream key

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **id** | **string**| **yes**| Live stream key ID |


### Return type

Promise<[**GetStreamingsResponse**](../model/GetStreamingsResponse.md)>.




---

<a name="updateLiveStreamKey"></a>
## **`updateLiveStreamKey()` - Update live stream key**


Update a live stream key by ID

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **id** | **string**| **yes**| Live stream key ID |
 | **input** | [**UpdateLiveStreamKeyRequest**](../model/UpdateLiveStreamKeyRequest.md)| **yes**| UpdateLiveStreamKeyRequest |


### Return type

Promise<[**UpdateLiveStreamKeyResponse**](../model/UpdateLiveStreamKeyResponse.md)>.




---

<a name="updateMedia"></a>
## **`updateMedia()` - Update live stream media**


Update live stream media. You can only update while live streaming.

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **id** | **string**| **yes**| Live stream key ID |
 | **data** | [**UpdateLiveStreamMediaRequest**](../model/UpdateLiveStreamMediaRequest.md)| **yes**| data |


### Return type

Promise<[**ResponseSuccess**](../model/ResponseSuccess.md)>.




---

