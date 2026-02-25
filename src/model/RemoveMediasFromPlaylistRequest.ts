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

export default class RemoveMediasFromPlaylistRequest {
  'optionPlaylists'?: Array<string>;

  static readonly discriminator?: string = undefined;

  static readonly attributeTypeMap: Array<AttributeType> = [
    {
      name: 'optionPlaylists',
      baseName: 'option_playlists',
      type: 'Array<string>',
      format: '',
    },
  ];

  static getAttributeTypeMap(): Array<AttributeType> {
    return RemoveMediasFromPlaylistRequest.attributeTypeMap;
  }
}
