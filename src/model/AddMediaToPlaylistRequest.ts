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

export default class AddMediaToPlaylistRequest {
  'mediaId'?: string;
  'optionMediaIds'?: Array<string>;
  'optionPlaylists'?: Array<string>;

  static readonly discriminator?: string = undefined;

  static readonly attributeTypeMap: Array<AttributeType> = [
    {
      name: 'mediaId',
      baseName: 'media_id',
      type: 'string',
      format: '',
    },
    {
      name: 'optionMediaIds',
      baseName: 'option_media_ids',
      type: 'Array<string>',
      format: '',
    },
    {
      name: 'optionPlaylists',
      baseName: 'option_playlists',
      type: 'Array<string>',
      format: '',
    },
  ];

  static getAttributeTypeMap(): Array<AttributeType> {
    return AddMediaToPlaylistRequest.attributeTypeMap;
  }
}
