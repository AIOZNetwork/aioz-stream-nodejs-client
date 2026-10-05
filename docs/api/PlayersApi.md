# PlayersApi

All URIs are relative to *https://api.aiozstream.network/api*

| Method | Description | HTTP request |
| ------------- | ------------- | ------------- |
| [**create()**](PlayersApi.md#create) | Create a player theme | **POST** /players |
| [**get()**](PlayersApi.md#get) | Get a player theme | **GET** /players/{id} |
| [**update()**](PlayersApi.md#update) | Update a player theme | **PATCH** /players/{id} |
| [**delete()**](PlayersApi.md#delete) | Delete a player theme | **DELETE** /players/{id} |
| [**list()**](PlayersApi.md#list) | List player themes | **GET** /players |
| [**uploadLogo()**](PlayersApi.md#uploadLogo) | Upload a player theme logo | **POST** /players/{id}/logo |
| [**deleteLogo()**](PlayersApi.md#deleteLogo) | Delete a player theme logo | **DELETE** /players/{id}/logo |
| [**attach()**](PlayersApi.md#attach) | Add a player theme to a media | **POST** /players/add-player |
| [**detach()**](PlayersApi.md#detach) | Remove a player theme from a media | **POST** /players/remove-player |


<a name="create"></a>
## **`create()` - Create a player theme**


Creates a player theme for your media and customizes how it looks.

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **playerThemeInput** | [**PlayerThemeInput**](../model/PlayerThemeInput.md)| **yes**| Player theme |


### Return type

Promise<[**ThemeResponse**](../model/ThemeResponse.md)>.




---

<a name="get"></a>
## **`get()` - Get a player theme**


Returns one player theme by id.

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **id** | **string**| **yes**| Player theme ID |


### Return type

Promise<[**ThemeResponse**](../model/ThemeResponse.md)>.




---

<a name="update"></a>
## **`update()` - Update a player theme**


Applies the fields you send and leaves the rest of the theme alone.

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **id** | **string**| **yes**| Player theme ID |
 | **playerThemeInput** | [**PlayerThemeInput**](../model/PlayerThemeInput.md)| **yes**| Fields to change |


### Return type

Promise<[**ThemeResponse**](../model/ThemeResponse.md)>.




---

<a name="delete"></a>
## **`delete()` - Delete a player theme**


Deletes a player theme and its logo. A theme still applied to media cannot be deleted.

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **id** | **string**| **yes**| Player theme ID |


### Return type

Promise<[**ResponseSuccess**](../model/ResponseSuccess.md)>.




---

<a name="list"></a>
## **`list()` - List player themes**


Returns a page of the player themes in your workspace.

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **limit** | **number**| no|  |
 | **offset** | **number**| no|  |
 | **orderBy** | **&#39;asc&#39; \| &#39;desc&#39;**| no|  |
 | **search** | **string**| no|  |
 | **sortBy** | **&#39;created_at&#39; \| &#39;name&#39;**| no|  |


### Return type

Promise<[**ListThemesResponse**](../model/ListThemesResponse.md)>.




---

<a name="uploadLogo"></a>
## **`uploadLogo()` - Upload a player theme logo**


Stores a JPG or PNG logo against a player theme, replacing whatever was there.

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **id** | **string**| **yes**| Player theme ID |
 | **file** | **string \| Readable \| Buffer**| **yes**| Logo image |
 | **link** | **string**| no| Where clicking the logo takes the viewer |


### Return type

Promise<[**ThemeResponse**](../model/ThemeResponse.md)>.




---

<a name="deleteLogo"></a>
## **`deleteLogo()` - Delete a player theme logo**


Removes the logo from a player theme.

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **id** | **string**| **yes**| Player theme ID |


### Return type

Promise<[**ResponseSuccess**](../model/ResponseSuccess.md)>.




---

<a name="attach"></a>
## **`attach()` - Add a player theme to a media**


Binds a player theme to a piece of media.

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **attachThemeRequest** | [**AttachThemeRequest**](../model/AttachThemeRequest.md)| **yes**| Media and theme |


### Return type

Promise<[**ResponseSuccess**](../model/ResponseSuccess.md)>.




---

<a name="detach"></a>
## **`detach()` - Remove a player theme from a media**


Releases a player theme from a piece of media.

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **attachThemeRequest** | [**AttachThemeRequest**](../model/AttachThemeRequest.md)| **yes**| Media and theme |


### Return type

Promise<[**ResponseSuccess**](../model/ResponseSuccess.md)>.




---

