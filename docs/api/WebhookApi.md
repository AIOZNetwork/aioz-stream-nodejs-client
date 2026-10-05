# WebhookApi

All URIs are relative to *https://api.aiozstream.network/api*

| Method | Description | HTTP request |
| ------------- | ------------- | ------------- |
| [**create()**](WebhookApi.md#create) | Create a webhook | **POST** /webhooks |
| [**get()**](WebhookApi.md#get) | Get a webhook | **GET** /webhooks/{id} |
| [**update()**](WebhookApi.md#update) | Update a webhook | **PATCH** /webhooks/{id} |
| [**delete()**](WebhookApi.md#delete) | Delete a webhook | **DELETE** /webhooks/{id} |
| [**list()**](WebhookApi.md#list) | List webhooks | **GET** /webhooks |
| [**check()**](WebhookApi.md#check) | Send a test event | **POST** /webhooks/check/{id} |


<a name="create"></a>
## **`create()` - Create a webhook**


Registers a URL to be notified of media events, so your server does not have to poll.

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **writeWebhookRequest** | [**WriteWebhookRequest**](../model/WriteWebhookRequest.md)| **yes**| Webhook |


### Return type

Promise<[**WebhookResponse**](../model/WebhookResponse.md)>.




---

<a name="get"></a>
## **`get()` - Get a webhook**


Returns one webhook by id.

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **id** | **string**| **yes**| Webhook ID |


### Return type

Promise<[**WebhookResponse**](../model/WebhookResponse.md)>.




---

<a name="update"></a>
## **`update()` - Update a webhook**


Changes a webhook's URL, name or events.

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **id** | **string**| **yes**| Webhook ID |
 | **writeWebhookRequest** | [**WriteWebhookRequest**](../model/WriteWebhookRequest.md)| **yes**| Fields to change |


### Return type

Promise<[**ResponseSuccess**](../model/ResponseSuccess.md)>.




---

<a name="delete"></a>
## **`delete()` - Delete a webhook**


Removes a webhook. No further events are pushed to it.

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **id** | **string**| **yes**| Webhook ID |


### Return type

Promise<[**ResponseSuccess**](../model/ResponseSuccess.md)>.




---

<a name="list"></a>
## **`list()` - List webhooks**


Returns a page of the webhooks configured for your workspace.

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **encodingFailed** | **boolean**| no|  |
 | **encodingFinished** | **boolean**| no|  |
 | **encodingStarted** | **boolean**| no|  |
 | **fileReceived** | **boolean**| no|  |
 | **limit** | **number**| no|  |
 | **offset** | **number**| no|  |
 | **orderBy** | **&#39;asc&#39; \| &#39;desc&#39;**| no|  |
 | **partialFinished** | **boolean**| no|  |
 | **search** | **string**| no|  |
 | **sortBy** | **&#39;created_at&#39; \| &#39;name&#39; \| &#39;url&#39;**| no|  |


### Return type

Promise<[**ListWebhooksResponse**](../model/ListWebhooksResponse.md)>.




---

<a name="check"></a>
## **`check()` - Send a test event**


Delivers a test event to a webhook, so you can confirm your endpoint accepts it.

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **id** | **string**| **yes**| Webhook ID |


### Return type

Promise<[**ResponseSuccess**](../model/ResponseSuccess.md)>.




---

