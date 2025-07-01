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

export default class QualityObject {
  'audioBitrate'?: number;
  'audioCodec'?: string;
  'name'?: string;
  'status'?: string;
  'type'?: string;
  'videoBitrate'?: number;
  'videoCodec'?: string;

  static readonly discriminator?: string = undefined;

  static readonly attributeTypeMap: Array<AttributeType> = [
    {
      name: 'audioBitrate',
      baseName: 'audio_bitrate',
      type: 'number',
      format: '',
    },
    {
      name: 'audioCodec',
      baseName: 'audio_codec',
      type: 'string',
      format: '',
    },
    {
      name: 'name',
      baseName: 'name',
      type: 'string',
      format: '',
    },
    {
      name: 'status',
      baseName: 'status',
      type: 'string',
      format: '',
    },
    {
      name: 'type',
      baseName: 'type',
      type: 'string',
      format: '',
    },
    {
      name: 'videoBitrate',
      baseName: 'video_bitrate',
      type: 'number',
      format: '',
    },
    {
      name: 'videoCodec',
      baseName: 'video_codec',
      type: 'string',
      format: '',
    },
  ];

  static getAttributeTypeMap(): Array<AttributeType> {
    return QualityObject.attributeTypeMap;
  }
}
