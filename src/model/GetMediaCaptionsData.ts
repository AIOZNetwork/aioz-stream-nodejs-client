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
import MediaCaption from './MediaCaption.js';

export default class GetMediaCaptionsData {
  'mediaCaptions'?: Array<MediaCaption>;
  'total'?: number;

  static readonly discriminator?: string = undefined;

  static readonly attributeTypeMap: Array<AttributeType> = [
    {
      name: 'mediaCaptions',
      baseName: 'media_captions',
      type: 'Array<MediaCaption>',
      format: '',
    },
    {
      name: 'total',
      baseName: 'total',
      type: 'number',
      format: 'int64',
    },
  ];

  static getAttributeTypeMap(): Array<AttributeType> {
    return GetMediaCaptionsData.attributeTypeMap;
  }
}
