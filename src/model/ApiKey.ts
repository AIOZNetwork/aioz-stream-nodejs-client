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
import User from './User.js';

export default class ApiKey {
  'createdAt'?: string;
  'expiredAt'?: string;
  'id'?: string;
  'lastRequestedAt'?: string;
  'name'?: string;
  'publicKey'?: string;
  /**
   * The API key's secret. It is returned once, in the response that creates the key, and never again: store it when you receive it.  (Not a database column: only the secret's hash is stored.)
   */
  'secret'?: string;
  'status'?: string;
  'truncatedSecret'?: string;
  'ttl'?: string;
  'type'?: string;
  'updatedAt'?: string;
  'user'?: User;

  static readonly discriminator?: string = undefined;

  static readonly attributeTypeMap: Array<AttributeType> = [
    {
      name: 'createdAt',
      baseName: 'created_at',
      type: 'string',
      format: '',
    },
    {
      name: 'expiredAt',
      baseName: 'expired_at',
      type: 'string',
      format: '',
    },
    {
      name: 'id',
      baseName: 'id',
      type: 'string',
      format: '',
    },
    {
      name: 'lastRequestedAt',
      baseName: 'last_requested_at',
      type: 'string',
      format: '',
    },
    {
      name: 'name',
      baseName: 'name',
      type: 'string',
      format: '',
    },
    {
      name: 'publicKey',
      baseName: 'public_key',
      type: 'string',
      format: '',
    },
    {
      name: 'secret',
      baseName: 'secret',
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
      name: 'truncatedSecret',
      baseName: 'truncated_secret',
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
      type: 'string',
      format: '',
    },
    {
      name: 'updatedAt',
      baseName: 'updated_at',
      type: 'string',
      format: '',
    },
    {
      name: 'user',
      baseName: 'user',
      type: 'User',
      format: '',
    },
  ];

  static getAttributeTypeMap(): Array<AttributeType> {
    return ApiKey.attributeTypeMap;
  }
}
