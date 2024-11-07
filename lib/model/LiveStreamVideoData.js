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
class LiveStreamVideoData {
    static getAttributeTypeMap() {
        return LiveStreamVideoData.attributeTypeMap;
    }
}
LiveStreamVideoData.discriminator = undefined;
LiveStreamVideoData.attributeTypeMap = [
    {
        name: 'assets',
        baseName: 'assets',
        type: 'LiveStreamAssets',
        format: '',
    },
    {
        name: 'createdAt',
        baseName: 'created_at',
        type: 'string',
        format: '',
    },
    {
        name: 'duration',
        baseName: 'duration',
        type: 'number',
        format: '',
    },
    {
        name: 'id',
        baseName: 'id',
        type: 'string',
        format: '',
    },
    {
        name: 'liveStreamKeyId',
        baseName: 'live_stream_key_id',
        type: 'string',
        format: '',
    },
    {
        name: 'qualities',
        baseName: 'qualities',
        type: 'Array<string>',
        format: '',
    },
    {
        name: 'save',
        baseName: 'save',
        type: 'boolean',
        format: '',
    },
    {
        name: 'status',
        baseName: 'status',
        type: 'string',
        format: '',
    },
    {
        name: 'title',
        baseName: 'title',
        type: 'string',
        format: '',
    },
    {
        name: 'updatedAt',
        baseName: 'updated_at',
        type: 'string',
        format: '',
    },
    {
        name: 'userId',
        baseName: 'user_id',
        type: 'string',
        format: '',
    },
    {
        name: 'video',
        baseName: 'video',
        type: 'Video',
        format: '',
    },
];
exports.default = LiveStreamVideoData;
