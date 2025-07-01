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
  'total'?: number;
  'videos'?: Array<LiveStreamMediaResponse>;

  static readonly discriminator?: string = undefined;

  static readonly attributeTypeMap: Array<AttributeType> = [
    {
      name: 'total',
      baseName: 'total',
      type: 'number',
      format: '',
    },
    {
      name: 'videos',
      baseName: 'videos',
      type: 'Array<LiveStreamMediaResponse>',
      format: '',
    },
  ];

  static getAttributeTypeMap(): Array<AttributeType> {
    return LiveStreamMediasResponse.attributeTypeMap;
  }
}
