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
import HighlightMedia from './HighlightMedia.js';

export default class EditorProject {
  'createdAt'?: string;
  'deletedAt'?: DeletedAt;
  'description'?: string;
  'document'?: { [key: string]: any };
  'id'?: string;
  'media'?: HighlightMedia;
  'metadata'?: { [key: string]: any };
  'revision'?: number;
  'title'?: string;
  'updatedAt'?: string;
  'userId'?: string;

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
      name: 'description',
      baseName: 'description',
      type: 'string',
      format: '',
    },
    {
      name: 'document',
      baseName: 'document',
      type: '{ [key: string]: any; }',
      format: '',
    },
    {
      name: 'id',
      baseName: 'id',
      type: 'string',
      format: '',
    },
    {
      name: 'media',
      baseName: 'media',
      type: 'HighlightMedia',
      format: '',
    },
    {
      name: 'metadata',
      baseName: 'metadata',
      type: '{ [key: string]: any; }',
      format: '',
    },
    {
      name: 'revision',
      baseName: 'revision',
      type: 'number',
      format: 'int64',
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
    return EditorProject.attributeTypeMap;
  }
}
