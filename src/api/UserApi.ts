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

import ObjectSerializer from '../ObjectSerializer';
import HttpClient, { QueryOptions, ApiResponseHeaders } from '../HttpClient';
import GetMeResponse from '../model/GetMeResponse';

/**
 * no description
 */
export default class UserApi {
  private httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  /**
   * get current user's information
   * Get me
   */
  public async GetMe(): Promise<GetMeResponse> {
    return this.GetMeWithResponseHeaders().then((res) => res.body);
  }

  /**
   * get current user's information
   * Get me
   */
  public async GetMeWithResponseHeaders(): Promise<{
    headers: ApiResponseHeaders;
    body: GetMeResponse;
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
          'GetMeResponse',
          ''
        ) as GetMeResponse,
      };
    });
  }
}
