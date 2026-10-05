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
import ManifestType from './ManifestType.js';

export default class HighlightManifest {
  'createdAt'?: string;
  'deletedAt'?: DeletedAt;
  'id'?: string;
  'manifestType'?: ManifestType;
  'mediaId'?: string;
  'metadata'?: { [key: string]: any };
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
      name: 'id',
      baseName: 'id',
      type: 'string',
      format: '',
    },
    {
      name: 'manifestType',
      baseName: 'manifest_type',
      type: 'ManifestType',
      format: '',
    },
    {
      name: 'mediaId',
      baseName: 'media_id',
      type: 'string',
      format: '',
    },
    {
      name: 'metadata',
      baseName: 'metadata',
      type: '{ [key: string]: any; }',
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
    return HighlightManifest.attributeTypeMap;
  }
}
