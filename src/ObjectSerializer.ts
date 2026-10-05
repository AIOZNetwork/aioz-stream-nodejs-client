/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-non-null-assertion */
/**
 * @aiozstream/nodejs-client
 * The AIOZ Stream API, as the generated SDK clients see it.
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated.
 * Do not edit the class manually.
 */

import AddMediaRequest from './model/AddMediaRequest';
import AggregatedMetricsData from './model/AggregatedMetricsData';
import AggregatedMetricsResponse from './model/AggregatedMetricsResponse';
import ApiKey from './model/ApiKey';
import Asset from './model/Asset';
import AttachThemeRequest from './model/AttachThemeRequest';
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
import CreatePlaylistRequest from './model/CreatePlaylistRequest';
import CreateStreamingRequest from './model/CreateStreamingRequest';
import CreateStreamingResponse from './model/CreateStreamingResponse';
import DataUsage from './model/DataUsage';
import DataUsageData from './model/DataUsageData';
import DataUsageRequest from './model/DataUsageRequest';
import DataUsageResponse from './model/DataUsageResponse';
import DeletedAt from './model/DeletedAt';
import EditorProject from './model/EditorProject';
import ErrorBody from './model/ErrorBody';
import GetLiveStreamKeyData from './model/GetLiveStreamKeyData';
import GetLiveStreamKeyResponse from './model/GetLiveStreamKeyResponse';
import GetLiveStreamKeysListData from './model/GetLiveStreamKeysListData';
import GetLiveStreamKeysListResponse from './model/GetLiveStreamKeysListResponse';
import GetLiveStreamMediaPublicResponse from './model/GetLiveStreamMediaPublicResponse';
import GetLiveStreamMediaResponse from './model/GetLiveStreamMediaResponse';
import GetLiveStreamMediasRequest from './model/GetLiveStreamMediasRequest';
import GetLiveStreamMediasResponse from './model/GetLiveStreamMediasResponse';
import GetLiveStreamMulticastResponse from './model/GetLiveStreamMulticastResponse';
import GetLiveStreamStatisticResponse from './model/GetLiveStreamStatisticResponse';
import GetMediaCaptionsData from './model/GetMediaCaptionsData';
import GetMediaCaptionsResponse from './model/GetMediaCaptionsResponse';
import GetMediaChaptersData from './model/GetMediaChaptersData';
import GetMediaChaptersResponse from './model/GetMediaChaptersResponse';
import GetMediaDetailResponse from './model/GetMediaDetailResponse';
import GetMediaListData from './model/GetMediaListData';
import GetMediaListRequest from './model/GetMediaListRequest';
import GetMediaListResponse from './model/GetMediaListResponse';
import GetMediaPlayerInfoResponse from './model/GetMediaPlayerInfoResponse';
import GetStreamUsageResponse from './model/GetStreamUsageResponse';
import GetStreamingResponse from './model/GetStreamingResponse';
import GetStreamingsResponse from './model/GetStreamingsResponse';
import GetTranscodeCostData from './model/GetTranscodeCostData';
import GetTranscodeCostResponse from './model/GetTranscodeCostResponse';
import GetUserStreamsUsageDetailResponse from './model/GetUserStreamsUsageDetailResponse';
import HighlightChunk from './model/HighlightChunk';
import HighlightClip from './model/HighlightClip';
import HighlightManifest from './model/HighlightManifest';
import HighlightMedia from './model/HighlightMedia';
import ListApiKeysData from './model/ListApiKeysData';
import ListApiKeysRequest from './model/ListApiKeysRequest';
import ListApiKeysResponse from './model/ListApiKeysResponse';
import ListPlaylistsData from './model/ListPlaylistsData';
import ListPlaylistsRequest from './model/ListPlaylistsRequest';
import ListPlaylistsResponse from './model/ListPlaylistsResponse';
import ListThemesData from './model/ListThemesData';
import ListThemesRequest from './model/ListThemesRequest';
import ListThemesResponse from './model/ListThemesResponse';
import ListWebhooksData from './model/ListWebhooksData';
import ListWebhooksRequest from './model/ListWebhooksRequest';
import ListWebhooksResponse from './model/ListWebhooksResponse';
import LiveStreamAssets from './model/LiveStreamAssets';
import LiveStreamKeyData from './model/LiveStreamKeyData';
import LiveStreamMediaData from './model/LiveStreamMediaData';
import LiveStreamMediaResponse from './model/LiveStreamMediaResponse';
import LiveStreamMediasResponse from './model/LiveStreamMediasResponse';
import LiveStreamMulticast from './model/LiveStreamMulticast';
import LiveStreamStatisticResp from './model/LiveStreamStatisticResp';
import MeData from './model/MeData';
import MeResponse from './model/MeResponse';
import MediaAssets from './model/MediaAssets';
import MediaCaption from './model/MediaCaption';
import MediaChapter from './model/MediaChapter';
import MediaObject from './model/MediaObject';
import MediaSummary from './model/MediaSummary';
import MediaWatermark from './model/MediaWatermark';
import Metadata from './model/Metadata';
import MetricFilter from './model/MetricFilter';
import MetricItem from './model/MetricItem';
import MetricsContext from './model/MetricsContext';
import MetricsPageData from './model/MetricsPageData';
import MetricsPageResponse from './model/MetricsPageResponse';
import MetricsRequest from './model/MetricsRequest';
import MoveItemRequest from './model/MoveItemRequest';
import PlayerTheme from './model/PlayerTheme';
import PlayerThemeInput from './model/PlayerThemeInput';
import Playlist from './model/Playlist';
import PlaylistData from './model/PlaylistData';
import PlaylistItem from './model/PlaylistItem';
import PlaylistItemMedia from './model/PlaylistItemMedia';
import PlaylistResponse from './model/PlaylistResponse';
import QualityConfig from './model/QualityConfig';
import QualityObject from './model/QualityObject';
import RemoveMediaRequest from './model/RemoveMediaRequest';
import RenameApiKeyRequest from './model/RenameApiKeyRequest';
import RenditionUsage from './model/RenditionUsage';
import ResponseError from './model/ResponseError';
import ResponseSuccess from './model/ResponseSuccess';
import SetDefaultCaptionRequest from './model/SetDefaultCaptionRequest';
import StreamUsageSummary from './model/StreamUsageSummary';
import Theme from './model/Theme';
import ThemeData from './model/ThemeData';
import ThemeResponse from './model/ThemeResponse';
import TimeFrame from './model/TimeFrame';
import UpdateLiveStreamKeyData from './model/UpdateLiveStreamKeyData';
import UpdateLiveStreamKeyRequest from './model/UpdateLiveStreamKeyRequest';
import UpdateLiveStreamKeyResponse from './model/UpdateLiveStreamKeyResponse';
import UpdateLiveStreamMediaRequest from './model/UpdateLiveStreamMediaRequest';
import UpdateMediaInfoRequest from './model/UpdateMediaInfoRequest';
import UpsertLiveStreamMulticastInput from './model/UpsertLiveStreamMulticastInput';
import User from './model/User';
import UserStreamsUsageResponse from './model/UserStreamsUsageResponse';
import VideoConfig from './model/VideoConfig';
import VideoCropInfo from './model/VideoCropInfo';
import Webhook from './model/Webhook';
import WebhookData from './model/WebhookData';
import WebhookResponse from './model/WebhookResponse';
import WriteWebhookRequest from './model/WriteWebhookRequest';

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

