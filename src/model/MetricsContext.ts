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
import TimeFrame from './TimeFrame.js';

export default class MetricsContext {
  'aggregation'?: string;
  'breakdown'?: string;
  'filter'?: MetricFilter;
  'interval'?: string;
  'metric'?: string;
  'timeFrame'?: TimeFrame;

  static readonly discriminator?: string = undefined;

  static readonly attributeTypeMap: Array<AttributeType> = [
    {
      name: 'aggregation',
      baseName: 'aggregation',
      type: 'string',
      format: '',
    },
    {
      name: 'breakdown',
      baseName: 'breakdown',
      type: 'string',
      format: '',
    },
    {
      name: 'filter',
      baseName: 'filter',
      type: 'MetricFilter',
      format: '',
    },
    {
      name: 'interval',
      baseName: 'interval',
      type: 'string',
      format: '',
    },
    {
      name: 'metric',
      baseName: 'metric',
      type: 'string',
      format: '',
    },
    {
      name: 'timeFrame',
      baseName: 'time_frame',
      type: 'TimeFrame',
      format: '',
    },
  ];

  static getAttributeTypeMap(): Array<AttributeType> {
    return MetricsContext.attributeTypeMap;
  }
}
