<!--<documentation_excluded>-->
<h1 align="center">AIOZ Stream Node.js client</h1>

AIOZ Stream is the video infrastructure for product builders. Lightning fast video APIs for integrating, scaling, and managing on-demand & low latency live streaming features in your app.

## Project description

AIOZ Stream's Node.js is a lightweight client built in `TypeScript` that streamlines the coding process. Chunking files is handled for you, as is pagination and refreshing your tokens.

## Getting started

### Installation
With `npm`:
```
npm install @aiozstream/nodejs-client
```

...or with `yarn`:
```
yarn add @aiozstream/nodejs-client
```

### Code sample

```typescript
import StreamClient from "@aiozstream/nodejs-client";
 
(async () => {
  try {
    const client = new StreamClient({
      publicKey: "YOUR_PUBLIC_KEY",
      secretKey: "YOUR_SECRET_KEY",
    });
    const videoCreationPayload = {
      title: "First video", // The title of your new video.
      description: "A new video.", // A brief description of your video.
    };
 
    const video = await client.video.create(videoCreationPayload);
    if (!video.data) {
      throw new Error("Failed to create video");
    }
    if (!video.data.id) {
      throw new Error("Failed to create video");
    }
    // Option 1: Use client upload with videoId
    // await client.uploadVideo(video.data.id, "./path/to/video.mp4");
    // console.log("Upload successfully");
    // Option 2: Upload parts yourself
    const uploadResult = await client.video.uploadPart(
      video.data.id,
      "./path/to/video.mp4",
    );
    console.log(uploadResult);
 
    const checkResult = await client.video.uploadVideoComplete(video.data.id);
    // Check if the video upload is complete
    console.log(checkResult);
  } catch (e) {
    console.error(e);
  }
})();



```

## Documentation

### API endpoints


#### ApiKeyApi

