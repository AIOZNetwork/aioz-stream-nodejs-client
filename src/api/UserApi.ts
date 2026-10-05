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

import ObjectSerializer from '../ObjectSerializer';
import HttpClient, { QueryOptions, ApiResponseHeaders } from '../HttpClient';
import MeResponse from '../model/MeResponse';

/**
 * no description
 */
export default class UserApi {
  private httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  /**
   * Returns the account the request is authenticated as.
   * Get the current account
   */
  public async getMe(): Promise<MeResponse> {
    return this.getMeWithResponseHeaders().then((res) => res.body);
  }

  /**
   * Returns the account the request is authenticated as.
   * Get the current account
   */
  public async getMeWithResponseHeaders(): Promise<{
    headers: ApiResponseHeaders;
    body: MeResponse;
  }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    // Path Params
    const localVarPath = '/user/me'.substring(1);

    queryParams.method = 'GET';

    return this.httpClient.call(localVarPath, queryParams).then((response) => {
      return {
        headers: response.headers,
        body: ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            response.body,
            response.headers['content-type']
          ),
          'MeResponse',
          ''
        ) as MeResponse,
      };
    });
  }
}
