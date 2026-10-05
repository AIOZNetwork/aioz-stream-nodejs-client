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
import ListWebhooksResponse from '../model/ListWebhooksResponse';
import ResponseSuccess from '../model/ResponseSuccess';
import WebhookResponse from '../model/WebhookResponse';
import WriteWebhookRequest from '../model/WriteWebhookRequest';

/**
 * no description
 */
export default class WebhookApi {
  private httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  /**
   * Registers a URL to be notified of media events, so your server does not have to poll.
   * Create a webhook
   * @param writeWebhookRequest Webhook
   */
  public async create(
    writeWebhookRequest: WriteWebhookRequest = {}
  ): Promise<WebhookResponse> {
    return this.createWithResponseHeaders(writeWebhookRequest).then(
      (res) => res.body
    );
  }

  /**
   * Registers a URL to be notified of media events, so your server does not have to poll.
   * Create a webhook
   * @param writeWebhookRequest Webhook
   */
  public async createWithResponseHeaders(
    writeWebhookRequest: WriteWebhookRequest = {}
  ): Promise<{ headers: ApiResponseHeaders; body: WebhookResponse }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (writeWebhookRequest === null || writeWebhookRequest === undefined) {
      throw new Error(
        'Required parameter writeWebhookRequest was null or undefined when calling create.'
      );
    }
    // Path Params
    const localVarPath = '/webhooks'.substring(1);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      'application/json',

