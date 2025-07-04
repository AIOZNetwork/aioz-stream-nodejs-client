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

export default class RemovePlayerThemesFromVideoRequest {
  'playerThemeId'?: string;
  'videoId'?: string;

  static readonly discriminator?: string = undefined;

  static readonly attributeTypeMap: Array<AttributeType> = [
    {
      name: 'playerThemeId',
      baseName: 'player_theme_id',
      type: 'string',
      format: '',
    },
    {
      name: 'videoId',
      baseName: 'video_id',
      type: 'string',
      format: '',
    },
  ];

  static getAttributeTypeMap(): Array<AttributeType> {
    return RemovePlayerThemesFromVideoRequest.attributeTypeMap;
  }
}
