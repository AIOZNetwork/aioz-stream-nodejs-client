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

export default class User {
  'balance'?: number;
  'createdAt'?: string;
  'debt'?: number;
  'email'?: string;
  'exclusiveCode'?: string;
  'firstName'?: string;
  'id'?: string;
  'lastName'?: string;
  'lastRequestedAt'?: string;
  'mediaQualitiesConfig'?: string;
  'updatedAt'?: string;
  'walletAddress'?: string;
  'walletConnection'?: string;

  static readonly discriminator?: string = undefined;

  static readonly attributeTypeMap: Array<AttributeType> = [
    {
      name: 'balance',
      baseName: 'balance',
      type: 'number',
      format: '',
    },
    {
      name: 'createdAt',
      baseName: 'created_at',
      type: 'string',
      format: '',
    },
    {
      name: 'debt',
      baseName: 'debt',
      type: 'number',
      format: '',
    },
    {
      name: 'email',
      baseName: 'email',
      type: 'string',
      format: '',
    },
    {
      name: 'exclusiveCode',
      baseName: 'exclusive_code',
      type: 'string',
      format: '',
    },
    {
      name: 'firstName',
      baseName: 'first_name',
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
      name: 'lastName',
      baseName: 'last_name',
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
      name: 'mediaQualitiesConfig',
      baseName: 'media_qualities_config',
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
      name: 'walletAddress',
      baseName: 'wallet_address',
      type: 'string',
      format: '',
    },
    {
      name: 'walletConnection',
      baseName: 'wallet_connection',
      type: 'string',
      format: '',
    },
  ];

  static getAttributeTypeMap(): Array<AttributeType> {
    return User.attributeTypeMap;
  }
}
