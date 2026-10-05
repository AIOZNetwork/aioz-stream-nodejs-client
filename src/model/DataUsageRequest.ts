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

export default class DataUsageRequest {
  'from'?: number;
  'interval'?: DataUsageRequestIntervalEnum;
  'limit'?: number;
  'offset'?: number;
  'to'?: number;

  static readonly discriminator?: string = undefined;

  static readonly attributeTypeMap: Array<AttributeType> = [
    {
      name: 'from',
      baseName: 'from',
      type: 'number',
      format: 'int64',
    },
    {
      name: 'interval',
      baseName: 'interval',
      type: 'DataUsageRequestIntervalEnum',
      format: '',
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
      name: 'to',
      baseName: 'to',
      type: 'number',
      format: 'int64',
    },
  ];

  static getAttributeTypeMap(): Array<AttributeType> {
    return DataUsageRequest.attributeTypeMap;
  }
}

export type DataUsageRequestIntervalEnum = 'hour' | 'day' | 'week' | 'month';
