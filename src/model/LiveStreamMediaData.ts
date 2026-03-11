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

import AttributeType from './AttributeType.js';
import LiveStreamAssets from './LiveStreamAssets.js';
import Media from './Media.js';

export default class LiveStreamMediaData {
  'assets'?: LiveStreamAssets;
  'createdAt'?: string;
  'duration'?: number;
  'id'?: string;
  'liveStreamKeyId'?: string;
  'media'?: Media;
  'qualities'?: Array<string>;
  'save'?: boolean;
  'status'?: string;
  'title'?: string;
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
      name: 'createdAt',
      baseName: 'created_at',
      type: 'string',
      format: '',
    },
    {
      name: 'duration',
      baseName: 'duration',
      type: 'number',
      format: '',
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
      type: 'Media',
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
    return LiveStreamMediaData.attributeTypeMap;
  }
}
