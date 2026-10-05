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
import MetricItem from './MetricItem.js';
import MetricsContext from './MetricsContext.js';
import MetricsRequest from './MetricsRequest.js';

export default class MetricsPageData {
  'context'?: MetricsContext;
  'data'?: Array<MetricItem>;
  'query'?: MetricsRequest;
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
      name: 'query',
      baseName: 'query',
      type: 'MetricsRequest',
      format: '',
    },
    {
      name: 'total',
      baseName: 'total',
      type: 'number',
      format: 'int64',
    },
  ];

  static getAttributeTypeMap(): Array<AttributeType> {
    return MetricsPageData.attributeTypeMap;
  }
}
