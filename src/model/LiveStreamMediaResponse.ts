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

import AttributeType from './AttributeType.js';
import LiveStreamAssets from './LiveStreamAssets.js';
import MediaObject from './MediaObject.js';

export default class LiveStreamMediaResponse {
  'assets'?: LiveStreamAssets;
  'audioBitrate'?: number;
  'createdAt'?: string;
  'currentView'?: number;
  'duration'?: number;
  'frameRate'?: number;
  'id'?: string;
  'liveStreamKeyId'?: string;
  'media'?: MediaObject;
  'qualities'?: Array<string>;
  'save'?: boolean;
  'status'?: string;
  'title'?: string;
  'totalView'?: number;
  'type'?: string;
  'updatedAt'?: string;
  'userId'?: string;

  static readonly discriminator?: string = undefined;

  static readonly attributeTypeMap: Array<AttributeType> = [
    {
      name: 'assets',
      baseName: 'assets',
      type: 'LiveStreamAssets',
      format: '',
    },
    {
      name: 'audioBitrate',
      baseName: 'audio_bitrate',
      type: 'number',
      format: 'int64',
    },
    {
      name: 'createdAt',
      baseName: 'created_at',
      type: 'string',
      format: '',
    },
    {
      name: 'currentView',
      baseName: 'current_view',
      type: 'number',
      format: 'int64',
    },
    {
      name: 'duration',
      baseName: 'duration',
      type: 'number',
      format: 'int64',
    },
    {
      name: 'frameRate',
      baseName: 'frame_rate',
      type: 'number',
      format: 'int64',
    },
    {
      name: 'id',
      baseName: 'id',
      type: 'string',
      format: '',
    },
    {
      name: 'liveStreamKeyId',
      baseName: 'live_stream_key_id',
      type: 'string',
      format: '',
    },
    {
      name: 'media',
      baseName: 'media',
      type: 'MediaObject',
      format: '',
    },
    {
      name: 'qualities',
      baseName: 'qualities',
      type: 'Array<string>',
      format: '',
    },
    {
      name: 'save',
      baseName: 'save',
      type: 'boolean',
      format: '',
    },
    {
      name: 'status',
      baseName: 'status',
      type: 'string',
      format: '',
    },
    {
      name: 'title',
      baseName: 'title',
      type: 'string',
      format: '',
    },
    {
      name: 'totalView',
      baseName: 'total_view',
      type: 'number',
      format: 'int64',
    },
    {
      name: 'type',
      baseName: 'type',
      type: 'string',
      format: '',
    },
    {
      name: 'updatedAt',
      baseName: 'updated_at',
      type: 'string',
      format: '',
    },
    {
      name: 'userId',
      baseName: 'user_id',
      type: 'string',
      format: '',
    },
  ];

  static getAttributeTypeMap(): Array<AttributeType> {
    return LiveStreamMediaResponse.attributeTypeMap;
  }
}
