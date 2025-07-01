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
import Metadata from './Metadata.js';
import QualityConfig from './QualityConfig.js';
import VideoWatermark from './VideoWatermark.js';

export default class CreateMediaRequest {
  'description'?: string;
  'isPublic'?: boolean;
  'metadata'?: Array<Metadata>;
  'qualities'?: Array<QualityConfig>;
  'segmentDuration'?: number;
  'tags'?: Array<string>;
  'title'?: string;
  'watermark'?: VideoWatermark;

  static readonly discriminator?: string = undefined;

  static readonly attributeTypeMap: Array<AttributeType> = [
    {
      name: 'description',
      baseName: 'description',
      type: 'string',
      format: '',
    },
    {
      name: 'isPublic',
      baseName: 'is_public',
      type: 'boolean',
      format: '',
    },
    {
      name: 'metadata',
      baseName: 'metadata',
      type: 'Array<Metadata>',
      format: '',
    },
    {
      name: 'qualities',
      baseName: 'qualities',
      type: 'Array<QualityConfig>',
      format: '',
    },
    {
      name: 'segmentDuration',
      baseName: 'segment_duration',
      type: 'number',
      format: '',
    },
    {
      name: 'tags',
      baseName: 'tags',
      type: 'Array<string>',
      format: '',
    },
    {
      name: 'title',
      baseName: 'title',
      type: 'string',
      format: '',
    },
    {
      name: 'watermark',
      baseName: 'watermark',
      type: 'VideoWatermark',
      format: '',
    },
  ];

  static getAttributeTypeMap(): Array<AttributeType> {
    return CreateMediaRequest.attributeTypeMap;
  }
}
