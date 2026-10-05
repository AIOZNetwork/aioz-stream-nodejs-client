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

import path from 'path';
import { createReadStream } from 'fs';
import { URLSearchParams } from 'url';
import FormData from 'form-data';
import ObjectSerializer from '../ObjectSerializer';
import HttpClient, { QueryOptions, ApiResponseHeaders } from '../HttpClient';
import AttachThemeRequest from '../model/AttachThemeRequest';
import ListThemesResponse from '../model/ListThemesResponse';
import PlayerThemeInput from '../model/PlayerThemeInput';
import ResponseSuccess from '../model/ResponseSuccess';
import ThemeResponse from '../model/ThemeResponse';
import { Readable } from 'stream';
import { readableToBuffer } from '../HttpClient';

/**
 * no description
 */
export default class PlayersApi {
  private httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  /**
   * Creates a player theme for your media and customizes how it looks.
   * Create a player theme
   * @param playerThemeInput Player theme
   */
  public async create(
    playerThemeInput: PlayerThemeInput = {}
  ): Promise<ThemeResponse> {
    return this.createWithResponseHeaders(playerThemeInput).then(
      (res) => res.body
    );
  }

  /**
   * Creates a player theme for your media and customizes how it looks.
   * Create a player theme
   * @param playerThemeInput Player theme
   */
  public async createWithResponseHeaders(
    playerThemeInput: PlayerThemeInput = {}
  ): Promise<{ headers: ApiResponseHeaders; body: ThemeResponse }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (playerThemeInput === null || playerThemeInput === undefined) {
      throw new Error(
        'Required parameter playerThemeInput was null or undefined when calling create.'
      );
    }
    // Path Params
    const localVarPath = '/players'.substring(1);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      'application/json',
    ]);
    queryParams.headers['Content-Type'] = contentType;

    queryParams.body = ObjectSerializer.stringify(
      ObjectSerializer.serialize(playerThemeInput, 'PlayerThemeInput', ''),
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
          'ThemeResponse',
          ''
        ) as ThemeResponse,
      };
    });
  }

  /**
   * Returns one player theme by id.
   * Get a player theme
   * @param id Player theme ID
   */
  public async get(id: string): Promise<ThemeResponse> {
    return this.getWithResponseHeaders(id).then((res) => res.body);
  }

  /**
   * Returns one player theme by id.
   * Get a player theme
   * @param id Player theme ID
   */
  public async getWithResponseHeaders(
    id: string
  ): Promise<{ headers: ApiResponseHeaders; body: ThemeResponse }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling get.'
      );
    }
    // Path Params
    const localVarPath = '/players/{id}'
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
          'ThemeResponse',
          ''
        ) as ThemeResponse,
      };
    });
  }

  /**
   * Applies the fields you send and leaves the rest of the theme alone.
   * Update a player theme
   * @param id Player theme ID
   * @param playerThemeInput Fields to change
   */
  public async update(
    id: string,
    playerThemeInput: PlayerThemeInput = {}
  ): Promise<ThemeResponse> {
    return this.updateWithResponseHeaders(id, playerThemeInput).then(
      (res) => res.body
    );
  }

  /**
   * Applies the fields you send and leaves the rest of the theme alone.
   * Update a player theme
   * @param id Player theme ID
   * @param playerThemeInput Fields to change
   */
  public async updateWithResponseHeaders(
    id: string,
    playerThemeInput: PlayerThemeInput = {}
  ): Promise<{ headers: ApiResponseHeaders; body: ThemeResponse }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling update.'
      );
    }
    if (playerThemeInput === null || playerThemeInput === undefined) {
      throw new Error(
        'Required parameter playerThemeInput was null or undefined when calling update.'
      );
    }
    // Path Params
    const localVarPath = '/players/{id}'
      .substring(1)
      .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      'application/json',
    ]);
    queryParams.headers['Content-Type'] = contentType;

    queryParams.body = ObjectSerializer.stringify(
      ObjectSerializer.serialize(playerThemeInput, 'PlayerThemeInput', ''),
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
          'ThemeResponse',
          ''
        ) as ThemeResponse,
      };
    });
  }

  /**
   * Deletes a player theme and its logo. A theme still applied to media cannot be deleted.
   * Delete a player theme
   * @param id Player theme ID
   */
  public async delete(id: string): Promise<ResponseSuccess> {
    return this.deleteWithResponseHeaders(id).then((res) => res.body);
  }

  /**
   * Deletes a player theme and its logo. A theme still applied to media cannot be deleted.
   * Delete a player theme
   * @param id Player theme ID
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
    const localVarPath = '/players/{id}'
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
   * Returns a page of the player themes in your workspace.
   * List player themes
   * @param {Object} searchParams
   * @param { number } searchParams.limit
   * @param { number } searchParams.offset
   * @param { &#39;asc&#39; | &#39;desc&#39; } searchParams.orderBy
   * @param { string } searchParams.search
   * @param { &#39;created_at&#39; | &#39;name&#39; } searchParams.sortBy
   */
  public async list(args: {
    limit?: number;
    offset?: number;
    orderBy?: 'asc' | 'desc';
    search?: string;
    sortBy?: 'created_at' | 'name';
  }): Promise<ListThemesResponse> {
    return this.listWithResponseHeaders(args).then((res) => res.body);
  }

  /**
   * Returns a page of the player themes in your workspace.
   * List player themes
   * @param {Object} searchParams
   * @param { number } searchParams.limit
   * @param { number } searchParams.offset
   * @param { &#39;asc&#39; | &#39;desc&#39; } searchParams.orderBy
   * @param { string } searchParams.search
   * @param { &#39;created_at&#39; | &#39;name&#39; } searchParams.sortBy
   */
  public async listWithResponseHeaders({
    limit,
    offset,
    orderBy,
    search,
    sortBy,
  }: {
    limit?: number;
    offset?: number;
    orderBy?: 'asc' | 'desc';
    search?: string;
    sortBy?: 'created_at' | 'name';
  }): Promise<{ headers: ApiResponseHeaders; body: ListThemesResponse }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    // Path Params
    const localVarPath = '/players'.substring(1);

    // Query Params
    const urlSearchParams = new URLSearchParams();

    if (limit !== undefined) {
      urlSearchParams.append(
        'limit',
        ObjectSerializer.serialize(limit, 'number', '')
      );
    }
    if (offset !== undefined) {
      urlSearchParams.append(
        'offset',
        ObjectSerializer.serialize(offset, 'number', '')
      );
    }
    if (orderBy !== undefined) {
      urlSearchParams.append(
        'order_by',
        ObjectSerializer.serialize(orderBy, "'asc' | 'desc'", '')
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
        ObjectSerializer.serialize(sortBy, "'created_at' | 'name'", '')
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
          'ListThemesResponse',
          ''
        ) as ListThemesResponse,
      };
    });
  }

  /**
   * Stores a JPG or PNG logo against a player theme, replacing whatever was there.
   * Upload a player theme logo
   * @param id Player theme ID
   * @param file Logo image
   * @param link Where clicking the logo takes the viewer
   */
  public async uploadLogo(
    id: string,
    file: string | Readable | Buffer,
    link?: string
  ): Promise<ThemeResponse> {
    return this.uploadLogoWithResponseHeaders(id, file, link).then(
      (res) => res.body
    );
  }

  /**
   * Stores a JPG or PNG logo against a player theme, replacing whatever was there.
   * Upload a player theme logo
   * @param id Player theme ID
   * @param file Logo image
   * @param link Where clicking the logo takes the viewer
   */
  public async uploadLogoWithResponseHeaders(
    id: string,
    file: string | Readable | Buffer,
    link?: string
  ): Promise<{ headers: ApiResponseHeaders; body: ThemeResponse }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling uploadLogo.'
      );
    }
    let fileName = 'file';
    let fileBuffer = file;
    if (typeof file === 'string') {
      fileName = path.basename(file);
      fileBuffer = createReadStream(file);
    }
    if (file instanceof Readable) {
      fileBuffer = await readableToBuffer(file);
    }

    // Path Params
    const localVarPath = '/players/{id}/logo'
      .substring(1)
      .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

    queryParams.method = 'POST';

    const formData = new FormData();

    formData.append(fileName, fileBuffer, fileName);

    if (typeof link !== undefined) {
      formData.append('link', link);
    }

    queryParams.body = formData;
    return this.httpClient.call(localVarPath, queryParams).then((response) => {
      return {
        headers: response.headers,
        body: ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            response.body,
            response.headers['content-type']
          ),
          'ThemeResponse',
          ''
        ) as ThemeResponse,
      };
    });
  }

  /**
   * Removes the logo from a player theme.
   * Delete a player theme logo
   * @param id Player theme ID
   */
  public async deleteLogo(id: string): Promise<ResponseSuccess> {
    return this.deleteLogoWithResponseHeaders(id).then((res) => res.body);
  }

  /**
   * Removes the logo from a player theme.
   * Delete a player theme logo
   * @param id Player theme ID
   */
  public async deleteLogoWithResponseHeaders(
    id: string
  ): Promise<{ headers: ApiResponseHeaders; body: ResponseSuccess }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling deleteLogo.'
      );
    }
    // Path Params
    const localVarPath = '/players/{id}/logo'
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
   * Binds a player theme to a piece of media.
   * Add a player theme to a media
   * @param attachThemeRequest Media and theme
   */
  public async attach(
    attachThemeRequest: AttachThemeRequest = {}
  ): Promise<ResponseSuccess> {
    return this.attachWithResponseHeaders(attachThemeRequest).then(
      (res) => res.body
    );
  }

  /**
   * Binds a player theme to a piece of media.
   * Add a player theme to a media
   * @param attachThemeRequest Media and theme
   */
  public async attachWithResponseHeaders(
    attachThemeRequest: AttachThemeRequest = {}
  ): Promise<{ headers: ApiResponseHeaders; body: ResponseSuccess }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (attachThemeRequest === null || attachThemeRequest === undefined) {
      throw new Error(
        'Required parameter attachThemeRequest was null or undefined when calling attach.'
      );
    }
    // Path Params
    const localVarPath = '/players/add-player'.substring(1);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      'application/json',
    ]);
    queryParams.headers['Content-Type'] = contentType;

    queryParams.body = ObjectSerializer.stringify(
      ObjectSerializer.serialize(attachThemeRequest, 'AttachThemeRequest', ''),
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
          'ResponseSuccess',
          ''
        ) as ResponseSuccess,
      };
    });
  }

  /**
   * Releases a player theme from a piece of media.
   * Remove a player theme from a media
   * @param attachThemeRequest Media and theme
   */
  public async detach(
    attachThemeRequest: AttachThemeRequest = {}
  ): Promise<ResponseSuccess> {
    return this.detachWithResponseHeaders(attachThemeRequest).then(
      (res) => res.body
    );
  }

  /**
   * Releases a player theme from a piece of media.
   * Remove a player theme from a media
   * @param attachThemeRequest Media and theme
   */
  public async detachWithResponseHeaders(
    attachThemeRequest: AttachThemeRequest = {}
  ): Promise<{ headers: ApiResponseHeaders; body: ResponseSuccess }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (attachThemeRequest === null || attachThemeRequest === undefined) {
      throw new Error(
        'Required parameter attachThemeRequest was null or undefined when calling detach.'
      );
    }
    // Path Params
    const localVarPath = '/players/remove-player'.substring(1);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      'application/json',
    ]);
    queryParams.headers['Content-Type'] = contentType;

    queryParams.body = ObjectSerializer.stringify(
      ObjectSerializer.serialize(attachThemeRequest, 'AttachThemeRequest', ''),
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
          'ResponseSuccess',
          ''
        ) as ResponseSuccess,
      };
    });
  }
}
