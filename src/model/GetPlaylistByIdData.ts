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
import Playlist from './Playlist.js';

export default class GetPlaylistByIdData {
  'playlist'?: Playlist;

  static readonly discriminator?: string = undefined;

  static readonly attributeTypeMap: Array<AttributeType> = [
    {
      name: 'playlist',
      baseName: 'playlist',
      type: 'Playlist',
      format: '',
    },
  ];

  static getAttributeTypeMap(): Array<AttributeType> {
    return GetPlaylistByIdData.attributeTypeMap;
  }
}
