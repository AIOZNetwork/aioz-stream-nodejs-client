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
import GetLiveStreamKeyData from './GetLiveStreamKeyData.js';
export default class GetLiveStreamKeysListData {
    'liveStreamKeys'?: Array<GetLiveStreamKeyData>;
    'total'?: number;
    static readonly discriminator?: string;
    static readonly attributeTypeMap: Array<AttributeType>;
    static getAttributeTypeMap(): Array<AttributeType>;
}
