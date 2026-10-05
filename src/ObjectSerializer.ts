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
import ApiKey from './model/ApiKey';
import Asset from './model/Asset';
import AttachThemeRequest from './model/AttachThemeRequest';
import AudioConfig from './model/AudioConfig';
import Controls from './model/Controls';
import CreateApiKeyData from './model/CreateApiKeyData';
import CreateApiKeyRequest from './model/CreateApiKeyRequest';
import CreateApiKeyResponse from './model/CreateApiKeyResponse';
import CreateMediaCaptionData from './model/CreateMediaCaptionData';
import CreateMediaCaptionResponse from './model/CreateMediaCaptionResponse';
import CreateMediaChapterData from './model/CreateMediaChapterData';
import CreateMediaChapterResponse from './model/CreateMediaChapterResponse';
import CreateMediaRequest from './model/CreateMediaRequest';
import CreateMediaResponse from './model/CreateMediaResponse';
import CreatePlaylistRequest from './model/CreatePlaylistRequest';
import DeletedAt from './model/DeletedAt';
import EditorProject from './model/EditorProject';
import ErrorBody from './model/ErrorBody';
import GetMediaCaptionsData from './model/GetMediaCaptionsData';
import GetMediaCaptionsResponse from './model/GetMediaCaptionsResponse';
import GetMediaChaptersData from './model/GetMediaChaptersData';
import GetMediaChaptersResponse from './model/GetMediaChaptersResponse';
import GetMediaDetailResponse from './model/GetMediaDetailResponse';
import GetMediaListData from './model/GetMediaListData';
import GetMediaListRequest from './model/GetMediaListRequest';
import GetMediaListResponse from './model/GetMediaListResponse';
import GetMediaPlayerInfoResponse from './model/GetMediaPlayerInfoResponse';
import GetTranscodeCostData from './model/GetTranscodeCostData';
import GetTranscodeCostResponse from './model/GetTranscodeCostResponse';
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
import MediaAssets from './model/MediaAssets';
import MediaCaption from './model/MediaCaption';
import MediaChapter from './model/MediaChapter';
import MediaObject from './model/MediaObject';
import MediaSummary from './model/MediaSummary';
import MediaWatermark from './model/MediaWatermark';
import Metadata from './model/Metadata';
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
import ResponseError from './model/ResponseError';
import ResponseSuccess from './model/ResponseSuccess';
import SetDefaultCaptionRequest from './model/SetDefaultCaptionRequest';
import Theme from './model/Theme';
import ThemeData from './model/ThemeData';
import ThemeResponse from './model/ThemeResponse';
import UpdateMediaInfoRequest from './model/UpdateMediaInfoRequest';
import User from './model/User';
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
]);

const typeMap: { [index: string]: any } = {
  AddMediaRequest: AddMediaRequest,
  ApiKey: ApiKey,
  Asset: Asset,
  AttachThemeRequest: AttachThemeRequest,
  AudioConfig: AudioConfig,
  Controls: Controls,
  CreateApiKeyData: CreateApiKeyData,
  CreateApiKeyRequest: CreateApiKeyRequest,
  CreateApiKeyResponse: CreateApiKeyResponse,
  CreateMediaCaptionData: CreateMediaCaptionData,
  CreateMediaCaptionResponse: CreateMediaCaptionResponse,
  CreateMediaChapterData: CreateMediaChapterData,
  CreateMediaChapterResponse: CreateMediaChapterResponse,
  CreateMediaRequest: CreateMediaRequest,
  CreateMediaResponse: CreateMediaResponse,
  CreatePlaylistRequest: CreatePlaylistRequest,
  DeletedAt: DeletedAt,
  EditorProject: EditorProject,
  ErrorBody: ErrorBody,
  GetMediaCaptionsData: GetMediaCaptionsData,
  GetMediaCaptionsResponse: GetMediaCaptionsResponse,
  GetMediaChaptersData: GetMediaChaptersData,
  GetMediaChaptersResponse: GetMediaChaptersResponse,
  GetMediaDetailResponse: GetMediaDetailResponse,
  GetMediaListData: GetMediaListData,
  GetMediaListRequest: GetMediaListRequest,
  GetMediaListResponse: GetMediaListResponse,
  GetMediaPlayerInfoResponse: GetMediaPlayerInfoResponse,
  GetTranscodeCostData: GetTranscodeCostData,
  GetTranscodeCostResponse: GetTranscodeCostResponse,
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
  MediaAssets: MediaAssets,
  MediaCaption: MediaCaption,
  MediaChapter: MediaChapter,
  MediaObject: MediaObject,
  MediaSummary: MediaSummary,
  MediaWatermark: MediaWatermark,
  Metadata: Metadata,
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
  ResponseError: ResponseError,
  ResponseSuccess: ResponseSuccess,
  SetDefaultCaptionRequest: SetDefaultCaptionRequest,
  Theme: Theme,
  ThemeData: ThemeData,
  ThemeResponse: ThemeResponse,
  UpdateMediaInfoRequest: UpdateMediaInfoRequest,
  User: User,
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
