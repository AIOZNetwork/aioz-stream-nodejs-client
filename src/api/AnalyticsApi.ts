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
import GetAggregatedMetricsResponse from '../model/GetAggregatedMetricsResponse';
import GetBreakdownMetricsRequest from '../model/GetBreakdownMetricsRequest';
import GetBreakdownMetricsResponse from '../model/GetBreakdownMetricsResponse';
import GetDataUsageResponse from '../model/GetDataUsageResponse';
import GetOvertimeMetricsResponse from '../model/GetOvertimeMetricsResponse';
import GetStatisticMediasResponse from '../model/GetStatisticMediasResponse';
import InternalControllersGetAggreatedMetricsMetricsRequest from '../model/InternalControllersGetAggreatedMetricsMetricsRequest';

/**
 * no description
 */
export default class AnalyticsApi {
  private httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  /**
   * Retrieve aggregated metric data with a specific aggregation method
   * Get aggregated metrics
   * @param metric metric name
   * @param aggregation aggregation method
   * @param request query parameters
   */
  public async GetAggregatedMetrics(
    metric: string,
    aggregation: string,
    request: InternalControllersGetAggreatedMetricsMetricsRequest = {}
  ): Promise<GetAggregatedMetricsResponse> {
    return this.GetAggregatedMetricsWithResponseHeaders(
      metric,
      aggregation,
      request
    ).then((res) => res.body);
  }

