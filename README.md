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


#### AnalyticsApi

Method | Description | HTTP request
------------- | ------------- | -------------
[**GetAggregatedMetrics()**](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/api/AnalyticsApi.md#GetAggregatedMetrics) | Get aggregated metrics | **POST** `/analytics/metrics/data/{metric}/{aggregation}`
[**GetBreakdownMetrics()**](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/api/AnalyticsApi.md#GetBreakdownMetrics) | Get breakdown metrics | **POST** `/analytics/metrics/bucket/{metric}/{breakdown}`
[**GetDataUsage()**](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/api/AnalyticsApi.md#GetDataUsage) | Get data usage | **GET** `/analytics/data`
[**GetOvertimeMetrics()**](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/api/AnalyticsApi.md#GetOvertimeMetrics) | Get overtime metrics | **POST** `/analytics/metrics/timeseries/{metric}/{interval}`
[**GetStatisticMedias()**](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/api/AnalyticsApi.md#GetStatisticMedias) | Get statistic media | **GET** `/analytics/media`


#### ApiKeyApi

Method | Description | HTTP request
------------- | ------------- | -------------
[**create()**](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/api/ApiKeyApi.md#create) | Create API key | **POST** `/api_keys`
[**update()**](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/api/ApiKeyApi.md#update) | Rename api key | **PATCH** `/api_keys/{id}`
[**delete()**](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/api/ApiKeyApi.md#delete) | Delete API key | **DELETE** `/api_keys/{id}`
[**list()**](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/api/ApiKeyApi.md#list) | Get list API keys | **GET** `/api_keys`


#### LiveStreamApi

Method | Description | HTTP request
------------- | ------------- | -------------
[**uploadThumbnail()**](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/api/LiveStreamApi.md#uploadThumbnail) | Upload live stream media thumbnail | **POST** `/live_streams/{id}/thumbnail`
[**deleteThumbnail()**](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/api/LiveStreamApi.md#deleteThumbnail) | Delete live stream media thumbnail | **DELETE** `/live_streams/{id}/thumbnail`
[**addMulticast()**](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/api/LiveStreamApi.md#addMulticast) | Add live stream multicast | **POST** `/live_streams/multicast/{stream_key}`
[**createLiveStreamKey()**](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/api/LiveStreamApi.md#createLiveStreamKey) | Create live stream key | **POST** `/live_streams`
[**createStreaming()**](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/api/LiveStreamApi.md#createStreaming) | Create a new live stream media | **POST** `/live_streams/{id}/streamings`
[**deleteLiveStreamKey()**](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/api/LiveStreamApi.md#deleteLiveStreamKey) | Delete live stream key | **DELETE** `/live_streams/{id}`
[**deleteLiveStreamMulticast()**](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/api/LiveStreamApi.md#deleteLiveStreamMulticast) | Delete live stream multicast | **DELETE** `/live_streams/multicast/{stream_key}`
[**deleteStreaming()**](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/api/LiveStreamApi.md#deleteStreaming) | Delete live stream video | **DELETE** `/live_streams/{id}/streamings/{stream_id}`
[**getLiveStreamKey()**](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/api/LiveStreamApi.md#getLiveStreamKey) | Get live stream key | **GET** `/live_streams/{id}`
[**getLiveStreamKeys()**](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/api/LiveStreamApi.md#getLiveStreamKeys) | Get live stream key list | **GET** `/live_streams`
[**getLiveStreamMulticastByStreamKey()**](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/api/LiveStreamApi.md#getLiveStreamMulticastByStreamKey) | Get live stream multicast by stream key | **GET** `/live_streams/multicast/{stream_key}`
[**getLiveStreamPlayerInfo()**](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/api/LiveStreamApi.md#getLiveStreamPlayerInfo) | Get live stream video public | **GET** `/live_streams/player/{id}/media`
[**getLiveStreamStatisticByStreamMediaId()**](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/api/LiveStreamApi.md#getLiveStreamStatisticByStreamMediaId) | Get live stream statistic by stream media id | **GET** `/live_streams/statistic/{stream_media_id}`
[**getLiveStreamVideo()**](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/api/LiveStreamApi.md#getLiveStreamVideo) | Get live stream video | **GET** `/live_streams/{id}/video`
[**getMedias()**](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/api/LiveStreamApi.md#getMedias) | Get live stream media | **POST** `/live_streams/{id}/media`
[**getStreaming()**](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/api/LiveStreamApi.md#getStreaming) | Get live stream media streaming | **GET** `/live_streams/{id}/streamings/{stream_id}`
[**getStreamings()**](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/api/LiveStreamApi.md#getStreamings) | Get live stream media streamings | **GET** `/live_streams/{id}/streamings`
[**updateLiveStreamKey()**](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/api/LiveStreamApi.md#updateLiveStreamKey) | Update live stream key | **PUT** `/live_streams/{id}`
[**updateMedia()**](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/api/LiveStreamApi.md#updateMedia) | Update live stream media | **PUT** `/live_streams/{id}/streamings`


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
[**getMediaList()**](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/api/MediaApi.md#getMediaList) | Get user videos list | **POST** `/media`
[**getMediaPlayerInfo()**](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/api/MediaApi.md#getMediaPlayerInfo) | Get media object | **GET** `/media/{id}/player.json`
[**setDefaultCaption()**](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/api/MediaApi.md#setDefaultCaption) | Set default caption | **PATCH** `/media/{id}/captions/{lan}`
[**uploadMediaComplete()**](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/api/MediaApi.md#uploadMediaComplete) | Get upload media when complete | **GET** `/media/{id}/complete`
[**uploadPart()**](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/api/MediaApi.md#uploadPart) | Upload part of media | **POST** `/media/{id}/part`


#### MediaChapterApi

Method | Description | HTTP request
------------- | ------------- | -------------
[**create()**](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/api/MediaChapterApi.md#create) | Create a media chapter | **POST** `/media/{id}/chapters/{lan}`
[**get()**](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/api/MediaChapterApi.md#get) | Get media chapters | **GET** `/media/{id}/chapters`
[**delete()**](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/api/MediaChapterApi.md#delete) | Delete a video chapter | **DELETE** `/media/{id}/chapters/{lan}`


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
[**removeMediaFromPlaylist()**](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/api/PlaylistApi.md#removeMediaFromPlaylist) | Remove a media from a playlist | **DELETE** `/playlists/{id}/items/{item_id}`
[**updatePlaylist()**](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/api/PlaylistApi.md#updatePlaylist) | Update a playlist | **PATCH** `/playlists/{id}`


#### UserApi

Method | Description | HTTP request
------------- | ------------- | -------------
[**GetMe()**](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/api/UserApi.md#GetMe) | Get me | **GET** `/user/me`


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

 - [AddMediaToPlaylistRequest](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/AddMediaToPlaylistRequest.md)
 - [AddPlayerThemesToVideoRequest](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/AddPlayerThemesToVideoRequest.md)
 - [ApiKey](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/ApiKey.md)
 - [Asset](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/Asset.md)
 - [AudioConfig](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/AudioConfig.md)
 - [Controls](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/Controls.md)
 - [CreateApiKeyData](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/CreateApiKeyData.md)
 - [CreateApiKeyRequest](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/CreateApiKeyRequest.md)
 - [CreateApiKeyResponse](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/CreateApiKeyResponse.md)
 - [CreateLiveStreamKeyRequest](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/CreateLiveStreamKeyRequest.md)
 - [CreateLiveStreamKeyResponse](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/CreateLiveStreamKeyResponse.md)
 - [CreateMediaCaptionData](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/CreateMediaCaptionData.md)
 - [CreateMediaCaptionResponse](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/CreateMediaCaptionResponse.md)
 - [CreateMediaChapterData](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/CreateMediaChapterData.md)
 - [CreateMediaChapterResponse](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/CreateMediaChapterResponse.md)
 - [CreateMediaRequest](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/CreateMediaRequest.md)
 - [CreateMediaResponse](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/CreateMediaResponse.md)
 - [CreatePlayerThemeRequest](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/CreatePlayerThemeRequest.md)
 - [CreatePlayerThemesData](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/CreatePlayerThemesData.md)
 - [CreatePlayerThemesResponse](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/CreatePlayerThemesResponse.md)
 - [CreatePlaylistData](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/CreatePlaylistData.md)
 - [CreatePlaylistRequest](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/CreatePlaylistRequest.md)
 - [CreatePlaylistResponse](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/CreatePlaylistResponse.md)
 - [CreateStreamingRequest](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/CreateStreamingRequest.md)
 - [CreateStreamingResponse](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/CreateStreamingResponse.md)
 - [CreateWebhookData](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/CreateWebhookData.md)
 - [CreateWebhookRequest](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/CreateWebhookRequest.md)
 - [CreateWebhookResponse](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/CreateWebhookResponse.md)
 - [DataUsage](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/DataUsage.md)
 - [GetAggregatedMetricsData](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/GetAggregatedMetricsData.md)
 - [GetAggregatedMetricsResponse](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/GetAggregatedMetricsResponse.md)
 - [GetApiKeysData](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/GetApiKeysData.md)
 - [GetApiKeysResponse](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/GetApiKeysResponse.md)
 - [GetBreakdownMetricsData](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/GetBreakdownMetricsData.md)
 - [GetBreakdownMetricsRequest](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/GetBreakdownMetricsRequest.md)
 - [GetBreakdownMetricsResponse](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/GetBreakdownMetricsResponse.md)
 - [GetDataUsageData](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/GetDataUsageData.md)
 - [GetDataUsageResponse](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/GetDataUsageResponse.md)
 - [GetLiveStreamKeyData](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/GetLiveStreamKeyData.md)
 - [GetLiveStreamKeyResponse](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/GetLiveStreamKeyResponse.md)
 - [GetLiveStreamKeysListData](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/GetLiveStreamKeysListData.md)
 - [GetLiveStreamKeysListResponse](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/GetLiveStreamKeysListResponse.md)
 - [GetLiveStreamMediasRequest](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/GetLiveStreamMediasRequest.md)
 - [GetLiveStreamMediasResponse](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/GetLiveStreamMediasResponse.md)
 - [GetLiveStreamMulticastResponse](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/GetLiveStreamMulticastResponse.md)
 - [GetLiveStreamStatisticResponse](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/GetLiveStreamStatisticResponse.md)
 - [GetLiveStreamVideoPublicResponse](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/GetLiveStreamVideoPublicResponse.md)
 - [GetLiveStreamVideoResponse](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/GetLiveStreamVideoResponse.md)
 - [GetMeResponse](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/GetMeResponse.md)
 - [GetMediaCaptionsData](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/GetMediaCaptionsData.md)
 - [GetMediaCaptionsResponse](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/GetMediaCaptionsResponse.md)
 - [GetMediaChaptersData](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/GetMediaChaptersData.md)
 - [GetMediaChaptersResponse](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/GetMediaChaptersResponse.md)
 - [GetMediaDetailResponse](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/GetMediaDetailResponse.md)
 - [GetMediaListData](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/GetMediaListData.md)
 - [GetMediaListRequest](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/GetMediaListRequest.md)
 - [GetMediaListResponse](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/GetMediaListResponse.md)
 - [GetMediaPlayerInfoResponse](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/GetMediaPlayerInfoResponse.md)
 - [GetOvertimeMetricsData](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/GetOvertimeMetricsData.md)
 - [GetOvertimeMetricsResponse](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/GetOvertimeMetricsResponse.md)
 - [GetPlayerThemeByIdData](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/GetPlayerThemeByIdData.md)
 - [GetPlayerThemeByIdResponse](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/GetPlayerThemeByIdResponse.md)
 - [GetPlayerThemeData](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/GetPlayerThemeData.md)
 - [GetPlayerThemeResponse](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/GetPlayerThemeResponse.md)
 - [GetPlaylistByIdData](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/GetPlaylistByIdData.md)
 - [GetPlaylistByIdResponse](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/GetPlaylistByIdResponse.md)
 - [GetPlaylistListData](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/GetPlaylistListData.md)
 - [GetPlaylistListRequest](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/GetPlaylistListRequest.md)
 - [GetPlaylistListResponse](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/GetPlaylistListResponse.md)
 - [GetStatisticMediasData](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/GetStatisticMediasData.md)
 - [GetStatisticMediasResponse](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/GetStatisticMediasResponse.md)
 - [GetStreamingResponse](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/GetStreamingResponse.md)
 - [GetStreamingsResponse](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/GetStreamingsResponse.md)
 - [GetTranscodeCostData](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/GetTranscodeCostData.md)
 - [GetTranscodeCostResponse](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/GetTranscodeCostResponse.md)
 - [GetUserData](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/GetUserData.md)
 - [GetUserWebhookData](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/GetUserWebhookData.md)
 - [GetUserWebhookResponse](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/GetUserWebhookResponse.md)
 - [GetWebhooksListData](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/GetWebhooksListData.md)
 - [GetWebhooksListResponse](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/GetWebhooksListResponse.md)
 - [InternalControllersGetAggreatedMetricsMetricsRequest](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/InternalControllersGetAggreatedMetricsMetricsRequest.md)
 - [LiveStreamAssets](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/LiveStreamAssets.md)
 - [LiveStreamKeyData](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/LiveStreamKeyData.md)
 - [LiveStreamMediaData](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/LiveStreamMediaData.md)
 - [LiveStreamMediaResponse](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/LiveStreamMediaResponse.md)
 - [LiveStreamMediasResponse](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/LiveStreamMediasResponse.md)
 - [LiveStreamMulticast](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/LiveStreamMulticast.md)
 - [LiveStreamStatisticResp](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/LiveStreamStatisticResp.md)
 - [Media](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/Media.md)
 - [MediaAssets](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/MediaAssets.md)
 - [MediaCaption](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/MediaCaption.md)
 - [MediaChapter](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/MediaChapter.md)
 - [Metadata](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/Metadata.md)
 - [MetricFilter](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/MetricFilter.md)
 - [MetricItem](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/MetricItem.md)
 - [MetricsContext](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/MetricsContext.md)
 - [MoveVideoInPlaylistRequest](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/MoveVideoInPlaylistRequest.md)
 - [PlayerTheme](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/PlayerTheme.md)
 - [Playlist](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/Playlist.md)
 - [PlaylistItem](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/PlaylistItem.md)
 - [PlaylistItemMedia](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/PlaylistItemMedia.md)
 - [PublicPlaylistObject](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/PublicPlaylistObject.md)
 - [QualityConfig](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/QualityConfig.md)
 - [QualityObject](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/QualityObject.md)
 - [RemoveMediasFromPlaylistRequest](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/RemoveMediasFromPlaylistRequest.md)
 - [RemovePlayerThemesFromMediaRequest](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/RemovePlayerThemesFromMediaRequest.md)
 - [RenameAPIKeyRequest](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/RenameAPIKeyRequest.md)
 - [RequestCreateCaption](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/RequestCreateCaption.md)
 - [ResponseError](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/ResponseError.md)
 - [ResponseSuccess](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/ResponseSuccess.md)
 - [Theme](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/Theme.md)
 - [TimeFrame](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/TimeFrame.md)
 - [UpdateLiveStreamKeyData](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/UpdateLiveStreamKeyData.md)
 - [UpdateLiveStreamKeyRequest](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/UpdateLiveStreamKeyRequest.md)
 - [UpdateLiveStreamKeyResponse](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/UpdateLiveStreamKeyResponse.md)
 - [UpdateLiveStreamMediaRequest](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/UpdateLiveStreamMediaRequest.md)
 - [UpdateMediaInfoRequest](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/UpdateMediaInfoRequest.md)
 - [UpdatePlayerThemeRequest](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/UpdatePlayerThemeRequest.md)
 - [UpdatePlayerThemeResponse](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/UpdatePlayerThemeResponse.md)
 - [UpdateWebhookRequest](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/UpdateWebhookRequest.md)
 - [UploadLogoByIdResponse](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/UploadLogoByIdResponse.md)
 - [UpsertLiveStreamMulticastInput](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/UpsertLiveStreamMulticastInput.md)
 - [User](https://github.com/AIOZNetwork/aiozstream-nodejs-client/blob/main/docs/model/User.md)
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
