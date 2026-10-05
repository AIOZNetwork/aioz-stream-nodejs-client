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
import ApiKey from './ApiKey.js';
import ListApiKeysRequest from './ListApiKeysRequest.js';

export default class ListApiKeysData {
  'apiKeys'?: Array<ApiKey>;
  'query'?: ListApiKeysRequest;
  'total'?: number;

  static readonly discriminator?: string = undefined;

  static readonly attributeTypeMap: Array<AttributeType> = [
    {
      name: 'apiKeys',
      baseName: 'api_keys',
      type: 'Array<ApiKey>',
      format: '',
    },
    {
      name: 'query',
      baseName: 'query',
      type: 'ListApiKeysRequest',
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
    return ListApiKeysData.attributeTypeMap;
  }
}
