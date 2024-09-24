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
class GetVideoCaptionsResponse {
    static getAttributeTypeMap() {
        return GetVideoCaptionsResponse.attributeTypeMap;
    }
}
GetVideoCaptionsResponse.discriminator = undefined;
GetVideoCaptionsResponse.attributeTypeMap = [
    {
        name: 'data',
        baseName: 'data',
        type: 'GetVideoCaptionsData',
        format: '',
    },
    {
        name: 'status',
        baseName: 'status',
        type: 'string',
        format: '',
    },
];
exports.default = GetVideoCaptionsResponse;
