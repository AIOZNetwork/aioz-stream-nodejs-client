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

export default class ListThemesRequest {
  'limit'?: number;
  'offset'?: number;
  'orderBy'?: ListThemesRequestOrderByEnum;
  'search'?: string;
  'sortBy'?: ListThemesRequestSortByEnum;

  static readonly discriminator?: string = undefined;

  static readonly attributeTypeMap: Array<AttributeType> = [
    {
      name: 'limit',
      baseName: 'limit',
      type: 'number',
      format: 'int64',
      defaultValue: 25,
    },
    {
      name: 'offset',
      baseName: 'offset',
      type: 'number',
      format: 'int64',
    },
    {
      name: 'orderBy',
      baseName: 'order_by',
      type: 'ListThemesRequestOrderByEnum',
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
      type: 'ListThemesRequestSortByEnum',
      format: '',
    },
  ];

  static getAttributeTypeMap(): Array<AttributeType> {
    return ListThemesRequest.attributeTypeMap;
  }
}

export type ListThemesRequestOrderByEnum = 'asc' | 'desc';
export type ListThemesRequestSortByEnum = 'created_at' | 'name';
