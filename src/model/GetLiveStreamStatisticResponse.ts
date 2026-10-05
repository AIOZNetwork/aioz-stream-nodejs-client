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
import LiveStreamStatisticResp from './LiveStreamStatisticResp.js';

export default class GetLiveStreamStatisticResponse {
  'data'?: LiveStreamStatisticResp;
  'status'?: string;

  static readonly discriminator?: string = undefined;

  static readonly attributeTypeMap: Array<AttributeType> = [
    {
      name: 'data',
      baseName: 'data',
      type: 'LiveStreamStatisticResp',
      format: '',
    },
    {
      name: 'status',
      baseName: 'status',
      type: 'string',
      format: '',
    },
  ];

  static getAttributeTypeMap(): Array<AttributeType> {
    return GetLiveStreamStatisticResponse.attributeTypeMap;
  }
}
