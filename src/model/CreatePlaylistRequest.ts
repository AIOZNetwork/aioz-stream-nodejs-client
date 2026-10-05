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
import Metadata from './Metadata.js';

export default class CreatePlaylistRequest {
  'metadata'?: Array<Metadata>;
  'name'?: string;
  'playlistType'?: CreatePlaylistRequestPlaylistTypeEnum;
  'tags'?: Array<string>;

  static readonly discriminator?: string = undefined;

  static readonly attributeTypeMap: Array<AttributeType> = [
    {
      name: 'metadata',
      baseName: 'metadata',
      type: 'Array<Metadata>',
      format: '',
    },
    {
      name: 'name',
      baseName: 'name',
      type: 'string',
      format: '',
    },
    {
      name: 'playlistType',
      baseName: 'playlist_type',
      type: 'CreatePlaylistRequestPlaylistTypeEnum',
      format: '',
    },
    {
      name: 'tags',
      baseName: 'tags',
      type: 'Array<string>',
      format: '',
    },
  ];

  static getAttributeTypeMap(): Array<AttributeType> {
    return CreatePlaylistRequest.attributeTypeMap;
  }
}

export type CreatePlaylistRequestPlaylistTypeEnum = 'video' | 'audio';
