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
import ListPlaylistsRequest from './ListPlaylistsRequest.js';
import Playlist from './Playlist.js';

export default class ListPlaylistsData {
  'playlists'?: Array<Playlist>;
  'query'?: ListPlaylistsRequest;
  'total'?: number;

  static readonly discriminator?: string = undefined;

  static readonly attributeTypeMap: Array<AttributeType> = [
    {
      name: 'playlists',
      baseName: 'playlists',
      type: 'Array<Playlist>',
      format: '',
    },
    {
      name: 'query',
      baseName: 'query',
      type: 'ListPlaylistsRequest',
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
    return ListPlaylistsData.attributeTypeMap;
  }
}
