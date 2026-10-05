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

export default class VideoCropInfo {
  'height'?: number;
  'width'?: number;
  'x'?: number;
  'y'?: number;

  static readonly discriminator?: string = undefined;

  static readonly attributeTypeMap: Array<AttributeType> = [
    {
      name: 'height',
      baseName: 'height',
      type: 'number',
      format: 'int64',
    },
    {
      name: 'width',
      baseName: 'width',
      type: 'number',
      format: 'int64',
    },
    {
      name: 'x',
      baseName: 'x',
      type: 'number',
      format: 'int64',
    },
    {
      name: 'y',
      baseName: 'y',
      type: 'number',
      format: 'int64',
    },
  ];

  static getAttributeTypeMap(): Array<AttributeType> {
    return VideoCropInfo.attributeTypeMap;
  }
}
