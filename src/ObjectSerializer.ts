/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-non-null-assertion */
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

import AddMediaToPlaylistRequest from './model/AddMediaToPlaylistRequest';
import AddPlayerThemesToVideoRequest from './model/AddPlayerThemesToVideoRequest';
import ApiKey from './model/ApiKey';
import Asset from './model/Asset';
import AudioConfig from './model/AudioConfig';
import Controls from './model/Controls';
import CreateApiKeyData from './model/CreateApiKeyData';
import CreateApiKeyRequest from './model/CreateApiKeyRequest';
import CreateApiKeyResponse from './model/CreateApiKeyResponse';
import CreateLiveStreamKeyRequest from './model/CreateLiveStreamKeyRequest';
import CreateLiveStreamKeyResponse from './model/CreateLiveStreamKeyResponse';
import CreateMediaCaptionData from './model/CreateMediaCaptionData';
import CreateMediaCaptionResponse from './model/CreateMediaCaptionResponse';
import CreateMediaChapterData from './model/CreateMediaChapterData';
import CreateMediaChapterResponse from './model/CreateMediaChapterResponse';
import CreateMediaRequest from './model/CreateMediaRequest';
import CreateMediaResponse from './model/CreateMediaResponse';
import CreatePlayerThemeRequest from './model/CreatePlayerThemeRequest';
import CreatePlayerThemesData from './model/CreatePlayerThemesData';
import CreatePlayerThemesResponse from './model/CreatePlayerThemesResponse';
import CreatePlaylistData from './model/CreatePlaylistData';
import CreatePlaylistRequest from './model/CreatePlaylistRequest';
import CreatePlaylistResponse from './model/CreatePlaylistResponse';
import CreateStreamingRequest from './model/CreateStreamingRequest';
import CreateStreamingResponse from './model/CreateStreamingResponse';
import CreateWebhookData from './model/CreateWebhookData';
import CreateWebhookRequest from './model/CreateWebhookRequest';
import CreateWebhookResponse from './model/CreateWebhookResponse';
import DataUsage from './model/DataUsage';
import GetAggregatedMetricsData from './model/GetAggregatedMetricsData';
import GetAggregatedMetricsResponse from './model/GetAggregatedMetricsResponse';
import GetApiKeysData from './model/GetApiKeysData';
import GetApiKeysResponse from './model/GetApiKeysResponse';
import GetBreakdownMetricsData from './model/GetBreakdownMetricsData';
import GetBreakdownMetricsRequest from './model/GetBreakdownMetricsRequest';
import GetBreakdownMetricsResponse from './model/GetBreakdownMetricsResponse';
import GetDataUsageData from './model/GetDataUsageData';
import GetDataUsageResponse from './model/GetDataUsageResponse';
import GetLiveStreamKeyData from './model/GetLiveStreamKeyData';
import GetLiveStreamKeyResponse from './model/GetLiveStreamKeyResponse';
import GetLiveStreamKeysListData from './model/GetLiveStreamKeysListData';
import GetLiveStreamKeysListResponse from './model/GetLiveStreamKeysListResponse';
import GetLiveStreamMediasRequest from './model/GetLiveStreamMediasRequest';
import GetLiveStreamMediasResponse from './model/GetLiveStreamMediasResponse';
import GetLiveStreamMulticastResponse from './model/GetLiveStreamMulticastResponse';
import GetLiveStreamStatisticResponse from './model/GetLiveStreamStatisticResponse';
import GetLiveStreamVideoPublicResponse from './model/GetLiveStreamVideoPublicResponse';
import GetLiveStreamVideoResponse from './model/GetLiveStreamVideoResponse';
import GetMeResponse from './model/GetMeResponse';
import GetMediaCaptionsData from './model/GetMediaCaptionsData';
import GetMediaCaptionsResponse from './model/GetMediaCaptionsResponse';
import GetMediaChaptersData from './model/GetMediaChaptersData';
import GetMediaChaptersResponse from './model/GetMediaChaptersResponse';
import GetMediaDetailResponse from './model/GetMediaDetailResponse';
import GetMediaListData from './model/GetMediaListData';
import GetMediaListRequest from './model/GetMediaListRequest';
import GetMediaListResponse from './model/GetMediaListResponse';
import GetMediaPlayerInfoResponse from './model/GetMediaPlayerInfoResponse';
import GetOvertimeMetricsData from './model/GetOvertimeMetricsData';
import GetOvertimeMetricsResponse from './model/GetOvertimeMetricsResponse';
import GetPlayerThemeByIdData from './model/GetPlayerThemeByIdData';
import GetPlayerThemeByIdResponse from './model/GetPlayerThemeByIdResponse';
import GetPlayerThemeData from './model/GetPlayerThemeData';
import GetPlayerThemeResponse from './model/GetPlayerThemeResponse';
import GetPlaylistByIdData from './model/GetPlaylistByIdData';
import GetPlaylistByIdResponse from './model/GetPlaylistByIdResponse';
import GetPlaylistListData from './model/GetPlaylistListData';
import GetPlaylistListRequest from './model/GetPlaylistListRequest';
import GetPlaylistListResponse from './model/GetPlaylistListResponse';
import GetStatisticMediasData from './model/GetStatisticMediasData';
import GetStatisticMediasResponse from './model/GetStatisticMediasResponse';
import GetStreamingResponse from './model/GetStreamingResponse';
import GetStreamingsResponse from './model/GetStreamingsResponse';
import GetTranscodeCostData from './model/GetTranscodeCostData';
import GetTranscodeCostResponse from './model/GetTranscodeCostResponse';
import GetUserData from './model/GetUserData';
import GetUserWebhookData from './model/GetUserWebhookData';
import GetUserWebhookResponse from './model/GetUserWebhookResponse';
import GetWebhooksListData from './model/GetWebhooksListData';
import GetWebhooksListResponse from './model/GetWebhooksListResponse';
import InternalControllersGetAggreatedMetricsMetricsRequest from './model/InternalControllersGetAggreatedMetricsMetricsRequest';
import LiveStreamAssets from './model/LiveStreamAssets';
import LiveStreamKeyData from './model/LiveStreamKeyData';
import LiveStreamMediaData from './model/LiveStreamMediaData';
import LiveStreamMediaResponse from './model/LiveStreamMediaResponse';
import LiveStreamMediasResponse from './model/LiveStreamMediasResponse';
import LiveStreamMulticast from './model/LiveStreamMulticast';
import LiveStreamStatisticResp from './model/LiveStreamStatisticResp';
import Media from './model/Media';
import MediaAssets from './model/MediaAssets';
import MediaCaption from './model/MediaCaption';
import MediaChapter from './model/MediaChapter';
import Metadata from './model/Metadata';
import MetricFilter from './model/MetricFilter';
import MetricItem from './model/MetricItem';
import MetricsContext from './model/MetricsContext';
import MoveVideoInPlaylistRequest from './model/MoveVideoInPlaylistRequest';
import PlayerTheme from './model/PlayerTheme';
import Playlist from './model/Playlist';
import PlaylistItem from './model/PlaylistItem';
import PlaylistItemMedia from './model/PlaylistItemMedia';
import PublicPlaylistObject from './model/PublicPlaylistObject';
import QualityConfig from './model/QualityConfig';
import QualityObject from './model/QualityObject';
import RemoveMediasFromPlaylistRequest from './model/RemoveMediasFromPlaylistRequest';
import RemovePlayerThemesFromMediaRequest from './model/RemovePlayerThemesFromMediaRequest';
import RenameAPIKeyRequest from './model/RenameAPIKeyRequest';
import RequestCreateCaption from './model/RequestCreateCaption';
import ResponseError from './model/ResponseError';
import ResponseSuccess from './model/ResponseSuccess';
import Theme from './model/Theme';
import TimeFrame from './model/TimeFrame';
import UpdateLiveStreamKeyData from './model/UpdateLiveStreamKeyData';
import UpdateLiveStreamKeyRequest from './model/UpdateLiveStreamKeyRequest';
import UpdateLiveStreamKeyResponse from './model/UpdateLiveStreamKeyResponse';
import UpdateLiveStreamMediaRequest from './model/UpdateLiveStreamMediaRequest';
import UpdateMediaInfoRequest from './model/UpdateMediaInfoRequest';
import UpdatePlayerThemeRequest from './model/UpdatePlayerThemeRequest';
import UpdatePlayerThemeResponse from './model/UpdatePlayerThemeResponse';
import UpdateWebhookRequest from './model/UpdateWebhookRequest';
import UploadLogoByIdResponse from './model/UploadLogoByIdResponse';
import UpsertLiveStreamMulticastInput from './model/UpsertLiveStreamMulticastInput';
import User from './model/User';
import VideoConfig from './model/VideoConfig';
import VideoWatermark from './model/VideoWatermark';
import Webhook from './model/Webhook';

