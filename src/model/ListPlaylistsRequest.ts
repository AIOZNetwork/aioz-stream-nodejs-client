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

export default class ListPlaylistsRequest {
  'limit'?: number;
  'metadata'?: Array<Metadata>;
  'offset'?: number;
  'orderBy'?: ListPlaylistsRequestOrderByEnum;
  'playlistType'?: ListPlaylistsRequestPlaylistTypeEnum;
  'search'?: string;
  'sortBy'?: ListPlaylistsRequestSortByEnum;
  'tags'?: Array<string>;

  static readonly discriminator?: string = undefined;

  static readonly attributeTypeMap: Array<AttributeType> = [
    {
      name: 'limit',
      baseName: 'limit',
      type: 'number',
      format: 'int64',
      defaultValue: 25,
    },
    {
      name: 'metadata',
      baseName: 'metadata',
      type: 'Array<Metadata>',
      format: '',
    },
    {
      name: 'offset',
      baseName: 'offset',
      type: 'number',
      format: 'int64',
    },
    {
      name: 'orderBy',
      baseName: 'order_by',
      type: 'ListPlaylistsRequestOrderByEnum',
      format: '',
    },
    {
      name: 'playlistType',
      baseName: 'playlist_type',
      type: 'ListPlaylistsRequestPlaylistTypeEnum',
      format: '',
    },
    {
      name: 'search',
      baseName: 'search',
      type: 'string',
      format: '',
    },
    {
      name: 'sortBy',
      baseName: 'sort_by',
      type: 'ListPlaylistsRequestSortByEnum',
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
    return ListPlaylistsRequest.attributeTypeMap;
  }
}

export type ListPlaylistsRequestOrderByEnum = 'asc' | 'desc';
export type ListPlaylistsRequestPlaylistTypeEnum = 'video' | 'audio';
export type ListPlaylistsRequestSortByEnum = 'created_at' | 'name' | 'title';
