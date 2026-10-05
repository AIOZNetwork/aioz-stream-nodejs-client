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
import RenditionUsage from './RenditionUsage.js';

export default class StreamUsageSummary {
  'dataTransferred'?: number;
  'endedAt'?: string;
  'liveStreamKeyId'?: string;
  'renditionBreakdown'?: Array<RenditionUsage>;
  'startedAt'?: string;
  'streamId'?: string;
  'totalDurationMin'?: number;
  'totalDurationMs'?: number;
  'totalSegments'?: number;
  'totalStorageBytes'?: number;
  'userId'?: string;

  static readonly discriminator?: string = undefined;

  static readonly attributeTypeMap: Array<AttributeType> = [
    {
      name: 'dataTransferred',
      baseName: 'data_transferred',
      type: 'number',
      format: '',
    },
    {
      name: 'endedAt',
      baseName: 'ended_at',
      type: 'string',
      format: '',
    },
    {
      name: 'liveStreamKeyId',
      baseName: 'live_stream_key_id',
      type: 'string',
      format: '',
    },
    {
      name: 'renditionBreakdown',
      baseName: 'rendition_breakdown',
      type: 'Array<RenditionUsage>',
      format: '',
    },
    {
      name: 'startedAt',
      baseName: 'started_at',
      type: 'string',
      format: '',
    },
    {
      name: 'streamId',
      baseName: 'stream_id',
      type: 'string',
      format: '',
    },
    {
      name: 'totalDurationMin',
      baseName: 'total_duration_min',
      type: 'number',
      format: '',
    },
    {
      name: 'totalDurationMs',
      baseName: 'total_duration_ms',
      type: 'number',
      format: 'int64',
    },
    {
      name: 'totalSegments',
      baseName: 'total_segments',
      type: 'number',
      format: 'int64',
    },
    {
      name: 'totalStorageBytes',
      baseName: 'total_storage_bytes',
      type: 'number',
      format: 'int64',
    },
    {
      name: 'userId',
      baseName: 'user_id',
      type: 'string',
      format: '',
    },
  ];

  static getAttributeTypeMap(): Array<AttributeType> {
    return StreamUsageSummary.attributeTypeMap;
  }
}
