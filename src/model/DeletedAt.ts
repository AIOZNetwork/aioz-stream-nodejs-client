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

export default class DeletedAt {
  'time'?: string;
  /**
   * Valid is true if Time is not NULL
   */
  'valid'?: boolean;

  static readonly discriminator?: string = undefined;

  static readonly attributeTypeMap: Array<AttributeType> = [
    {
      name: 'time',
      baseName: 'time',
      type: 'string',
      format: '',
    },
    {
      name: 'valid',
      baseName: 'valid',
      type: 'boolean',
      format: '',
    },
  ];

  static getAttributeTypeMap(): Array<AttributeType> {
    return DeletedAt.attributeTypeMap;
  }
}
