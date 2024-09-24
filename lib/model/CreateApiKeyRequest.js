"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
class CreateApiKeyRequest {
    static getAttributeTypeMap() {
        return CreateApiKeyRequest.attributeTypeMap;
    }
}
CreateApiKeyRequest.discriminator = undefined;
CreateApiKeyRequest.attributeTypeMap = [
    {
        name: 'apiKeyName',
        baseName: 'api_key_name',
        type: 'string',
        format: '',
    },
    {
        name: 'ttl',
        baseName: 'ttl',
        type: 'string',
        format: '',
    },
    {
        name: 'type',
        baseName: 'type',
        type: 'string',
        format: '',
    },
];
exports.default = CreateApiKeyRequest;
