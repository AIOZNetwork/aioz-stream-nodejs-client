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

export default class ErrorBody {
  'data'?: any;
  'message'?: string;
  /**
   * Reason names what failed - \"media-not-found\", never \"not-found\" - so a client can tell two failures with the same status apart.
   */
  'reason'?: string;
  /**
   * RequestId is the id this request was logged and traced under, the same value as the X-Request-Id response header. Quoting it is what makes a support conversation actionable.
   */
  'requestId'?: string;
  'status'?: string;

  static readonly discriminator?: string = undefined;

  static readonly attributeTypeMap: Array<AttributeType> = [
    {
      name: 'data',
      baseName: 'data',
      type: 'any',
      format: '',
    },
    {
      name: 'message',
      baseName: 'message',
      type: 'string',
      format: '',
    },
    {
      name: 'reason',
      baseName: 'reason',
      type: 'string',
      format: '',
    },
    {
      name: 'requestId',
      baseName: 'request_id',
      type: 'string',
      format: '',
    },
    {
      name: 'status',
      baseName: 'status',
      type: 'string',
      format: '',
    },
  ];

  static getAttributeTypeMap(): Array<AttributeType> {
    return ErrorBody.attributeTypeMap;
  }
}
