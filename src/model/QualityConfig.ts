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
import AudioConfig from './AudioConfig.js';
import VideoConfig from './VideoConfig.js';

export default class QualityConfig {
  'audioConfig'?: AudioConfig;
  'containerType'?: string;
  'resolution'?: string;
  'type'?: string;
  'videoConfig'?: VideoConfig;

  static readonly discriminator?: string = undefined;

  static readonly attributeTypeMap: Array<AttributeType> = [
    {
      name: 'audioConfig',
      baseName: 'audio_config',
      type: 'AudioConfig',
      format: '',
    },
    {
      name: 'containerType',
      baseName: 'container_type',
      type: 'string',
      format: '',
    },
    {
      name: 'resolution',
      baseName: 'resolution',
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
      name: 'videoConfig',
      baseName: 'video_config',
      type: 'VideoConfig',
      format: '',
    },
  ];

  static getAttributeTypeMap(): Array<AttributeType> {
    return QualityConfig.attributeTypeMap;
  }
}
