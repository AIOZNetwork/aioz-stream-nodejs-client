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

export default class AttachThemeRequest {
  'mediaId'?: string;
  'playerThemeId'?: string;

  static readonly discriminator?: string = undefined;

  static readonly attributeTypeMap: Array<AttributeType> = [
    {
      name: 'mediaId',
      baseName: 'media_id',
      type: 'string',
      format: '',
    },
    {
      name: 'playerThemeId',
      baseName: 'player_theme_id',
      type: 'string',
      format: '',
    },
  ];

  static getAttributeTypeMap(): Array<AttributeType> {
    return AttachThemeRequest.attributeTypeMap;
  }
}
