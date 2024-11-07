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
export default class GetLiveStreamVideosRequest {
    'limit'?: number;
    'liveStreamKeyId'?: string;
    'offset'?: number;
    'orderBy'?: string;
    'search'?: string;
    'sortBy'?: string;
    'status'?: string;
    'videoStatus'?: string;
    static readonly discriminator?: string;
    static readonly attributeTypeMap: Array<AttributeType>;
    static getAttributeTypeMap(): Array<AttributeType>;
}
