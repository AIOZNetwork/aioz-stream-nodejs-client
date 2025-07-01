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

export default class LiveStreamStatisticResp {
  'bitrateIn'?: number;
  'bitrateOut'?: number;
  'currentView'?: number;
  'dataTransferred'?: number;
  'fpsIn'?: number;
  'fpsOut'?: number;
  'id'?: string;
  'liveStreamMediaId'?: string;
  'totalView'?: number;

  static readonly discriminator?: string = undefined;

  static readonly attributeTypeMap: Array<AttributeType> = [
    {
      name: 'bitrateIn',
      baseName: 'bitrate_in',
      type: 'number',
      format: '',
    },
    {
      name: 'bitrateOut',
      baseName: 'bitrate_out',
      type: 'number',
      format: '',
    },
    {
      name: 'currentView',
      baseName: 'current_view',
      type: 'number',
      format: '',
    },
    {
      name: 'dataTransferred',
      baseName: 'data_transferred',
      type: 'number',
      format: '',
    },
    {
      name: 'fpsIn',
      baseName: 'fps_in',
      type: 'number',
      format: '',
    },
    {
      name: 'fpsOut',
      baseName: 'fps_out',
      type: 'number',
      format: '',
    },
    {
      name: 'id',
      baseName: 'id',
      type: 'string',
      format: '',
    },
    {
      name: 'liveStreamMediaId',
      baseName: 'live_stream_media_id',
      type: 'string',
      format: '',
    },
    {
      name: 'totalView',
      baseName: 'total_view',
      type: 'number',
      format: '',
    },
  ];

  static getAttributeTypeMap(): Array<AttributeType> {
    return LiveStreamStatisticResp.attributeTypeMap;
  }
}
