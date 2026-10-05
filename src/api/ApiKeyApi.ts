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

import { URLSearchParams } from 'url';
import ObjectSerializer from '../ObjectSerializer';
import HttpClient, { QueryOptions, ApiResponseHeaders } from '../HttpClient';
import CreateApiKeyRequest from '../model/CreateApiKeyRequest';
import CreateApiKeyResponse from '../model/CreateApiKeyResponse';
import ListApiKeysResponse from '../model/ListApiKeysResponse';
import RenameApiKeyRequest from '../model/RenameApiKeyRequest';
import ResponseSuccess from '../model/ResponseSuccess';

/**
 * no description
 */
export default class ApiKeyApi {
  private httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  /**
   * Creates a new API key for the caller's workspace. The secret is returned once, here, and never again.
   * Create API key
   * @param createApiKeyRequest api key&#39;s data
   */
  public async create(
    createApiKeyRequest: CreateApiKeyRequest = {}
  ): Promise<CreateApiKeyResponse> {
    return this.createWithResponseHeaders(createApiKeyRequest).then(
      (res) => res.body
    );
  }

  /**
   * Creates a new API key for the caller's workspace. The secret is returned once, here, and never again.
   * Create API key
   * @param createApiKeyRequest api key&#39;s data
   */
  public async createWithResponseHeaders(
    createApiKeyRequest: CreateApiKeyRequest = {}
  ): Promise<{ headers: ApiResponseHeaders; body: CreateApiKeyResponse }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (createApiKeyRequest === null || createApiKeyRequest === undefined) {
      throw new Error(
        'Required parameter createApiKeyRequest was null or undefined when calling create.'
      );
    }
    // Path Params
    const localVarPath = '/api_keys'.substring(1);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      'application/json',

      'application/x-www-form-urlencoded',
    ]);
    queryParams.headers['Content-Type'] = contentType;

    queryParams.body = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        createApiKeyRequest,
        'CreateApiKeyRequest',
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
          'CreateApiKeyResponse',
          ''
        ) as CreateApiKeyResponse,
      };
    });
  }

  /**
   * Changes an API key's display name. The key and its secret are unchanged.
   * Rename an API key
   * @param id API key ID
   * @param renameApiKeyRequest new name
   */
  public async update(
    id: string,
    renameApiKeyRequest: RenameApiKeyRequest = {}
  ): Promise<ResponseSuccess> {
    return this.updateWithResponseHeaders(id, renameApiKeyRequest).then(
      (res) => res.body
    );
  }

  /**
   * Changes an API key's display name. The key and its secret are unchanged.
   * Rename an API key
   * @param id API key ID
   * @param renameApiKeyRequest new name
   */
  public async updateWithResponseHeaders(
    id: string,
    renameApiKeyRequest: RenameApiKeyRequest = {}
  ): Promise<{ headers: ApiResponseHeaders; body: ResponseSuccess }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling update.'
      );
    }
    if (renameApiKeyRequest === null || renameApiKeyRequest === undefined) {
      throw new Error(
        'Required parameter renameApiKeyRequest was null or undefined when calling update.'
      );
    }
    // Path Params
    const localVarPath = '/api_keys/{id}'
      .substring(1)
      .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      'application/json',
    ]);
    queryParams.headers['Content-Type'] = contentType;

    queryParams.body = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        renameApiKeyRequest,
        'RenameApiKeyRequest',
        ''
      ),
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
   * Revokes an API key. Requests presenting it stop working immediately.
   * Delete an API key
   * @param id API key ID
   */
  public async delete(id: string): Promise<ResponseSuccess> {
    return this.deleteWithResponseHeaders(id).then((res) => res.body);
  }

  /**
   * Revokes an API key. Requests presenting it stop working immediately.
   * Delete an API key
   * @param id API key ID
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
    const localVarPath = '/api_keys/{id}'
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
   * Returns a page of the API keys for the caller's workspace.
   * List API keys
   * @param {Object} searchParams
   * @param { number } searchParams.limit
   * @param { number } searchParams.offset
   * @param { &#39;asc&#39; | &#39;desc&#39; } searchParams.orderBy
   * @param { string } searchParams.search
   * @param { &#39;created_at&#39; | &#39;name&#39; } searchParams.sortBy
   * @param { &#39;full_access&#39; | &#39;only_upload&#39; } searchParams.type
   */
  public async list(args: {
    limit?: number;
    offset?: number;
    orderBy?: 'asc' | 'desc';
    search?: string;
    sortBy?: 'created_at' | 'name';
    type?: 'full_access' | 'only_upload';
  }): Promise<ListApiKeysResponse> {
    return this.listWithResponseHeaders(args).then((res) => res.body);
  }

  /**
   * Returns a page of the API keys for the caller's workspace.
   * List API keys
   * @param {Object} searchParams
   * @param { number } searchParams.limit
   * @param { number } searchParams.offset
   * @param { &#39;asc&#39; | &#39;desc&#39; } searchParams.orderBy
   * @param { string } searchParams.search
   * @param { &#39;created_at&#39; | &#39;name&#39; } searchParams.sortBy
   * @param { &#39;full_access&#39; | &#39;only_upload&#39; } searchParams.type
   */
  public async listWithResponseHeaders({
    limit,
    offset,
    orderBy,
    search,
    sortBy,
    type,
  }: {
    limit?: number;
    offset?: number;
    orderBy?: 'asc' | 'desc';
    search?: string;
    sortBy?: 'created_at' | 'name';
    type?: 'full_access' | 'only_upload';
  }): Promise<{ headers: ApiResponseHeaders; body: ListApiKeysResponse }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    // Path Params
    const localVarPath = '/api_keys'.substring(1);

    // Query Params
    const urlSearchParams = new URLSearchParams();

    if (limit !== undefined) {
      urlSearchParams.append(
        'limit',
        ObjectSerializer.serialize(limit, 'number', '')
      );
    }
    if (offset !== undefined) {
      urlSearchParams.append(
        'offset',
        ObjectSerializer.serialize(offset, 'number', '')
      );
    }
    if (orderBy !== undefined) {
      urlSearchParams.append(
        'order_by',
        ObjectSerializer.serialize(orderBy, "'asc' | 'desc'", '')
      );
    }
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
    if (type !== undefined) {
      urlSearchParams.append(
        'type',
        ObjectSerializer.serialize(type, "'full_access' | 'only_upload'", '')
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
          'ListApiKeysResponse',
          ''
        ) as ListApiKeysResponse,
      };
    });
  }
}
