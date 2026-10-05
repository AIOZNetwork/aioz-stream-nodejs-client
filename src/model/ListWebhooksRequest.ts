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

export default class ListWebhooksRequest {
  'encodingFailed'?: boolean;
  'encodingFinished'?: boolean;
  'encodingStarted'?: boolean;
  'fileReceived'?: boolean;
  'limit'?: number;
  'offset'?: number;
  'orderBy'?: ListWebhooksRequestOrderByEnum;
  'partialFinished'?: boolean;
  'search'?: string;
  'sortBy'?: ListWebhooksRequestSortByEnum;

  static readonly discriminator?: string = undefined;

  static readonly attributeTypeMap: Array<AttributeType> = [
    {
      name: 'encodingFailed',
      baseName: 'encoding_failed',
      type: 'boolean',
      format: '',
    },
    {
      name: 'encodingFinished',
      baseName: 'encoding_finished',
      type: 'boolean',
      format: '',
    },
    {
      name: 'encodingStarted',
      baseName: 'encoding_started',
      type: 'boolean',
      format: '',
    },
    {
      name: 'fileReceived',
      baseName: 'file_received',
      type: 'boolean',
      format: '',
    },
    {
      name: 'limit',
      baseName: 'limit',
      type: 'number',
      format: 'int64',
      defaultValue: 25,
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
      type: 'ListWebhooksRequestOrderByEnum',
      format: '',
    },
    {
      name: 'partialFinished',
      baseName: 'partial_finished',
      type: 'boolean',
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
      type: 'ListWebhooksRequestSortByEnum',
      format: '',
    },
  ];

  static getAttributeTypeMap(): Array<AttributeType> {
    return ListWebhooksRequest.attributeTypeMap;
  }
}

export type ListWebhooksRequestOrderByEnum = 'asc' | 'desc';
export type ListWebhooksRequestSortByEnum = 'created_at' | 'name' | 'url';
