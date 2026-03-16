# AnalyticsApi

All URIs are relative to *http://localhost/api*

| Method | Description | HTTP request |
| ------------- | ------------- | ------------- |
| [**GetAggregatedMetrics()**](AnalyticsApi.md#GetAggregatedMetrics) | Get aggregated metrics | **POST** /analytics/metrics/data/{metric}/{aggregation} |
| [**GetBreakdownMetrics()**](AnalyticsApi.md#GetBreakdownMetrics) | Get breakdown metrics | **POST** /analytics/metrics/bucket/{metric}/{breakdown} |
| [**GetDataUsage()**](AnalyticsApi.md#GetDataUsage) | Get data usage | **GET** /analytics/data |
| [**GetOvertimeMetrics()**](AnalyticsApi.md#GetOvertimeMetrics) | Get overtime metrics | **POST** /analytics/metrics/timeseries/{metric}/{interval} |
| [**GetStatisticMedias()**](AnalyticsApi.md#GetStatisticMedias) | Get statistic media | **GET** /analytics/media |


<a name="GetAggregatedMetrics"></a>
## **`GetAggregatedMetrics()` - Get aggregated metrics**


Retrieve aggregated metric data with a specific aggregation method

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **metric** | **string**| **yes**| metric name |
 | **aggregation** | **string**| **yes**| aggregation method |
 | **request** | [**InternalControllersGetAggreatedMetricsMetricsRequest**](../model/InternalControllersGetAggreatedMetricsMetricsRequest.md)| **yes**| query parameters |


### Return type

Promise<[**GetAggregatedMetricsResponse**](../model/GetAggregatedMetricsResponse.md)>.




---

<a name="GetBreakdownMetrics"></a>
## **`GetBreakdownMetrics()` - Get breakdown metrics**


Retrieve metric data broken down by a specific dimension

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **metric** | **string**| **yes**| metric name |
 | **breakdown** | **string**| **yes**| breakdown dimension |
 | **request** | [**GetBreakdownMetricsRequest**](../model/GetBreakdownMetricsRequest.md)| **yes**| query parameters |


### Return type

Promise<[**GetBreakdownMetricsResponse**](../model/GetBreakdownMetricsResponse.md)>.




---

<a name="GetDataUsage"></a>
## **`GetDataUsage()` - Get data usage**


Retrieve data usage statistics over a time range with a specific interval

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **from** | **number**| **yes**| start time (unix timestamp) |
 | **to** | **number**| **yes**| end time (unix timestamp) |
 | **interval** | **string**| **yes**| time interval |
 | **offset** | **number**| no| offset, allowed values greater than or equal to 0. Default(0) |
 | **limit** | **number**| no| results per page. Allowed values 1-100, default is 25 |


### Return type

Promise<[**GetDataUsageResponse**](../model/GetDataUsageResponse.md)>.




---

<a name="GetOvertimeMetrics"></a>
## **`GetOvertimeMetrics()` - Get overtime metrics**


Retrieve metric data over time with a specific interval

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **metric** | **string**| **yes**| metric name |
 | **interval** | **string**| **yes**| time interval |
 | **request** | [**GetBreakdownMetricsRequest**](../model/GetBreakdownMetricsRequest.md)| **yes**| query parameters |


### Return type

Promise<[**GetOvertimeMetricsResponse**](../model/GetOvertimeMetricsResponse.md)>.




---

<a name="GetStatisticMedias"></a>
## **`GetStatisticMedias()` - Get statistic media**


Retrieve a list of statistic media

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **from** | **number**| no| start time |
 | **to** | **number**| no| end time |
 | **type** | **string**| no| media type |
 | **offset** | **number**| no| offset, allowed values greater than or equal to 0. Default(0) |
 | **limit** | **number**| no| results per page. Allowed values 1-100, default is 25 |


### Return type

Promise<[**GetStatisticMediasResponse**](../model/GetStatisticMediasResponse.md)>.




---

