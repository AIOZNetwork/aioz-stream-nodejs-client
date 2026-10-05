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

export default class ListApiKeysRequest {
  'limit'?: number;
  'offset'?: number;
  'orderBy'?: ListApiKeysRequestOrderByEnum;
  'search'?: string;
  'sortBy'?: ListApiKeysRequestSortByEnum;
  'type'?: ListApiKeysRequestTypeEnum;

  static readonly discriminator?: string = undefined;

  static readonly attributeTypeMap: Array<AttributeType> = [
    {
      name: 'limit',
      baseName: 'limit',
      type: 'number',
      format: '',
      defaultValue: 25,
    },
    {
      name: 'offset',
      baseName: 'offset',
      type: 'number',
      format: '',
    },
    {
      name: 'orderBy',
      baseName: 'order_by',
      type: 'ListApiKeysRequestOrderByEnum',
      format: '',
    },
    {
      name: 'search',
      baseName: 'search',
      type: 'string',
      format: '',
    },
    {
      name: 'sortBy',
      baseName: 'sort_by',
      type: 'ListApiKeysRequestSortByEnum',
      format: '',
    },
    {
      name: 'type',
      baseName: 'type',
      type: 'ListApiKeysRequestTypeEnum',
      format: '',
    },
  ];

  static getAttributeTypeMap(): Array<AttributeType> {
    return ListApiKeysRequest.attributeTypeMap;
  }
}

export type ListApiKeysRequestOrderByEnum = 'asc' | 'desc';
export type ListApiKeysRequestSortByEnum = 'created_at' | 'name';
export type ListApiKeysRequestTypeEnum = 'full_access' | 'only_upload';
