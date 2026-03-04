# MediaChapterApi

All URIs are relative to *http://localhost/api*

| Method | Description | HTTP request |
| ------------- | ------------- | ------------- |
| [**create()**](MediaChapterApi.md#create) | Create a media chapter | **POST** /media/{id}/chapters/{lan} |
| [**get()**](MediaChapterApi.md#get) | Get media chapters | **GET** /media/{id}/chapters |
| [**delete()**](MediaChapterApi.md#delete) | Delete a video chapter | **DELETE** /media/{id}/chapters/{lan} |


<a name="create"></a>
## **`create()` - Create a media chapter**


Create a VTT file to add chapters to your media. Chapters help break the media into sections.

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **id** | **string**| **yes**| Media ID |
 | **lan** | **string**| **yes**| Language |
 | **file** | **string \| Readable \| Buffer**| **yes**| VTT File |


### Return type

Promise<[**CreateMediaChapterResponse**](../model/CreateMediaChapterResponse.md)>.




---

<a name="get"></a>
## **`get()` - Get media chapters**


Get a chapter for by media id in a specific language.

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **id** | **string**| **yes**| Media ID |
 | **offset** | **number**| no| offset, allowed values greater than or equal to 0. Default(0) |
 | **limit** | **number**| no| results per page. Allowed values 1-100, default is 25 |


### Return type

Promise<[**GetMediaChaptersResponse**](../model/GetMediaChaptersResponse.md)>.




---

<a name="delete"></a>
## **`delete()` - Delete a video chapter**


Delete a chapter in a specific language by providing the video ID for the video you want to delete the chapter from and the language the chapter is in.

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **id** | **string**| **yes**| Video ID |
 | **lan** | **string**| **yes**| Language |


### Return type

Promise<[**ResponseSuccess**](../model/ResponseSuccess.md)>.




---

