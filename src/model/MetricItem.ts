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

export default class MetricItem {
  'dimensionValue'?: string;
  'emittedAt'?: string;
  'metricValue'?: number;

  static readonly discriminator?: string = undefined;

  static readonly attributeTypeMap: Array<AttributeType> = [
    {
      name: 'dimensionValue',
      baseName: 'dimension_value',
      type: 'string',
      format: '',
    },
    {
      name: 'emittedAt',
      baseName: 'emitted_at',
      type: 'string',
      format: '',
    },
    {
      name: 'metricValue',
      baseName: 'metric_value',
      type: 'number',
      format: '',
    },
  ];

  static getAttributeTypeMap(): Array<AttributeType> {
    return MetricItem.attributeTypeMap;
  }
}