/* tslint:disable:no-unused-variable */
const primitives = [
  'string',
  'boolean',
  'double',
  'integer',
  'long',
  'float',
  'number',
  'any',
];

export const COLLECTION_FORMATS = {
  csv: ',',
  ssv: ' ',
  tsv: '\t',
  pipes: '|',
};

const supportedMediaTypes: { [mediaType: string]: number } = {
  'application/json': Infinity,
  'application/octet-stream': 0,
};

const enumsMap: Set<string> = new Set<string>([]);

const typeMap: { [index: string]: any } = {
  AddMediaToPlaylistRequest: AddMediaToPlaylistRequest,
  AddPlayerThemesToVideoRequest: AddPlayerThemesToVideoRequest,
  ApiKey: ApiKey,
  Asset: Asset,
  AudioConfig: AudioConfig,
  Controls: Controls,
  CreateApiKeyData: CreateApiKeyData,
  CreateApiKeyRequest: CreateApiKeyRequest,
  CreateApiKeyResponse: CreateApiKeyResponse,
  CreateLiveStreamKeyRequest: CreateLiveStreamKeyRequest,
  CreateLiveStreamKeyResponse: CreateLiveStreamKeyResponse,
  CreateMediaCaptionData: CreateMediaCaptionData,
  CreateMediaCaptionResponse: CreateMediaCaptionResponse,
  CreateMediaChapterData: CreateMediaChapterData,
  CreateMediaChapterResponse: CreateMediaChapterResponse,
  CreateMediaRequest: CreateMediaRequest,
  CreateMediaResponse: CreateMediaResponse,
  CreatePlayerThemeRequest: CreatePlayerThemeRequest,
  CreatePlayerThemesData: CreatePlayerThemesData,
  CreatePlayerThemesResponse: CreatePlayerThemesResponse,
  CreatePlaylistData: CreatePlaylistData,
  CreatePlaylistRequest: CreatePlaylistRequest,
  CreatePlaylistResponse: CreatePlaylistResponse,
  CreateStreamingRequest: CreateStreamingRequest,
  CreateStreamingResponse: CreateStreamingResponse,
  CreateWebhookData: CreateWebhookData,
  CreateWebhookRequest: CreateWebhookRequest,
  CreateWebhookResponse: CreateWebhookResponse,
  DataUsage: DataUsage,
  GetAggregatedMetricsData: GetAggregatedMetricsData,
  GetAggregatedMetricsResponse: GetAggregatedMetricsResponse,
  GetApiKeysData: GetApiKeysData,
  GetApiKeysResponse: GetApiKeysResponse,
  GetBreakdownMetricsData: GetBreakdownMetricsData,
  GetBreakdownMetricsRequest: GetBreakdownMetricsRequest,
  GetBreakdownMetricsResponse: GetBreakdownMetricsResponse,
  GetDataUsageData: GetDataUsageData,
  GetDataUsageResponse: GetDataUsageResponse,
  GetLiveStreamKeyData: GetLiveStreamKeyData,
  GetLiveStreamKeyResponse: GetLiveStreamKeyResponse,
  GetLiveStreamKeysListData: GetLiveStreamKeysListData,
  GetLiveStreamKeysListResponse: GetLiveStreamKeysListResponse,
  GetLiveStreamMediasRequest: GetLiveStreamMediasRequest,
  GetLiveStreamMediasResponse: GetLiveStreamMediasResponse,
  GetLiveStreamMulticastResponse: GetLiveStreamMulticastResponse,
  GetLiveStreamStatisticResponse: GetLiveStreamStatisticResponse,
  GetLiveStreamVideoPublicResponse: GetLiveStreamVideoPublicResponse,
  GetLiveStreamVideoResponse: GetLiveStreamVideoResponse,
  GetMeResponse: GetMeResponse,
  GetMediaCaptionsData: GetMediaCaptionsData,
  GetMediaCaptionsResponse: GetMediaCaptionsResponse,
  GetMediaChaptersData: GetMediaChaptersData,
  GetMediaChaptersResponse: GetMediaChaptersResponse,
  GetMediaDetailResponse: GetMediaDetailResponse,
  GetMediaListData: GetMediaListData,
  GetMediaListRequest: GetMediaListRequest,
  GetMediaListResponse: GetMediaListResponse,
  GetMediaPlayerInfoResponse: GetMediaPlayerInfoResponse,
  GetOvertimeMetricsData: GetOvertimeMetricsData,
  GetOvertimeMetricsResponse: GetOvertimeMetricsResponse,
  GetPlayerThemeByIdData: GetPlayerThemeByIdData,
  GetPlayerThemeByIdResponse: GetPlayerThemeByIdResponse,
  GetPlayerThemeData: GetPlayerThemeData,
  GetPlayerThemeResponse: GetPlayerThemeResponse,
  GetPlaylistByIdData: GetPlaylistByIdData,
  GetPlaylistByIdResponse: GetPlaylistByIdResponse,
  GetPlaylistListData: GetPlaylistListData,
  GetPlaylistListRequest: GetPlaylistListRequest,
  GetPlaylistListResponse: GetPlaylistListResponse,
  GetStatisticMediasData: GetStatisticMediasData,
  GetStatisticMediasResponse: GetStatisticMediasResponse,
  GetStreamingResponse: GetStreamingResponse,
  GetStreamingsResponse: GetStreamingsResponse,
  GetTranscodeCostData: GetTranscodeCostData,
  GetTranscodeCostResponse: GetTranscodeCostResponse,
  GetUserData: GetUserData,
  GetUserWebhookData: GetUserWebhookData,
  GetUserWebhookResponse: GetUserWebhookResponse,
  GetWebhooksListData: GetWebhooksListData,
  GetWebhooksListResponse: GetWebhooksListResponse,
  InternalControllersGetAggreatedMetricsMetricsRequest:
    InternalControllersGetAggreatedMetricsMetricsRequest,
  LiveStreamAssets: LiveStreamAssets,
  LiveStreamKeyData: LiveStreamKeyData,
  LiveStreamMediaData: LiveStreamMediaData,
  LiveStreamMediaResponse: LiveStreamMediaResponse,
  LiveStreamMediasResponse: LiveStreamMediasResponse,
  LiveStreamMulticast: LiveStreamMulticast,
  LiveStreamStatisticResp: LiveStreamStatisticResp,
  Media: Media,
  MediaAssets: MediaAssets,
  MediaCaption: MediaCaption,
  MediaChapter: MediaChapter,
  Metadata: Metadata,
  MetricFilter: MetricFilter,
  MetricItem: MetricItem,
  MetricsContext: MetricsContext,
  MoveVideoInPlaylistRequest: MoveVideoInPlaylistRequest,
  PlayerTheme: PlayerTheme,
  Playlist: Playlist,
  PlaylistItem: PlaylistItem,
  PlaylistItemMedia: PlaylistItemMedia,
  PublicPlaylistObject: PublicPlaylistObject,
  QualityConfig: QualityConfig,
  QualityObject: QualityObject,
  RemoveMediasFromPlaylistRequest: RemoveMediasFromPlaylistRequest,
  RemovePlayerThemesFromMediaRequest: RemovePlayerThemesFromMediaRequest,
  RenameAPIKeyRequest: RenameAPIKeyRequest,
  RequestCreateCaption: RequestCreateCaption,
  ResponseError: ResponseError,
  ResponseSuccess: ResponseSuccess,
  Theme: Theme,
  TimeFrame: TimeFrame,
  UpdateLiveStreamKeyData: UpdateLiveStreamKeyData,
  UpdateLiveStreamKeyRequest: UpdateLiveStreamKeyRequest,
  UpdateLiveStreamKeyResponse: UpdateLiveStreamKeyResponse,
  UpdateLiveStreamMediaRequest: UpdateLiveStreamMediaRequest,
  UpdateMediaInfoRequest: UpdateMediaInfoRequest,
  UpdatePlayerThemeRequest: UpdatePlayerThemeRequest,
  UpdatePlayerThemeResponse: UpdatePlayerThemeResponse,
  UpdateWebhookRequest: UpdateWebhookRequest,
  UploadLogoByIdResponse: UploadLogoByIdResponse,
  UpsertLiveStreamMulticastInput: UpsertLiveStreamMulticastInput,
  User: User,
  VideoConfig: VideoConfig,
  VideoWatermark: VideoWatermark,
  Webhook: Webhook,
};

