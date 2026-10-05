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
import ListWebhooksRequest from './ListWebhooksRequest.js';
import Webhook from './Webhook.js';

export default class ListWebhooksData {
  'query'?: ListWebhooksRequest;
  'total'?: number;
  'webhooks'?: Array<Webhook>;

  static readonly discriminator?: string = undefined;

  static readonly attributeTypeMap: Array<AttributeType> = [
    {
      name: 'query',
      baseName: 'query',
      type: 'ListWebhooksRequest',
      format: '',
    },
    {
      name: 'total',
      baseName: 'total',
      type: 'number',
      format: 'int64',
    },
    {
      name: 'webhooks',
      baseName: 'webhooks',
      type: 'Array<Webhook>',
      format: '',
    },
  ];

  static getAttributeTypeMap(): Array<AttributeType> {
    return ListWebhooksData.attributeTypeMap;
  }
}
