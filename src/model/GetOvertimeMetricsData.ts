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
import MetricItem from './MetricItem.js';
import MetricsContext from './MetricsContext.js';

export default class GetOvertimeMetricsData {
  'context'?: MetricsContext;
  'data'?: Array<MetricItem>;
  'total'?: number;

  static readonly discriminator?: string = undefined;

  static readonly attributeTypeMap: Array<AttributeType> = [
    {
      name: 'context',
      baseName: 'context',
      type: 'MetricsContext',
      format: '',
    },
    {
      name: 'data',
      baseName: 'data',
      type: 'Array<MetricItem>',
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
    return GetOvertimeMetricsData.attributeTypeMap;
  }
}
