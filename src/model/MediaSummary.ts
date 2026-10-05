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

export default class MediaSummary {
  'createdAt'?: string;
  'isGenerated'?: boolean;
  'language'?: string;
  'status'?: string;
  'value'?: string;

  static readonly discriminator?: string = undefined;

  static readonly attributeTypeMap: Array<AttributeType> = [
    {
      name: 'createdAt',
      baseName: 'created_at',
      type: 'string',
      format: '',
    },
    {
      name: 'isGenerated',
      baseName: 'is_generated',
      type: 'boolean',
      format: '',
    },
    {
      name: 'language',
      baseName: 'language',
      type: 'string',
      format: '',
    },
    {
      name: 'status',
      baseName: 'status',
      type: 'string',
      format: '',
    },
    {
      name: 'value',
      baseName: 'value',
      type: 'string',
      format: '',
    },
  ];

  static getAttributeTypeMap(): Array<AttributeType> {
    return MediaSummary.attributeTypeMap;
  }
}
