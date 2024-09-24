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
import Metadata from './Metadata.js';
import VideoWatermark from './VideoWatermark.js';
export default class CreateVideoRequest {
    /**
     * Description of the video
     */
    'description'?: string;
    /**
     * // Is panoramic video IsPanoramic *bool `json:\"is_panoramic\" form:\"is_panoramic\"` Is public video
     */
    'isPublic'?: boolean;
    /**
     * Metadata of the video (key-value pair, max: 50 items, key max length: 255, value max length: 255)
     */
    'metadata'?: Array<Metadata>;
    /**
     * Qualities of the video (default: 1080p, 720p,  360p, allow:2160p, 1440p, 1080p, 720p,  360p, 240p, 144p)
     */
    'qualities'?: Array<string>;
    /**
     * Tags of the video (max: 50 items, max length: 255)
     */
    'tags'?: Array<string>;
    /**
     * Title of the video
     */
    'title'?: string;
    /**
     * Video thumbnailConfig
     */
    'watermark'?: VideoWatermark;
    static readonly discriminator?: string;
    static readonly attributeTypeMap: Array<AttributeType>;
    static getAttributeTypeMap(): Array<AttributeType>;
}
