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
import MediaChapter from './MediaChapter.js';

export default class CreateMediaChapterData {
  'mediaChapter'?: MediaChapter;

  static readonly discriminator?: string = undefined;

  static readonly attributeTypeMap: Array<AttributeType> = [
    {
      name: 'mediaChapter',
      baseName: 'media_chapter',
      type: 'MediaChapter',
      format: '',
    },
  ];

  static getAttributeTypeMap(): Array<AttributeType> {
    return CreateMediaChapterData.attributeTypeMap;
  }
}
