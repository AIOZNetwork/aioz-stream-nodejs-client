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
import User from './User.js';

export default class GetUserData {
  'user'?: User;

  static readonly discriminator?: string = undefined;

  static readonly attributeTypeMap: Array<AttributeType> = [
    {
      name: 'user',
      baseName: 'user',
      type: 'User',
      format: '',
    },
  ];

  static getAttributeTypeMap(): Array<AttributeType> {
    return GetUserData.attributeTypeMap;
  }
}
