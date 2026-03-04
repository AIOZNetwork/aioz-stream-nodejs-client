# MediaApi

All URIs are relative to *http://localhost/api*

| Method | Description | HTTP request |
| ------------- | ------------- | ------------- |
| [**create()**](MediaApi.md#create) | Create media object | **POST** /media/create |
| [**update()**](MediaApi.md#update) | update media info | **PATCH** /media/{id} |
| [**delete()**](MediaApi.md#delete) | Delete media | **DELETE** /media/{id} |
| [**uploadThumbnail()**](MediaApi.md#uploadThumbnail) | Upload media thumbnail | **POST** /media/{id}/thumbnail |
| [**deleteThumbnail()**](MediaApi.md#deleteThumbnail) | Delete media thumbnail | **DELETE** /media/{id}/thumbnail |
| [**createCaption()**](MediaApi.md#createCaption) | Create a new media caption | **POST** /media/{id}/captions/{lan} |
| [**deleteCaption()**](MediaApi.md#deleteCaption) | Delete a media caption | **DELETE** /media/{id}/captions/{lan} |
| [**getCaptions()**](MediaApi.md#getCaptions) | Get media captions | **GET** /media/{id}/captions |
| [**getCost()**](MediaApi.md#getCost) | get media transcoding cost | **GET** /media/cost |
| [**getDetail()**](MediaApi.md#getDetail) | get media detail | **GET** /media/{id} |
| [**getMediaList()**](MediaApi.md#getMediaList) | Get user videos list | **POST** /media |
| [**getMediaPlayerInfo()**](MediaApi.md#getMediaPlayerInfo) | Get media object | **GET** /media/{id}/player.json |
| [**setDefaultCaption()**](MediaApi.md#setDefaultCaption) | Set default caption | **PATCH** /media/{id}/captions/{lan} |
| [**uploadMediaComplete()**](MediaApi.md#uploadMediaComplete) | Get upload media when complete | **GET** /media/{id}/complete |
| [**uploadPart()**](MediaApi.md#uploadPart) | Upload part of media | **POST** /media/{id}/part |


<a name="create"></a>
## **`create()` - Create media object**


Create a media object

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **request** | [**CreateMediaRequest**](../model/CreateMediaRequest.md)| **yes**| media&#39;s info |


### Return type

Promise<[**CreateMediaResponse**](../model/CreateMediaResponse.md)>.




---

<a name="update"></a>
## **`update()` - update media info**


### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **id** | **string**| **yes**| media&#39;s id |
 | **input** | [**UpdateMediaInfoRequest**](../model/UpdateMediaInfoRequest.md)| **yes**| input |


### Return type

Promise<[**ResponseSuccess**](../model/ResponseSuccess.md)>.




---

<a name="delete"></a>
## **`delete()` - Delete media**


Delete a media by media ID.

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **id** | **string**| **yes**| Media ID |


### Return type

Promise<[**ResponseSuccess**](../model/ResponseSuccess.md)>.




---

<a name="uploadThumbnail"></a>
## **`uploadThumbnail()` - Upload media thumbnail**


### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **id** | **string**| **yes**| media&#39;s id |
 | **file** | **string \| Readable \| Buffer**| **yes**| file media to be uploaded |


### Return type

Promise<[**ResponseSuccess**](../model/ResponseSuccess.md)>.




---

<a name="deleteThumbnail"></a>
## **`deleteThumbnail()` - Delete media thumbnail**


### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **id** | **string**| **yes**| media&#39;s id |


### Return type

Promise<[**ResponseSuccess**](../model/ResponseSuccess.md)>.




---

<a name="createCaption"></a>
## **`createCaption()` - Create a new media caption**


Uploads a VTT file and creates a new media caption for the specified media.

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **id** | **string**| **yes**| Media ID |
 | **lan** | **string**| **yes**| Language |
 | **file** | **string \| Readable \| Buffer**| **yes**| VTT File |


### Return type

Promise<[**CreateMediaCaptionResponse**](../model/CreateMediaCaptionResponse.md)>.




---

<a name="deleteCaption"></a>
## **`deleteCaption()` - Delete a media caption**


Delete a caption in a specific language by providing the media ID for the media you want to delete the caption from and the language the caption is in.

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **id** | **string**| **yes**| Media ID |
 | **lan** | **string**| **yes**| Language |


### Return type

Promise<[**ResponseSuccess**](../model/ResponseSuccess.md)>.




---

<a name="getCaptions"></a>
## **`getCaptions()` - Get media captions**


Retrieves a list of media captions for the specified media.

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **id** | **string**| **yes**| Media ID |
 | **offset** | **number**| no| offset, allowed values greater than or equal to 0. Default(0) |
 | **limit** | **number**| no| results per page. Allowed values 1-100, default is 25 |


### Return type

Promise<[**GetMediaCaptionsResponse**](../model/GetMediaCaptionsResponse.md)>.




---

<a name="getCost"></a>
## **`getCost()` - get media transcoding cost**


get media transcoding cost

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **qualities** | **string**| **yes**| media&#39;s qualities |
 | **type** | **string**| **yes**| media&#39;s type |
 | **duration** | **number**| **yes**| media&#39;s duration |


### Return type

Promise<[**GetTranscodeCostResponse**](../model/GetTranscodeCostResponse.md)>.




---

<a name="getDetail"></a>
## **`getDetail()` - get media detail**


Retrieve the media details by media id.

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **id** | **string**| **yes**| mediav&#39;s id |


### Return type

Promise<[**GetMediaDetailResponse**](../model/GetMediaDetailResponse.md)>.




---

<a name="getMediaList"></a>
## **`getMediaList()` - Get user videos list**


Retrieve a list of videos for the authenticated user.

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **request** | [**GetMediaListRequest**](../model/GetMediaListRequest.md)| **yes**| video&#39;s info |


### Return type

Promise<[**GetMediaListResponse**](../model/GetMediaListResponse.md)>.




---

<a name="getMediaPlayerInfo"></a>
## **`getMediaPlayerInfo()` - Get media object**


Get media object

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **id** | **string**| **yes**| media ID |
 | **token** | **string**| no| Token |


### Return type

Promise<[**GetMediaPlayerInfoResponse**](../model/GetMediaPlayerInfoResponse.md)>.




---

<a name="setDefaultCaption"></a>
## **`setDefaultCaption()` - Set default caption**


Set default caption for a media

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **id** | **string**| **yes**| Media ID |
 | **lan** | **string**| **yes**| Language |


### Return type

Promise<[**ResponseSuccess**](../model/ResponseSuccess.md)>.




---

<a name="uploadMediaComplete"></a>
## **`uploadMediaComplete()` - Get upload media when complete**


Get upload media when complete.

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **id** | **string**| **yes**| media&#39;s id |


### Return type

Promise<[**ResponseSuccess**](../model/ResponseSuccess.md)>.




---

<a name="uploadPart"></a>
## **`uploadPart()` - Upload part of media**


Upload part of media

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **id** | **string**| **yes**| video&#39;s id |
 | **file** | **string \| Readable \| Buffer**| **yes**| File media to be uploaded |
 | **hash** | **string**| no| Md5 hash of part |
 | **index** | **string**| no| Index of the part |
| **progressListener** | **(event: UploadProgressEvent) => void \| undefined** | no | Optional upload progress listener |

### Return type

Promise<[**ResponseSuccess**](../model/ResponseSuccess.md)>.



### Upload chunks

Large files are broken into chunks for upload. You can control the size of the chunks using the `chunkSize` parameter when you instanciate the StreamClient:

```js
const client = new StreamClient({
    apiKey: "YOUR_API_KEY",
    apiPublicKey: "YOUR_PUBLIC_KEY",
    chunkSize: 50 * 1024 * 1024, // 50mb chunks
});
```
```js
const client = new StreamClient({ apiKey: "stream-secret-key", apiPublicKey: "stream-public-key" });const client = new StreamClient({ apiKey: "stream-secret-key", apiPublicKey: "stream-public-key" });

const id = 'id_example'; // video's id

const hash = 'hash_example'; // Md5 hash of part

const index = 'index_example'; // Index of the part

const uploadSession = client.createUploadPartProgressiveSession(idhashindex);

await uploadSession.uploadPart('test/data/10m.mp4.part.a');
await uploadSession.uploadPart('test/data/10m.mp4.part.b');
const res = await uploadSession.uploadLastPart('test/data/10m.mp4.part.c');  // ResponseSuccess 

console.log(result);
```

---

