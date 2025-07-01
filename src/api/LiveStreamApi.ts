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

import { URLSearchParams } from 'url';
import ObjectSerializer from '../ObjectSerializer';
import HttpClient, { QueryOptions, ApiResponseHeaders } from '../HttpClient';
import CreateLiveStreamKeyRequest from '../model/CreateLiveStreamKeyRequest';
import CreateLiveStreamKeyResponse from '../model/CreateLiveStreamKeyResponse';
import CreateStreamingRequest from '../model/CreateStreamingRequest';
import CreateStreamingResponse from '../model/CreateStreamingResponse';
import GetLiveStreamKeyResponse from '../model/GetLiveStreamKeyResponse';
import GetLiveStreamKeysListResponse from '../model/GetLiveStreamKeysListResponse';
import GetLiveStreamMediasRequest from '../model/GetLiveStreamMediasRequest';
import GetLiveStreamMediasResponse from '../model/GetLiveStreamMediasResponse';
import GetLiveStreamMulticastResponse from '../model/GetLiveStreamMulticastResponse';
import GetLiveStreamStatisticResponse from '../model/GetLiveStreamStatisticResponse';
import GetLiveStreamVideoPublicResponse from '../model/GetLiveStreamVideoPublicResponse';
import GetLiveStreamVideoResponse from '../model/GetLiveStreamVideoResponse';
import GetStreamingResponse from '../model/GetStreamingResponse';
import GetStreamingsResponse from '../model/GetStreamingsResponse';
import ResponseSuccess from '../model/ResponseSuccess';
import UpdateLiveStreamKeyRequest from '../model/UpdateLiveStreamKeyRequest';
import UpdateLiveStreamKeyResponse from '../model/UpdateLiveStreamKeyResponse';
import UpdateLiveStreamMediaRequest from '../model/UpdateLiveStreamMediaRequest';
import UpsertLiveStreamMulticastInput from '../model/UpsertLiveStreamMulticastInput';

/**
 * no description
 */
export default class LiveStreamApi {
  private httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  /**
   * Add live stream multicast
   * Add live stream multicast
   * @param streamKey Live stream key. Use uuid
   * @param data data
   */
  public async addMulticast(
    streamKey: string,
    data: UpsertLiveStreamMulticastInput = {}
  ): Promise<GetLiveStreamMulticastResponse> {
    return this.addMulticastWithResponseHeaders(streamKey, data).then(
      (res) => res.body
    );
  }

