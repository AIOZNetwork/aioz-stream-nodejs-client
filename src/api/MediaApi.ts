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

import path from 'path';
import { existsSync, statSync, createReadStream } from 'fs';
import { URLSearchParams } from 'url';
import FormData from 'form-data';
import ObjectSerializer from '../ObjectSerializer';
import HttpClient, { QueryOptions, ApiResponseHeaders } from '../HttpClient';
import ProgressiveSession from '../model/ProgressiveSession';
import CreateMediaCaptionResponse from '../model/CreateMediaCaptionResponse';
import CreateMediaRequest from '../model/CreateMediaRequest';
import CreateMediaResponse from '../model/CreateMediaResponse';
import GetMediaCaptionsResponse from '../model/GetMediaCaptionsResponse';
import GetMediaDetailResponse from '../model/GetMediaDetailResponse';
import GetMediaListRequest from '../model/GetMediaListRequest';
import GetMediaListResponse from '../model/GetMediaListResponse';
import GetMediaPlayerInfoResponse from '../model/GetMediaPlayerInfoResponse';
import GetTranscodeCostResponse from '../model/GetTranscodeCostResponse';
import ResponseSuccess from '../model/ResponseSuccess';
import UpdateMediaInfoRequest from '../model/UpdateMediaInfoRequest';
import UploadProgressEvent from '../model/UploadProgressEvent';
import { Readable } from 'stream';
import { readableToBuffer } from '../HttpClient';
import * as crypto from 'crypto';

/**
 * no description
 */
export default class MediaApi {
  private httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  /**
   * Create a media object
   * Create media object
   * @param request media&#39;s info
   */
  public async create(
    request: CreateMediaRequest = {}
  ): Promise<CreateMediaResponse> {
    return this.createWithResponseHeaders(request).then((res) => res.body);
  }

  /**
   * Create a media object
   * Create media object
   * @param request media&#39;s info
   */
  public async createWithResponseHeaders(
    request: CreateMediaRequest = {}
  ): Promise<{ headers: ApiResponseHeaders; body: CreateMediaResponse }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (request === null || request === undefined) {
      throw new Error(
        'Required parameter request was null or undefined when calling create.'
      );
    }
    // Path Params
    const localVarPath = '/media/create'.substring(1);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      'application/json',

