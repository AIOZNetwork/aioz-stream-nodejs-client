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
import MediaObject from './MediaObject.js';

export default class GetMediaListData {
  'media'?: Array<MediaObject>;
  'total'?: number;

  static readonly discriminator?: string = undefined;

  static readonly attributeTypeMap: Array<AttributeType> = [
    {
      name: 'media',
      baseName: 'media',
      type: 'Array<MediaObject>',
      format: '',
    },
    {
      name: 'total',
      baseName: 'total',
      type: 'number',
      format: 'int64',
    },
  ];

  static getAttributeTypeMap(): Array<AttributeType> {
    return GetMediaListData.attributeTypeMap;
  }
}
