# AnalyticsApi

All URIs are relative to *https://api.aiozstream.network/api*

| Method | Description | HTTP request |
| ------------- | ------------- | ------------- |
| [**getAggregatedMetrics()**](AnalyticsApi.md#getAggregatedMetrics) | Aggregate one metric | **POST** /analytics/metrics/data/{metric}/{aggregation} |
| [**getBreakdownMetrics()**](AnalyticsApi.md#getBreakdownMetrics) | Bucket one metric by dimension | **POST** /analytics/metrics/bucket/{metric}/{breakdown} |
| [**getDataUsage()**](AnalyticsApi.md#getDataUsage) | Delivery volume over time | **GET** /analytics/data |
| [**getOvertimeMetrics()**](AnalyticsApi.md#getOvertimeMetrics) | Bucket one metric by time | **POST** /analytics/metrics/timeseries/{metric}/{interval} |


<a name="getAggregatedMetrics"></a>
## **`getAggregatedMetrics()` - Aggregate one metric**


Returns a single number for one metric over a window and a filter.

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **metric** | **string**| **yes**| Metric |
 | **aggregation** | **string**| **yes**| Aggregation |
 | **metricsRequest** | [**MetricsRequest**](../model/MetricsRequest.md)| **yes**| Window and filter |


### Return type

Promise<[**AggregatedMetricsResponse**](../model/AggregatedMetricsResponse.md)>.




---

<a name="getBreakdownMetrics"></a>
## **`getBreakdownMetrics()` - Bucket one metric by dimension**


Returns a page of metric values grouped by a dimension such as country or media.

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **metric** | **string**| **yes**| Metric |
 | **breakdown** | **string**| **yes**| Dimension |
 | **metricsRequest** | [**MetricsRequest**](../model/MetricsRequest.md)| **yes**| Window, filter and paging |


### Return type

Promise<[**MetricsPageResponse**](../model/MetricsPageResponse.md)>.




---

<a name="getDataUsage"></a>
## **`getDataUsage()` - Delivery volume over time**


Returns a page of how much data your media delivered, in time buckets.

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **from** | **number**| no|  |
 | **interval** | **&#39;hour&#39; \| &#39;day&#39; \| &#39;week&#39; \| &#39;month&#39;**| no|  |
 | **limit** | **number**| no|  |
 | **offset** | **number**| no|  |
 | **to** | **number**| no|  |


### Return type

Promise<[**DataUsageResponse**](../model/DataUsageResponse.md)>.




---

<a name="getOvertimeMetrics"></a>
## **`getOvertimeMetrics()` - Bucket one metric by time**


Returns a page of metric values grouped into time buckets.

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **metric** | **string**| **yes**| Metric |
 | **interval** | **string**| **yes**| Bucket size |
 | **metricsRequest** | [**MetricsRequest**](../model/MetricsRequest.md)| **yes**| Window, filter and paging |


### Return type

Promise<[**MetricsPageResponse**](../model/MetricsPageResponse.md)>.




---