const enumsMap: Set<string> = new Set<string>([
  'CreateApiKeyRequestTypeEnum',
  'CreatePlaylistRequestPlaylistTypeEnum',
  'DataUsageRequestIntervalEnum',
  'HighlightChunkStatus',
  'HighlightMediaStatus',
  'ListApiKeysRequestOrderByEnum',
  'ListApiKeysRequestSortByEnum',
  'ListApiKeysRequestTypeEnum',
  'ListPlaylistsRequestOrderByEnum',
  'ListPlaylistsRequestPlaylistTypeEnum',
  'ListPlaylistsRequestSortByEnum',
  'ListThemesRequestOrderByEnum',
  'ListThemesRequestSortByEnum',
  'ListWebhooksRequestOrderByEnum',
  'ListWebhooksRequestSortByEnum',
  'ManifestType',
  'MediaType',
  'MetricsRequestOrderByEnum',
]);

const typeMap: { [index: string]: any } = {
  AddMediaRequest: AddMediaRequest,
  AggregatedMetricsData: AggregatedMetricsData,
  AggregatedMetricsResponse: AggregatedMetricsResponse,
  ApiKey: ApiKey,
  Asset: Asset,
  AttachThemeRequest: AttachThemeRequest,
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
  CreatePlaylistRequest: CreatePlaylistRequest,
  CreateStreamingRequest: CreateStreamingRequest,
  CreateStreamingResponse: CreateStreamingResponse,
  DataUsage: DataUsage,
  DataUsageData: DataUsageData,
  DataUsageRequest: DataUsageRequest,
  DataUsageResponse: DataUsageResponse,
  DeletedAt: DeletedAt,
  EditorProject: EditorProject,
  ErrorBody: ErrorBody,
  GetLiveStreamKeyData: GetLiveStreamKeyData,
  GetLiveStreamKeyResponse: GetLiveStreamKeyResponse,
  GetLiveStreamKeysListData: GetLiveStreamKeysListData,
  GetLiveStreamKeysListResponse: GetLiveStreamKeysListResponse,
  GetLiveStreamMediaPublicResponse: GetLiveStreamMediaPublicResponse,
  GetLiveStreamMediaResponse: GetLiveStreamMediaResponse,
  GetLiveStreamMediasRequest: GetLiveStreamMediasRequest,
  GetLiveStreamMediasResponse: GetLiveStreamMediasResponse,
  GetLiveStreamMulticastResponse: GetLiveStreamMulticastResponse,
  GetLiveStreamStatisticResponse: GetLiveStreamStatisticResponse,
  GetMediaCaptionsData: GetMediaCaptionsData,
  GetMediaCaptionsResponse: GetMediaCaptionsResponse,
  GetMediaChaptersData: GetMediaChaptersData,
  GetMediaChaptersResponse: GetMediaChaptersResponse,
  GetMediaDetailResponse: GetMediaDetailResponse,
  GetMediaListData: GetMediaListData,
  GetMediaListRequest: GetMediaListRequest,
  GetMediaListResponse: GetMediaListResponse,
  GetMediaPlayerInfoResponse: GetMediaPlayerInfoResponse,
  GetStreamUsageResponse: GetStreamUsageResponse,
  GetStreamingResponse: GetStreamingResponse,
  GetStreamingsResponse: GetStreamingsResponse,
  GetTranscodeCostData: GetTranscodeCostData,
  GetTranscodeCostResponse: GetTranscodeCostResponse,
  GetUserStreamsUsageDetailResponse: GetUserStreamsUsageDetailResponse,
  HighlightChunk: HighlightChunk,
  HighlightClip: HighlightClip,
  HighlightManifest: HighlightManifest,
  HighlightMedia: HighlightMedia,
  ListApiKeysData: ListApiKeysData,
  ListApiKeysRequest: ListApiKeysRequest,
  ListApiKeysResponse: ListApiKeysResponse,
  ListPlaylistsData: ListPlaylistsData,
  ListPlaylistsRequest: ListPlaylistsRequest,
  ListPlaylistsResponse: ListPlaylistsResponse,
  ListThemesData: ListThemesData,
  ListThemesRequest: ListThemesRequest,
  ListThemesResponse: ListThemesResponse,
  ListWebhooksData: ListWebhooksData,
  ListWebhooksRequest: ListWebhooksRequest,
  ListWebhooksResponse: ListWebhooksResponse,
  LiveStreamAssets: LiveStreamAssets,
  LiveStreamKeyData: LiveStreamKeyData,
  LiveStreamMediaData: LiveStreamMediaData,
  LiveStreamMediaResponse: LiveStreamMediaResponse,
  LiveStreamMediasResponse: LiveStreamMediasResponse,
  LiveStreamMulticast: LiveStreamMulticast,
  LiveStreamStatisticResp: LiveStreamStatisticResp,
  MeData: MeData,
  MeResponse: MeResponse,
  MediaAssets: MediaAssets,
  MediaCaption: MediaCaption,
  MediaChapter: MediaChapter,
  MediaObject: MediaObject,
  MediaSummary: MediaSummary,
  MediaWatermark: MediaWatermark,
  Metadata: Metadata,
  MetricFilter: MetricFilter,
  MetricItem: MetricItem,
  MetricsContext: MetricsContext,
  MetricsPageData: MetricsPageData,
  MetricsPageResponse: MetricsPageResponse,
  MetricsRequest: MetricsRequest,
  MoveItemRequest: MoveItemRequest,
  PlayerTheme: PlayerTheme,
  PlayerThemeInput: PlayerThemeInput,
  Playlist: Playlist,
  PlaylistData: PlaylistData,
  PlaylistItem: PlaylistItem,
  PlaylistItemMedia: PlaylistItemMedia,
  PlaylistResponse: PlaylistResponse,
  QualityConfig: QualityConfig,
  QualityObject: QualityObject,
  RemoveMediaRequest: RemoveMediaRequest,
  RenameApiKeyRequest: RenameApiKeyRequest,
  RenditionUsage: RenditionUsage,
  ResponseError: ResponseError,
  ResponseSuccess: ResponseSuccess,
  SetDefaultCaptionRequest: SetDefaultCaptionRequest,
  StreamUsageSummary: StreamUsageSummary,
  Theme: Theme,
  ThemeData: ThemeData,
  ThemeResponse: ThemeResponse,
  TimeFrame: TimeFrame,
  UpdateLiveStreamKeyData: UpdateLiveStreamKeyData,
  UpdateLiveStreamKeyRequest: UpdateLiveStreamKeyRequest,
  UpdateLiveStreamKeyResponse: UpdateLiveStreamKeyResponse,
  UpdateLiveStreamMediaRequest: UpdateLiveStreamMediaRequest,
  UpdateMediaInfoRequest: UpdateMediaInfoRequest,
  UpsertLiveStreamMulticastInput: UpsertLiveStreamMulticastInput,
  User: User,
  UserStreamsUsageResponse: UserStreamsUsageResponse,
  VideoConfig: VideoConfig,
  VideoCropInfo: VideoCropInfo,
  Webhook: Webhook,
  WebhookData: WebhookData,
  WebhookResponse: WebhookResponse,
  WriteWebhookRequest: WriteWebhookRequest,
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