      'application/x-www-form-urlencoded',
    ]);
    queryParams.headers['Content-Type'] = contentType;

    queryParams.body = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        writeWebhookRequest,
        'WriteWebhookRequest',
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
          'WebhookResponse',
          ''
        ) as WebhookResponse,
      };
    });
  }

  /**
   * Returns one webhook by id.
   * Get a webhook
   * @param id Webhook ID
   */
  public async get(id: string): Promise<WebhookResponse> {
    return this.getWithResponseHeaders(id).then((res) => res.body);
  }

  /**
   * Returns one webhook by id.
   * Get a webhook
   * @param id Webhook ID
   */
  public async getWithResponseHeaders(
    id: string
  ): Promise<{ headers: ApiResponseHeaders; body: WebhookResponse }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling get.'
      );
    }
    // Path Params
    const localVarPath = '/webhooks/{id}'
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
          'WebhookResponse',
          ''
        ) as WebhookResponse,
      };
    });
  }

  /**
   * Changes a webhook's URL, name or events.
   * Update a webhook
   * @param id Webhook ID
   * @param writeWebhookRequest Fields to change
   */
  public async update(
    id: string,
    writeWebhookRequest: WriteWebhookRequest = {}
  ): Promise<ResponseSuccess> {
    return this.updateWithResponseHeaders(id, writeWebhookRequest).then(
      (res) => res.body
    );
  }

  /**
   * Changes a webhook's URL, name or events.
   * Update a webhook
   * @param id Webhook ID
   * @param writeWebhookRequest Fields to change
   */
  public async updateWithResponseHeaders(
    id: string,
    writeWebhookRequest: WriteWebhookRequest = {}
  ): Promise<{ headers: ApiResponseHeaders; body: ResponseSuccess }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling update.'
      );
    }
    if (writeWebhookRequest === null || writeWebhookRequest === undefined) {
      throw new Error(
        'Required parameter writeWebhookRequest was null or undefined when calling update.'
      );
    }
    // Path Params
    const localVarPath = '/webhooks/{id}'
      .substring(1)
      .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      'application/json',
    ]);
    queryParams.headers['Content-Type'] = contentType;

    queryParams.body = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        writeWebhookRequest,
        'WriteWebhookRequest',
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
   * Removes a webhook. No further events are pushed to it.
   * Delete a webhook
   * @param id Webhook ID
   */
  public async delete(id: string): Promise<ResponseSuccess> {
    return this.deleteWithResponseHeaders(id).then((res) => res.body);
  }

  /**
   * Removes a webhook. No further events are pushed to it.
   * Delete a webhook
   * @param id Webhook ID
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
    const localVarPath = '/webhooks/{id}'
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
   * Returns a page of the webhooks configured for your workspace.
   * List webhooks
   * @param {Object} searchParams
   * @param { boolean } searchParams.encodingFailed
   * @param { boolean } searchParams.encodingFinished
   * @param { boolean } searchParams.encodingStarted
   * @param { boolean } searchParams.fileReceived
   * @param { number } searchParams.limit
   * @param { number } searchParams.offset
   * @param { &#39;asc&#39; | &#39;desc&#39; } searchParams.orderBy
   * @param { boolean } searchParams.partialFinished
   * @param { string } searchParams.search
   * @param { &#39;created_at&#39; | &#39;name&#39; | &#39;url&#39; } searchParams.sortBy
   */
  public async list(args: {
    encodingFailed?: boolean;
    encodingFinished?: boolean;
    encodingStarted?: boolean;
    fileReceived?: boolean;
    limit?: number;
    offset?: number;
    orderBy?: 'asc' | 'desc';
    partialFinished?: boolean;
    search?: string;
    sortBy?: 'created_at' | 'name' | 'url';
  }): Promise<ListWebhooksResponse> {
    return this.listWithResponseHeaders(args).then((res) => res.body);
  }

  /**
   * Returns a page of the webhooks configured for your workspace.
   * List webhooks
   * @param {Object} searchParams
   * @param { boolean } searchParams.encodingFailed
   * @param { boolean } searchParams.encodingFinished
   * @param { boolean } searchParams.encodingStarted
   * @param { boolean } searchParams.fileReceived
   * @param { number } searchParams.limit
   * @param { number } searchParams.offset
   * @param { &#39;asc&#39; | &#39;desc&#39; } searchParams.orderBy
   * @param { boolean } searchParams.partialFinished
   * @param { string } searchParams.search
   * @param { &#39;created_at&#39; | &#39;name&#39; | &#39;url&#39; } searchParams.sortBy
   */
  public async listWithResponseHeaders({
    encodingFailed,
    encodingFinished,
    encodingStarted,
    fileReceived,
    limit,
    offset,
    orderBy,
    partialFinished,
    search,
    sortBy,
  }: {
    encodingFailed?: boolean;
    encodingFinished?: boolean;
    encodingStarted?: boolean;
    fileReceived?: boolean;
    limit?: number;
    offset?: number;
    orderBy?: 'asc' | 'desc';
    partialFinished?: boolean;
    search?: string;
    sortBy?: 'created_at' | 'name' | 'url';
  }): Promise<{ headers: ApiResponseHeaders; body: ListWebhooksResponse }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    // Path Params
    const localVarPath = '/webhooks'.substring(1);

    // Query Params
    const urlSearchParams = new URLSearchParams();

    if (encodingFailed !== undefined) {
      urlSearchParams.append(
        'encoding_failed',
        ObjectSerializer.serialize(encodingFailed, 'boolean', '')
      );
    }
    if (encodingFinished !== undefined) {
      urlSearchParams.append(
        'encoding_finished',
        ObjectSerializer.serialize(encodingFinished, 'boolean', '')
      );
    }
    if (encodingStarted !== undefined) {
      urlSearchParams.append(
        'encoding_started',
        ObjectSerializer.serialize(encodingStarted, 'boolean', '')
      );
    }
    if (fileReceived !== undefined) {
      urlSearchParams.append(
        'file_received',
        ObjectSerializer.serialize(fileReceived, 'boolean', '')
      );
    }
    if (limit !== undefined) {
      urlSearchParams.append(
        'limit',
        ObjectSerializer.serialize(limit, 'number', 'int64')
      );
    }
    if (offset !== undefined) {
      urlSearchParams.append(
        'offset',
        ObjectSerializer.serialize(offset, 'number', 'int64')
      );
    }
    if (orderBy !== undefined) {
      urlSearchParams.append(
        'order_by',
        ObjectSerializer.serialize(orderBy, "'asc' | 'desc'", '')
      );
    }
    if (partialFinished !== undefined) {
      urlSearchParams.append(
        'partial_finished',
        ObjectSerializer.serialize(partialFinished, 'boolean', '')
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
        ObjectSerializer.serialize(sortBy, "'created_at' | 'name' | 'url'", '')
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
          'ListWebhooksResponse',
          ''
        ) as ListWebhooksResponse,
      };
    });
  }

  /**
   * Delivers a test event to a webhook, so you can confirm your endpoint accepts it.
   * Send a test event
   * @param id Webhook ID
   */
  public async check(id: string): Promise<ResponseSuccess> {
    return this.checkWithResponseHeaders(id).then((res) => res.body);
  }

  /**
   * Delivers a test event to a webhook, so you can confirm your endpoint accepts it.
   * Send a test event
   * @param id Webhook ID
   */
  public async checkWithResponseHeaders(
    id: string
  ): Promise<{ headers: ApiResponseHeaders; body: ResponseSuccess }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling check.'
      );
    }
    // Path Params
    const localVarPath = '/webhooks/check/{id}'
      .substring(1)
      .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

    queryParams.method = 'POST';

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
