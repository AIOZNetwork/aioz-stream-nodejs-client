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
import MetricFilter from './MetricFilter.js';

export default class MetricsRequest {
  'filterBy'?: MetricFilter;
  'from'?: number;
  'limit'?: number;
  'offset'?: number;
  'orderBy'?: MetricsRequestOrderByEnum;
  'sortBy'?: string;
  'sumOthers'?: boolean;
  'to'?: number;

  static readonly discriminator?: string = undefined;

  static readonly attributeTypeMap: Array<AttributeType> = [
    {
      name: 'filterBy',
      baseName: 'filter_by',
      type: 'MetricFilter',
      format: '',
    },
    {
      name: 'from',
      baseName: 'from',
      type: 'number',
      format: 'int64',
    },
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
      type: 'MetricsRequestOrderByEnum',
      format: '',
    },
    {
      name: 'sortBy',
      baseName: 'sort_by',
      type: 'string',
      format: '',
    },
    {
      name: 'sumOthers',
      baseName: 'sum_others',
      type: 'boolean',
      format: '',
    },
    {
      name: 'to',
      baseName: 'to',
      type: 'number',
      format: 'int64',
    },
  ];

  static getAttributeTypeMap(): Array<AttributeType> {
    return MetricsRequest.attributeTypeMap;
  }
}

export type MetricsRequestOrderByEnum = 'asc' | 'desc';
