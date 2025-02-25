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
import UpdatePlayerThemeRequest from './UpdatePlayerThemeRequest.js';

export default class UpdatePlayerThemeResponse {
  'data'?: UpdatePlayerThemeRequest;
  'status'?: string;

  static readonly discriminator?: string = undefined;

  static readonly attributeTypeMap: Array<AttributeType> = [
    {
      "name": "data",
      "baseName": "data",
      "type": "UpdatePlayerThemeRequest",
      "format": "",
    },
    {
      "name": "status",
      "baseName": "status",
      "type": "string",
      "format": "",
    }  ];

  static getAttributeTypeMap(): Array<AttributeType> {
    return UpdatePlayerThemeResponse.attributeTypeMap;
  }

}

