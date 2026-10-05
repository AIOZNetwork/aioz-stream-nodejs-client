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

export default class CreateMediaCaptionData {
  'mediaCaption'?: MediaCaption;

  static readonly discriminator?: string = undefined;

  static readonly attributeTypeMap: Array<AttributeType> = [
    {
      name: 'mediaCaption',
      baseName: 'media_caption',
      type: 'MediaCaption',
      format: '',
    },
  ];

  static getAttributeTypeMap(): Array<AttributeType> {
    return CreateMediaCaptionData.attributeTypeMap;
  }
}