      'application/x-www-form-urlencoded',
    ]);
    queryParams.headers['Content-Type'] = contentType;

    queryParams.body = ObjectSerializer.stringify(
      ObjectSerializer.serialize(request, 'CreateMediaRequest', ''),
      contentType
    );

    queryParams.method = 'POST';

    return this.httpClient.call(localVarPath, queryParams).then((response) => {
      return {
        headers: response.headers,
        body: ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            response.body,
            response.headers['content-type']
          ),
          'CreateMediaResponse',
          ''
        ) as CreateMediaResponse,
      };
    });
  }

  /**
   * update media info
   * @param id media&#39;s id
   * @param input input
   */
  public async update(
    id: string,
    input: UpdateMediaInfoRequest = {}
  ): Promise<ResponseSuccess> {
    return this.updateWithResponseHeaders(id, input).then((res) => res.body);
  }

  /**
   * update media info
   * @param id media&#39;s id
   * @param input input
   */
  public async updateWithResponseHeaders(
    id: string,
    input: UpdateMediaInfoRequest = {}
  ): Promise<{ headers: ApiResponseHeaders; body: ResponseSuccess }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling update.'
      );
    }
    if (input === null || input === undefined) {
      throw new Error(
        'Required parameter input was null or undefined when calling update.'
      );
    }
    // Path Params
    const localVarPath = '/media/{id}'
      .substring(1)
      .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      'application/json',
    ]);
    queryParams.headers['Content-Type'] = contentType;

    queryParams.body = ObjectSerializer.stringify(
      ObjectSerializer.serialize(input, 'UpdateMediaInfoRequest', ''),
      contentType
    );

    queryParams.method = 'PATCH';

    return this.httpClient.call(localVarPath, queryParams).then((response) => {
      return {
        headers: response.headers,
        body: ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            response.body,
            response.headers['content-type']
          ),
          'ResponseSuccess',
          ''
        ) as ResponseSuccess,
      };
    });
  }

  /**
   * Delete a media by media ID.
   * Delete media
   * @param id Media ID
   */
  public async delete(id: string): Promise<ResponseSuccess> {
    return this.deleteWithResponseHeaders(id).then((res) => res.body);
  }

  /**
   * Delete a media by media ID.
   * Delete media
   * @param id Media ID
   */
  public async deleteWithResponseHeaders(
    id: string
  ): Promise<{ headers: ApiResponseHeaders; body: ResponseSuccess }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling delete.'
      );
    }
    // Path Params
    const localVarPath = '/media/{id}'
      .substring(1)
      .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

    queryParams.method = 'DELETE';

    return this.httpClient.call(localVarPath, queryParams).then((response) => {
      return {
        headers: response.headers,
        body: ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            response.body,
            response.headers['content-type']
          ),
          'ResponseSuccess',
          ''
        ) as ResponseSuccess,
      };
    });
  }

  /**
   * Upload media thumbnail
   * @param id media&#39;s id
   * @param file file media to be uploaded
   */
  public async uploadThumbnail(
    id: string,
    file: string | Readable | Buffer
  ): Promise<ResponseSuccess> {
    return this.uploadThumbnailWithResponseHeaders(id, file).then(
      (res) => res.body
    );
  }

  /**
   * Upload media thumbnail
   * @param id media&#39;s id
   * @param file file media to be uploaded
   */
  public async uploadThumbnailWithResponseHeaders(
    id: string,
    file: string | Readable | Buffer
  ): Promise<{ headers: ApiResponseHeaders; body: ResponseSuccess }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling uploadThumbnail.'
      );
    }
    let fileName = 'file';
    let fileBuffer = file;
    if (typeof file === 'string') {
      fileName = path.basename(file);
      fileBuffer = createReadStream(file);
    }
    if (file instanceof Readable) {
      fileBuffer = await readableToBuffer(file);
    }

    // Path Params
    const localVarPath = '/media/{id}/thumbnail'
      .substring(1)
      .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

    queryParams.method = 'POST';

    const formData = new FormData();

    formData.append(fileName, fileBuffer, fileName);

    queryParams.body = formData;
    return this.httpClient.call(localVarPath, queryParams).then((response) => {
      return {
        headers: response.headers,
        body: ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            response.body,
            response.headers['content-type']
          ),
          'ResponseSuccess',
          ''
        ) as ResponseSuccess,
      };
    });
  }

  /**
   * Delete media thumbnail
   * @param id media&#39;s id
   */
  public async deleteThumbnail(id: string): Promise<ResponseSuccess> {
    return this.deleteThumbnailWithResponseHeaders(id).then((res) => res.body);
  }

  /**
   * Delete media thumbnail
   * @param id media&#39;s id
   */
  public async deleteThumbnailWithResponseHeaders(
    id: string
  ): Promise<{ headers: ApiResponseHeaders; body: ResponseSuccess }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling deleteThumbnail.'
      );
    }
    // Path Params
    const localVarPath = '/media/{id}/thumbnail'
      .substring(1)
      .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

    queryParams.method = 'DELETE';

    return this.httpClient.call(localVarPath, queryParams).then((response) => {
      return {
        headers: response.headers,
        body: ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            response.body,
            response.headers['content-type']
          ),
          'ResponseSuccess',
          ''
        ) as ResponseSuccess,
      };
    });
  }

  /**
   * Uploads a VTT file and creates a new media caption for the specified media.
   * Create a new media caption
   * @param id Media ID
   * @param lan Language
   * @param file VTT File
   */
  public async createCaption(
    id: string,
    lan: string,
    file: string | Readable | Buffer
  ): Promise<CreateMediaCaptionResponse> {
    return this.createCaptionWithResponseHeaders(id, lan, file).then(
      (res) => res.body
    );
  }

  /**
   * Uploads a VTT file and creates a new media caption for the specified media.
   * Create a new media caption
   * @param id Media ID
   * @param lan Language
   * @param file VTT File
   */
  public async createCaptionWithResponseHeaders(
    id: string,
    lan: string,
    file: string | Readable | Buffer
  ): Promise<{
    headers: ApiResponseHeaders;
    body: CreateMediaCaptionResponse;
  }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling createCaption.'
      );
    }
    if (lan === null || lan === undefined) {
      throw new Error(
        'Required parameter lan was null or undefined when calling createCaption.'
      );
    }
    let fileName = 'file';
    let fileBuffer = file;
    if (typeof file === 'string') {
      fileName = path.basename(file);
      fileBuffer = createReadStream(file);
    }
    if (file instanceof Readable) {
      fileBuffer = await readableToBuffer(file);
    }

    // Path Params
    const localVarPath = '/media/{id}/captions/{lan}'
      .substring(1)
      .replace('{' + 'id' + '}', encodeURIComponent(String(id)))
      .replace('{' + 'lan' + '}', encodeURIComponent(String(lan)));

    queryParams.method = 'POST';

    const formData = new FormData();

    formData.append(fileName, fileBuffer, fileName);

    queryParams.body = formData;
    return this.httpClient.call(localVarPath, queryParams).then((response) => {
      return {
        headers: response.headers,
        body: ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            response.body,
            response.headers['content-type']
          ),
          'CreateMediaCaptionResponse',
          ''
        ) as CreateMediaCaptionResponse,
      };
    });
  }

  /**
   * Delete a caption in a specific language by providing the media ID for the media you want to delete the caption from and the language the caption is in.
   * Delete a media caption
   * @param id Media ID
   * @param lan Language
   */
  public async deleteCaption(
    id: string,
    lan: string
  ): Promise<ResponseSuccess> {
    return this.deleteCaptionWithResponseHeaders(id, lan).then(
      (res) => res.body
    );
  }

  /**
   * Delete a caption in a specific language by providing the media ID for the media you want to delete the caption from and the language the caption is in.
   * Delete a media caption
   * @param id Media ID
   * @param lan Language
   */
  public async deleteCaptionWithResponseHeaders(
    id: string,
    lan: string
  ): Promise<{ headers: ApiResponseHeaders; body: ResponseSuccess }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling deleteCaption.'
      );
    }
    if (lan === null || lan === undefined) {
      throw new Error(
        'Required parameter lan was null or undefined when calling deleteCaption.'
      );
    }
    // Path Params
    const localVarPath = '/media/{id}/captions/{lan}'
      .substring(1)
      .replace('{' + 'id' + '}', encodeURIComponent(String(id)))
      .replace('{' + 'lan' + '}', encodeURIComponent(String(lan)));

    queryParams.method = 'DELETE';

    return this.httpClient.call(localVarPath, queryParams).then((response) => {
      return {
        headers: response.headers,
        body: ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            response.body,
            response.headers['content-type']
          ),
          'ResponseSuccess',
          ''
        ) as ResponseSuccess,
      };
    });
  }

  /**
   * Retrieves a list of media captions for the specified media.
   * Get media captions
   * @param {Object} searchParams
   * @param { string } searchParams.id Media ID
   * @param { number } searchParams.offset offset, allowed values greater than or equal to 0. Default(0)
   * @param { number } searchParams.limit results per page. Allowed values 1-100, default is 25
   */
  public async getCaptions(args: {
    id: string;
    offset?: number;
    limit?: number;
  }): Promise<GetMediaCaptionsResponse> {
    return this.getCaptionsWithResponseHeaders(args).then((res) => res.body);
  }

  /**
   * Retrieves a list of media captions for the specified media.
   * Get media captions
   * @param {Object} searchParams
   * @param { string } searchParams.id Media ID
   * @param { number } searchParams.offset offset, allowed values greater than or equal to 0. Default(0)
   * @param { number } searchParams.limit results per page. Allowed values 1-100, default is 25
   */
  public async getCaptionsWithResponseHeaders({
    id,
    offset,
    limit,
  }: {
    id: string;
    offset?: number;
    limit?: number;
  }): Promise<{ headers: ApiResponseHeaders; body: GetMediaCaptionsResponse }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling getCaptions.'
      );
    }
    // Path Params
    const localVarPath = '/media/{id}/captions'
      .substring(1)
      .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

    // Query Params
    const urlSearchParams = new URLSearchParams();

    if (offset !== undefined) {
      urlSearchParams.append(
        'offset',
        ObjectSerializer.serialize(offset, 'number', '')
      );
    }
    if (limit !== undefined) {
      urlSearchParams.append(
        'limit',
        ObjectSerializer.serialize(limit, 'number', '')
      );
    }

    queryParams.searchParams = urlSearchParams;

    queryParams.method = 'GET';

    return this.httpClient.call(localVarPath, queryParams).then((response) => {
      return {
        headers: response.headers,
        body: ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            response.body,
            response.headers['content-type']
          ),
          'GetMediaCaptionsResponse',
          ''
        ) as GetMediaCaptionsResponse,
      };
    });
  }

  /**
   * get media transcoding cost
   * get media transcoding cost
   * @param qualities media&#39;s qualities
   * @param type media&#39;s type
   * @param duration media&#39;s duration
   */
  public async getCost(
    qualities: string,
    type: string,
    duration: number
  ): Promise<GetTranscodeCostResponse> {
    return this.getCostWithResponseHeaders(qualities, type, duration).then(
      (res) => res.body
    );
  }

  /**
   * get media transcoding cost
   * get media transcoding cost
   * @param qualities media&#39;s qualities
   * @param type media&#39;s type
   * @param duration media&#39;s duration
   */
  public async getCostWithResponseHeaders(
    qualities: string,
    type: string,
    duration: number
  ): Promise<{ headers: ApiResponseHeaders; body: GetTranscodeCostResponse }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (qualities === null || qualities === undefined) {
      throw new Error(
        'Required parameter qualities was null or undefined when calling getCost.'
      );
    }
    if (type === null || type === undefined) {
      throw new Error(
        'Required parameter type was null or undefined when calling getCost.'
      );
    }
    if (duration === null || duration === undefined) {
      throw new Error(
        'Required parameter duration was null or undefined when calling getCost.'
      );
    }
    // Path Params
    const localVarPath = '/media/cost'.substring(1);

    // Query Params
    const urlSearchParams = new URLSearchParams();

    if (qualities !== undefined) {
      urlSearchParams.append(
        'qualities',
        ObjectSerializer.serialize(qualities, 'string', '')
      );
    }
    if (type !== undefined) {
      urlSearchParams.append(
        'type',
        ObjectSerializer.serialize(type, 'string', '')
      );
    }
    if (duration !== undefined) {
      urlSearchParams.append(
        'duration',
        ObjectSerializer.serialize(duration, 'number', '')
      );
    }

    queryParams.searchParams = urlSearchParams;

    queryParams.method = 'GET';

    return this.httpClient.call(localVarPath, queryParams).then((response) => {
      return {
        headers: response.headers,
        body: ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            response.body,
            response.headers['content-type']
          ),
          'GetTranscodeCostResponse',
          ''
        ) as GetTranscodeCostResponse,
      };
    });
  }

  /**
   * Retrieve the media details by media id.
   * get media detail
   * @param id mediav&#39;s id
   */
  public async getDetail(id: string): Promise<GetMediaDetailResponse> {
    return this.getDetailWithResponseHeaders(id).then((res) => res.body);
  }

  /**
   * Retrieve the media details by media id.
   * get media detail
   * @param id mediav&#39;s id
   */
  public async getDetailWithResponseHeaders(
    id: string
  ): Promise<{ headers: ApiResponseHeaders; body: GetMediaDetailResponse }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling getDetail.'
      );
    }
    // Path Params
    const localVarPath = '/media/{id}'
      .substring(1)
      .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

    queryParams.method = 'GET';

    return this.httpClient.call(localVarPath, queryParams).then((response) => {
      return {
        headers: response.headers,
        body: ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            response.body,
            response.headers['content-type']
          ),
          'GetMediaDetailResponse',
          ''
        ) as GetMediaDetailResponse,
      };
    });
  }

  /**
   * Retrieve a list of videos for the authenticated user.
   * Get user videos list
   * @param request video&#39;s info
   */
  public async getMediaList(
    request: GetMediaListRequest = {}
  ): Promise<GetMediaListResponse> {
    return this.getMediaListWithResponseHeaders(request).then(
      (res) => res.body
    );
  }

  /**
   * Retrieve a list of videos for the authenticated user.
   * Get user videos list
   * @param request video&#39;s info
   */
  public async getMediaListWithResponseHeaders(
    request: GetMediaListRequest = {}
  ): Promise<{ headers: ApiResponseHeaders; body: GetMediaListResponse }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (request === null || request === undefined) {
      throw new Error(
        'Required parameter request was null or undefined when calling getMediaList.'
      );
    }
    // Path Params
    const localVarPath = '/media'.substring(1);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      'application/json',
    ]);
    queryParams.headers['Content-Type'] = contentType;

    queryParams.body = ObjectSerializer.stringify(
      ObjectSerializer.serialize(request, 'GetMediaListRequest', ''),
      contentType
    );

    queryParams.method = 'POST';

    return this.httpClient.call(localVarPath, queryParams).then((response) => {
      return {
        headers: response.headers,
        body: ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            response.body,
            response.headers['content-type']
          ),
          'GetMediaListResponse',
          ''
        ) as GetMediaListResponse,
      };
    });
  }

  /**
   * Get media object
   * Get media object
   * @param {Object} searchParams
   * @param { string } searchParams.id media ID
   * @param { string } searchParams.token Token
   */
  public async getMediaPlayerInfo(args: {
    id: string;
    token?: string;
  }): Promise<GetMediaPlayerInfoResponse> {
    return this.getMediaPlayerInfoWithResponseHeaders(args).then(
      (res) => res.body
    );
  }

  /**
   * Get media object
   * Get media object
   * @param {Object} searchParams
   * @param { string } searchParams.id media ID
   * @param { string } searchParams.token Token
   */
  public async getMediaPlayerInfoWithResponseHeaders({
    id,
    token,
  }: {
    id: string;
    token?: string;
  }): Promise<{
    headers: ApiResponseHeaders;
    body: GetMediaPlayerInfoResponse;
  }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling getMediaPlayerInfo.'
      );
    }
    // Path Params
    const localVarPath = '/media/{id}/player.json'
      .substring(1)
      .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

    // Query Params
    const urlSearchParams = new URLSearchParams();

    if (token !== undefined) {
      urlSearchParams.append(
        'token',
        ObjectSerializer.serialize(token, 'string', '')
      );
    }

    queryParams.searchParams = urlSearchParams;

    queryParams.method = 'GET';

    return this.httpClient.call(localVarPath, queryParams).then((response) => {
      return {
        headers: response.headers,
        body: ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            response.body,
            response.headers['content-type']
          ),
          'GetMediaPlayerInfoResponse',
          ''
        ) as GetMediaPlayerInfoResponse,
      };
    });
  }

  /**
   * Set default caption for a media
   * Set default caption
   * @param id Media ID
   * @param lan Language
   */
  public async setDefaultCaption(
    id: string,
    lan: string
  ): Promise<ResponseSuccess> {
    return this.setDefaultCaptionWithResponseHeaders(id, lan).then(
      (res) => res.body
    );
  }

  /**
   * Set default caption for a media
   * Set default caption
   * @param id Media ID
   * @param lan Language
   */
  public async setDefaultCaptionWithResponseHeaders(
    id: string,
    lan: string
  ): Promise<{ headers: ApiResponseHeaders; body: ResponseSuccess }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling setDefaultCaption.'
      );
    }
    if (lan === null || lan === undefined) {
      throw new Error(
        'Required parameter lan was null or undefined when calling setDefaultCaption.'
      );
    }
    // Path Params
    const localVarPath = '/media/{id}/captions/{lan}'
      .substring(1)
      .replace('{' + 'id' + '}', encodeURIComponent(String(id)))
      .replace('{' + 'lan' + '}', encodeURIComponent(String(lan)));

    queryParams.method = 'PATCH';

    return this.httpClient.call(localVarPath, queryParams).then((response) => {
      return {
        headers: response.headers,
        body: ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            response.body,
            response.headers['content-type']
          ),
          'ResponseSuccess',
          ''
        ) as ResponseSuccess,
      };
    });
  }

  /**
   * Get upload media when complete.
   * Get upload media when complete
   * @param id media&#39;s id
   */
  public async uploadMediaComplete(id: string): Promise<ResponseSuccess> {
    return this.uploadMediaCompleteWithResponseHeaders(id).then(
      (res) => res.body
    );
  }

  /**
   * Get upload media when complete.
   * Get upload media when complete
   * @param id media&#39;s id
   */
  public async uploadMediaCompleteWithResponseHeaders(
    id: string
  ): Promise<{ headers: ApiResponseHeaders; body: ResponseSuccess }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling uploadMediaComplete.'
      );
    }
    // Path Params
    const localVarPath = '/media/{id}/complete'
      .substring(1)
      .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

    queryParams.method = 'GET';

    return this.httpClient.call(localVarPath, queryParams).then((response) => {
      return {
        headers: response.headers,
        body: ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            response.body,
            response.headers['content-type']
          ),
          'ResponseSuccess',
          ''
        ) as ResponseSuccess,
      };
    });
  }

  /**
   * Upload part of media
   * This will create a progressive upload session.
   * @param id video&#39;s id
   * @param hash Md5 hash of part
   * @param index Index of the part
   */
  public createUploadPartProgressiveSession(
    id: string,
    hash?: string,
    index?: string
  ): ProgressiveSession<ResponseSuccess> {
    class UploadPartProgressiveSession<Type> {
      private httpClient: HttpClient;
      private currentPart = 1;

      constructor(httpClient: HttpClient) {
        this.httpClient = httpClient;
      }

      uploadPart(
        file: string,
        progressListener?: (event: UploadProgressEvent) => void
      ) {
        return this.upload(file, false, progressListener).then(
          (res) => res.body
        );
      }

      uploadPartWithResponseHeaders(
        file: string,
        progressListener?: (event: UploadProgressEvent) => void
      ) {
        return this.upload(file, false, progressListener);
      }

      uploadLastPart(
        file: string,
        progressListener?: (event: UploadProgressEvent) => void
      ) {
        return this.upload(file, true, progressListener).then(
          (res) => res.body
        );
      }

      uploadLastPartWithResponseHeaders(
        file: string,
        progressListener?: (event: UploadProgressEvent) => void
      ) {
        return this.upload(file, true, progressListener);
      }

      async upload(
        file: string,
        isLast: boolean,
        progressListener?: (event: UploadProgressEvent) => void
      ) {
        const queryParams: QueryOptions = {};
        queryParams.headers = {};

        if (id === null || id === undefined) {
          throw new Error(
            'Required parameter id was null or undefined when calling uploadPart.'
          );
        }

        if (!existsSync(file)) {
          throw new Error(`${file} must be a readable source file`);
        }

        const length = statSync(file).size;
        if (length <= 0) {
          throw new Error(`${file} is empty`);
        }
        // Path Params
        const localVarPath = '/media/{id}/part'
          .substring(1)
          .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        queryParams.method = 'POST';

        const formData = new FormData();

        const filename = path.basename(file);
        formData.append(filename, createReadStream(file), filename);
        queryParams.body = formData;
        queryParams.headers['Content-Range'] = `part ${this.currentPart}/${
          isLast ? this.currentPart : '*'
        }`;

        if (progressListener) {
          queryParams.onUploadProgress = (progress) => {
            progressListener({
              chunksCount: 1,
              currentChunk: 0,
              currentChunkUploadedBytes: progress.loaded,
              currentChunkTotalBytes: progress.total || 0,
              uploadedBytes: progress.loaded,
              totalBytes: progress.total || 0,
            });
          };
        }

        const response = await this.httpClient.call(localVarPath, queryParams);

        this.currentPart++;
        const responseBody = ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            response.body,
            response.headers['content-type']
          ),
          'ResponseSuccess',
          ''
        ) as Type;

        return {
          body: responseBody,
          headers: response.headers,
        };
      }
    }

    return new UploadPartProgressiveSession<ResponseSuccess>(this.httpClient);
  }

  /**
   * Upload part of media
   * Upload part of media
   * @param id video&#39;s id
   * @param file File media to be uploaded
   * @param hash Md5 hash of part
   * @param index Index of the part
   */
  public async uploadPart(
    id: string,
    file: string,
    hash?: string,
    index?: string,
    progressListener?: (event: UploadProgressEvent) => void
  ): Promise<ResponseSuccess> {
    return this.uploadPartWithResponseHeaders(
      id,
      file,
      hash,
      index,
      progressListener
    ).then((res) => res.body);
  }

  /**
   * Upload part of media
   * Upload part of media
   * @param id video&#39;s id
   * @param file File media to be uploaded
   * @param hash Md5 hash of part
   * @param index Index of the part
   */
  public async uploadPartWithResponseHeaders(
    id: string,
    file: string,
    hash?: string,
    index?: string,
    progressListener?: (event: UploadProgressEvent) => void
  ): Promise<{ headers: ApiResponseHeaders; body: ResponseSuccess }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling uploadPart.'
      );
    }
    if (!existsSync(file)) {
      throw new Error(`${file} must be a readable source file`);
    }

    const length = statSync(file).size;
    if (length <= 0) {
      throw new Error(`${file} is empty`);
    }
    // Path Params
    const localVarPath = '/media/{id}/part'
      .substring(1)
      .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

    queryParams.method = 'POST';

    const formData = new FormData();

    const chunkSize = this.httpClient.getChunkSize();
    // Upload in a single request when file is small enough
    if (chunkSize > length) {
      const filename = path.basename(file);
      const fileStream = createReadStream(file);
      const hash = crypto.createHash('md5');
      fileStream.pipe(hash);
      const md5Hash = await new Promise<string>((resolve, reject) => {
        hash.on('readable', () => {
          const data = hash.read();
          if (data) {
            resolve(data.toString('hex'));
          }
        });
        hash.on('error', reject);
      });
      formData.append('file', createReadStream(file), filename);
      formData.append('index', '1');
      formData.append('hash', md5Hash);
      queryParams.body = formData;
      queryParams.headers['Content-Range'] = `bytes 0-${length - 1}/${length}`;

      if (progressListener) {
        queryParams.onUploadProgress = (progress) => {
          progressListener({
            chunksCount: 1,
            currentChunk: 0,
            currentChunkUploadedBytes: progress.loaded,
            currentChunkTotalBytes: progress.total || 0,
            uploadedBytes: progress.loaded,
            totalBytes: progress.total || 0,
          });
        };
      }

      const call = this.httpClient.call(localVarPath, queryParams);

      return call.then((response) => {
        return {
          headers: response.headers,
          body: ObjectSerializer.deserialize(
            ObjectSerializer.parse(
              response.body,
              response.headers['content-type']
            ),
            'ResponseSuccess',
            ''
          ) as ResponseSuccess,
        };
      });
    }
    let uploadChunkSize = chunkSize;
    let stream;
    let chunkNumber = 0;
    const partsCount = Math.ceil(length / chunkSize);
    let offset = 0;
    const uploadRequests: Promise<any>[] = [];

    for (let part = 1; part <= partsCount; part++) {
      uploadChunkSize = chunkSize;
      // BUT,if we are on the last chunk to be uploaded, the uploaded chunk must be
      // reduced to match the remaining bytes in the file
      if (offset + uploadChunkSize > length) {
        uploadChunkSize = length - offset;
      }

      const filename = path.basename(file);
      const chunkFormData = new FormData({ maxDataSize: 100 * 1024 * 1024 });
      stream = createReadStream(file, {
        start: offset,
        end: uploadChunkSize + offset - 1,
      });
      const hash = crypto.createHash('md5');
      stream.pipe(hash);
      const md5Hash = await new Promise<string>((resolve, reject) => {
        hash.on('readable', () => {
          const data = hash.read();
          if (data) {
            resolve(data.toString('hex'));
          }
        });
        hash.on('error', reject);
      });
      queryParams.body = chunkFormData;
      chunkFormData.append('hash', md5Hash);
      chunkFormData.append('index', part.toString());
      const streamForUpload = createReadStream(file, {
        start: offset,
        end: uploadChunkSize + offset - 1,
      });
      const rangeStart = offset;
      const rangeEnd = offset + uploadChunkSize - 1;
      chunkFormData.append('file', streamForUpload, filename);
      queryParams.body = chunkFormData;
      queryParams.headers[
        'Content-Range'
      ] = `bytes ${rangeStart}-${rangeEnd}/${length}`;

      if (progressListener) {
        queryParams.onUploadProgress = (progress) => {
          progressListener({
            chunksCount: Math.ceil(length / chunkSize),
            currentChunk: chunkNumber,
            currentChunkUploadedBytes: progress.loaded,
            currentChunkTotalBytes: progress.total || 0,
            uploadedBytes: Math.min(
              length,
              chunkNumber * chunkSize + progress.loaded
            ),
            totalBytes: length,
          });
        };
      }
      const uploadPromise = this.httpClient
        .call(localVarPath, queryParams)
        .then((response) => {
          return {
            headers: response.headers,
            body: ObjectSerializer.deserialize(
              ObjectSerializer.parse(
                response.body,
                response.headers['content-type']
              ),
              'ResponseSuccess',
              ''
            ) as ResponseSuccess,
          };
        });

      uploadRequests.push(uploadPromise);

      chunkNumber++;
      offset += chunkSize;
    }
    const responses = await Promise.all(uploadRequests);

    return responses[responses.length - 1];

    if (typeof hash !== undefined) {
      formData.append('hash', hash);
    }

    if (typeof index !== undefined) {
      formData.append('index', index);
    }
  }
}
