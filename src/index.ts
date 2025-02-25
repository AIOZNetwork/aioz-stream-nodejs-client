/**
 * @aiozstream/nodejs-client
 * Aioz Stream Service
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated.
 * Do not edit the class manually.
 */


import HttpClient from "./HttpClient";

import ApiKeyApi from './api/ApiKeyApi';
import LiveStreamApi from './api/LiveStreamApi';
import PlayersApi from './api/PlayersApi';
import PlaylistApi from './api/PlaylistApi';
import VideoApi from './api/VideoApi';
import VideoChapterApi from './api/VideoChapterApi';
import WebhookApi from './api/WebhookApi';
import {createReadStream, existsSync, statSync} from "fs";
import UploadProgressEvent from "./model/UploadProgressEvent";
import { QueryOptions} from './HttpClient';
import FormData from "form-data";
import path from "path";
import crypto from "crypto";


    import AddPlayerThemesToVideoRequest from './model/AddPlayerThemesToVideoRequest';
    import AddVideoToPlaylistRequest from './model/AddVideoToPlaylistRequest';
    import ApiKey from './model/ApiKey';
    import Asset from './model/Asset';
    import Controls from './model/Controls';
    import CreateApiKeyData from './model/CreateApiKeyData';
    import CreateApiKeyRequest from './model/CreateApiKeyRequest';
    import CreateApiKeyResponse from './model/CreateApiKeyResponse';
    import CreateLiveStreamKeyRequest from './model/CreateLiveStreamKeyRequest';
    import CreateLiveStreamKeyResponse from './model/CreateLiveStreamKeyResponse';
    import CreatePlayerThemeRequest from './model/CreatePlayerThemeRequest';
    import CreatePlayerThemesData from './model/CreatePlayerThemesData';
    import CreatePlayerThemesResponse from './model/CreatePlayerThemesResponse';
    import CreatePlaylistData from './model/CreatePlaylistData';
    import CreatePlaylistRequest from './model/CreatePlaylistRequest';
    import CreatePlaylistResponse from './model/CreatePlaylistResponse';
    import CreateStreamingRequest from './model/CreateStreamingRequest';
    import CreateStreamingResponse from './model/CreateStreamingResponse';
    import CreateVideoCaptionData from './model/CreateVideoCaptionData';
    import CreateVideoCaptionResponse from './model/CreateVideoCaptionResponse';
    import CreateVideoChapterData from './model/CreateVideoChapterData';
    import CreateVideoChapterResponse from './model/CreateVideoChapterResponse';
    import CreateVideoRequest from './model/CreateVideoRequest';
    import CreateVideoResponse from './model/CreateVideoResponse';
    import CreateWebhookData from './model/CreateWebhookData';
    import CreateWebhookRequest from './model/CreateWebhookRequest';
    import CreateWebhookResponse from './model/CreateWebhookResponse';
    import GetApiKeysData from './model/GetApiKeysData';
    import GetApiKeysResponse from './model/GetApiKeysResponse';
    import GetLiveStreamKeyData from './model/GetLiveStreamKeyData';
    import GetLiveStreamKeyResponse from './model/GetLiveStreamKeyResponse';
    import GetLiveStreamKeysListData from './model/GetLiveStreamKeysListData';
    import GetLiveStreamKeysListResponse from './model/GetLiveStreamKeysListResponse';
    import GetLiveStreamVideoPublicResponse from './model/GetLiveStreamVideoPublicResponse';
    import GetLiveStreamVideoResponse from './model/GetLiveStreamVideoResponse';
    import GetLiveStreamVideosRequest from './model/GetLiveStreamVideosRequest';
    import GetLiveStreamVideosResponse from './model/GetLiveStreamVideosResponse';
    import GetPlayerThemeByIdData from './model/GetPlayerThemeByIdData';
    import GetPlayerThemeByIdResponse from './model/GetPlayerThemeByIdResponse';
    import GetPlayerThemeData from './model/GetPlayerThemeData';
    import GetPlayerThemeResponse from './model/GetPlayerThemeResponse';
    import GetPlaylistByIdData from './model/GetPlaylistByIdData';
    import GetPlaylistByIdResponse from './model/GetPlaylistByIdResponse';
    import GetPlaylistListData from './model/GetPlaylistListData';
    import GetPlaylistListRequest from './model/GetPlaylistListRequest';
    import GetPlaylistListResponse from './model/GetPlaylistListResponse';
    import GetStreamingResponse from './model/GetStreamingResponse';
    import GetStreamingsResponse from './model/GetStreamingsResponse';
    import GetTranscodeCostData from './model/GetTranscodeCostData';
    import GetTranscodeCostResponse from './model/GetTranscodeCostResponse';
    import GetUserWebhookData from './model/GetUserWebhookData';
    import GetUserWebhookResponse from './model/GetUserWebhookResponse';
    import GetVideoCaptionsData from './model/GetVideoCaptionsData';
    import GetVideoCaptionsResponse from './model/GetVideoCaptionsResponse';
    import GetVideoChaptersData from './model/GetVideoChaptersData';
    import GetVideoChaptersResponse from './model/GetVideoChaptersResponse';
    import GetVideoDetailResponse from './model/GetVideoDetailResponse';
    import GetVideoListData from './model/GetVideoListData';
    import GetVideoListRequest from './model/GetVideoListRequest';
    import GetVideoListResponse from './model/GetVideoListResponse';
    import GetVideoPlayerInfoResponse from './model/GetVideoPlayerInfoResponse';
    import GetWebhooksListData from './model/GetWebhooksListData';
    import GetWebhooksListResponse from './model/GetWebhooksListResponse';
    import LiveStreamAssets from './model/LiveStreamAssets';
    import LiveStreamKeyData from './model/LiveStreamKeyData';
    import LiveStreamVideoData from './model/LiveStreamVideoData';
    import LiveStreamVideoResponse from './model/LiveStreamVideoResponse';
    import LiveStreamVideosResponse from './model/LiveStreamVideosResponse';
    import Metadata from './model/Metadata';
    import MoveVideoInPlaylistRequest from './model/MoveVideoInPlaylistRequest';
    import PlayerTheme from './model/PlayerTheme';
    import Playlist from './model/Playlist';
    import PlaylistItem from './model/PlaylistItem';
    import PlaylistItemVideo from './model/PlaylistItemVideo';
    import PublicPlaylistObject from './model/PublicPlaylistObject';
    import QualityObject from './model/QualityObject';
    import RemovePlayerThemesFromVideoRequest from './model/RemovePlayerThemesFromVideoRequest';
    import RenameAPIKeyRequest from './model/RenameAPIKeyRequest';
    import ResponseError from './model/ResponseError';
    import ResponseSuccess from './model/ResponseSuccess';
    import Theme from './model/Theme';
    import UpdateLiveStreamKeyData from './model/UpdateLiveStreamKeyData';
    import UpdateLiveStreamKeyRequest from './model/UpdateLiveStreamKeyRequest';
    import UpdateLiveStreamKeyResponse from './model/UpdateLiveStreamKeyResponse';
    import UpdateLiveStreamVideoRequest from './model/UpdateLiveStreamVideoRequest';
    import UpdatePlayerThemeRequest from './model/UpdatePlayerThemeRequest';
    import UpdatePlayerThemeResponse from './model/UpdatePlayerThemeResponse';
    import UpdateVideoInfoRequest from './model/UpdateVideoInfoRequest';
    import UpdateWebhookRequest from './model/UpdateWebhookRequest';
    import UploadLogoByIdResponse from './model/UploadLogoByIdResponse';
    import Video from './model/Video';
    import VideoAssets from './model/VideoAssets';
    import VideoCaption from './model/VideoCaption';
    import VideoChapter from './model/VideoChapter';
    import VideoWatermark from './model/VideoWatermark';
    import Webhook from './model/Webhook';

