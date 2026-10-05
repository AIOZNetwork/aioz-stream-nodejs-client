# ApiKeyApi

All URIs are relative to *https://api.aiozstream.network/api*

| Method | Description | HTTP request |
| ------------- | ------------- | ------------- |
| [**create()**](ApiKeyApi.md#create) | Create API key | **POST** /api_keys |
| [**update()**](ApiKeyApi.md#update) | Rename an API key | **PATCH** /api_keys/{id} |
| [**delete()**](ApiKeyApi.md#delete) | Delete an API key | **DELETE** /api_keys/{id} |
| [**list()**](ApiKeyApi.md#list) | List API keys | **GET** /api_keys |


<a name="create"></a>
## **`create()` - Create API key**


Creates a new API key for the caller's workspace. The secret is returned once, here, and never again.

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **createApiKeyRequest** | [**CreateApiKeyRequest**](../model/CreateApiKeyRequest.md)| **yes**| api key&#39;s data |


### Return type

Promise<[**CreateApiKeyResponse**](../model/CreateApiKeyResponse.md)>.




---

<a name="update"></a>
## **`update()` - Rename an API key**


Changes an API key's display name. The key and its secret are unchanged.

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **id** | **string**| **yes**| API key ID |
 | **renameApiKeyRequest** | [**RenameApiKeyRequest**](../model/RenameApiKeyRequest.md)| **yes**| new name |


### Return type

Promise<[**ResponseSuccess**](../model/ResponseSuccess.md)>.




---

<a name="delete"></a>
## **`delete()` - Delete an API key**


Revokes an API key. Requests presenting it stop working immediately.

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **id** | **string**| **yes**| API key ID |


### Return type

Promise<[**ResponseSuccess**](../model/ResponseSuccess.md)>.




---

<a name="list"></a>
## **`list()` - List API keys**


Returns a page of the API keys for the caller's workspace.

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **limit** | **number**| no|  |
 | **offset** | **number**| no|  |
 | **orderBy** | **&#39;asc&#39; \| &#39;desc&#39;**| no|  |
 | **search** | **string**| no|  |
 | **sortBy** | **&#39;created_at&#39; \| &#39;name&#39;**| no|  |
 | **type** | **&#39;full_access&#39; \| &#39;only_upload&#39;**| no|  |


### Return type

Promise<[**ListApiKeysResponse**](../model/ListApiKeysResponse.md)>.




---

