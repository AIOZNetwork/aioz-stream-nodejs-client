/**
 * @aiozstream/nodejs-client
 * The AIOZ Stream API, as the generated SDK clients see it.
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated.
 * Do not edit the class manually.
 */

import path from 'path';
import { createReadStream } from 'fs';
import { URLSearchParams } from 'url';
import FormData from 'form-data';
import ObjectSerializer from '../ObjectSerializer';
import HttpClient, { QueryOptions, ApiResponseHeaders } from '../HttpClient';
import CreateLiveStreamKeyRequest from '../model/CreateLiveStreamKeyRequest';
import CreateLiveStreamKeyResponse from '../model/CreateLiveStreamKeyResponse';
import CreateStreamingRequest from '../model/CreateStreamingRequest';
import CreateStreamingResponse from '../model/CreateStreamingResponse';
import GetLiveStreamKeyResponse from '../model/GetLiveStreamKeyResponse';
import GetLiveStreamKeysListResponse from '../model/GetLiveStreamKeysListResponse';
import GetLiveStreamMediaPublicResponse from '../model/GetLiveStreamMediaPublicResponse';
import GetLiveStreamMediaResponse from '../model/GetLiveStreamMediaResponse';
import GetLiveStreamMediasRequest from '../model/GetLiveStreamMediasRequest';
import GetLiveStreamMediasResponse from '../model/GetLiveStreamMediasResponse';
import GetLiveStreamMulticastResponse from '../model/GetLiveStreamMulticastResponse';
import GetLiveStreamStatisticResponse from '../model/GetLiveStreamStatisticResponse';
import GetStreamUsageResponse from '../model/GetStreamUsageResponse';
import GetStreamingResponse from '../model/GetStreamingResponse';
import GetStreamingsResponse from '../model/GetStreamingsResponse';
import GetUserStreamsUsageDetailResponse from '../model/GetUserStreamsUsageDetailResponse';
import ResponseSuccess from '../model/ResponseSuccess';
import UpdateLiveStreamKeyRequest from '../model/UpdateLiveStreamKeyRequest';
import UpdateLiveStreamKeyResponse from '../model/UpdateLiveStreamKeyResponse';
import UpdateLiveStreamMediaRequest from '../model/UpdateLiveStreamMediaRequest';
import UpsertLiveStreamMulticastInput from '../model/UpsertLiveStreamMulticastInput';
import { Readable } from 'stream';
import { readableToBuffer } from '../HttpClient';

/**
 * no description
 */
export default class LiveStreamApi {
  private httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  /**
   * Upload live stream media thumbnail
   * @param id live stream media&#39;s id
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
   * Upload live stream media thumbnail
   * @param id live stream media&#39;s id
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
    const localVarPath = '/live_streams/{id}/thumbnail'
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
   * Delete live stream media thumbnail
   * @param id live stream media&#39;s id
   */
  public async deleteThumbnail(id: string): Promise<ResponseSuccess> {
    return this.deleteThumbnailWithResponseHeaders(id).then((res) => res.body);
  }

  /**
   * Delete live stream media thumbnail
   * @param id live stream media&#39;s id
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
    const localVarPath = '/live_streams/{id}/thumbnail'
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
   * Add live stream multicast
   * Add live stream multicast
   * @param streamKey Live stream key. Use uuid
   * @param upsertLiveStreamMulticastInput data
   */
  public async addLiveStreamMulticasts(
    streamKey: string,
    upsertLiveStreamMulticastInput: UpsertLiveStreamMulticastInput = {}
  ): Promise<GetLiveStreamMulticastResponse> {
    return this.addLiveStreamMulticastsWithResponseHeaders(
      streamKey,
      upsertLiveStreamMulticastInput
    ).then((res) => res.body);
  }