const PRODUCTION_BASE_URI = 'https://api.aiozstream.network/api';
const DEFAULT_CHUNK_SIZE = 50 * 1024 * 1024;
const MIN_CHUNK_SIZE = 5 * 1024 * 1024;
const MAX_CHUNK_SIZE = 128 * 1024 * 1024;

class StreamClient {
  private httpClient: HttpClient;
  private _apiKey: ApiKeyApi;
  private _liveStream: LiveStreamApi;
  private _players: PlayersApi;
  private _playlist: PlaylistApi;
  private _video: VideoApi;
  private _videoChapter: VideoChapterApi;
  private _webhook: WebhookApi;

  constructor(params: {publicKey?: string, secretKey?: string,  bearerToken?: string, baseUri?: string, chunkSize?: number, applicationName?: string, applicationVersion?: string; sdkName?: string; sdkVersion?: string;}) {
    if(params.chunkSize && (params.chunkSize < MIN_CHUNK_SIZE || params.chunkSize > MAX_CHUNK_SIZE)) {
      throw new Error("Invalid chunk size value. Must be greater than " + MIN_CHUNK_SIZE + " bytes and lower than " + MAX_CHUNK_SIZE + " bytes.");
    }

    this.validateOrigin(
      'application',
      params.applicationName,
      params.applicationVersion
    );

    this.validateOrigin('sdk', params.sdkName, params.sdkVersion);

    this.httpClient = new HttpClient({
      ...params,
      baseUri: params.baseUri || PRODUCTION_BASE_URI,
      chunkSize: params.chunkSize || DEFAULT_CHUNK_SIZE,
    })

    this._apiKey = new ApiKeyApi(this.httpClient);
    this._liveStream = new LiveStreamApi(this.httpClient);
    this._players = new PlayersApi(this.httpClient);
    this._playlist = new PlaylistApi(this.httpClient);
    this._video = new VideoApi(this.httpClient);
    this._videoChapter = new VideoChapterApi(this.httpClient);
    this._webhook = new WebhookApi(this.httpClient);
  }



