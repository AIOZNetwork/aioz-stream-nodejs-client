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

export default class CreateApiKeyRequest {
  'apiKeyName'?: string;
  'ttl'?: string;
  'type'?: CreateApiKeyRequestTypeEnum;

  static readonly discriminator?: string = undefined;

  static readonly attributeTypeMap: Array<AttributeType> = [
    {
      name: 'apiKeyName',
      baseName: 'api_key_name',
      type: 'string',
      format: '',
    },
    {
      name: 'ttl',
      baseName: 'ttl',
      type: 'string',
      format: '',
    },
    {
      name: 'type',
      baseName: 'type',
      type: 'CreateApiKeyRequestTypeEnum',
      format: '',
    },
  ];

  static getAttributeTypeMap(): Array<AttributeType> {
    return CreateApiKeyRequest.attributeTypeMap;
  }
}

export type CreateApiKeyRequestTypeEnum = 'full_access' | 'only_upload';