  /**
   * Add live stream multicast
   * Add live stream multicast
   * @param streamKey Live stream key. Use uuid
   * @param data data
   */
  public async addMulticastWithResponseHeaders(
    streamKey: string,
    data: UpsertLiveStreamMulticastInput = {}
  ): Promise<{
    headers: ApiResponseHeaders;
    body: GetLiveStreamMulticastResponse;
  }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (streamKey === null || streamKey === undefined) {
      throw new Error(
        'Required parameter streamKey was null or undefined when calling addMulticast.'
      );
    }
    if (data === null || data === undefined) {
      throw new Error(
        'Required parameter data was null or undefined when calling addMulticast.'
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
      ObjectSerializer.serialize(data, 'UpsertLiveStreamMulticastInput', ''),
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
   * @param input CreateLiveStreamKeyRequest
   */
  public async createLiveStreamKey(
    input: CreateLiveStreamKeyRequest = {}
  ): Promise<CreateLiveStreamKeyResponse> {
    return this.createLiveStreamKeyWithResponseHeaders(input).then(
      (res) => res.body
    );
  }

  /**
   * Create live stream key
   * Create live stream key
   * @param input CreateLiveStreamKeyRequest
   */
  public async createLiveStreamKeyWithResponseHeaders(
    input: CreateLiveStreamKeyRequest = {}
  ): Promise<{
    headers: ApiResponseHeaders;
    body: CreateLiveStreamKeyResponse;
  }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (input === null || input === undefined) {
      throw new Error(
        'Required parameter input was null or undefined when calling createLiveStreamKey.'
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
      ObjectSerializer.serialize(input, 'CreateLiveStreamKeyRequest', ''),
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
   * @param input CreateStreamingRequest
   */
  public async createStreaming(
    id: string,
    input: CreateStreamingRequest = {}
  ): Promise<CreateStreamingResponse> {
    return this.createStreamingWithResponseHeaders(id, input).then(
      (res) => res.body
    );
  }

  /**
   * Creates a new live stream media with the provided details
   * Create a new live stream media
   * @param id Live stream key ID
   * @param input CreateStreamingRequest
   */
  public async createStreamingWithResponseHeaders(
    id: string,
    input: CreateStreamingRequest = {}
  ): Promise<{ headers: ApiResponseHeaders; body: CreateStreamingResponse }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling createStreaming.'
      );
    }
    if (input === null || input === undefined) {
      throw new Error(
        'Required parameter input was null or undefined when calling createStreaming.'
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
      ObjectSerializer.serialize(input, 'CreateStreamingRequest', ''),
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
  public async deleteMulticast(streamKey: string): Promise<ResponseSuccess> {
    return this.deleteMulticastWithResponseHeaders(streamKey).then(
      (res) => res.body
    );
  }

  /**
   * Delete live stream multicast
   * Delete live stream multicast
   * @param streamKey Live stream key. UUID string format
   */
  public async deleteMulticastWithResponseHeaders(
    streamKey: string
  ): Promise<{ headers: ApiResponseHeaders; body: ResponseSuccess }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (streamKey === null || streamKey === undefined) {
      throw new Error(
        'Required parameter streamKey was null or undefined when calling deleteMulticast.'
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
   * Delete live stream are created by a specific live stream key
   * Delete live stream video
   * @param id Live stream key ID
   * @param streamId Streaming ID
   */
  public async deleteStreaming(
    id: string,
    streamId: string
  ): Promise<ResponseSuccess> {
    return this.deleteStreamingWithResponseHeaders(id, streamId).then(
      (res) => res.body
    );
  }

  /**
   * Delete live stream are created by a specific live stream key
   * Delete live stream video
   * @param id Live stream key ID
   * @param streamId Streaming ID
   */
  public async deleteStreamingWithResponseHeaders(
    id: string,
    streamId: string
  ): Promise<{ headers: ApiResponseHeaders; body: ResponseSuccess }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling deleteStreaming.'
      );
    }
    if (streamId === null || streamId === undefined) {
      throw new Error(
        'Required parameter streamId was null or undefined when calling deleteStreaming.'
      );
    }
    // Path Params
    const localVarPath = '/live_streams/{id}/streamings/{stream_id}'
      .substring(1)
      .replace('{' + 'id' + '}', encodeURIComponent(String(id)))
      .replace('{' + 'stream_id' + '}', encodeURIComponent(String(streamId)));

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
   */
  public async getLiveStreamKeys(
    args: {
      search?: string;
      sortBy?: 'created_at' | 'name';
      orderBy?: 'asc' | 'desc';
      offset?: number;
      limit?: number;
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
   */
  public async getLiveStreamKeysWithResponseHeaders({
    search,
    sortBy,
    orderBy,
    offset,
    limit,
  }: {
    search?: string;
    sortBy?: 'created_at' | 'name';
    orderBy?: 'asc' | 'desc';
    offset?: number;
    limit?: number;
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
          'GetLiveStreamKeysListResponse',
          ''
        ) as GetLiveStreamKeysListResponse,
      };
    });
  }

  /**
   * Get live stream video public for a specific live stream key
   * Get live stream video public
   * @param id Live stream key ID
   */
  public async getLiveStreamPlayerInfo(
    id: string
  ): Promise<GetLiveStreamVideoPublicResponse> {
    return this.getLiveStreamPlayerInfoWithResponseHeaders(id).then(
      (res) => res.body
    );
  }

  /**
   * Get live stream video public for a specific live stream key
   * Get live stream video public
   * @param id Live stream key ID
   */
  public async getLiveStreamPlayerInfoWithResponseHeaders(id: string): Promise<{
    headers: ApiResponseHeaders;
    body: GetLiveStreamVideoPublicResponse;
  }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling getLiveStreamPlayerInfo.'
      );
    }
    // Path Params
    const localVarPath = '/live_streams/player/{id}/videos'
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
          'GetLiveStreamVideoPublicResponse',
          ''
        ) as GetLiveStreamVideoPublicResponse,
      };
    });
  }

  /**
   * Get a specific live stream video by ID
   * Get live stream video
   * @param id Live stream video ID
   */
  public async getLiveStreamVideo(
    id: string
  ): Promise<GetLiveStreamVideoResponse> {
    return this.getLiveStreamVideoWithResponseHeaders(id).then(
      (res) => res.body
    );
  }

  /**
   * Get a specific live stream video by ID
   * Get live stream video
   * @param id Live stream video ID
   */
  public async getLiveStreamVideoWithResponseHeaders(id: string): Promise<{
    headers: ApiResponseHeaders;
    body: GetLiveStreamVideoResponse;
  }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling getLiveStreamVideo.'
      );
    }
    // Path Params
    const localVarPath = '/live_streams/{id}/video'
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
          'GetLiveStreamVideoResponse',
          ''
        ) as GetLiveStreamVideoResponse,
      };
    });
  }

  /**
   * Get live stream media for a specific live stream key
   * Get live stream media
   * @param id Live stream key ID
   * @param data data
   */
  public async getMedias(
    id: string,
    data: GetLiveStreamMediasRequest = {}
  ): Promise<GetLiveStreamMediasResponse> {
    return this.getMediasWithResponseHeaders(id, data).then((res) => res.body);
  }

  /**
   * Get live stream media for a specific live stream key
   * Get live stream media
   * @param id Live stream key ID
   * @param data data
   */
  public async getMediasWithResponseHeaders(
    id: string,
    data: GetLiveStreamMediasRequest = {}
  ): Promise<{
    headers: ApiResponseHeaders;
    body: GetLiveStreamMediasResponse;
  }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling getMedias.'
      );
    }
    if (data === null || data === undefined) {
      throw new Error(
        'Required parameter data was null or undefined when calling getMedias.'
      );
    }
    // Path Params
    const localVarPath = '/live_streams/{id}/videos'
      .substring(1)
      .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      'application/json',
    ]);
    queryParams.headers['Content-Type'] = contentType;

    queryParams.body = ObjectSerializer.stringify(
      ObjectSerializer.serialize(data, 'GetLiveStreamMediasRequest', ''),
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
  public async getMulticastByStreamKey(
    streamKey: string
  ): Promise<GetLiveStreamMulticastResponse> {
    return this.getMulticastByStreamKeyWithResponseHeaders(streamKey).then(
      (res) => res.body
    );
  }

  /**
   * Get live stream multicast by stream key
   * Get live stream multicast by stream key
   * @param streamKey Live stream key. UUID string format
   */
  public async getMulticastByStreamKeyWithResponseHeaders(
    streamKey: string
  ): Promise<{
    headers: ApiResponseHeaders;
    body: GetLiveStreamMulticastResponse;
  }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (streamKey === null || streamKey === undefined) {
      throw new Error(
        'Required parameter streamKey was null or undefined when calling getMulticastByStreamKey.'
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
   * Get live stream statistic by stream media id
   * Get live stream statistic by stream media id
   * @param streamMediaId Live stream media ID
   */
  public async getStatisticByStreamMediaId(
    streamMediaId: string
  ): Promise<GetLiveStreamStatisticResponse> {
    return this.getStatisticByStreamMediaIdWithResponseHeaders(
      streamMediaId
    ).then((res) => res.body);
  }

  /**
   * Get live stream statistic by stream media id
   * Get live stream statistic by stream media id
   * @param streamMediaId Live stream media ID
   */
  public async getStatisticByStreamMediaIdWithResponseHeaders(
    streamMediaId: string
  ): Promise<{
    headers: ApiResponseHeaders;
    body: GetLiveStreamStatisticResponse;
  }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (streamMediaId === null || streamMediaId === undefined) {
      throw new Error(
        'Required parameter streamMediaId was null or undefined when calling getStatisticByStreamMediaId.'
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
   * @param id Live stream key ID
   */
  public async getStreamings(id: string): Promise<GetStreamingsResponse> {
    return this.getStreamingsWithResponseHeaders(id).then((res) => res.body);
  }

  /**
   * Get live stream media streamings for a specific live stream key
   * Get live stream media streamings
   * @param id Live stream key ID
   */
  public async getStreamingsWithResponseHeaders(
    id: string
  ): Promise<{ headers: ApiResponseHeaders; body: GetStreamingsResponse }> {
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
   * Update a live stream key by ID
   * Update live stream key
   * @param id Live stream key ID
   * @param input UpdateLiveStreamKeyRequest
   */
  public async updateLiveStreamKey(
    id: string,
    input: UpdateLiveStreamKeyRequest = {}
  ): Promise<UpdateLiveStreamKeyResponse> {
    return this.updateLiveStreamKeyWithResponseHeaders(id, input).then(
      (res) => res.body
    );
  }

  /**
   * Update a live stream key by ID
   * Update live stream key
   * @param id Live stream key ID
   * @param input UpdateLiveStreamKeyRequest
   */
  public async updateLiveStreamKeyWithResponseHeaders(
    id: string,
    input: UpdateLiveStreamKeyRequest = {}
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
    if (input === null || input === undefined) {
      throw new Error(
        'Required parameter input was null or undefined when calling updateLiveStreamKey.'
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
      ObjectSerializer.serialize(input, 'UpdateLiveStreamKeyRequest', ''),
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
   * @param data data
   */
  public async updateMedia(
    id: string,
    data: UpdateLiveStreamMediaRequest = {}
  ): Promise<ResponseSuccess> {
    return this.updateMediaWithResponseHeaders(id, data).then(
      (res) => res.body
    );
  }

  /**
   * Update live stream media. You can only update while live streaming.
   * Update live stream media
   * @param id Live stream key ID
   * @param data data
   */
  public async updateMediaWithResponseHeaders(
    id: string,
    data: UpdateLiveStreamMediaRequest = {}
  ): Promise<{ headers: ApiResponseHeaders; body: ResponseSuccess }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling updateMedia.'
      );
    }
    if (data === null || data === undefined) {
      throw new Error(
        'Required parameter data was null or undefined when calling updateMedia.'
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
      ObjectSerializer.serialize(data, 'UpdateLiveStreamMediaRequest', ''),
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
