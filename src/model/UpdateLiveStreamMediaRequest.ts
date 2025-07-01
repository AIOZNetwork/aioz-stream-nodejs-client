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

export default class UpdateLiveStreamMediaRequest {
  'save'?: boolean;
  'title'?: string;

  static readonly discriminator?: string = undefined;

  static readonly attributeTypeMap: Array<AttributeType> = [
    {
      name: 'save',
      baseName: 'save',
      type: 'boolean',
      format: '',
    },
    {
      name: 'title',
      baseName: 'title',
      type: 'string',
      format: '',
    },
  ];

  static getAttributeTypeMap(): Array<AttributeType> {
    return UpdateLiveStreamMediaRequest.attributeTypeMap;
  }
}
