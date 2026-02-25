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
import VideoCaption from './VideoCaption.js';
import VideoChapter from './VideoChapter.js';

export default class PlaylistItemMedia {
  'captions'?: Array<VideoCaption>;
  'chapters'?: Array<VideoChapter>;
  'description'?: string;
  'duration'?: number;
  'hlsUrl'?: string;
  'qualities'?: string;
  'size'?: number;
  'thumbnailUrl'?: string;
  'title'?: string;

  static readonly discriminator?: string = undefined;

  static readonly attributeTypeMap: Array<AttributeType> = [
    {
      name: 'captions',
      baseName: 'captions',
      type: 'Array<VideoCaption>',
      format: '',
    },
    {
      name: 'chapters',
      baseName: 'chapters',
      type: 'Array<VideoChapter>',
      format: '',
    },
    {
      name: 'description',
      baseName: 'description',
      type: 'string',
      format: '',
    },
    {
      name: 'duration',
      baseName: 'duration',
      type: 'number',
      format: '',
    },
    {
      name: 'hlsUrl',
      baseName: 'hls_url',
      type: 'string',
      format: '',
    },
    {
      name: 'qualities',
      baseName: 'qualities',
      type: 'string',
      format: '',
    },
    {
      name: 'size',
      baseName: 'size',
      type: 'number',
      format: '',
    },
    {
      name: 'thumbnailUrl',
      baseName: 'thumbnail_url',
      type: 'string',
      format: '',
    },
    {
      name: 'title',
      baseName: 'title',
      type: 'string',
      format: '',
    },
  ];

  static getAttributeTypeMap(): Array<AttributeType> {
    return PlaylistItemMedia.attributeTypeMap;
  }
}
