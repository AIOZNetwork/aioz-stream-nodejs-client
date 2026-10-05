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
import DataUsage from './DataUsage.js';
import DataUsageRequest from './DataUsageRequest.js';

export default class DataUsageData {
  'data'?: Array<DataUsage>;
  'query'?: DataUsageRequest;
  'total'?: number;

  static readonly discriminator?: string = undefined;

  static readonly attributeTypeMap: Array<AttributeType> = [
    {
      name: 'data',
      baseName: 'data',
      type: 'Array<DataUsage>',
      format: '',
    },
    {
      name: 'query',
      baseName: 'query',
      type: 'DataUsageRequest',
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
    return DataUsageData.attributeTypeMap;
  }
}
