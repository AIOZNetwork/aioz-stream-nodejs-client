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

export default class HighlightClip {
  'createdAt'?: string;
  'deletedAt'?: DeletedAt;
  'hookTitle'?: string;
  'id'?: string;
  'mediaId'?: string;
  'reasoning'?: string;
  'relevanceScore'?: number;
  'sourceInMs'?: number;
  'sourceOutMs'?: number;
  'text'?: string;
  'title'?: string;
  'updatedAt'?: string;
  'virality'?: { [key: string]: any };

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
      name: 'hookTitle',
      baseName: 'hook_title',
      type: 'string',
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
      name: 'reasoning',
      baseName: 'reasoning',
      type: 'string',
      format: '',
    },
    {
      name: 'relevanceScore',
      baseName: 'relevance_score',
      type: 'number',
      format: 'int64',
    },
    {
      name: 'sourceInMs',
      baseName: 'source_in_ms',
      type: 'number',
      format: 'int64',
    },
    {
      name: 'sourceOutMs',
      baseName: 'source_out_ms',
      type: 'number',
      format: 'int64',
    },
    {
      name: 'text',
      baseName: 'text',
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
      name: 'virality',
      baseName: 'virality',
      type: '{ [key: string]: any; }',
      format: '',
    },
  ];

  static getAttributeTypeMap(): Array<AttributeType> {
    return HighlightClip.attributeTypeMap;
  }
}
