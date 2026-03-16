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
import MetricsContext from './MetricsContext.js';

export default class GetAggregatedMetricsResponse {
  'context'?: MetricsContext;
  'data'?: number;

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
      type: 'number',
      format: '',
    },
  ];

  static getAttributeTypeMap(): Array<AttributeType> {
    return GetAggregatedMetricsResponse.attributeTypeMap;
  }
}
