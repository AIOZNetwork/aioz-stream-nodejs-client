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

export default class VideoConfig {
  'bitrate'?: number;
  'codec'?: string;
  'index'?: number;

  static readonly discriminator?: string = undefined;

  static readonly attributeTypeMap: Array<AttributeType> = [
    {
      name: 'bitrate',
      baseName: 'bitrate',
      type: 'number',
      format: '',
    },
    {
      name: 'codec',
      baseName: 'codec',
      type: 'string',
      format: '',
    },
    {
      name: 'index',
      baseName: 'index',
      type: 'number',
      format: '',
    },
  ];

  static getAttributeTypeMap(): Array<AttributeType> {
    return VideoConfig.attributeTypeMap;
  }
}
