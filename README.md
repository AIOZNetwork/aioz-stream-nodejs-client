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
[**update()**](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/api/ApiKeyApi.md#update) | Rename api key | **PATCH** `/api_keys/{id}`
[**delete()**](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/api/ApiKeyApi.md#delete) | Delete API key | **DELETE** `/api_keys/{id}`
[**list()**](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/api/ApiKeyApi.md#list) | Get list API keys | **GET** `/api_keys`


#### PlayersApi

Method | Description | HTTP request
------------- | ------------- | -------------
[**create()**](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/api/PlayersApi.md#create) | Create a player theme | **POST** `/players`
[**get()**](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/api/PlayersApi.md#get) | Get a player theme by ID | **GET** `/players/{id}`
[**update()**](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/api/PlayersApi.md#update) | Update a player theme by ID | **PATCH** `/players/{id}`
[**delete()**](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/api/PlayersApi.md#delete) | Delete a player theme by ID | **DELETE** `/players/{id}`
[**list()**](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/api/PlayersApi.md#list) | List all player themes | **GET** `/players`
[**uploadLogo()**](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/api/PlayersApi.md#uploadLogo) | Upload a logo for a player theme by ID | **POST** `/players/{id}/logo`
[**deleteLogo()**](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/api/PlayersApi.md#deleteLogo) | Delete a logo for a player theme by ID | **DELETE** `/players/{id}/logo`
[**addPlayer()**](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/api/PlayersApi.md#addPlayer) | Add a player theme to a video | **POST** `/players/add-player`
[**removePlayer()**](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/api/PlayersApi.md#removePlayer) | Remove a player theme from a video | **POST** `/players/remove-player`


#### PlaylistApi

Method | Description | HTTP request
------------- | ------------- | -------------
[**addVideoToPlaylist()**](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/api/PlaylistApi.md#addVideoToPlaylist) | Add a video to a playlist | **POST** `/playlists/{id}/items`
[**createPlaylist()**](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/api/PlaylistApi.md#createPlaylist) | Create a playlist | **POST** `/playlists/create`
[**deletePlaylistById()**](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/api/PlaylistApi.md#deletePlaylistById) | Delete a playlist by ID | **DELETE** `/playlists/{id}`
[**deletePlaylistThumbnail()**](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/api/PlaylistApi.md#deletePlaylistThumbnail) | Delete a playlist thumbnail | **DELETE** `/playlists/{id}/thumbnail`
[**getPlaylistById()**](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/api/PlaylistApi.md#getPlaylistById) | Get playlist by ID | **GET** `/playlists/{id}`
[**getPlaylistPublicInfo()**](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/api/PlaylistApi.md#getPlaylistPublicInfo) | Get a playlist public | **GET** `/playlists/{id}/player.json`
[**getPlaylists()**](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/api/PlaylistApi.md#getPlaylists) | Get user&#39;s playlists | **POST** `/playlists`
[**moveVideoInPlaylist()**](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/api/PlaylistApi.md#moveVideoInPlaylist) | Move a video in a playlist | **PUT** `/playlists/{id}/items`
[**removeVideoFromPlaylist()**](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/api/PlaylistApi.md#removeVideoFromPlaylist) | Remove a video from a playlist | **DELETE** `/playlists/{id}/items/{item_id}`
[**updatePlaylist()**](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/api/PlaylistApi.md#updatePlaylist) | Update a playlist | **PATCH** `/playlists/{id}`


#### VideoApi

Method | Description | HTTP request
------------- | ------------- | -------------
[**create()**](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/api/VideoApi.md#create) | Create video object | **POST** `/videos/create`
[**update()**](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/api/VideoApi.md#update) | update video info | **PATCH** `/videos/{id}`
[**delete()**](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/api/VideoApi.md#delete) | Delete video | **DELETE** `/videos/{id}`
[**uploadThumbnail()**](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/api/VideoApi.md#uploadThumbnail) | Upload video thumbnail | **POST** `/videos/{id}/thumbnail`
[**deleteThumbnail()**](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/api/VideoApi.md#deleteThumbnail) | Delete video thumbnail | **DELETE** `/videos/{id}/thumbnail`
[**createCaption()**](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/api/VideoApi.md#createCaption) | Create a new video caption | **POST** `/videos/{id}/captions/{lan}`
[**deleteCaption()**](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/api/VideoApi.md#deleteCaption) | Delete a video caption | **DELETE** `/videos/{id}/captions/{lan}`
[**getCaptions()**](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/api/VideoApi.md#getCaptions) | Get video captions | **GET** `/videos/{id}/captions`
[**getCost()**](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/api/VideoApi.md#getCost) | get video transcoding cost | **GET** `/videos/cost`
[**getDetail()**](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/api/VideoApi.md#getDetail) | get video detail | **GET** `/videos/{id}`
[**getVideoList()**](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/api/VideoApi.md#getVideoList) | Get user videos list | **POST** `/videos`
[**getVideoPlayerInfo()**](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/api/VideoApi.md#getVideoPlayerInfo) | Get video object | **GET** `/videos/{id}/player.json`
[**setDefaultCaption()**](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/api/VideoApi.md#setDefaultCaption) | Set default caption | **PATCH** `/videos/{id}/captions/{lan}`
[**uploadPart()**](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/api/VideoApi.md#uploadPart) | Upload part of video | **POST** `/videos/{id}/part`
[**uploadVideoComplete()**](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/api/VideoApi.md#uploadVideoComplete) | Get upload video when complete | **GET** `/videos/{id}/complete`


#### VideoChapterApi

Method | Description | HTTP request
------------- | ------------- | -------------
[**create()**](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/api/VideoChapterApi.md#create) | Create a video chapter | **POST** `/videos/{id}/chapters/{lan}`
[**get()**](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/api/VideoChapterApi.md#get) | Get video chapters | **GET** `/videos/{id}/chapters`
[**delete()**](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/api/VideoChapterApi.md#delete) | Delete a video chapter | **DELETE** `/videos/{id}/chapters/{lan}`


#### WebhookApi

Method | Description | HTTP request
------------- | ------------- | -------------
[**create()**](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/api/WebhookApi.md#create) | Create webhook | **POST** `/webhooks`
[**get()**](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/api/WebhookApi.md#get) | Get user&#39;s webhook by id | **GET** `/webhooks/{id}`
[**update()**](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/api/WebhookApi.md#update) | Update event webhook | **PATCH** `/webhooks/{id}`
[**delete()**](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/api/WebhookApi.md#delete) | Delete webhook | **DELETE** `/webhooks/{id}`
[**list()**](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/api/WebhookApi.md#list) | Get list webhooks | **GET** `/webhooks`
[**check()**](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/api/WebhookApi.md#check) | Check webhook by id | **POST** `/webhooks/check/{id}`



### Models

 - [AddPlayerThemesToVideoRequest](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/AddPlayerThemesToVideoRequest.md)
 - [AddVideoToPlaylistRequest](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/AddVideoToPlaylistRequest.md)
 - [ApiKey](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/ApiKey.md)
 - [Asset](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/Asset.md)
 - [AudioConfig](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/AudioConfig.md)
 - [Controls](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/Controls.md)
 - [CreateApiKeyData](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/CreateApiKeyData.md)
 - [CreateApiKeyRequest](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/CreateApiKeyRequest.md)
 - [CreateApiKeyResponse](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/CreateApiKeyResponse.md)
 - [CreateMediaRequest](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/CreateMediaRequest.md)
 - [CreateMediaResponse](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/CreateMediaResponse.md)
 - [CreatePlayerThemeRequest](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/CreatePlayerThemeRequest.md)
 - [CreatePlayerThemesData](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/CreatePlayerThemesData.md)
 - [CreatePlayerThemesResponse](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/CreatePlayerThemesResponse.md)
 - [CreatePlaylistData](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/CreatePlaylistData.md)
 - [CreatePlaylistRequest](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/CreatePlaylistRequest.md)
 - [CreatePlaylistResponse](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/CreatePlaylistResponse.md)
 - [CreateVideoCaptionData](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/CreateVideoCaptionData.md)
 - [CreateVideoCaptionResponse](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/CreateVideoCaptionResponse.md)
 - [CreateVideoChapterData](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/CreateVideoChapterData.md)
 - [CreateVideoChapterResponse](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/CreateVideoChapterResponse.md)
 - [CreateWebhookData](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/CreateWebhookData.md)
 - [CreateWebhookRequest](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/CreateWebhookRequest.md)
 - [CreateWebhookResponse](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/CreateWebhookResponse.md)
 - [GetApiKeysData](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/GetApiKeysData.md)
 - [GetApiKeysResponse](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/GetApiKeysResponse.md)
 - [GetPlayerThemeByIdData](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/GetPlayerThemeByIdData.md)
 - [GetPlayerThemeByIdResponse](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/GetPlayerThemeByIdResponse.md)
 - [GetPlayerThemeData](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/GetPlayerThemeData.md)
 - [GetPlayerThemeResponse](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/GetPlayerThemeResponse.md)
 - [GetPlaylistByIdData](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/GetPlaylistByIdData.md)
 - [GetPlaylistByIdResponse](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/GetPlaylistByIdResponse.md)
 - [GetPlaylistListData](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/GetPlaylistListData.md)
 - [GetPlaylistListRequest](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/GetPlaylistListRequest.md)
 - [GetPlaylistListResponse](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/GetPlaylistListResponse.md)
 - [GetTranscodeCostData](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/GetTranscodeCostData.md)
 - [GetTranscodeCostResponse](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/GetTranscodeCostResponse.md)
 - [GetUserWebhookData](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/GetUserWebhookData.md)
 - [GetUserWebhookResponse](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/GetUserWebhookResponse.md)
 - [GetVideoCaptionsData](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/GetVideoCaptionsData.md)
 - [GetVideoCaptionsResponse](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/GetVideoCaptionsResponse.md)
 - [GetVideoChaptersData](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/GetVideoChaptersData.md)
 - [GetVideoChaptersResponse](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/GetVideoChaptersResponse.md)
 - [GetVideoDetailResponse](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/GetVideoDetailResponse.md)
 - [GetVideoListData](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/GetVideoListData.md)
 - [GetVideoListRequest](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/GetVideoListRequest.md)
 - [GetVideoListResponse](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/GetVideoListResponse.md)
 - [GetVideoPlayerInfoResponse](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/GetVideoPlayerInfoResponse.md)
 - [GetWebhooksListData](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/GetWebhooksListData.md)
 - [GetWebhooksListResponse](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/GetWebhooksListResponse.md)
 - [Media](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/Media.md)
 - [Metadata](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/Metadata.md)
 - [MoveVideoInPlaylistRequest](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/MoveVideoInPlaylistRequest.md)
 - [PlayerTheme](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/PlayerTheme.md)
 - [Playlist](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/Playlist.md)
 - [PlaylistItem](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/PlaylistItem.md)
 - [PlaylistItemMedia](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/PlaylistItemMedia.md)
 - [PublicPlaylistObject](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/PublicPlaylistObject.md)
 - [QualityConfig](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/QualityConfig.md)
 - [QualityObject](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/QualityObject.md)
 - [RemovePlayerThemesFromMediaRequest](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/RemovePlayerThemesFromMediaRequest.md)
 - [RenameAPIKeyRequest](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/RenameAPIKeyRequest.md)
 - [RequestCreateCaption](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/RequestCreateCaption.md)
 - [ResponseError](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/ResponseError.md)
 - [ResponseSuccess](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/ResponseSuccess.md)
 - [Theme](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/Theme.md)
 - [UpdatePlayerThemeRequest](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/UpdatePlayerThemeRequest.md)
 - [UpdatePlayerThemeResponse](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/UpdatePlayerThemeResponse.md)
 - [UpdateVideoInfoRequest](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/UpdateVideoInfoRequest.md)
 - [UpdateWebhookRequest](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/UpdateWebhookRequest.md)
 - [UploadLogoByIdResponse](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/UploadLogoByIdResponse.md)
 - [User](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/User.md)
 - [VideoAssets](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/VideoAssets.md)
 - [VideoCaption](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/VideoCaption.md)
 - [VideoChapter](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/VideoChapter.md)
 - [VideoConfig](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/VideoConfig.md)
 - [VideoWatermark](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/VideoWatermark.md)
 - [Webhook](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/Webhook.md)


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