export default class ObjectSerializer {
  public static findCorrectType(data: any, expectedType: string): string {
    // Check the discriminator
    if (typeMap[expectedType]) {
      const discriminatorProperty = typeMap[expectedType].discriminator;
      if (discriminatorProperty && data[discriminatorProperty]) {
        const discriminatorType = data[discriminatorProperty];
        if (typeMap[discriminatorType]) {
          return discriminatorType; // use the type given in the discriminator
        }
      }
    }

    return expectedType;
  }

  public static serialize(
    data: any,
    type: string,
    format: string,
    defaultValue?: any
  ): any {
    if (data == undefined) {
      if (typeof defaultValue === 'undefined') {
        return data;
      }
      data = defaultValue;
    }
    if (primitives.indexOf(type.toLowerCase()) !== -1) {
      return data;
    } else if (type.lastIndexOf('Array<', 0) === 0) {
      // string.startsWith pre es6
      let subType: string = type.replace('Array<', ''); // Array<Type> => Type>
      subType = subType.substring(0, subType.length - 1); // Type> => Type
      const transformedData: any[] = [];
      for (const index in data) {
        const date = data[index];
        transformedData.push(ObjectSerializer.serialize(date, subType, format));
      }
      return transformedData;
    } else if (type === 'Date') {
      if (format == 'date') {
        let month = data.getMonth() + 1;
        month = month < 10 ? '0' + month.toString() : month.toString();
        let day = data.getDate();
        day = day < 10 ? '0' + day.toString() : day.toString();

        return data.getFullYear() + '-' + month + '-' + day;
      } else {
        return data.toISOString().split('.')[0] + 'Z';
      }
    } else {
      if (enumsMap.has(type)) {
        return data;
      }
      if (!typeMap[type]) {
        // in case we dont know the type
        return data;
      }

      // Get the actual type of this object
      type = this.findCorrectType(data, type);

      // get the map for the correct type.
      const attributeTypes = typeMap[type].getAttributeTypeMap();
      const instance: { [index: string]: any } = {};
      for (const index in attributeTypes) {
        const attributeType = attributeTypes[index];
        instance[attributeType.baseName] = ObjectSerializer.serialize(
          data[attributeType.name],
          attributeType.type,
          attributeType.format,
          attributeType.defaultValue
        );
      }
      return instance;
    }
  }

