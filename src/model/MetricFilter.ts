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

export default class MetricFilter {
  'browsers'?: Array<string>;
  'continents'?: Array<string>;
  'countries'?: Array<string>;
  'deviceTypes'?: Array<string>;
  'mediaIds'?: Array<string>;
  'mediaType'?: string;
  'os'?: Array<string>;
  'tags'?: Array<string>;

  static readonly discriminator?: string = undefined;

  static readonly attributeTypeMap: Array<AttributeType> = [
    {
      name: 'browsers',
      baseName: 'browsers',
      type: 'Array<string>',
      format: '',
    },
    {
      name: 'continents',
      baseName: 'continents',
      type: 'Array<string>',
      format: '',
    },
    {
      name: 'countries',
      baseName: 'countries',
      type: 'Array<string>',
      format: '',
    },
    {
      name: 'deviceTypes',
      baseName: 'device_types',
      type: 'Array<string>',
      format: '',
    },
    {
      name: 'mediaIds',
      baseName: 'media_ids',
      type: 'Array<string>',
      format: '',
    },
    {
      name: 'mediaType',
      baseName: 'media_type',
      type: 'string',
      format: '',
    },
    {
      name: 'os',
      baseName: 'os',
      type: 'Array<string>',
      format: '',
    },
    {
      name: 'tags',
      baseName: 'tags',
      type: 'Array<string>',
      format: '',
    },
  ];

  static getAttributeTypeMap(): Array<AttributeType> {
    return MetricFilter.attributeTypeMap;
  }
}
