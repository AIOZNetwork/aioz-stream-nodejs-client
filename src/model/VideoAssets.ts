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

export default class VideoAssets {
  'dashIframe'?: string;
  'dashPlayerUrl'?: string;
  'dashUrl'?: string;
  'hlsIframe'?: string;
  'hlsPlayerUrl'?: string;
  'hlsUrl'?: string;
  'mp4Url'?: string;
  'sourceUrl'?: string;
  'thumbnailUrl'?: string;

  static readonly discriminator?: string = undefined;

  static readonly attributeTypeMap: Array<AttributeType> = [
    {
      name: 'dashIframe',
      baseName: 'dash_iframe',
      type: 'string',
      format: '',
    },
    {
      name: 'dashPlayerUrl',
      baseName: 'dash_player_url',
      type: 'string',
      format: '',
    },
    {
      name: 'dashUrl',
      baseName: 'dash_url',
      type: 'string',
      format: '',
    },
    {
      name: 'hlsIframe',
      baseName: 'hls_iframe',
      type: 'string',
      format: '',
    },
    {
      name: 'hlsPlayerUrl',
      baseName: 'hls_player_url',
      type: 'string',
      format: '',
    },
    {
      name: 'hlsUrl',
      baseName: 'hls_url',
      type: 'string',
      format: '',
    },
    {
      name: 'mp4Url',
      baseName: 'mp4_url',
      type: 'string',
      format: '',
    },
    {
      name: 'sourceUrl',
      baseName: 'source_url',
      type: 'string',
      format: '',
    },
    {
      name: 'thumbnailUrl',
      baseName: 'thumbnail_url',
      type: 'string',
      format: '',
    },
  ];

  static getAttributeTypeMap(): Array<AttributeType> {
    return VideoAssets.attributeTypeMap;
  }
}
