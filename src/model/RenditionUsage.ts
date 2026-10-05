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

export default class RenditionUsage {
  'durationMin'?: number;
  'durationMs'?: number;
  'endedAt'?: string;
  'rendition'?: string;
  'segmentCount'?: number;
  'startedAt'?: string;
  'storageBytes'?: number;
  'trackType'?: string;

  static readonly discriminator?: string = undefined;

  static readonly attributeTypeMap: Array<AttributeType> = [
    {
      name: 'durationMin',
      baseName: 'duration_min',
      type: 'number',
      format: '',
    },
    {
      name: 'durationMs',
      baseName: 'duration_ms',
      type: 'number',
      format: 'int64',
    },
    {
      name: 'endedAt',
      baseName: 'ended_at',
      type: 'string',
      format: '',
    },
    {
      name: 'rendition',
      baseName: 'rendition',
      type: 'string',
      format: '',
    },
    {
      name: 'segmentCount',
      baseName: 'segment_count',
      type: 'number',
      format: 'int64',
    },
    {
      name: 'startedAt',
      baseName: 'started_at',
      type: 'string',
      format: '',
    },
    {
      name: 'storageBytes',
      baseName: 'storage_bytes',
      type: 'number',
      format: 'int64',
    },
    {
      name: 'trackType',
      baseName: 'track_type',
      type: 'string',
      format: '',
    },
  ];

  static getAttributeTypeMap(): Array<AttributeType> {
    return RenditionUsage.attributeTypeMap;
  }
}
