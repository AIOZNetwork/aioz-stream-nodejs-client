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
class UpdatePlayerThemeRequest {
    static getAttributeTypeMap() {
        return UpdatePlayerThemeRequest.attributeTypeMap;
    }
}
UpdatePlayerThemeRequest.discriminator = undefined;
UpdatePlayerThemeRequest.attributeTypeMap = [
    {
        name: 'asset',
        baseName: 'asset',
        type: 'Asset',
        format: '',
    },
    {
        name: 'controls',
        baseName: 'controls',
        type: 'Controls',
        format: '',
    },
    {
        name: 'isDefault',
        baseName: 'is_default',
        type: 'boolean',
        format: '',
    },
    {
        name: 'name',
        baseName: 'name',
        type: 'string',
        format: '',
    },
    {
        name: 'theme',
        baseName: 'theme',
        type: 'Theme',
        format: '',
    },
];
exports.default = UpdatePlayerThemeRequest;
