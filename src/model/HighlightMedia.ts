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
import DeletedAt from './DeletedAt.js';
import HighlightChunk from './HighlightChunk.js';
import HighlightClip from './HighlightClip.js';
import HighlightManifest from './HighlightManifest.js';
import HighlightMediaStatus from './HighlightMediaStatus.js';
import MediaType from './MediaType.js';

export default class HighlightMedia {
  'createdAt'?: string;
  'deletedAt'?: DeletedAt;
  'editorProjectId'?: string;
  'fileMd5'?: string;
  'fileName'?: string;
  'fileSize'?: number;
  'highlightChunks'?: Array<HighlightChunk>;
  'highlightClips'?: Array<HighlightClip>;
  'highlightManifests'?: Array<HighlightManifest>;
  'id'?: string;
  'mediaType'?: MediaType;
  'metadata'?: { [key: string]: any };
  'mimeType'?: string;
  'objUrl'?: string;
  'status'?: HighlightMediaStatus;
  'totalChunk'?: number;
  'updatedAt'?: string;

  static readonly discriminator?: string = undefined;

  static readonly attributeTypeMap: Array<AttributeType> = [
    {
      name: 'createdAt',
      baseName: 'created_at',
      type: 'string',
      format: '',
    },
    {
      name: 'deletedAt',
      baseName: 'deleted_at',
      type: 'DeletedAt',
      format: '',
    },
    {
      name: 'editorProjectId',
      baseName: 'editor_project_id',
      type: 'string',
      format: '',
    },
    {
      name: 'fileMd5',
      baseName: 'file_md5',
      type: 'string',
      format: '',
    },
    {
      name: 'fileName',
      baseName: 'file_name',
      type: 'string',
      format: '',
    },
    {
      name: 'fileSize',
      baseName: 'file_size',
      type: 'number',
      format: 'int64',
    },
    {
      name: 'highlightChunks',
      baseName: 'highlight_chunks',
      type: 'Array<HighlightChunk>',
      format: '',
    },
    {
      name: 'highlightClips',
      baseName: 'highlight_clips',
      type: 'Array<HighlightClip>',
      format: '',
    },
    {
      name: 'highlightManifests',
      baseName: 'highlight_manifests',
      type: 'Array<HighlightManifest>',
      format: '',
    },
    {
      name: 'id',
      baseName: 'id',
      type: 'string',
      format: '',
    },
    {
      name: 'mediaType',
      baseName: 'media_type',
      type: 'MediaType',
      format: '',
    },
    {
      name: 'metadata',
      baseName: 'metadata',
      type: '{ [key: string]: any; }',
      format: '',
    },
    {
      name: 'mimeType',
      baseName: 'mime_type',
      type: 'string',
      format: '',
    },
    {
      name: 'objUrl',
      baseName: 'obj_url',
      type: 'string',
      format: '',
    },
    {
      name: 'status',
      baseName: 'status',
      type: 'HighlightMediaStatus',
      format: '',
    },
    {
      name: 'totalChunk',
      baseName: 'total_chunk',
      type: 'number',
      format: 'int64',
    },
    {
      name: 'updatedAt',
      baseName: 'updated_at',
      type: 'string',
      format: '',
    },
  ];

  static getAttributeTypeMap(): Array<AttributeType> {
    return HighlightMedia.attributeTypeMap;
  }
}