  /**
  * Get an ApiKeyApi instance
  * @return ApiKeyApi
  */
  public get apiKey(): ApiKeyApi {
    return this._apiKey;
  }

  /**
  * Get an LiveStreamApi instance
  * @return LiveStreamApi
  */
  public get liveStream(): LiveStreamApi {
    return this._liveStream;
  }

  /**
  * Get an PlayersApi instance
  * @return PlayersApi
  */
  public get players(): PlayersApi {
    return this._players;
  }

  /**
  * Get an PlaylistApi instance
  * @return PlaylistApi
  */
  public get playlist(): PlaylistApi {
    return this._playlist;
  }

  /**
  * Get an VideoApi instance
  * @return VideoApi
  */
  public get video(): VideoApi {
    return this._video;
  }

  /**
  * Get an VideoChapterApi instance
  * @return VideoChapterApi
  */
  public get videoChapter(): VideoChapterApi {
    return this._videoChapter;
  }

  /**
  * Get an WebhookApi instance
  * @return WebhookApi
  */
  public get webhook(): WebhookApi {
    return this._webhook;
  }



  private validateOrigin(type: string, name?: string, version?: string) {
    if (name && !version) {
      throw new Error(
        `${type} version is mandatory when ${type} name is set.'`
      );
    } else if (!name && version) {
      throw new Error(
        `${type} name is mandatory when ${type} version is set.'`
      );
    } else if (name && version) {
      if (!/^[\w-]{1,50}$/.test(name)) {
        throw new Error(
          `Invalid ${type} name value. Allowed characters: A-Z, a-z, 0-9, '-', '_'. Max length: 50.`
        );
      }

      if (!/^\d{1,3}(\.\d{1,3}(\.\d{1,3})?)?$/.test(version)) {
        throw new Error(
          `Invalid ${type} version value. The version should match the xxx[.yyy][.zzz] pattern.`
        );
      }
    }
  }


  public async uploadVideo(
    id: string,
    file: string,
    progressListener?: (event: UploadProgressEvent) => void
  ): Promise<void> {
    if (!id || typeof id !== 'string') {
      throw new Error('Invalid id parameter');
    }
    if (!existsSync(file)) {
      throw new Error(`${file} must be a readable source file`);
    }

    const fileStats = statSync(file);
    const length = fileStats.size;
    if (length <= 0) {
      throw new Error(`${file} is empty`);
    }

    const localVarPath = `videos/${encodeURIComponent(id)}/part`;
    const chunkSize = this.httpClient.getChunkSize();
    const filename = path.basename(file);

    const uploadChunk = async (
      start: number,
      end: number,
      chunkNumber: number,
      totalChunks: number
    ): Promise<void> => {
      const chunkFormData = new FormData();
      const fileStream = createReadStream(file, { start, end });

      const hash = crypto.createHash('md5');
      for await (const chunk of fileStream) {
        hash.update(chunk);
      }
      const md5Hash = hash.digest('hex');

      fileStream.destroy();
      const uploadStream = createReadStream(file, { start, end });

      chunkFormData.append('file', uploadStream, filename);
      chunkFormData.append('index', (chunkNumber + 1).toString());
      chunkFormData.append('hash', md5Hash);

      const queryParams: QueryOptions = {
        method: 'POST',
        body: chunkFormData,
        headers: {
          'Content-Range': `bytes ${start}-${end}/${length}`,
        },
      };

      if (progressListener) {
        queryParams.onUploadProgress = (progress) => {
          progressListener({
            chunksCount: totalChunks,
            currentChunk: chunkNumber,
            currentChunkUploadedBytes: progress.loaded,
            currentChunkTotalBytes: progress.total || 0,
            uploadedBytes: Math.min(
              length,
              chunkNumber * chunkSize + progress.loaded
            ),
            totalBytes: length,
          });
        };
      }

      await this.httpClient.call(localVarPath, queryParams);
    };

    if (chunkSize > length) {
      await uploadChunk(0, length - 1, 0, 1);
    } else {
      const chunksCount = Math.ceil(length / chunkSize);
      const uploadPromises: Promise<void>[] = [];
      for (let chunkNumber = 0; chunkNumber < chunksCount; chunkNumber++) {
        const start = chunkNumber * chunkSize;
        const end = Math.min(start + chunkSize - 1, length - 1);
        uploadPromises.push(uploadChunk(start, end, chunkNumber, chunksCount));

        if (uploadPromises.length >= 5 || chunkNumber === chunksCount - 1) {
          await Promise.all(uploadPromises);
          uploadPromises.length = 0;
        }
      }
    }

    const uploadCompleteLocalVarPath = `videos/${encodeURIComponent(
      id
    )}/complete`;
    await this.httpClient.call(uploadCompleteLocalVarPath, { method: 'GET' });
  }
}


export = StreamClient;
