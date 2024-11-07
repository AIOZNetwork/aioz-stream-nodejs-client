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
import Watermark from './Watermark.js';
export default class VideoWatermark {
    'bottom'?: string;
    'createdAt'?: string;
    'height'?: string;
    'id'?: string;
    'left'?: string;
    'opacity'?: string;
    'right'?: string;
    'top'?: string;
    'updatedAt'?: string;
    'videoId'?: string;
    'watermark'?: Watermark;
    'watermarkId'?: string;
    'width'?: string;
    static readonly discriminator?: string;
    static readonly attributeTypeMap: Array<AttributeType>;
    static getAttributeTypeMap(): Array<AttributeType>;
}
