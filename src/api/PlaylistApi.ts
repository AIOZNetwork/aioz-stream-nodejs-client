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
import ObjectSerializer, { COLLECTION_FORMATS } from '../ObjectSerializer';
import HttpClient, { QueryOptions, ApiResponseHeaders } from '../HttpClient';
import AddMediaRequest from '../model/AddMediaRequest';
import CreatePlaylistRequest from '../model/CreatePlaylistRequest';
import ListPlaylistsRequest from '../model/ListPlaylistsRequest';
import ListPlaylistsResponse from '../model/ListPlaylistsResponse';
import MoveItemRequest from '../model/MoveItemRequest';
import PlaylistResponse from '../model/PlaylistResponse';
import RemoveMediaRequest from '../model/RemoveMediaRequest';
import ResponseSuccess from '../model/ResponseSuccess';
import { Readable } from 'stream';
import { readableToBuffer } from '../HttpClient';

/**
 * no description
 */
export default class PlaylistApi {
  private httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  /**
   * Creates an empty playlist in your workspace.
   * Create a playlist
   * @param createPlaylistRequest Playlist
   */
  public async create(
    createPlaylistRequest: CreatePlaylistRequest = {}
  ): Promise<PlaylistResponse> {
    return this.createWithResponseHeaders(createPlaylistRequest).then(
      (res) => res.body
    );
  }

