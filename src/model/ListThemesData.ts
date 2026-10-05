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
import ListThemesRequest from './ListThemesRequest.js';
import PlayerTheme from './PlayerTheme.js';

export default class ListThemesData {
  'playerThemes'?: Array<PlayerTheme>;
  'query'?: ListThemesRequest;
  'total'?: number;

  static readonly discriminator?: string = undefined;

  static readonly attributeTypeMap: Array<AttributeType> = [
    {
      name: 'playerThemes',
      baseName: 'player_themes',
      type: 'Array<PlayerTheme>',
      format: '',
    },
    {
      name: 'query',
      baseName: 'query',
      type: 'ListThemesRequest',
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
    return ListThemesData.attributeTypeMap;
  }
}
