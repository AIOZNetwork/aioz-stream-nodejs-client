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

export default class AudioConfig {
  'bitrate'?: number;
  'channels'?: string;
  'codec'?: string;
  'index'?: number;
  'language'?: string;
  'sampleRate'?: number;

  static readonly discriminator?: string = undefined;

  static readonly attributeTypeMap: Array<AttributeType> = [
    {
      name: 'bitrate',
      baseName: 'bitrate',
      type: 'number',
      format: '',
    },
    {
      name: 'channels',
      baseName: 'channels',
      type: 'string',
      format: '',
    },
    {
      name: 'codec',
      baseName: 'codec',
      type: 'string',
      format: '',
    },
    {
      name: 'index',
      baseName: 'index',
      type: 'number',
      format: '',
    },
    {
      name: 'language',
      baseName: 'language',
      type: 'string',
      format: '',
    },
    {
      name: 'sampleRate',
      baseName: 'sample_rate',
      type: 'number',
      format: '',
    },
  ];

  static getAttributeTypeMap(): Array<AttributeType> {
    return AudioConfig.attributeTypeMap;
  }
}
