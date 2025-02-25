import { expect } from '@jest/globals';
import StreamError from '../src/StreamError';
import { anonymousMockTestClient, mockTestClient } from './src/mockTestClient';
import { openInvalidFile, openTestImageFile } from './Video.spec';
import { v4 as uuidv4 } from 'uuid';

let testPlaylistID: string | undefined;
const testVideoIDOne = '2582cc17-ae70-428d-8937-309a380590eb';
const testVideoIDTwo = 'f812a31b-617d-41de-95eb-ac5e173ddfb8';
const testVideoIDThree = '8aa2c5e3-72a2-451e-ae99-73d65a4762b7';
let testFirstItemID: string | undefined;
let testSecondItemID: string | undefined;
let testThirdItemID: string | undefined;
const testName = 'Test Playlist';

const testClient = mockTestClient();
const anonymousTestClient = anonymousMockTestClient();

describe('Playlist Service', () => {
  describe('Create Playlist', () => {
    it('Valid Create Request', async () => {
      const response = await testClient.playlist.createPlaylist({
        name: testName,
      });
      expect(response).toBeDefined();
      testPlaylistID = response.data?.playlist?.id;
    });
  });

  describe('Get Playlists', () => {
    it('Valid Request', async () => {
      const response = await testClient.playlist.getPlaylists({});
      expect(response).toBeDefined();
    });

    it('Valid Request with Filter', async () => {
      const response = await testClient.playlist.getPlaylists({
        limit: 10,
        offset: 0,
        sortBy: 'created_at',
        orderBy: 'desc',
      });
      expect(response).toBeDefined();
    });

    it('Invalid SortBy', async () => {
      await expect(
        testClient.playlist.getPlaylists({
          sortBy: 'invalid',
        })
      ).rejects.toThrow(StreamError);
    });

    it('Invalid OrderBy', async () => {
      await expect(
        testClient.playlist.getPlaylists({
          orderBy: 'invalid',
        })
      ).rejects.toThrow(StreamError);
    });
  });

  describe('Update Playlist', () => {
    it('Update other', async () => {
      const thumbnailFile = await openTestImageFile();
      await expect(
        anonymousTestClient.playlist.updatePlaylist(
          testPlaylistID as string,
          thumbnailFile,
          undefined,
          testName
        )
      ).rejects.toThrow(StreamError);
    });
    it('Valid Update Request With Name and Thumbnail', async () => {
      const thumbnailFile = await openTestImageFile();
      const response = await testClient.playlist.updatePlaylist(
        testPlaylistID as string,
        thumbnailFile,
        undefined,
        testName
      );
      expect(response).toBeDefined();
    });

    it('Invalid Playlist ID', async () => {
      const thumbnailFile = await openTestImageFile();
      await expect(
        testClient.playlist.updatePlaylist(
          '',
          thumbnailFile,
          undefined,
          testName
        )
      ).rejects.toThrow(StreamError);
    });

    it('Invalid Thumbnail', async () => {
      const invalidFile = await openInvalidFile();
      await expect(
        testClient.playlist.updatePlaylist(
          testPlaylistID as string,
          invalidFile,
          undefined,
          testName
        )
      ).rejects.toThrow(StreamError);
    });

    it('Not exist ID', async () => {
      const thumbnailFile = await openTestImageFile();
      const newId = uuidv4();
      await expect(
        testClient.playlist.updatePlaylist(
          newId,
          thumbnailFile,
          undefined,
          testName
        )
      ).rejects.toThrow(StreamError);
    });
  });

  describe('Get Playlist Public Info', () => {
    it('Valid Request', async () => {
      const response = await testClient.playlist.getPlaylistPublicInfo(
        testPlaylistID as string
      );
      expect(response).toBeDefined();
    });

    it('Invalid Playlist ID', async () => {
      await expect(
        testClient.playlist.getPlaylistPublicInfo('')
      ).rejects.toThrow(StreamError);
    });

    it('Not exist ID', async () => {
      const newId = uuidv4();
      await expect(
        testClient.playlist.getPlaylistPublicInfo(newId)
      ).rejects.toThrow(StreamError);
    });
  });

  describe('Add Video to Playlist', () => {
    it('Add other', async () => {
      await expect(
        anonymousTestClient.playlist.addVideoToPlaylist(
          testPlaylistID as string,
          {
            videoId: testVideoIDOne,
          }
        )
      ).rejects.toThrow(StreamError);
    });
    it('Valid Add First Video Request', async () => {
      const response = await testClient.playlist.addVideoToPlaylist(
        testPlaylistID as string,
        {
          videoId: testVideoIDOne,
        }
      );
      expect(response).toBeDefined();
    });

    it('Valid Add Second Video Request', async () => {
      const response = await testClient.playlist.addVideoToPlaylist(
        testPlaylistID as string,
        {
          videoId: testVideoIDTwo,
        }
      );
      expect(response).toBeDefined();
    });

    it('Valid Add Third Video Request', async () => {
      const response = await testClient.playlist.addVideoToPlaylist(
        testPlaylistID as string,
        {
          videoId: testVideoIDThree,
        }
      );
      expect(response).toBeDefined();
    });

    it('Missing Video ID', async () => {
      await expect(
        testClient.playlist.addVideoToPlaylist(testPlaylistID as string, {
          videoId: '',
        })
      ).rejects.toThrow(StreamError);
    });

    it('Empty Request', async () => {
      await expect(
        testClient.playlist.addVideoToPlaylist(testPlaylistID as string, {})
      ).rejects.toThrow(StreamError);
    });

    it('Not exist ID', async () => {
      const newId = uuidv4();
      await expect(
        testClient.playlist.addVideoToPlaylist(newId, {
          videoId: testVideoIDOne,
        })
      ).rejects.toThrow(StreamError);
    });
  });

  describe('Get Playlist By ID', () => {
    it('Get other', async () => {
      await expect(
        anonymousTestClient.playlist.getPlaylistById({
          id: testPlaylistID as string,
        })
      ).rejects.toThrow(StreamError);
    });
    it('Valid Playlist ID', async () => {
      const response = await testClient.playlist.getPlaylistById({
        id: testPlaylistID as string,
      });
      testFirstItemID = response.data?.playlist?.videoItems?.[1]?.id;
      testSecondItemID = response.data?.playlist?.videoItems?.[1]?.nextId;
      testThirdItemID = response.data?.playlist?.videoItems?.[1]?.previousId;
      expect(response).toBeDefined();
    });

    it('Valid Playlist ID with SortBy and OrderBy', async () => {
      const response = await testClient.playlist.getPlaylistById({
        id: testPlaylistID as string,
        sortBy: 'created_at',
        orderBy: 'desc',
      });
      expect(response).toBeDefined();
    });

    it('Invalid Playlist ID', async () => {
      await expect(
        testClient.playlist.getPlaylistById({
          id: '',
        })
      ).rejects.toThrow(StreamError);
    });

    it('Empty Request', async () => {
      await expect(
        testClient.playlist.getPlaylistById({
          id: '',
        })
      ).rejects.toThrow(StreamError);
    });

    it('Invalid OrderBy', async () => {
      await expect(
        testClient.playlist.getPlaylistById({
          id: testPlaylistID as string,
          orderBy: 'invalid' as 'asc' | 'desc',
        })
      ).rejects.toThrow(StreamError);
    });

    it('Invalid SortBy', async () => {
      await expect(
        testClient.playlist.getPlaylistById({
          id: testPlaylistID as string,
          sortBy: 'invalid' as 'created_at' | 'title' | 'duration',
        })
      ).rejects.toThrow(StreamError);
    });

    it('Not exist ID', async () => {
      const newId = uuidv4();
      await expect(
        testClient.playlist.getPlaylistById({
          id: newId,
        })
      ).rejects.toThrow(StreamError);
    });
  });

  describe('Move Video in Playlist', () => {
    it('Move other', async () => {
      await expect(
        anonymousTestClient.playlist.moveVideoInPlaylist(
          testPlaylistID as string,
          {
            currentId: testSecondItemID as string,
            nextId: testFirstItemID as string,
            previousId: testThirdItemID as string,
          }
        )
      ).rejects.toThrow(StreamError);
    });
    it('Valid Move Video Request', async () => {
      const response = await testClient.playlist.moveVideoInPlaylist(
        testPlaylistID as string,
        {
          currentId: testSecondItemID as string,
          nextId: testFirstItemID as string,
          previousId: testThirdItemID as string,
        }
      );
      expect(response).toBeDefined();
    });

    it('Invalid Playlist ID', async () => {
      await expect(
        testClient.playlist.moveVideoInPlaylist('', {
          currentId: testFirstItemID as string,
        })
      ).rejects.toThrow(StreamError);
    });

    it('Missing Current ID', async () => {
      await expect(
        testClient.playlist.moveVideoInPlaylist(testPlaylistID as string, {
          nextId: testSecondItemID as string,
        })
      ).rejects.toThrow(StreamError);
    });

    it('Missing Next ID', async () => {
      await expect(
        testClient.playlist.moveVideoInPlaylist(testPlaylistID as string, {
          currentId: testFirstItemID as string,
        })
      ).rejects.toThrow(StreamError);
    });
  });

  describe('Remove Video from Playlist', () => {
    it('Remove other', async () => {
      await expect(
        anonymousTestClient.playlist.removeVideoFromPlaylist(
          testPlaylistID as string,
          testFirstItemID as string
        )
      ).rejects.toThrow(StreamError);
    });
    it('Valid Remove First Video Request', async () => {
      const response = await testClient.playlist.removeVideoFromPlaylist(
        testPlaylistID as string,
        testFirstItemID as string
      );
      expect(response).toBeDefined();
    });

    it('Valid Remove Second Video Request', async () => {
      const response = await testClient.playlist.removeVideoFromPlaylist(
        testPlaylistID as string,
        testSecondItemID as string
      );
      expect(response).toBeDefined();
    });

    it('Valid Remove Third Video Request', async () => {
      const response = await testClient.playlist.removeVideoFromPlaylist(
        testPlaylistID as string,
        testThirdItemID as string
      );
      expect(response).toBeDefined();
    });

    it('Invalid Playlist ID', async () => {
      await expect(
        testClient.playlist.removeVideoFromPlaylist('', testVideoIDOne)
      ).rejects.toThrow(StreamError);
    });

    it('Missing Item ID', async () => {
      await expect(
        testClient.playlist.removeVideoFromPlaylist(
          testPlaylistID as string,
          ''
        )
      ).rejects.toThrow(StreamError);
    });

    it('Not exist ID', async () => {
      const newId = uuidv4();
      await expect(
        testClient.playlist.removeVideoFromPlaylist(newId, newId)
      ).rejects.toThrow(StreamError);
    });
  });

  describe('Delete Playlist Thumbnail', () => {
    it('Delete other', async () => {
      await expect(
        anonymousTestClient.playlist.deletePlaylistThumbnail(
          testPlaylistID as string
        )
      ).rejects.toThrow(StreamError);
    });
    it('Valid Playlist ID', async () => {
      const response = await testClient.playlist.deletePlaylistThumbnail(
        testPlaylistID as string
      );
      expect(response).toBeDefined();
    });

    it('Invalid Playlist ID', async () => {
      await expect(
        testClient.playlist.deletePlaylistThumbnail('')
      ).rejects.toThrow(StreamError);
    });

    it('Not exist ID', async () => {
      const newId = uuidv4();
      await expect(
        testClient.playlist.deletePlaylistThumbnail(newId)
      ).rejects.toThrow(StreamError);
    });
  });

  describe('Delete Playlist By ID', () => {
    it('Delete other', async () => {
      await expect(
        anonymousTestClient.playlist.deletePlaylistById(
          testPlaylistID as string
        )
      ).rejects.toThrow(StreamError);
    });
    it('Valid Playlist ID', async () => {
      const response = await testClient.playlist.deletePlaylistById(
        testPlaylistID as string
      );
      expect(response).toBeDefined();
    });

    it('Invalid Playlist ID', async () => {
      await expect(testClient.playlist.deletePlaylistById('')).rejects.toThrow(
        StreamError
      );
    });

    it('Not exist ID', async () => {
      const newId = uuidv4();
      await expect(
        testClient.playlist.deletePlaylistById(newId)
      ).rejects.toThrow(StreamError);
    });
  });
});
