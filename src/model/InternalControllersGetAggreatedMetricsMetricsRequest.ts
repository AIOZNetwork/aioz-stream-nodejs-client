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
import MetricFilter from './MetricFilter.js';

export default class InternalControllersGetAggreatedMetricsMetricsRequest {
  'filterBy'?: MetricFilter;
  'from'?: number;
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
      format: '',
    },
    {
      name: 'to',
      baseName: 'to',
      type: 'number',
      format: '',
    },
  ];

  static getAttributeTypeMap(): Array<AttributeType> {
    return InternalControllersGetAggreatedMetricsMetricsRequest.attributeTypeMap;
  }
}
