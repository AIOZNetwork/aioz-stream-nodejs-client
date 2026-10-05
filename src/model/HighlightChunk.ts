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
import DeletedAt from './DeletedAt.js';
import HighlightChunkStatus from './HighlightChunkStatus.js';

export default class HighlightChunk {
  'createdAt'?: string;
  'deletedAt'?: DeletedAt;
  'fileMd5'?: string;
  /**
   * FileSize is the size of the uploaded chunk in bytes.
   */
  'fileSize'?: number;
  'id'?: string;
  'mediaId'?: string;
  'objUrl'?: string;
  'offset'?: number;
  'status'?: HighlightChunkStatus;
  'updatedAt'?: string;

  static readonly discriminator?: string = undefined;

  static readonly attributeTypeMap: Array<AttributeType> = [
    {
      name: 'createdAt',
      baseName: 'created_at',
      type: 'string',
      format: '',
    },
    {
      name: 'deletedAt',
      baseName: 'deleted_at',
      type: 'DeletedAt',
      format: '',
    },
    {
      name: 'fileMd5',
      baseName: 'file_md5',
      type: 'string',
      format: '',
    },
    {
      name: 'fileSize',
      baseName: 'file_size',
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
      name: 'mediaId',
      baseName: 'media_id',
      type: 'string',
      format: '',
    },
    {
      name: 'objUrl',
      baseName: 'obj_url',
      type: 'string',
      format: '',
    },
    {
      name: 'offset',
      baseName: 'offset',
      type: 'number',
      format: '',
    },
    {
      name: 'status',
      baseName: 'status',
      type: 'HighlightChunkStatus',
      format: '',
    },
    {
      name: 'updatedAt',
      baseName: 'updated_at',
      type: 'string',
      format: '',
    },
  ];

  static getAttributeTypeMap(): Array<AttributeType> {
    return HighlightChunk.attributeTypeMap;
  }
}
