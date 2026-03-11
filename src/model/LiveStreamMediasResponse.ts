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
import LiveStreamMediaResponse from './LiveStreamMediaResponse.js';

export default class LiveStreamMediasResponse {
  'media'?: Array<LiveStreamMediaResponse>;
  'total'?: number;

  static readonly discriminator?: string = undefined;

  static readonly attributeTypeMap: Array<AttributeType> = [
    {
      name: 'media',
      baseName: 'media',
      type: 'Array<LiveStreamMediaResponse>',
      format: '',
    },
    {
      name: 'total',
      baseName: 'total',
      type: 'number',
      format: '',
    },
  ];

  static getAttributeTypeMap(): Array<AttributeType> {
    return LiveStreamMediasResponse.attributeTypeMap;
  }
}
