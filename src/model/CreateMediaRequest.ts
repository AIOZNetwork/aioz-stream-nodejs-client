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
import MediaWatermark from './MediaWatermark.js';
import Metadata from './Metadata.js';
import QualityConfig from './QualityConfig.js';
import VideoCropInfo from './VideoCropInfo.js';

export default class CreateMediaRequest {
  'cropInfo'?: VideoCropInfo;
  /**
   * Description of the media
   */
  'description'?: string;
  /**
   * // Is panoramic media IsPanoramic *bool `json:\"is_panoramic\" form:\"is_panoramic\"` Is public media
   */
  'isPublic'?: boolean;
  /**
   * Metadata of the media (key-value pair, max: 50 items, key max length: 255, value max length: 255)
   */
  'metadata'?: Array<Metadata>;
  /**
   * Qualities of the media (default: 1080p, 720p,  360p, allow:2160p, 1440p, 1080p, 720p,  360p, 240p, 144p)
   */
  'qualities'?: Array<QualityConfig>;
  /**
   * SegmentConfig
   */
  'segmentDuration'?: number;
  /**
   * Import an existing HLS manifest instead of uploading a file. When set, the renditions are mirrored from that manifest and the part-upload flow is skipped, so `qualities` and `watermark` must be omitted.
   */
  'sourceUrl'?: string;
  /**
   * Tags of the media (max: 50 items, max length: 255)
   */
  'tags'?: Array<string>;
  /**
   * Title of the media
   */
  'title'?: string;
  /**
   * Type of the media (default: video, allowed: video, audio)
   */
  'type'?: string;
  'watermark'?: MediaWatermark;

  static readonly discriminator?: string = undefined;

  static readonly attributeTypeMap: Array<AttributeType> = [
    {
      name: 'cropInfo',
      baseName: 'crop_info',
      type: 'VideoCropInfo',
      format: '',
    },
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
      format: 'int64',
    },
    {
      name: 'sourceUrl',
      baseName: 'source_url',
      type: 'string',
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
      name: 'type',
      baseName: 'type',
      type: 'string',
      format: '',
    },
    {
      name: 'watermark',
      baseName: 'watermark',
      type: 'MediaWatermark',
      format: '',
    },
  ];

  static getAttributeTypeMap(): Array<AttributeType> {
    return CreateMediaRequest.attributeTypeMap;
  }
}
