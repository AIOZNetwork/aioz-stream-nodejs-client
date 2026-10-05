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
import AggregatedMetricsResponse from '../model/AggregatedMetricsResponse';
import DataUsageResponse from '../model/DataUsageResponse';
import MetricsPageResponse from '../model/MetricsPageResponse';
import MetricsRequest from '../model/MetricsRequest';

/**
 * no description
 */
export default class AnalyticsApi {
  private httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  /**
   * Returns a single number for one metric over a window and a filter.
   * Aggregate one metric
   * @param metric Metric
   * @param aggregation Aggregation
   * @param metricsRequest Window and filter
   */
  public async getAggregatedMetrics(
    metric: string,
    aggregation: string,
    metricsRequest: MetricsRequest = {}
  ): Promise<AggregatedMetricsResponse> {
    return this.getAggregatedMetricsWithResponseHeaders(
      metric,
      aggregation,
      metricsRequest
    ).then((res) => res.body);
  }

  /**
   * Returns a single number for one metric over a window and a filter.
   * Aggregate one metric
   * @param metric Metric
   * @param aggregation Aggregation
   * @param metricsRequest Window and filter
   */
  public async getAggregatedMetricsWithResponseHeaders(
    metric: string,
    aggregation: string,
    metricsRequest: MetricsRequest = {}
  ): Promise<{ headers: ApiResponseHeaders; body: AggregatedMetricsResponse }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (metric === null || metric === undefined) {
      throw new Error(
        'Required parameter metric was null or undefined when calling getAggregatedMetrics.'
      );
    }
    if (aggregation === null || aggregation === undefined) {
      throw new Error(
        'Required parameter aggregation was null or undefined when calling getAggregatedMetrics.'
      );
    }
    if (metricsRequest === null || metricsRequest === undefined) {
      throw new Error(
        'Required parameter metricsRequest was null or undefined when calling getAggregatedMetrics.'
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
      ObjectSerializer.serialize(metricsRequest, 'MetricsRequest', ''),
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
          'AggregatedMetricsResponse',
          ''
        ) as AggregatedMetricsResponse,
      };
    });
  }

  /**
   * Returns a page of metric values grouped by a dimension such as country or media.
   * Bucket one metric by dimension
   * @param metric Metric
   * @param breakdown Dimension
   * @param metricsRequest Window, filter and paging
   */
  public async getBreakdownMetrics(
    metric: string,
    breakdown: string,
    metricsRequest: MetricsRequest = {}
  ): Promise<MetricsPageResponse> {
    return this.getBreakdownMetricsWithResponseHeaders(
      metric,
      breakdown,
      metricsRequest
    ).then((res) => res.body);
  }

  /**
   * Returns a page of metric values grouped by a dimension such as country or media.
   * Bucket one metric by dimension
   * @param metric Metric
   * @param breakdown Dimension
   * @param metricsRequest Window, filter and paging
   */
  public async getBreakdownMetricsWithResponseHeaders(
    metric: string,
    breakdown: string,
    metricsRequest: MetricsRequest = {}
  ): Promise<{ headers: ApiResponseHeaders; body: MetricsPageResponse }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (metric === null || metric === undefined) {
      throw new Error(
        'Required parameter metric was null or undefined when calling getBreakdownMetrics.'
      );
    }
    if (breakdown === null || breakdown === undefined) {
      throw new Error(
        'Required parameter breakdown was null or undefined when calling getBreakdownMetrics.'
      );
    }
    if (metricsRequest === null || metricsRequest === undefined) {
      throw new Error(
        'Required parameter metricsRequest was null or undefined when calling getBreakdownMetrics.'
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
      ObjectSerializer.serialize(metricsRequest, 'MetricsRequest', ''),
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
          'MetricsPageResponse',
          ''
        ) as MetricsPageResponse,
      };
    });
  }

  /**
   * Returns a page of how much data your media delivered, in time buckets.
   * Delivery volume over time
   * @param {Object} searchParams
   * @param { number } searchParams.from
   * @param { &#39;hour&#39; | &#39;day&#39; | &#39;week&#39; | &#39;month&#39; } searchParams.interval
   * @param { number } searchParams.limit
   * @param { number } searchParams.offset
   * @param { number } searchParams.to
   */
  public async getDataUsage(args: {
    from?: number;
    interval?: 'hour' | 'day' | 'week' | 'month';
    limit?: number;
    offset?: number;
    to?: number;
  }): Promise<DataUsageResponse> {
    return this.getDataUsageWithResponseHeaders(args).then((res) => res.body);
  }

  /**
   * Returns a page of how much data your media delivered, in time buckets.
   * Delivery volume over time
   * @param {Object} searchParams
   * @param { number } searchParams.from
   * @param { &#39;hour&#39; | &#39;day&#39; | &#39;week&#39; | &#39;month&#39; } searchParams.interval
   * @param { number } searchParams.limit
   * @param { number } searchParams.offset
   * @param { number } searchParams.to
   */
  public async getDataUsageWithResponseHeaders({
    from,
    interval,
    limit,
    offset,
    to,
  }: {
    from?: number;
    interval?: 'hour' | 'day' | 'week' | 'month';
    limit?: number;
    offset?: number;
    to?: number;
  }): Promise<{ headers: ApiResponseHeaders; body: DataUsageResponse }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    // Path Params
    const localVarPath = '/analytics/data'.substring(1);

    // Query Params
    const urlSearchParams = new URLSearchParams();

    if (from !== undefined) {
      urlSearchParams.append(
        'from',
        ObjectSerializer.serialize(from, 'number', 'int64')
      );
    }
    if (interval !== undefined) {
      urlSearchParams.append(
        'interval',
        ObjectSerializer.serialize(
          interval,
          "'hour' | 'day' | 'week' | 'month'",
          ''
        )
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
    if (to !== undefined) {
      urlSearchParams.append(
        'to',
        ObjectSerializer.serialize(to, 'number', 'int64')
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
          'DataUsageResponse',
          ''
        ) as DataUsageResponse,
      };
    });
  }

  /**
   * Returns a page of metric values grouped into time buckets.
   * Bucket one metric by time
   * @param metric Metric
   * @param interval Bucket size
   * @param metricsRequest Window, filter and paging
   */
  public async getOvertimeMetrics(
    metric: string,
    interval: string,
    metricsRequest: MetricsRequest = {}
  ): Promise<MetricsPageResponse> {
    return this.getOvertimeMetricsWithResponseHeaders(
      metric,
      interval,
      metricsRequest
    ).then((res) => res.body);
  }

  /**
   * Returns a page of metric values grouped into time buckets.
   * Bucket one metric by time
   * @param metric Metric
   * @param interval Bucket size
   * @param metricsRequest Window, filter and paging
   */
  public async getOvertimeMetricsWithResponseHeaders(
    metric: string,
    interval: string,
    metricsRequest: MetricsRequest = {}
  ): Promise<{ headers: ApiResponseHeaders; body: MetricsPageResponse }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (metric === null || metric === undefined) {
      throw new Error(
        'Required parameter metric was null or undefined when calling getOvertimeMetrics.'
      );
    }
    if (interval === null || interval === undefined) {
      throw new Error(
        'Required parameter interval was null or undefined when calling getOvertimeMetrics.'
      );
    }
    if (metricsRequest === null || metricsRequest === undefined) {
      throw new Error(
        'Required parameter metricsRequest was null or undefined when calling getOvertimeMetrics.'
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
      ObjectSerializer.serialize(metricsRequest, 'MetricsRequest', ''),
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
          'MetricsPageResponse',
          ''
        ) as MetricsPageResponse,
      };
    });
  }
}