  /**
   * Add live stream multicast
   * Add live stream multicast
   * @param streamKey Live stream key. Use uuid
   * @param upsertLiveStreamMulticastInput data
   */
  public async addLiveStreamMulticastsWithResponseHeaders(
    streamKey: string,
    upsertLiveStreamMulticastInput: UpsertLiveStreamMulticastInput = {}
  ): Promise<{
    headers: ApiResponseHeaders;
    body: GetLiveStreamMulticastResponse;
  }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (streamKey === null || streamKey === undefined) {
      throw new Error(
        'Required parameter streamKey was null or undefined when calling addLiveStreamMulticasts.'
      );
    }
    if (
      upsertLiveStreamMulticastInput === null ||
      upsertLiveStreamMulticastInput === undefined
    ) {
      throw new Error(
        'Required parameter upsertLiveStreamMulticastInput was null or undefined when calling addLiveStreamMulticasts.'
      );
    }
    // Path Params
    const localVarPath = '/live_streams/multicast/{stream_key}'
      .substring(1)
      .replace('{' + 'stream_key' + '}', encodeURIComponent(String(streamKey)));

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      'application/json',
    ]);
    queryParams.headers['Content-Type'] = contentType;

    queryParams.body = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        upsertLiveStreamMulticastInput,
        'UpsertLiveStreamMulticastInput',
        ''
      ),
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
          'GetLiveStreamMulticastResponse',
          ''
        ) as GetLiveStreamMulticastResponse,
      };
    });
  }

  /**
   * Create live stream key
   * Create live stream key
   * @param createLiveStreamKeyRequest CreateLiveStreamKeyRequest
   */
  public async createLiveStreamKey(
    createLiveStreamKeyRequest: CreateLiveStreamKeyRequest = {}
  ): Promise<CreateLiveStreamKeyResponse> {
    return this.createLiveStreamKeyWithResponseHeaders(
      createLiveStreamKeyRequest
    ).then((res) => res.body);
  }

  /**
   * Create live stream key
   * Create live stream key
   * @param createLiveStreamKeyRequest CreateLiveStreamKeyRequest
   */
  public async createLiveStreamKeyWithResponseHeaders(
    createLiveStreamKeyRequest: CreateLiveStreamKeyRequest = {}
  ): Promise<{
    headers: ApiResponseHeaders;
    body: CreateLiveStreamKeyResponse;
  }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (
      createLiveStreamKeyRequest === null ||
      createLiveStreamKeyRequest === undefined
    ) {
      throw new Error(
        'Required parameter createLiveStreamKeyRequest was null or undefined when calling createLiveStreamKey.'
      );
    }
    // Path Params
    const localVarPath = '/live_streams'.substring(1);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      'application/json',
    ]);
    queryParams.headers['Content-Type'] = contentType;

    queryParams.body = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        createLiveStreamKeyRequest,
        'CreateLiveStreamKeyRequest',
        ''
      ),
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
          'CreateLiveStreamKeyResponse',
          ''
        ) as CreateLiveStreamKeyResponse,
      };
    });
  }

  /**
   * Creates a new live stream media with the provided details
   * Create a new live stream media
   * @param id Live stream key ID
   * @param createStreamingRequest CreateStreamingRequest
   */
  public async createStreaming(
    id: string,
    createStreamingRequest: CreateStreamingRequest = {}
  ): Promise<CreateStreamingResponse> {
    return this.createStreamingWithResponseHeaders(
      id,
      createStreamingRequest
    ).then((res) => res.body);
  }

  /**
   * Creates a new live stream media with the provided details
   * Create a new live stream media
   * @param id Live stream key ID
   * @param createStreamingRequest CreateStreamingRequest
   */
  public async createStreamingWithResponseHeaders(
    id: string,
    createStreamingRequest: CreateStreamingRequest = {}
  ): Promise<{ headers: ApiResponseHeaders; body: CreateStreamingResponse }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling createStreaming.'
      );
    }
    if (
      createStreamingRequest === null ||
      createStreamingRequest === undefined
    ) {
      throw new Error(
        'Required parameter createStreamingRequest was null or undefined when calling createStreaming.'
      );
    }
    // Path Params
    const localVarPath = '/live_streams/{id}/streamings'
      .substring(1)
      .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      'application/json',
    ]);
    queryParams.headers['Content-Type'] = contentType;

    queryParams.body = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        createStreamingRequest,
        'CreateStreamingRequest',
        ''
      ),
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
          'CreateStreamingResponse',
          ''
        ) as CreateStreamingResponse,
      };
    });
  }

  /**
   * Delete a live stream key by ID
   * Delete live stream key
   * @param id Live stream key ID
   */
  public async deleteLiveStreamKey(id: string): Promise<ResponseSuccess> {
    return this.deleteLiveStreamKeyWithResponseHeaders(id).then(
      (res) => res.body
    );
  }

  /**
   * Delete a live stream key by ID
   * Delete live stream key
   * @param id Live stream key ID
   */
  public async deleteLiveStreamKeyWithResponseHeaders(
    id: string
  ): Promise<{ headers: ApiResponseHeaders; body: ResponseSuccess }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling deleteLiveStreamKey.'
      );
    }
    // Path Params
    const localVarPath = '/live_streams/{id}'
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
   * Delete live stream multicast
   * Delete live stream multicast
   * @param streamKey Live stream key. UUID string format
   */
  public async deleteLiveStreamMulticast(
    streamKey: string
  ): Promise<ResponseSuccess> {
    return this.deleteLiveStreamMulticastWithResponseHeaders(streamKey).then(
      (res) => res.body
    );
  }

  /**
   * Delete live stream multicast
   * Delete live stream multicast
   * @param streamKey Live stream key. UUID string format
   */
  public async deleteLiveStreamMulticastWithResponseHeaders(
    streamKey: string
  ): Promise<{ headers: ApiResponseHeaders; body: ResponseSuccess }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (streamKey === null || streamKey === undefined) {
      throw new Error(
        'Required parameter streamKey was null or undefined when calling deleteLiveStreamMulticast.'
      );
    }
    // Path Params
    const localVarPath = '/live_streams/multicast/{stream_key}'
      .substring(1)
      .replace('{' + 'stream_key' + '}', encodeURIComponent(String(streamKey)));

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
   * Get live stream key
   * Get live stream key
   * @param id ID
   */
  public async getLiveStreamKey(id: string): Promise<GetLiveStreamKeyResponse> {
    return this.getLiveStreamKeyWithResponseHeaders(id).then((res) => res.body);
  }

  /**
   * Get live stream key
   * Get live stream key
   * @param id ID
   */
  public async getLiveStreamKeyWithResponseHeaders(
    id: string
  ): Promise<{ headers: ApiResponseHeaders; body: GetLiveStreamKeyResponse }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling getLiveStreamKey.'
      );
    }
    // Path Params
    const localVarPath = '/live_streams/{id}'
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
          'GetLiveStreamKeyResponse',
          ''
        ) as GetLiveStreamKeyResponse,
      };
    });
  }

  /**
   * Get live stream key list
   * Get live stream key list
   * @param {Object} searchParams
   * @param { string } searchParams.search only support search by name
   * @param { &#39;created_at&#39; | &#39;name&#39; } searchParams.sortBy sort by
   * @param { &#39;asc&#39; | &#39;desc&#39; } searchParams.orderBy allowed: asc, desc. Default: asc
   * @param { number } searchParams.offset offset, allowed values greater than or equal to 0.
   * @param { number } searchParams.limit results per page.
   * @param { &#39;audio&#39; | &#39;video&#39; } searchParams.type type of media. Enums(audio, video) default(video).
   */
  public async getLiveStreamKeys(
    args: {
      search?: string;
      sortBy?: 'created_at' | 'name';
      orderBy?: 'asc' | 'desc';
      offset?: number;
      limit?: number;
      type?: 'audio' | 'video';
    } = {}
  ): Promise<GetLiveStreamKeysListResponse> {
    return this.getLiveStreamKeysWithResponseHeaders(args).then(
      (res) => res.body
    );
  }

  /**
   * Get live stream key list
   * Get live stream key list
   * @param {Object} searchParams
   * @param { string } searchParams.search only support search by name
   * @param { &#39;created_at&#39; | &#39;name&#39; } searchParams.sortBy sort by
   * @param { &#39;asc&#39; | &#39;desc&#39; } searchParams.orderBy allowed: asc, desc. Default: asc
   * @param { number } searchParams.offset offset, allowed values greater than or equal to 0.
   * @param { number } searchParams.limit results per page.
   * @param { &#39;audio&#39; | &#39;video&#39; } searchParams.type type of media. Enums(audio, video) default(video).
   */
  public async getLiveStreamKeysWithResponseHeaders({
    search,
    sortBy,
    orderBy,
    offset,
    limit,
    type,
  }: {
    search?: string;
    sortBy?: 'created_at' | 'name';
    orderBy?: 'asc' | 'desc';
    offset?: number;
    limit?: number;
    type?: 'audio' | 'video';
  } = {}): Promise<{
    headers: ApiResponseHeaders;
    body: GetLiveStreamKeysListResponse;
  }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    // Path Params
    const localVarPath = '/live_streams'.substring(1);

    // Query Params
    const urlSearchParams = new URLSearchParams();

    if (search !== undefined) {
      urlSearchParams.append(
        'search',
        ObjectSerializer.serialize(search, 'string', '')
      );
    }
    if (sortBy !== undefined) {
      urlSearchParams.append(
        'sort_by',
        ObjectSerializer.serialize(sortBy, "'created_at' | 'name'", '')
      );
    }
    if (orderBy !== undefined) {
      urlSearchParams.append(
        'order_by',
        ObjectSerializer.serialize(orderBy, "'asc' | 'desc'", '')
      );
    }
    if (offset !== undefined) {
      urlSearchParams.append(
        'offset',
        ObjectSerializer.serialize(offset, 'number', 'int64')
      );
    }
    if (limit !== undefined) {
      urlSearchParams.append(
        'limit',
        ObjectSerializer.serialize(limit, 'number', 'int64')
      );
    }
    if (type !== undefined) {
      urlSearchParams.append(
        'type',
        ObjectSerializer.serialize(type, "'audio' | 'video'", '')
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
          'GetLiveStreamKeysListResponse',
          ''
        ) as GetLiveStreamKeysListResponse,
      };
    });
  }

  /**
   * Get a specific live stream media by ID
   * Get live stream media
   * @param id Live stream media ID
   */
  public async getLiveStreamMedia(
    id: string
  ): Promise<GetLiveStreamMediaResponse> {
    return this.getLiveStreamMediaWithResponseHeaders(id).then(
      (res) => res.body
    );
  }

  /**
   * Get a specific live stream media by ID
   * Get live stream media
   * @param id Live stream media ID
   */
  public async getLiveStreamMediaWithResponseHeaders(id: string): Promise<{
    headers: ApiResponseHeaders;
    body: GetLiveStreamMediaResponse;
  }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling getLiveStreamMedia.'
      );
    }
    // Path Params
    const localVarPath = '/live_streams/{id}/media'
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
          'GetLiveStreamMediaResponse',
          ''
        ) as GetLiveStreamMediaResponse,
      };
    });
  }

  /**
   * Get live stream media for a specific live stream key
   * Get live stream media
   * @param id Live stream key ID
   * @param getLiveStreamMediasRequest data
   */
  public async getLiveStreamMedias(
    id: string,
    getLiveStreamMediasRequest: GetLiveStreamMediasRequest = {}
  ): Promise<GetLiveStreamMediasResponse> {
    return this.getLiveStreamMediasWithResponseHeaders(
      id,
      getLiveStreamMediasRequest
    ).then((res) => res.body);
  }

  /**
   * Get live stream media for a specific live stream key
   * Get live stream media
   * @param id Live stream key ID
   * @param getLiveStreamMediasRequest data
   */
  public async getLiveStreamMediasWithResponseHeaders(
    id: string,
    getLiveStreamMediasRequest: GetLiveStreamMediasRequest = {}
  ): Promise<{
    headers: ApiResponseHeaders;
    body: GetLiveStreamMediasResponse;
  }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling getLiveStreamMedias.'
      );
    }
    if (
      getLiveStreamMediasRequest === null ||
      getLiveStreamMediasRequest === undefined
    ) {
      throw new Error(
        'Required parameter getLiveStreamMediasRequest was null or undefined when calling getLiveStreamMedias.'
      );
    }
    // Path Params
    const localVarPath = '/live_streams/{id}/media'
      .substring(1)
      .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      'application/json',
    ]);
    queryParams.headers['Content-Type'] = contentType;

    queryParams.body = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        getLiveStreamMediasRequest,
        'GetLiveStreamMediasRequest',
        ''
      ),
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
          'GetLiveStreamMediasResponse',
          ''
        ) as GetLiveStreamMediasResponse,
      };
    });
  }

  /**
   * Get live stream multicast by stream key
   * Get live stream multicast by stream key
   * @param streamKey Live stream key. UUID string format
   */
  public async getLiveStreamMulticastByStreamKey(
    streamKey: string
  ): Promise<GetLiveStreamMulticastResponse> {
    return this.getLiveStreamMulticastByStreamKeyWithResponseHeaders(
      streamKey
    ).then((res) => res.body);
  }

  /**
   * Get live stream multicast by stream key
   * Get live stream multicast by stream key
   * @param streamKey Live stream key. UUID string format
   */
  public async getLiveStreamMulticastByStreamKeyWithResponseHeaders(
    streamKey: string
  ): Promise<{
    headers: ApiResponseHeaders;
    body: GetLiveStreamMulticastResponse;
  }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (streamKey === null || streamKey === undefined) {
      throw new Error(
        'Required parameter streamKey was null or undefined when calling getLiveStreamMulticastByStreamKey.'
      );
    }
    // Path Params
    const localVarPath = '/live_streams/multicast/{stream_key}'
      .substring(1)
      .replace('{' + 'stream_key' + '}', encodeURIComponent(String(streamKey)));

    queryParams.method = 'GET';

    return this.httpClient.call(localVarPath, queryParams).then((response) => {
      return {
        headers: response.headers,
        body: ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            response.body,
            response.headers['content-type']
          ),
          'GetLiveStreamMulticastResponse',
          ''
        ) as GetLiveStreamMulticastResponse,
      };
    });
  }

  /**
   * Get live stream media public for a specific live stream key
   * Get live stream media public
   * @param id Live stream key ID
   */
  public async getLiveStreamPlayerInfo(
    id: string
  ): Promise<GetLiveStreamMediaPublicResponse> {
    return this.getLiveStreamPlayerInfoWithResponseHeaders(id).then(
      (res) => res.body
    );
  }

  /**
   * Get live stream media public for a specific live stream key
   * Get live stream media public
   * @param id Live stream key ID
   */
  public async getLiveStreamPlayerInfoWithResponseHeaders(id: string): Promise<{
    headers: ApiResponseHeaders;
    body: GetLiveStreamMediaPublicResponse;
  }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling getLiveStreamPlayerInfo.'
      );
    }
    // Path Params
    const localVarPath = '/live_streams/player/{id}/media'
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
          'GetLiveStreamMediaPublicResponse',
          ''
        ) as GetLiveStreamMediaPublicResponse,
      };
    });
  }

  /**
   * Get live stream statistic by stream media id
   * Get live stream statistic by stream media id
   * @param streamMediaId Live stream media ID
   */
  public async getLiveStreamStatisticByStreamMediaId(
    streamMediaId: string
  ): Promise<GetLiveStreamStatisticResponse> {
    return this.getLiveStreamStatisticByStreamMediaIdWithResponseHeaders(
      streamMediaId
    ).then((res) => res.body);
  }

  /**
   * Get live stream statistic by stream media id
   * Get live stream statistic by stream media id
   * @param streamMediaId Live stream media ID
   */
  public async getLiveStreamStatisticByStreamMediaIdWithResponseHeaders(
    streamMediaId: string
  ): Promise<{
    headers: ApiResponseHeaders;
    body: GetLiveStreamStatisticResponse;
  }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (streamMediaId === null || streamMediaId === undefined) {
      throw new Error(
        'Required parameter streamMediaId was null or undefined when calling getLiveStreamStatisticByStreamMediaId.'
      );
    }
    // Path Params
    const localVarPath = '/live_streams/statistic/{stream_media_id}'
      .substring(1)
      .replace(
        '{' + 'stream_media_id' + '}',
        encodeURIComponent(String(streamMediaId))
      );

    queryParams.method = 'GET';

    return this.httpClient.call(localVarPath, queryParams).then((response) => {
      return {
        headers: response.headers,
        body: ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            response.body,
            response.headers['content-type']
          ),
          'GetLiveStreamStatisticResponse',
          ''
        ) as GetLiveStreamStatisticResponse,
      };
    });
  }

  /**
   * Returns transcoding duration, storage, and per-rendition breakdown for a stream
   * Get usage details for a specific live stream
   * @param streamId Stream ID (LiveStreamMedia ID)
   */
  public async getLiveStreamUsage(
    streamId: string
  ): Promise<GetStreamUsageResponse> {
    return this.getLiveStreamUsageWithResponseHeaders(streamId).then(
      (res) => res.body
    );
  }

  /**
   * Returns transcoding duration, storage, and per-rendition breakdown for a stream
   * Get usage details for a specific live stream
   * @param streamId Stream ID (LiveStreamMedia ID)
   */
  public async getLiveStreamUsageWithResponseHeaders(
    streamId: string
  ): Promise<{ headers: ApiResponseHeaders; body: GetStreamUsageResponse }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (streamId === null || streamId === undefined) {
      throw new Error(
        'Required parameter streamId was null or undefined when calling getLiveStreamUsage.'
      );
    }
    // Path Params
    const localVarPath = '/live_streams/usage/{stream_id}'
      .substring(1)
      .replace('{' + 'stream_id' + '}', encodeURIComponent(String(streamId)));

    queryParams.method = 'GET';

    return this.httpClient.call(localVarPath, queryParams).then((response) => {
      return {
        headers: response.headers,
        body: ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            response.body,
            response.headers['content-type']
          ),
          'GetStreamUsageResponse',
          ''
        ) as GetStreamUsageResponse,
      };
    });
  }

  /**
   * Get live stream media streaming for a specific live stream key
   * Get live stream media streaming
   * @param id Live stream key ID
   * @param streamId Stream ID
   */
  public async getStreaming(
    id: string,
    streamId: string
  ): Promise<GetStreamingResponse> {
    return this.getStreamingWithResponseHeaders(id, streamId).then(
      (res) => res.body
    );
  }

  /**
   * Get live stream media streaming for a specific live stream key
   * Get live stream media streaming
   * @param id Live stream key ID
   * @param streamId Stream ID
   */
  public async getStreamingWithResponseHeaders(
    id: string,
    streamId: string
  ): Promise<{ headers: ApiResponseHeaders; body: GetStreamingResponse }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling getStreaming.'
      );
    }
    if (streamId === null || streamId === undefined) {
      throw new Error(
        'Required parameter streamId was null or undefined when calling getStreaming.'
      );
    }
    // Path Params
    const localVarPath = '/live_streams/{id}/streamings/{stream_id}'
      .substring(1)
      .replace('{' + 'id' + '}', encodeURIComponent(String(id)))
      .replace('{' + 'stream_id' + '}', encodeURIComponent(String(streamId)));

    queryParams.method = 'GET';

    return this.httpClient.call(localVarPath, queryParams).then((response) => {
      return {
        headers: response.headers,
        body: ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            response.body,
            response.headers['content-type']
          ),
          'GetStreamingResponse',
          ''
        ) as GetStreamingResponse,
      };
    });
  }

  /**
   * Get live stream media streamings for a specific live stream key
   * Get live stream media streamings
   * @param {Object} searchParams
   * @param { string } searchParams.id Live stream key ID
   * @param { string } searchParams.search Search
   */
  public async getStreamings(args: {
    id: string;
    search?: string;
  }): Promise<GetStreamingsResponse> {
    return this.getStreamingsWithResponseHeaders(args).then((res) => res.body);
  }

  /**
   * Get live stream media streamings for a specific live stream key
   * Get live stream media streamings
   * @param {Object} searchParams
   * @param { string } searchParams.id Live stream key ID
   * @param { string } searchParams.search Search
   */
  public async getStreamingsWithResponseHeaders({
    id,
    search,
  }: {
    id: string;
    search?: string;
  }): Promise<{ headers: ApiResponseHeaders; body: GetStreamingsResponse }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling getStreamings.'
      );
    }
    // Path Params
    const localVarPath = '/live_streams/{id}/streamings'
      .substring(1)
      .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

    // Query Params
    const urlSearchParams = new URLSearchParams();

    if (search !== undefined) {
      urlSearchParams.append(
        'search',
        ObjectSerializer.serialize(search, 'string', '')
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
          'GetStreamingsResponse',
          ''
        ) as GetStreamingsResponse,
      };
    });
  }

  /**
   * Returns list of streams with their transcoding duration, storage, and renditions
   * Get paginated list of streams with usage details for current user
   * @param {Object} searchParams
   * @param { number } searchParams.from Start unix timestamp (seconds)
   * @param { number } searchParams.to End unix timestamp (seconds)
   * @param { number } searchParams.offset Offset for pagination
   * @param { number } searchParams.limit Limit for pagination
   */
  public async getUserStreamsUsageDetail(args: {
    from?: number;
    to?: number;
    offset?: number;
    limit?: number;
  }): Promise<GetUserStreamsUsageDetailResponse> {
    return this.getUserStreamsUsageDetailWithResponseHeaders(args).then(
      (res) => res.body
    );
  }

  /**
   * Returns list of streams with their transcoding duration, storage, and renditions
   * Get paginated list of streams with usage details for current user
   * @param {Object} searchParams
   * @param { number } searchParams.from Start unix timestamp (seconds)
   * @param { number } searchParams.to End unix timestamp (seconds)
   * @param { number } searchParams.offset Offset for pagination
   * @param { number } searchParams.limit Limit for pagination
   */
  public async getUserStreamsUsageDetailWithResponseHeaders({
    from,
    to,
    offset,
    limit,
  }: {
    from?: number;
    to?: number;
    offset?: number;
    limit?: number;
  }): Promise<{
    headers: ApiResponseHeaders;
    body: GetUserStreamsUsageDetailResponse;
  }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    // Path Params
    const localVarPath = '/live_streams/usage/streams'.substring(1);

    // Query Params
    const urlSearchParams = new URLSearchParams();

    if (from !== undefined) {
      urlSearchParams.append(
        'from',
        ObjectSerializer.serialize(from, 'number', 'int64')
      );
    }
    if (to !== undefined) {
      urlSearchParams.append(
        'to',
        ObjectSerializer.serialize(to, 'number', 'int64')
      );
    }
    if (offset !== undefined) {
      urlSearchParams.append(
        'offset',
        ObjectSerializer.serialize(offset, 'number', 'int64')
      );
    }
    if (limit !== undefined) {
      urlSearchParams.append(
        'limit',
        ObjectSerializer.serialize(limit, 'number', 'int64')
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
          'GetUserStreamsUsageDetailResponse',
          ''
        ) as GetUserStreamsUsageDetailResponse,
      };
    });
  }

  /**
   * Update a live stream key by ID
   * Update live stream key
   * @param id Live stream key ID
   * @param updateLiveStreamKeyRequest UpdateLiveStreamKeyRequest
   */
  public async updateLiveStreamKey(
    id: string,
    updateLiveStreamKeyRequest: UpdateLiveStreamKeyRequest = {}
  ): Promise<UpdateLiveStreamKeyResponse> {
    return this.updateLiveStreamKeyWithResponseHeaders(
      id,
      updateLiveStreamKeyRequest
    ).then((res) => res.body);
  }

  /**
   * Update a live stream key by ID
   * Update live stream key
   * @param id Live stream key ID
   * @param updateLiveStreamKeyRequest UpdateLiveStreamKeyRequest
   */
  public async updateLiveStreamKeyWithResponseHeaders(
    id: string,
    updateLiveStreamKeyRequest: UpdateLiveStreamKeyRequest = {}
  ): Promise<{
    headers: ApiResponseHeaders;
    body: UpdateLiveStreamKeyResponse;
  }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling updateLiveStreamKey.'
      );
    }
    if (
      updateLiveStreamKeyRequest === null ||
      updateLiveStreamKeyRequest === undefined
    ) {
      throw new Error(
        'Required parameter updateLiveStreamKeyRequest was null or undefined when calling updateLiveStreamKey.'
      );
    }
    // Path Params
    const localVarPath = '/live_streams/{id}'
      .substring(1)
      .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      'application/json',
    ]);
    queryParams.headers['Content-Type'] = contentType;

    queryParams.body = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        updateLiveStreamKeyRequest,
        'UpdateLiveStreamKeyRequest',
        ''
      ),
      contentType
    );

    queryParams.method = 'PUT';

    return this.httpClient.call(localVarPath, queryParams).then((response) => {
      return {
        headers: response.headers,
        body: ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            response.body,
            response.headers['content-type']
          ),
          'UpdateLiveStreamKeyResponse',
          ''
        ) as UpdateLiveStreamKeyResponse,
      };
    });
  }

  /**
   * Update live stream media. You can only update while live streaming.
   * Update live stream media
   * @param id Live stream key ID
   * @param updateLiveStreamMediaRequest data
   */
  public async updateLiveStreamMedia(
    id: string,
    updateLiveStreamMediaRequest: UpdateLiveStreamMediaRequest = {}
  ): Promise<ResponseSuccess> {
    return this.updateLiveStreamMediaWithResponseHeaders(
      id,
      updateLiveStreamMediaRequest
    ).then((res) => res.body);
  }

  /**
   * Update live stream media. You can only update while live streaming.
   * Update live stream media
   * @param id Live stream key ID
   * @param updateLiveStreamMediaRequest data
   */
  public async updateLiveStreamMediaWithResponseHeaders(
    id: string,
    updateLiveStreamMediaRequest: UpdateLiveStreamMediaRequest = {}
  ): Promise<{ headers: ApiResponseHeaders; body: ResponseSuccess }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling updateLiveStreamMedia.'
      );
    }
    if (
      updateLiveStreamMediaRequest === null ||
      updateLiveStreamMediaRequest === undefined
    ) {
      throw new Error(
        'Required parameter updateLiveStreamMediaRequest was null or undefined when calling updateLiveStreamMedia.'
      );
    }
    // Path Params
    const localVarPath = '/live_streams/{id}/streamings'
      .substring(1)
      .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      'application/json',
    ]);
    queryParams.headers['Content-Type'] = contentType;

    queryParams.body = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        updateLiveStreamMediaRequest,
        'UpdateLiveStreamMediaRequest',
        ''
      ),
      contentType
    );

    queryParams.method = 'PUT';

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
}
