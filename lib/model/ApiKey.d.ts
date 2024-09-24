/**
 * @w3stream/nodejs-client
 * W3STREAM Service
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated.
 * Do not edit the class manually.
 */
import AttributeType from './AttributeType.js';
export default class ApiKey {
    'createdAt'?: string;
    'expiredAt'?: string;
    'id'?: string;
    'lastUsedAt'?: string;
    'name'?: string;
    'publicKey'?: string;
    'secret'?: string;
    'truncatedSecret'?: string;
    'ttl'?: string;
    'type'?: string;
    'updatedAt'?: string;
    static readonly discriminator?: string;
    static readonly attributeTypeMap: Array<AttributeType>;
    static getAttributeTypeMap(): Array<AttributeType>;
}