  /**
   * Retrieve aggregated metric data with a specific aggregation method
   * Get aggregated metrics
   * @param metric metric name
   * @param aggregation aggregation method
   * @param request query parameters
   */
  public async GetAggregatedMetricsWithResponseHeaders(
    metric: string,
    aggregation: string,
    request: InternalControllersGetAggreatedMetricsMetricsRequest = {}
  ): Promise<{
    headers: ApiResponseHeaders;
    body: GetAggregatedMetricsResponse;
  }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (metric === null || metric === undefined) {
      throw new Error(
        'Required parameter metric was null or undefined when calling GetAggregatedMetrics.'
      );
    }
    if (aggregation === null || aggregation === undefined) {
      throw new Error(
        'Required parameter aggregation was null or undefined when calling GetAggregatedMetrics.'
      );
    }
    if (request === null || request === undefined) {
      throw new Error(
        'Required parameter request was null or undefined when calling GetAggregatedMetrics.'
      );
    }
    // Path Params
    const localVarPath = '/analytics/metrics/data/{metric}/{aggregation}'
      .substring(1)
      .replace('{' + 'metric' + '}', encodeURIComponent(String(metric)))
      .replace(
        '{' + 'aggregation' + '}',
        encodeURIComponent(String(aggregation))
      );

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      'application/json',
    ]);
    queryParams.headers['Content-Type'] = contentType;

    queryParams.body = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        request,
        'InternalControllersGetAggreatedMetricsMetricsRequest',
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
          'GetAggregatedMetricsResponse',
          ''
        ) as GetAggregatedMetricsResponse,
      };
    });
  }

  /**
   * Retrieve metric data broken down by a specific dimension
   * Get breakdown metrics
   * @param metric metric name
   * @param breakdown breakdown dimension
   * @param request query parameters
   */
  public async GetBreakdownMetrics(
    metric: string,
    breakdown: string,
    request: GetBreakdownMetricsRequest = {}
  ): Promise<GetBreakdownMetricsResponse> {
    return this.GetBreakdownMetricsWithResponseHeaders(
      metric,
      breakdown,
      request
    ).then((res) => res.body);
  }

  /**
   * Retrieve metric data broken down by a specific dimension
   * Get breakdown metrics
   * @param metric metric name
   * @param breakdown breakdown dimension
   * @param request query parameters
   */
  public async GetBreakdownMetricsWithResponseHeaders(
    metric: string,
    breakdown: string,
    request: GetBreakdownMetricsRequest = {}
  ): Promise<{
    headers: ApiResponseHeaders;
    body: GetBreakdownMetricsResponse;
  }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (metric === null || metric === undefined) {
      throw new Error(
        'Required parameter metric was null or undefined when calling GetBreakdownMetrics.'
      );
    }
    if (breakdown === null || breakdown === undefined) {
      throw new Error(
        'Required parameter breakdown was null or undefined when calling GetBreakdownMetrics.'
      );
    }
    if (request === null || request === undefined) {
      throw new Error(
        'Required parameter request was null or undefined when calling GetBreakdownMetrics.'
      );
    }
    // Path Params
    const localVarPath = '/analytics/metrics/bucket/{metric}/{breakdown}'
      .substring(1)
      .replace('{' + 'metric' + '}', encodeURIComponent(String(metric)))
      .replace('{' + 'breakdown' + '}', encodeURIComponent(String(breakdown)));

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      'application/json',
    ]);
    queryParams.headers['Content-Type'] = contentType;

    queryParams.body = ObjectSerializer.stringify(
      ObjectSerializer.serialize(request, 'GetBreakdownMetricsRequest', ''),
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
          'GetBreakdownMetricsResponse',
          ''
        ) as GetBreakdownMetricsResponse,
      };
    });
  }

  /**
   * Retrieve data usage statistics over a time range with a specific interval
   * Get data usage
   * @param {Object} searchParams
   * @param { number } searchParams.from start time (unix timestamp)
   * @param { number } searchParams.to end time (unix timestamp)
   * @param { string } searchParams.interval time interval
   * @param { number } searchParams.offset offset, allowed values greater than or equal to 0. Default(0)
   * @param { number } searchParams.limit results per page. Allowed values 1-100, default is 25
   */
  public async GetDataUsage(args: {
    from: number;
    to: number;
    interval: string;
    offset?: number;
    limit?: number;
  }): Promise<GetDataUsageResponse> {
    return this.GetDataUsageWithResponseHeaders(args).then((res) => res.body);
  }

  /**
   * Retrieve data usage statistics over a time range with a specific interval
   * Get data usage
   * @param {Object} searchParams
   * @param { number } searchParams.from start time (unix timestamp)
   * @param { number } searchParams.to end time (unix timestamp)
   * @param { string } searchParams.interval time interval
   * @param { number } searchParams.offset offset, allowed values greater than or equal to 0. Default(0)
   * @param { number } searchParams.limit results per page. Allowed values 1-100, default is 25
   */
  public async GetDataUsageWithResponseHeaders({
    from,
    to,
    interval,
    offset,
    limit,
  }: {
    from: number;
    to: number;
    interval: string;
    offset?: number;
    limit?: number;
  }): Promise<{
    headers: ApiResponseHeaders;
    body: GetDataUsageResponse;
  }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (from === null || from === undefined) {
      throw new Error(
        'Required parameter from was null or undefined when calling GetDataUsage.'
      );
    }
    if (to === null || to === undefined) {
      throw new Error(
        'Required parameter to was null or undefined when calling GetDataUsage.'
      );
    }
    if (interval === null || interval === undefined) {
      throw new Error(
        'Required parameter interval was null or undefined when calling GetDataUsage.'
      );
    }
    // Path Params
    const localVarPath = '/analytics/data'.substring(1);

    // Query Params
    const urlSearchParams = new URLSearchParams();

    if (from !== undefined) {
      urlSearchParams.append(
        'from',
        ObjectSerializer.serialize(from, 'number', '')
      );
    }
    if (to !== undefined) {
      urlSearchParams.append(
        'to',
        ObjectSerializer.serialize(to, 'number', '')
      );
    }
    if (interval !== undefined) {
      urlSearchParams.append(
        'interval',
        ObjectSerializer.serialize(interval, 'string', '')
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
          'GetDataUsageResponse',
          ''
        ) as GetDataUsageResponse,
      };
    });
  }

  /**
   * Retrieve metric data over time with a specific interval
   * Get overtime metrics
   * @param metric metric name
   * @param interval time interval
   * @param request query parameters
   */
  public async GetOvertimeMetrics(
    metric: string,
    interval: string,
    request: GetBreakdownMetricsRequest = {}
  ): Promise<GetOvertimeMetricsResponse> {
    return this.GetOvertimeMetricsWithResponseHeaders(
      metric,
      interval,
      request
    ).then((res) => res.body);
  }

  /**
   * Retrieve metric data over time with a specific interval
   * Get overtime metrics
   * @param metric metric name
   * @param interval time interval
   * @param request query parameters
   */
  public async GetOvertimeMetricsWithResponseHeaders(
    metric: string,
    interval: string,
    request: GetBreakdownMetricsRequest = {}
  ): Promise<{
    headers: ApiResponseHeaders;
    body: GetOvertimeMetricsResponse;
  }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (metric === null || metric === undefined) {
      throw new Error(
        'Required parameter metric was null or undefined when calling GetOvertimeMetrics.'
      );
    }
    if (interval === null || interval === undefined) {
      throw new Error(
        'Required parameter interval was null or undefined when calling GetOvertimeMetrics.'
      );
    }
    if (request === null || request === undefined) {
      throw new Error(
        'Required parameter request was null or undefined when calling GetOvertimeMetrics.'
      );
    }
    // Path Params
    const localVarPath = '/analytics/metrics/timeseries/{metric}/{interval}'
      .substring(1)
      .replace('{' + 'metric' + '}', encodeURIComponent(String(metric)))
      .replace('{' + 'interval' + '}', encodeURIComponent(String(interval)));

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      'application/json',
    ]);
    queryParams.headers['Content-Type'] = contentType;

    queryParams.body = ObjectSerializer.stringify(
      ObjectSerializer.serialize(request, 'GetBreakdownMetricsRequest', ''),
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
          'GetOvertimeMetricsResponse',
          ''
        ) as GetOvertimeMetricsResponse,
      };
    });
  }

  /**
   * Retrieve a list of statistic media
   * Get statistic media
   * @param {Object} searchParams
   * @param { number } searchParams.from start time
   * @param { number } searchParams.to end time
   * @param { string } searchParams.type media type
   * @param { number } searchParams.offset offset, allowed values greater than or equal to 0. Default(0)
   * @param { number } searchParams.limit results per page. Allowed values 1-100, default is 25
   */
  public async GetStatisticMedias(
    args: {
      from?: number;
      to?: number;
      type?: string;
      offset?: number;
      limit?: number;
    } = {}
  ): Promise<GetStatisticMediasResponse> {
    return this.GetStatisticMediasWithResponseHeaders(args).then(
      (res) => res.body
    );
  }

  /**
   * Retrieve a list of statistic media
   * Get statistic media
   * @param {Object} searchParams
   * @param { number } searchParams.from start time
   * @param { number } searchParams.to end time
   * @param { string } searchParams.type media type
   * @param { number } searchParams.offset offset, allowed values greater than or equal to 0. Default(0)
   * @param { number } searchParams.limit results per page. Allowed values 1-100, default is 25
   */
  public async GetStatisticMediasWithResponseHeaders({
    from,
    to,
    type,
    offset,
    limit,
  }: {
    from?: number;
    to?: number;
    type?: string;
    offset?: number;
    limit?: number;
  } = {}): Promise<{
    headers: ApiResponseHeaders;
    body: GetStatisticMediasResponse;
  }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    // Path Params
    const localVarPath = '/analytics/media'.substring(1);

    // Query Params
    const urlSearchParams = new URLSearchParams();

    if (from !== undefined) {
      urlSearchParams.append(
        'from',
        ObjectSerializer.serialize(from, 'number', '')
      );
    }
    if (to !== undefined) {
      urlSearchParams.append(
        'to',
        ObjectSerializer.serialize(to, 'number', '')
      );
    }
    if (type !== undefined) {
      urlSearchParams.append(
        'type',
        ObjectSerializer.serialize(type, 'string', '')
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
          'GetStatisticMediasResponse',
          ''
        ) as GetStatisticMediasResponse,
      };
    });
  }
}