  /**
   * Creates an empty playlist in your workspace.
   * Create a playlist
   * @param createPlaylistRequest Playlist
   */
  public async createWithResponseHeaders(
    createPlaylistRequest: CreatePlaylistRequest = {}
  ): Promise<{ headers: ApiResponseHeaders; body: PlaylistResponse }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (createPlaylistRequest === null || createPlaylistRequest === undefined) {
      throw new Error(
        'Required parameter createPlaylistRequest was null or undefined when calling create.'
      );
    }
    // Path Params
    const localVarPath = '/playlists/create'.substring(1);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      'application/json',
    ]);
    queryParams.headers['Content-Type'] = contentType;

    queryParams.body = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        createPlaylistRequest,
        'CreatePlaylistRequest',
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
          'PlaylistResponse',
          ''
        ) as PlaylistResponse,
      };
    });
  }

  /**
   * Returns one playlist and its items, ordered as you ask.
   * Get a playlist
   * @param {Object} searchParams
   * @param { string } searchParams.id Playlist ID
   * @param { &#39;asc&#39; | &#39;desc&#39; } searchParams.orderBy
   * @param { string } searchParams.search
   * @param { &#39;created_at&#39; | &#39;title&#39; | &#39;duration&#39; | &#39;status&#39; } searchParams.sortBy
   */
  public async get(args: {
    id: string;
    orderBy?: 'asc' | 'desc';
    search?: string;
    sortBy?: 'created_at' | 'title' | 'duration' | 'status';
  }): Promise<PlaylistResponse> {
    return this.getWithResponseHeaders(args).then((res) => res.body);
  }

  /**
   * Returns one playlist and its items, ordered as you ask.
   * Get a playlist
   * @param {Object} searchParams
   * @param { string } searchParams.id Playlist ID
   * @param { &#39;asc&#39; | &#39;desc&#39; } searchParams.orderBy
   * @param { string } searchParams.search
   * @param { &#39;created_at&#39; | &#39;title&#39; | &#39;duration&#39; | &#39;status&#39; } searchParams.sortBy
   */
  public async getWithResponseHeaders({
    id,
    orderBy,
    search,
    sortBy,
  }: {
    id: string;
    orderBy?: 'asc' | 'desc';
    search?: string;
    sortBy?: 'created_at' | 'title' | 'duration' | 'status';
  }): Promise<{ headers: ApiResponseHeaders; body: PlaylistResponse }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling get.'
      );
    }
    // Path Params
    const localVarPath = '/playlists/{id}'
      .substring(1)
      .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

    // Query Params
    const urlSearchParams = new URLSearchParams();

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
        ObjectSerializer.serialize(
          sortBy,
          "'created_at' | 'title' | 'duration' | 'status'",
          ''
        )
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
          'PlaylistResponse',
          ''
        ) as PlaylistResponse,
      };
    });
  }

  /**
   * Changes a playlist's name, tags or thumbnail, sent as multipart/form-data. The file field is the new thumbnail: a PNG or JPEG, judged by its content, whose name, if it has an extension, must agree with it. The handler also takes a JSON body (name, tags, metadata); metadata can only be changed that way, since a form cannot carry its key/value list.
   * Update a playlist
   * @param id Playlist ID
   * @param file New thumbnail
   * @param name New name
   * @param tags New tags, one field per tag
   */
  public async update(
    id: string,
    file?: string | Readable | Buffer,
    name?: string,
    tags?: Array<string>
  ): Promise<ResponseSuccess> {
    return this.updateWithResponseHeaders(id, file, name, tags).then(
      (res) => res.body
    );
  }

  /**
   * Changes a playlist's name, tags or thumbnail, sent as multipart/form-data. The file field is the new thumbnail: a PNG or JPEG, judged by its content, whose name, if it has an extension, must agree with it. The handler also takes a JSON body (name, tags, metadata); metadata can only be changed that way, since a form cannot carry its key/value list.
   * Update a playlist
   * @param id Playlist ID
   * @param file New thumbnail
   * @param name New name
   * @param tags New tags, one field per tag
   */
  public async updateWithResponseHeaders(
    id: string,
    file?: string | Readable | Buffer,
    name?: string,
    tags?: Array<string>
  ): Promise<{ headers: ApiResponseHeaders; body: ResponseSuccess }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling update.'
      );
    }
    // Path Params
    const localVarPath = '/playlists/{id}'
      .substring(1)
      .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

    queryParams.method = 'PATCH';

    const formData = new FormData();

    // The Name/Buffer pair is only declared up front for a required file
    // (see the allParams block), so an optional one declares its own.
    if (file !== undefined) {
      let fileName = 'file';
      let fileBuffer: string | Readable | Buffer = file;
      if (typeof file === 'string') {
        fileName = path.basename(file);
        fileBuffer = createReadStream(file);
      }
      if (file instanceof Readable) {
        fileBuffer = await readableToBuffer(file);
      }
      formData.append(fileName, fileBuffer, fileName);
    }

    if (typeof name !== undefined) {
      formData.append('name', name);
    }
    if (tags) {
      formData.append('tags', tags.join(COLLECTION_FORMATS['csv']));
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
          'ResponseSuccess',
          ''
        ) as ResponseSuccess,
      };
    });
  }

  /**
   * Deletes a playlist. The media in it is not deleted.
   * Delete a playlist
   * @param id Playlist ID
   */
  public async delete(id: string): Promise<ResponseSuccess> {
    return this.deleteWithResponseHeaders(id).then((res) => res.body);
  }

  /**
   * Deletes a playlist. The media in it is not deleted.
   * Delete a playlist
   * @param id Playlist ID
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
    const localVarPath = '/playlists/{id}'
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
   * Returns a page of the playlists in your workspace.
   * List playlists
   * @param listPlaylistsRequest Filter and paging
   */
  public async list(
    listPlaylistsRequest: ListPlaylistsRequest = {}
  ): Promise<ListPlaylistsResponse> {
    return this.listWithResponseHeaders(listPlaylistsRequest).then(
      (res) => res.body
    );
  }

  /**
   * Returns a page of the playlists in your workspace.
   * List playlists
   * @param listPlaylistsRequest Filter and paging
   */
  public async listWithResponseHeaders(
    listPlaylistsRequest: ListPlaylistsRequest = {}
  ): Promise<{ headers: ApiResponseHeaders; body: ListPlaylistsResponse }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (listPlaylistsRequest === null || listPlaylistsRequest === undefined) {
      throw new Error(
        'Required parameter listPlaylistsRequest was null or undefined when calling list.'
      );
    }
    // Path Params
    const localVarPath = '/playlists'.substring(1);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      'application/json',
    ]);
    queryParams.headers['Content-Type'] = contentType;

    queryParams.body = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        listPlaylistsRequest,
        'ListPlaylistsRequest',
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
          'ListPlaylistsResponse',
          ''
        ) as ListPlaylistsResponse,
      };
    });
  }

  /**
   * Removes the thumbnail from a playlist.
   * Delete a playlist thumbnail
   * @param id Playlist ID
   */
  public async deleteThumbnail(id: string): Promise<ResponseSuccess> {
    return this.deleteThumbnailWithResponseHeaders(id).then((res) => res.body);
  }

  /**
   * Removes the thumbnail from a playlist.
   * Delete a playlist thumbnail
   * @param id Playlist ID
   */
  public async deleteThumbnailWithResponseHeaders(
    id: string
  ): Promise<{ headers: ApiResponseHeaders; body: ResponseSuccess }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling deleteThumbnail.'
      );
    }
    // Path Params
    const localVarPath = '/playlists/{id}/thumbnail'
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
   * Adds one or more media to one or more of your playlists.
   * Add media to playlists
   * @param id Playlist ID
   * @param addMediaRequest Media and playlists
   */
  public async addMedia(
    id: string,
    addMediaRequest: AddMediaRequest = {}
  ): Promise<ResponseSuccess> {
    return this.addMediaWithResponseHeaders(id, addMediaRequest).then(
      (res) => res.body
    );
  }

  /**
   * Adds one or more media to one or more of your playlists.
   * Add media to playlists
   * @param id Playlist ID
   * @param addMediaRequest Media and playlists
   */
  public async addMediaWithResponseHeaders(
    id: string,
    addMediaRequest: AddMediaRequest = {}
  ): Promise<{ headers: ApiResponseHeaders; body: ResponseSuccess }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling addMedia.'
      );
    }
    if (addMediaRequest === null || addMediaRequest === undefined) {
      throw new Error(
        'Required parameter addMediaRequest was null or undefined when calling addMedia.'
      );
    }
    // Path Params
    const localVarPath = '/playlists/{id}/items'
      .substring(1)
      .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      'application/json',
    ]);
    queryParams.headers['Content-Type'] = contentType;

    queryParams.body = ObjectSerializer.stringify(
      ObjectSerializer.serialize(addMediaRequest, 'AddMediaRequest', ''),
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
   * Returns the payload the player needs to play a playlist, including its theme. No account required.
   * Get a playlist for the player
   * @param id Playlist ID
   */
  public async getPublic(id: string): Promise<ResponseSuccess> {
    return this.getPublicWithResponseHeaders(id).then((res) => res.body);
  }

  /**
   * Returns the payload the player needs to play a playlist, including its theme. No account required.
   * Get a playlist for the player
   * @param id Playlist ID
   */
  public async getPublicWithResponseHeaders(
    id: string
  ): Promise<{ headers: ApiResponseHeaders; body: ResponseSuccess }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling getPublic.'
      );
    }
    // Path Params
    const localVarPath = '/playlists/{id}/player.json'
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
          'ResponseSuccess',
          ''
        ) as ResponseSuccess,
      };
    });
  }

  /**
   * Moves one item within a playlist. Send next_id to move it to the start, previous_id to move it to the end, or both to move it between two items.
   * Reorder a playlist
   * @param id Playlist ID
   * @param moveItemRequest Where to move it
   */
  public async moveItem(
    id: string,
    moveItemRequest: MoveItemRequest = {}
  ): Promise<ResponseSuccess> {
    return this.moveItemWithResponseHeaders(id, moveItemRequest).then(
      (res) => res.body
    );
  }

  /**
   * Moves one item within a playlist. Send next_id to move it to the start, previous_id to move it to the end, or both to move it between two items.
   * Reorder a playlist
   * @param id Playlist ID
   * @param moveItemRequest Where to move it
   */
  public async moveItemWithResponseHeaders(
    id: string,
    moveItemRequest: MoveItemRequest = {}
  ): Promise<{ headers: ApiResponseHeaders; body: ResponseSuccess }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling moveItem.'
      );
    }
    if (moveItemRequest === null || moveItemRequest === undefined) {
      throw new Error(
        'Required parameter moveItemRequest was null or undefined when calling moveItem.'
      );
    }
    // Path Params
    const localVarPath = '/playlists/{id}/items'
      .substring(1)
      .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      'application/json',
    ]);
    queryParams.headers['Content-Type'] = contentType;

    queryParams.body = ObjectSerializer.stringify(
      ObjectSerializer.serialize(moveItemRequest, 'MoveItemRequest', ''),
      contentType
    );

    queryParams.method = 'PUT';

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
   * Removes one item from one or more of your playlists.
   * Remove an item from playlists
   * @param id Playlist ID
   * @param itemId Playlist item ID
   * @param removeMediaRequest Other playlists
   */
  public async removeMedia(
    id: string,
    itemId: string,
    removeMediaRequest: RemoveMediaRequest = {}
  ): Promise<ResponseSuccess> {
    return this.removeMediaWithResponseHeaders(
      id,
      itemId,
      removeMediaRequest
    ).then((res) => res.body);
  }

  /**
   * Removes one item from one or more of your playlists.
   * Remove an item from playlists
   * @param id Playlist ID
   * @param itemId Playlist item ID
   * @param removeMediaRequest Other playlists
   */
  public async removeMediaWithResponseHeaders(
    id: string,
    itemId: string,
    removeMediaRequest: RemoveMediaRequest = {}
  ): Promise<{ headers: ApiResponseHeaders; body: ResponseSuccess }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling removeMedia.'
      );
    }
    if (itemId === null || itemId === undefined) {
      throw new Error(
        'Required parameter itemId was null or undefined when calling removeMedia.'
      );
    }
    if (removeMediaRequest === null || removeMediaRequest === undefined) {
      throw new Error(
        'Required parameter removeMediaRequest was null or undefined when calling removeMedia.'
      );
    }
    // Path Params
    const localVarPath = '/playlists/{id}/items/{item_id}'
      .substring(1)
      .replace('{' + 'id' + '}', encodeURIComponent(String(id)))
      .replace('{' + 'item_id' + '}', encodeURIComponent(String(itemId)));

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      'application/json',
    ]);
    queryParams.headers['Content-Type'] = contentType;

    queryParams.body = ObjectSerializer.stringify(
      ObjectSerializer.serialize(removeMediaRequest, 'RemoveMediaRequest', ''),
      contentType
    );

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
}
