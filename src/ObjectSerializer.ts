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

import AddPlayerThemesToVideoRequest from './model/AddPlayerThemesToVideoRequest';
import AddVideoToPlaylistRequest from './model/AddVideoToPlaylistRequest';
import ApiKey from './model/ApiKey';
import Asset from './model/Asset';
import AudioConfig from './model/AudioConfig';
import Controls from './model/Controls';
import CreateApiKeyData from './model/CreateApiKeyData';
import CreateApiKeyRequest from './model/CreateApiKeyRequest';
import CreateApiKeyResponse from './model/CreateApiKeyResponse';
import CreateMediaRequest from './model/CreateMediaRequest';
import CreateMediaResponse from './model/CreateMediaResponse';
import CreatePlayerThemeRequest from './model/CreatePlayerThemeRequest';
import CreatePlayerThemesData from './model/CreatePlayerThemesData';
import CreatePlayerThemesResponse from './model/CreatePlayerThemesResponse';
import CreatePlaylistData from './model/CreatePlaylistData';
import CreatePlaylistRequest from './model/CreatePlaylistRequest';
import CreatePlaylistResponse from './model/CreatePlaylistResponse';
import CreateVideoCaptionData from './model/CreateVideoCaptionData';
import CreateVideoCaptionResponse from './model/CreateVideoCaptionResponse';
import CreateVideoChapterData from './model/CreateVideoChapterData';
import CreateVideoChapterResponse from './model/CreateVideoChapterResponse';
import CreateWebhookData from './model/CreateWebhookData';
import CreateWebhookRequest from './model/CreateWebhookRequest';
import CreateWebhookResponse from './model/CreateWebhookResponse';
import GetApiKeysData from './model/GetApiKeysData';
import GetApiKeysResponse from './model/GetApiKeysResponse';
import GetPlayerThemeByIdData from './model/GetPlayerThemeByIdData';
import GetPlayerThemeByIdResponse from './model/GetPlayerThemeByIdResponse';
import GetPlayerThemeData from './model/GetPlayerThemeData';
import GetPlayerThemeResponse from './model/GetPlayerThemeResponse';
import GetPlaylistByIdData from './model/GetPlaylistByIdData';
import GetPlaylistByIdResponse from './model/GetPlaylistByIdResponse';
import GetPlaylistListData from './model/GetPlaylistListData';
import GetPlaylistListRequest from './model/GetPlaylistListRequest';
import GetPlaylistListResponse from './model/GetPlaylistListResponse';
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
import Media from './model/Media';
import Metadata from './model/Metadata';
import MoveVideoInPlaylistRequest from './model/MoveVideoInPlaylistRequest';
import PlayerTheme from './model/PlayerTheme';
import Playlist from './model/Playlist';
import PlaylistItem from './model/PlaylistItem';
import PlaylistItemMedia from './model/PlaylistItemMedia';
import PublicPlaylistObject from './model/PublicPlaylistObject';
import QualityConfig from './model/QualityConfig';
import QualityObject from './model/QualityObject';
import RemovePlayerThemesFromMediaRequest from './model/RemovePlayerThemesFromMediaRequest';
import RenameAPIKeyRequest from './model/RenameAPIKeyRequest';
import RequestCreateCaption from './model/RequestCreateCaption';
import ResponseError from './model/ResponseError';
import ResponseSuccess from './model/ResponseSuccess';
import Theme from './model/Theme';
import UpdatePlayerThemeRequest from './model/UpdatePlayerThemeRequest';
import UpdatePlayerThemeResponse from './model/UpdatePlayerThemeResponse';
import UpdateVideoInfoRequest from './model/UpdateVideoInfoRequest';
import UpdateWebhookRequest from './model/UpdateWebhookRequest';
import UploadLogoByIdResponse from './model/UploadLogoByIdResponse';
import User from './model/User';
import VideoAssets from './model/VideoAssets';
import VideoCaption from './model/VideoCaption';
import VideoChapter from './model/VideoChapter';
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
  AddPlayerThemesToVideoRequest: AddPlayerThemesToVideoRequest,
  AddVideoToPlaylistRequest: AddVideoToPlaylistRequest,
  ApiKey: ApiKey,
  Asset: Asset,
  AudioConfig: AudioConfig,
  Controls: Controls,
  CreateApiKeyData: CreateApiKeyData,
  CreateApiKeyRequest: CreateApiKeyRequest,
  CreateApiKeyResponse: CreateApiKeyResponse,
  CreateMediaRequest: CreateMediaRequest,
  CreateMediaResponse: CreateMediaResponse,
  CreatePlayerThemeRequest: CreatePlayerThemeRequest,
  CreatePlayerThemesData: CreatePlayerThemesData,
  CreatePlayerThemesResponse: CreatePlayerThemesResponse,
  CreatePlaylistData: CreatePlaylistData,
  CreatePlaylistRequest: CreatePlaylistRequest,
  CreatePlaylistResponse: CreatePlaylistResponse,
  CreateVideoCaptionData: CreateVideoCaptionData,
  CreateVideoCaptionResponse: CreateVideoCaptionResponse,
  CreateVideoChapterData: CreateVideoChapterData,
  CreateVideoChapterResponse: CreateVideoChapterResponse,
  CreateWebhookData: CreateWebhookData,
  CreateWebhookRequest: CreateWebhookRequest,
  CreateWebhookResponse: CreateWebhookResponse,
  GetApiKeysData: GetApiKeysData,
  GetApiKeysResponse: GetApiKeysResponse,
  GetPlayerThemeByIdData: GetPlayerThemeByIdData,
  GetPlayerThemeByIdResponse: GetPlayerThemeByIdResponse,
  GetPlayerThemeData: GetPlayerThemeData,
  GetPlayerThemeResponse: GetPlayerThemeResponse,
  GetPlaylistByIdData: GetPlaylistByIdData,
  GetPlaylistByIdResponse: GetPlaylistByIdResponse,
  GetPlaylistListData: GetPlaylistListData,
  GetPlaylistListRequest: GetPlaylistListRequest,
  GetPlaylistListResponse: GetPlaylistListResponse,
  GetTranscodeCostData: GetTranscodeCostData,
  GetTranscodeCostResponse: GetTranscodeCostResponse,
  GetUserWebhookData: GetUserWebhookData,
  GetUserWebhookResponse: GetUserWebhookResponse,
  GetVideoCaptionsData: GetVideoCaptionsData,
  GetVideoCaptionsResponse: GetVideoCaptionsResponse,
  GetVideoChaptersData: GetVideoChaptersData,
  GetVideoChaptersResponse: GetVideoChaptersResponse,
  GetVideoDetailResponse: GetVideoDetailResponse,
  GetVideoListData: GetVideoListData,
  GetVideoListRequest: GetVideoListRequest,
  GetVideoListResponse: GetVideoListResponse,
  GetVideoPlayerInfoResponse: GetVideoPlayerInfoResponse,
  GetWebhooksListData: GetWebhooksListData,
  GetWebhooksListResponse: GetWebhooksListResponse,
  Media: Media,
  Metadata: Metadata,
  MoveVideoInPlaylistRequest: MoveVideoInPlaylistRequest,
  PlayerTheme: PlayerTheme,
  Playlist: Playlist,
  PlaylistItem: PlaylistItem,
  PlaylistItemMedia: PlaylistItemMedia,
  PublicPlaylistObject: PublicPlaylistObject,
  QualityConfig: QualityConfig,
  QualityObject: QualityObject,
  RemovePlayerThemesFromMediaRequest: RemovePlayerThemesFromMediaRequest,
  RenameAPIKeyRequest: RenameAPIKeyRequest,
  RequestCreateCaption: RequestCreateCaption,
  ResponseError: ResponseError,
  ResponseSuccess: ResponseSuccess,
  Theme: Theme,
  UpdatePlayerThemeRequest: UpdatePlayerThemeRequest,
  UpdatePlayerThemeResponse: UpdatePlayerThemeResponse,
  UpdateVideoInfoRequest: UpdateVideoInfoRequest,
  UpdateWebhookRequest: UpdateWebhookRequest,
  UploadLogoByIdResponse: UploadLogoByIdResponse,
  User: User,
  VideoAssets: VideoAssets,
  VideoCaption: VideoCaption,
  VideoChapter: VideoChapter,
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