Method | Description | HTTP request
------------- | ------------- | -------------
[**create()**](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/api/ApiKeyApi.md#create) | Create API key | **POST** `/api_keys`
[**update()**](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/api/ApiKeyApi.md#update) | Rename an API key | **PATCH** `/api_keys/{id}`
[**delete()**](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/api/ApiKeyApi.md#delete) | Delete an API key | **DELETE** `/api_keys/{id}`
[**list()**](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/api/ApiKeyApi.md#list) | List API keys | **GET** `/api_keys`


#### MediaApi

Method | Description | HTTP request
------------- | ------------- | -------------
[**create()**](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/api/MediaApi.md#create) | Create media object | **POST** `/media/create`
[**update()**](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/api/MediaApi.md#update) | update media info | **PATCH** `/media/{id}`
[**delete()**](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/api/MediaApi.md#delete) | Delete media | **DELETE** `/media/{id}`
[**uploadThumbnail()**](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/api/MediaApi.md#uploadThumbnail) | Upload media thumbnail | **POST** `/media/{id}/thumbnail`
[**deleteThumbnail()**](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/api/MediaApi.md#deleteThumbnail) | Delete media thumbnail | **DELETE** `/media/{id}/thumbnail`
[**createCaption()**](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/api/MediaApi.md#createCaption) | Create a new media caption | **POST** `/media/{id}/captions/{lan}`
[**deleteCaption()**](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/api/MediaApi.md#deleteCaption) | Delete a media caption | **DELETE** `/media/{id}/captions/{lan}`
[**getCaptions()**](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/api/MediaApi.md#getCaptions) | Get media captions | **GET** `/media/{id}/captions`
[**getCost()**](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/api/MediaApi.md#getCost) | get media transcoding cost | **GET** `/media/cost`
[**getDetail()**](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/api/MediaApi.md#getDetail) | get media detail | **GET** `/media/{id}`
[**getMediaList()**](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/api/MediaApi.md#getMediaList) | Get user media list | **POST** `/media`
[**getMediaPlayerInfo()**](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/api/MediaApi.md#getMediaPlayerInfo) | Get media player info | **GET** `/media/{id}/player.json`
[**setDefaultCaption()**](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/api/MediaApi.md#setDefaultCaption) | Set the default caption | **PATCH** `/media/{id}/captions/{lan}`
[**uploadMediaComplete()**](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/api/MediaApi.md#uploadMediaComplete) | Get upload media when complete | **GET** `/media/{id}/complete`
[**uploadPart()**](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/api/MediaApi.md#uploadPart) | Upload part of media | **POST** `/media/{id}/part`


#### MediaChapterApi

Method | Description | HTTP request
------------- | ------------- | -------------
[**create()**](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/api/MediaChapterApi.md#create) | Create a media chapter | **POST** `/media/{id}/chapters/{lan}`
[**get()**](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/api/MediaChapterApi.md#get) | Get media chapters | **GET** `/media/{id}/chapters`
[**delete()**](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/api/MediaChapterApi.md#delete) | Delete a media chapter | **DELETE** `/media/{id}/chapters/{lan}`


#### PlayersApi

Method | Description | HTTP request
------------- | ------------- | -------------
[**create()**](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/api/PlayersApi.md#create) | Create a player theme | **POST** `/players`
[**get()**](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/api/PlayersApi.md#get) | Get a player theme | **GET** `/players/{id}`
[**update()**](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/api/PlayersApi.md#update) | Update a player theme | **PATCH** `/players/{id}`
[**delete()**](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/api/PlayersApi.md#delete) | Delete a player theme | **DELETE** `/players/{id}`
[**list()**](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/api/PlayersApi.md#list) | List player themes | **GET** `/players`
[**uploadLogo()**](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/api/PlayersApi.md#uploadLogo) | Upload a player theme logo | **POST** `/players/{id}/logo`
[**deleteLogo()**](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/api/PlayersApi.md#deleteLogo) | Delete a player theme logo | **DELETE** `/players/{id}/logo`
[**attach()**](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/api/PlayersApi.md#attach) | Add a player theme to a media | **POST** `/players/add-player`
[**detach()**](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/api/PlayersApi.md#detach) | Remove a player theme from a media | **POST** `/players/remove-player`


#### PlaylistApi

Method | Description | HTTP request
------------- | ------------- | -------------
[**create()**](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/api/PlaylistApi.md#create) | Create a playlist | **POST** `/playlists/create`
[**get()**](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/api/PlaylistApi.md#get) | Get a playlist | **GET** `/playlists/{id}`
[**update()**](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/api/PlaylistApi.md#update) | Update a playlist | **PATCH** `/playlists/{id}`
[**delete()**](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/api/PlaylistApi.md#delete) | Delete a playlist | **DELETE** `/playlists/{id}`
[**list()**](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/api/PlaylistApi.md#list) | List playlists | **POST** `/playlists`
[**deleteThumbnail()**](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/api/PlaylistApi.md#deleteThumbnail) | Delete a playlist thumbnail | **DELETE** `/playlists/{id}/thumbnail`
[**addMedia()**](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/api/PlaylistApi.md#addMedia) | Add media to playlists | **POST** `/playlists/{id}/items`
[**getPublic()**](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/api/PlaylistApi.md#getPublic) | Get a playlist for the player | **GET** `/playlists/{id}/player.json`
[**moveItem()**](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/api/PlaylistApi.md#moveItem) | Reorder a playlist | **PUT** `/playlists/{id}/items`
[**removeMedia()**](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/api/PlaylistApi.md#removeMedia) | Remove an item from playlists | **DELETE** `/playlists/{id}/items/{item_id}`


#### WebhookApi

Method | Description | HTTP request
------------- | ------------- | -------------
[**create()**](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/api/WebhookApi.md#create) | Create a webhook | **POST** `/webhooks`
[**get()**](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/api/WebhookApi.md#get) | Get a webhook | **GET** `/webhooks/{id}`
[**update()**](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/api/WebhookApi.md#update) | Update a webhook | **PATCH** `/webhooks/{id}`
[**delete()**](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/api/WebhookApi.md#delete) | Delete a webhook | **DELETE** `/webhooks/{id}`
[**list()**](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/api/WebhookApi.md#list) | List webhooks | **GET** `/webhooks`
[**check()**](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/api/WebhookApi.md#check) | Send a test event | **POST** `/webhooks/check/{id}`



### Models

 - [AddMediaRequest](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/AddMediaRequest.md)
 - [ApiKey](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/ApiKey.md)
 - [Asset](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/Asset.md)
 - [AttachThemeRequest](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/AttachThemeRequest.md)
 - [AudioConfig](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/AudioConfig.md)
 - [Controls](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/Controls.md)
 - [CreateApiKeyData](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/CreateApiKeyData.md)
 - [CreateApiKeyRequest](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/CreateApiKeyRequest.md)
 - [CreateApiKeyResponse](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/CreateApiKeyResponse.md)
 - [CreateMediaCaptionData](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/CreateMediaCaptionData.md)
 - [CreateMediaCaptionResponse](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/CreateMediaCaptionResponse.md)
 - [CreateMediaChapterData](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/CreateMediaChapterData.md)
 - [CreateMediaChapterResponse](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/CreateMediaChapterResponse.md)
 - [CreateMediaRequest](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/CreateMediaRequest.md)
 - [CreateMediaResponse](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/CreateMediaResponse.md)
 - [CreatePlaylistRequest](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/CreatePlaylistRequest.md)
 - [DeletedAt](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/DeletedAt.md)
 - [EditorProject](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/EditorProject.md)
 - [ErrorBody](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/ErrorBody.md)
 - [GetMediaCaptionsData](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/GetMediaCaptionsData.md)
 - [GetMediaCaptionsResponse](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/GetMediaCaptionsResponse.md)
 - [GetMediaChaptersData](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/GetMediaChaptersData.md)
 - [GetMediaChaptersResponse](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/GetMediaChaptersResponse.md)
 - [GetMediaDetailResponse](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/GetMediaDetailResponse.md)
 - [GetMediaListData](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/GetMediaListData.md)
 - [GetMediaListRequest](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/GetMediaListRequest.md)
 - [GetMediaListResponse](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/GetMediaListResponse.md)
 - [GetMediaPlayerInfoResponse](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/GetMediaPlayerInfoResponse.md)
 - [GetTranscodeCostData](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/GetTranscodeCostData.md)
 - [GetTranscodeCostResponse](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/GetTranscodeCostResponse.md)
 - [HighlightChunk](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/HighlightChunk.md)
 - [HighlightChunkStatus](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/HighlightChunkStatus.md)
 - [HighlightClip](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/HighlightClip.md)
 - [HighlightManifest](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/HighlightManifest.md)
 - [HighlightMedia](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/HighlightMedia.md)
 - [HighlightMediaStatus](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/HighlightMediaStatus.md)
 - [ListApiKeysData](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/ListApiKeysData.md)
 - [ListApiKeysRequest](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/ListApiKeysRequest.md)
 - [ListApiKeysResponse](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/ListApiKeysResponse.md)
 - [ListPlaylistsData](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/ListPlaylistsData.md)
 - [ListPlaylistsRequest](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/ListPlaylistsRequest.md)
 - [ListPlaylistsResponse](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/ListPlaylistsResponse.md)
 - [ListThemesData](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/ListThemesData.md)
 - [ListThemesRequest](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/ListThemesRequest.md)
 - [ListThemesResponse](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/ListThemesResponse.md)
 - [ListWebhooksData](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/ListWebhooksData.md)
 - [ListWebhooksRequest](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/ListWebhooksRequest.md)
 - [ListWebhooksResponse](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/ListWebhooksResponse.md)
 - [ManifestType](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/ManifestType.md)
 - [MediaAssets](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/MediaAssets.md)
 - [MediaCaption](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/MediaCaption.md)
 - [MediaChapter](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/MediaChapter.md)
 - [MediaObject](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/MediaObject.md)
 - [MediaSummary](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/MediaSummary.md)
 - [MediaType](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/MediaType.md)
 - [MediaWatermark](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/MediaWatermark.md)
 - [Metadata](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/Metadata.md)
 - [MoveItemRequest](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/MoveItemRequest.md)
 - [PlayerTheme](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/PlayerTheme.md)
 - [PlayerThemeInput](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/PlayerThemeInput.md)
 - [Playlist](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/Playlist.md)
 - [PlaylistData](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/PlaylistData.md)
 - [PlaylistItem](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/PlaylistItem.md)
 - [PlaylistItemMedia](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/PlaylistItemMedia.md)
 - [PlaylistResponse](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/PlaylistResponse.md)
 - [QualityConfig](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/QualityConfig.md)
 - [QualityObject](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/QualityObject.md)
 - [RemoveMediaRequest](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/RemoveMediaRequest.md)
 - [RenameApiKeyRequest](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/RenameApiKeyRequest.md)
 - [ResponseError](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/ResponseError.md)
 - [ResponseSuccess](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/ResponseSuccess.md)
 - [SetDefaultCaptionRequest](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/SetDefaultCaptionRequest.md)
 - [Theme](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/Theme.md)
 - [ThemeData](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/ThemeData.md)
 - [ThemeResponse](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/ThemeResponse.md)
 - [UpdateMediaInfoRequest](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/UpdateMediaInfoRequest.md)
 - [User](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/User.md)
 - [VideoConfig](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/VideoConfig.md)
 - [VideoCropInfo](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/VideoCropInfo.md)
 - [Webhook](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/Webhook.md)
 - [WebhookData](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/WebhookData.md)
 - [WebhookResponse](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/WebhookResponse.md)
 - [WriteWebhookRequest](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/WriteWebhookRequest.md)


### Rate Limiting

AIOZ Stream implements rate limiting to ensure fair usage and stability of the service. The API provides the rate limit values in the response headers for any API requests you make. 
In this Node.js client, you can access these headers by using the `*WithResponseHeaders()` versions of the methods. These methods return both the response body and the headers, allowing you to check the `X-RateLimit-Limit`, `X-RateLimit-Remaining`, and `X-RateLimit-Retry-After` headers to understand your current rate limit status.


Here is an example of how to use these methods:

```js
const client = new StreamClient({
  secretKey: "YOUR_SECRET_KEY",
  publicKey: "YOUR_PUBLIC_KEY"
});

const { headers, body } = const webhook = await client.webhook.listWithResponseHeaders();
```

### Authorization

#### API key and public key

All endpoints required to be authenticated using the API key and public key mechanism described in our [documentation](https://aiozstream.network/docs/video-management/api-key-management).

All you have to do is provide an API key and public key when instantiating the StreamClient:
```js
const client = new StreamClient({
  secretKey: "YOUR_SECRET_KEY",
  publicKey: "YOUR_PUBLIC_KEY"
});
```
## Have you gotten use from this API client?

Please take a moment to leave a star on the client ⭐

This helps other users to find the clients and also helps us understand which clients are most popular. Thank you!