  public static deserialize(data: any, type: string, format: string): any {
    // polymorphism may change the actual type.
    type = ObjectSerializer.findCorrectType(data, type);
    if (data == undefined) {
      return data;
    } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
      return data;
    } else if (type.lastIndexOf('Array<', 0) === 0) {
      // string.startsWith pre es6
      let subType: string = type.replace('Array<', ''); // Array<Type> => Type>
      subType = subType.substring(0, subType.length - 1); // Type> => Type
      const transformedData: any[] = [];
      for (const index in data) {
        const date = data[index];
        transformedData.push(
          ObjectSerializer.deserialize(date, subType, format)
        );
      }
      return transformedData;
    } else if (type === 'Date') {
      return new Date(data);
    } else {
      if (enumsMap.has(type)) {
        // is Enum
        return data;
      }

      if (!typeMap[type]) {
        // dont know the type
        return data;
      }
      const instance = new typeMap[type]();
      const attributeTypes = typeMap[type].getAttributeTypeMap();
      for (const index in attributeTypes) {
        const attributeType = attributeTypes[index];
        instance[attributeType.name] = ObjectSerializer.deserialize(
          data[attributeType.baseName],
          attributeType.type,
          attributeType.format
        );
      }
      return instance;
    }
  }

  /**
   * Normalize media type
   *
   * We currently do not handle any media types attributes, i.e. anything
   * after a semicolon. All content is assumed to be UTF-8 compatible.
   */
  public static normalizeMediaType(
    mediaType: string | undefined
  ): string | undefined {
    if (mediaType === undefined) {
      return undefined;
    }
    return mediaType.split(';')[0].trim().toLowerCase();
  }

  /**
   * From a list of possible media types, choose the one we can handle best.
   *
   * The order of the given media types does not have any impact on the choice
   * made.
   */
  public static getPreferredMediaType(mediaTypes: Array<string>): string {
    /** According to OAS 3 we should default to json */
    if (!mediaTypes) {
      return 'application/json';
    }

    const normalMediaTypes = mediaTypes
      .map(this.normalizeMediaType)
      .filter((mt) => mt);
    let selectedMediaType: string | undefined = undefined;
    let selectedRank = -Infinity;
    for (const mediaType of normalMediaTypes) {
      if (supportedMediaTypes[mediaType!] > selectedRank) {
        selectedMediaType = mediaType;
        selectedRank = supportedMediaTypes[mediaType!];
      }
    }

    if (selectedMediaType === undefined) {
      throw new Error(
        'None of the given media types are supported: ' + mediaTypes.join(', ')
      );
    }

    return selectedMediaType!;
  }

  /**
   * Convert data to a string according the given media type
   */
  public static stringify(data: any, mediaType: string): string {
    if (mediaType === 'application/json') {
      return JSON.stringify(data);
    }

    // HTTP DELETE response.
    if (data === '') {
      return data;
    }

    throw new Error(
      'The mediaType ' +
        mediaType +
        ' is not supported by ObjectSerializer.stringify.'
    );
  }

  /**
   * Parse data from a string according to the given media type
   */
  public static parse(rawData: string, mediaType: string | undefined): any {
    if (mediaType === undefined) {
      // HTTP DELETE response.
      if (rawData === '' || rawData === '""') {
        return rawData;
      }

      throw new Error('Cannot parse content. No Content-Type defined.');
    }

    if (
      mediaType === 'application/json' ||
      mediaType.indexOf('application/vnd.stream+json;version=') === 0
    ) {
      return JSON.parse(rawData);
    }

    throw new Error(
      'The mediaType ' +
        mediaType +
        ' is not supported by ObjectSerializer.parse.'
    );
  }
}
