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
import ListThemesData from './ListThemesData.js';

export default class ListThemesResponse {
  'data'?: ListThemesData;
  'requestId'?: string;
  'status'?: string;

  static readonly discriminator?: string = undefined;

  static readonly attributeTypeMap: Array<AttributeType> = [
    {
      name: 'data',
      baseName: 'data',
      type: 'ListThemesData',
      format: '',
    },
    {
      name: 'requestId',
      baseName: 'request_id',
      type: 'string',
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
    return ListThemesResponse.attributeTypeMap;
  }
}
