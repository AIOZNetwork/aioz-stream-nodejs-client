import { afterAll, beforeAll, describe, expect, it } from '@jest/globals';
import fs from 'fs';
import crypto from 'crypto';
import StreamError from '../src/StreamError';
import path from 'path';
import { mockTestClient, anonymousMockTestClient } from './src/mockTestClient';
import { createTempVTTFile } from './VideoChapter.spec';
import { v4 as uuidv4 } from 'uuid';
let testVideoID: string;
const title = 'Test Video';
const description = 'Test Description';
const testLang = 'en';
// eslint-disable-next-line prefer-const
let deletedVideoLater: string[] = [];
const testVideoCaptionID = '557c6028-4261-4570-91f5-05015ce289f1';

async function getVideoFilePath(fileName: string): Promise<string> {
  return path.join(__dirname, '/data', fileName);
}

const testClient = mockTestClient();
const anonymousTestClient = anonymousMockTestClient();

export async function openTestImageFile(): Promise<fs.ReadStream> {
  const filePath = path.join(__dirname, 'data', 'logo.png');
  const fileReadable = fs.createReadStream(filePath);
  return fileReadable;
}

export async function openInvalidFile(): Promise<fs.ReadStream> {
  const filePath = path.join(__dirname, 'data', 'invalid-file.txt');
  const fileReadable = fs.createReadStream(filePath);
  return fileReadable;
}

function getFileHash(file: fs.ReadStream): Promise<string> {
  return new Promise((resolve, reject) => {
    const hash = crypto.createHash('md5');

    file.on('data', (data) => {
      hash.update(data);
    });

    file.on('end', () => {
      resolve(hash.digest('hex'));
    });

    file.on('error', (err) => {
      reject(err);
    });
  });
}
describe('Video Service', () => {
  describe('create', () => {
    it('Valid Complete Request', async () => {
      const resp = await testClient.media.create({
        title: 'Test Video',
        description: 'Test Description',
        isPublic: true,
        metadata: [
          { key: 'key1', value: 'value1' },
          { key: 'key2', value: 'value2' },
        ],
        qualities: [
          {
            type: 'hls',
            containerType: 'mpegts',
            resolution: '240p',
          },
        ],
        tags: ['tag1', 'tag2'],
      });
      expect(resp).toBeDefined();
      expect(resp.data?.id).toBeDefined();
      testVideoID = resp.data?.id as string;
    });

    it('Name create oversize video', async () => {
      const resp = await testClient.media.create({
        title: 'Test Video',
        qualities: [
          {
            type: 'hls',
            containerType: 'mpegts',
            resolution: '240p',
          },
        ],
      });
      if (resp.data?.id) {
        deletedVideoLater.push(resp.data?.id as string);
      }
    });

    it('Valid Minimal Request', async () => {
      const resp = await testClient.media.create({
        title: 'Test Video',
        qualities: [
          {
            type: 'hls',
            containerType: 'mpegts',
            resolution: '240p',
          },
        ],
      });
      expect(resp).toBeDefined();
      if (resp.data?.id) {
        deletedVideoLater.push(resp.data?.id as string);
      }
    });

    it('Invalid Title - Empty', async () => {
      await expect(
        testClient.media.create({
          qualities: [
            {
              type: 'hls',
              containerType: 'mpegts',
              resolution: '240p',
            },
          ],
        })
      ).rejects.toThrow(StreamError);
    });

    it('Invalid Title - Too Long', async () => {
      await expect(
        testClient.media.create({
          title: 'a'.repeat(256),
          qualities: [
            {
              type: 'hls',
              containerType: 'mpegts',
              resolution: '240p',
            },
          ],
        })
      ).rejects.toThrow(StreamError);
    });

    it('Invalid Description - Too Long', async () => {
      await expect(
        testClient.media.create({
          title: 'Test Video',
          description: 'a'.repeat(1001),
          qualities: [
            {
              type: 'hls',
              containerType: 'mpegts',
              resolution: '240p',
            },
          ],
        })
      ).rejects.toThrow(StreamError);
    });

    it('Invalid Metadata - Key Too Long', async () => {
      await expect(
        testClient.media.create({
          title: 'Test Video',
          qualities: [
            {
              type: 'hls',
              containerType: 'mpegts',
              resolution: '240p',
            },
          ],
          metadata: [{ key: 'a'.repeat(256), value: 'value' }],
        })
      ).rejects.toThrow();
    });

    it('Invalid Qualities - Invalid Value', async () => {
      await expect(
        testClient.media.create({
          title: 'Test Video',
          qualities: [
            {
              type: 'invalid_quality',
              containerType: 'mpegts',
              resolution: '240p',
            },
          ],
        })
      ).rejects.toThrow(StreamError);
    });
  });

  describe('update', () => {
    it('Update other', async () => {
      await expect(
        anonymousTestClient.media.update(testVideoID, {
          title: title,
          description: description,
        })
      ).rejects.toThrow(StreamError);
    });
    it('Valid Update All Fields', async () => {
      const resp = await testClient.media.update(testVideoID, {
        title: title,
        description: description,
      });
      expect(resp).toBeDefined();
    });

    it('Valid Update Title Only', async () => {
      const resp = await testClient.media.update(testVideoID, {
        title: title,
      });
      expect(resp).toBeDefined();
    });

    it('Valid Update Description Only', async () => {
      const resp = await testClient.media.update(testVideoID, {
        description: description,
      });
      expect(resp).toBeDefined();
    });

    it('Invalid Title Length', async () => {
      await expect(
        testClient.media.update(testVideoID, {
          title: 'a'.repeat(256),
        })
      ).rejects.toThrow(StreamError);
    });

    it('Invalid Video ID', async () => {
      await expect(
        testClient.media.update('invalid-id', {
          title: title,
        })
      ).rejects.toThrow(StreamError);
    });

    it('Non-existent Video ID', async () => {
      await expect(
        testClient.media.update('non-existent-id', {
          title: title,
        })
      ).rejects.toThrow(StreamError);
    });

    it('Not exist ID', async () => {
      const newId = uuidv4();
      await expect(
        testClient.media.update(newId, {
          title: title,
        })
      ).rejects.toThrow(StreamError);
    });
  });

  describe('getDetail', () => {
    it('Get other', async () => {
      await expect(
        anonymousTestClient.media.getDetail(testVideoID)
      ).rejects.toThrow(StreamError);
    });
    it('Valid Get Detail', async () => {
      const resp = await testClient.media.getDetail(testVideoID);
      expect(resp.data?.id).toBeDefined();
      expect(resp.data?.title).toBeDefined();
      expect(resp.status).toBeDefined();
    });

    it('Invalid ID Format', async () => {
      await expect(testClient.media.getDetail('invalid-uuid')).rejects.toThrow(
        StreamError
      );
    });

    it('Non-existent ID', async () => {
      await expect(
        testClient.media.getDetail('non-existent-id')
      ).rejects.toThrow(StreamError);
    });

    it('Empty ID', async () => {
      await expect(testClient.media.getDetail('')).rejects.toThrow(StreamError);
    });
    it('Not exist ID', async () => {
      const newId = uuidv4();
      await expect(testClient.media.getDetail(newId)).rejects.toThrow(
        StreamError
      );
    });
  });

  describe('uploadThumbnail', () => {
    let validThumbnail: fs.ReadStream;

    it('Upload thumbnail other', async () => {
      validThumbnail = await openTestImageFile();
      await expect(
        anonymousTestClient.media.uploadThumbnail(testVideoID, validThumbnail)
      ).rejects.toThrow(StreamError);
    });
    it('Valid Thumbnail Upload', async () => {
      validThumbnail = await openTestImageFile();
      const resp = await testClient.media.uploadThumbnail(
        testVideoID,
        validThumbnail
      );
      expect(resp).toBeDefined();
    });

    it('Invalid File Type', async () => {
      const invalidFile = await openInvalidFile();
      await expect(
        testClient.media.uploadThumbnail(testVideoID, invalidFile)
      ).rejects.toThrow(StreamError);
    });

    it('Invalid Video ID', async () => {
      await expect(
        testClient.media.uploadThumbnail('invalid-id', validThumbnail)
      ).rejects.toThrow(StreamError);
    });

    it('Not exist ID', async () => {
      const newId = uuidv4();
      await expect(
        testClient.media.uploadThumbnail(newId, validThumbnail)
      ).rejects.toThrow(StreamError);
    });
  });

  describe('getCost', () => {
    it('Valid Single Quality', async () => {
      const resp = await testClient.media.getCost('720p', 'video', 120.5);
      expect(resp).toBeDefined();
    });

    it('Valid Multiple Qualities', async () => {
      const resp = await testClient.media.getCost('720p,1080p', 'video', 120.5);
      expect(resp).toBeDefined();
    });

    it('Invalid Quality', async () => {
      await expect(
        testClient.media.getCost('invalid', 'video', 120.5)
      ).rejects.toThrow(StreamError);
    });

    it('Empty Quality', async () => {
      await expect(
        testClient.media.getCost('', 'video', 120.5)
      ).rejects.toThrow(StreamError);
    });

    it('Negative Duration', async () => {
      await expect(
        testClient.media.getCost('720p', 'video', -1)
      ).rejects.toThrow(StreamError);
    });
  });

  describe('getVideoList', () => {
    it('Valid Get Video List With No Filter', async () => {
      const resp = await testClient.media.getMediaList();
      expect(resp).toBeDefined();
    });

    it('Valid Get Video List With Filter', async () => {
      const resp = await testClient.media.getMediaList({
        limit: 1,
        offset: 0,
        orderBy: 'desc',
        sortBy: 'created_at',
      });
      expect(resp).toBeDefined();
    });
  });

  describe('uploadPart', () => {
    it('Valid File Upload', async () => {
      const video = await getVideoFilePath('558k.mp4');
      const resp = await testClient.media.uploadPart(testVideoID, video);
      expect(resp).toBeDefined();
    });

    it('Invalid Video ID', async () => {
      const video = await getVideoFilePath('558k.mp4');
      const videoFile = fs.createReadStream(video);
      const videoHash = await getFileHash(videoFile);
      await expect(
        testClient.media.uploadPart('invalid-id', video, videoHash, '1')
      ).rejects.toThrow(StreamError);
    });

    it('Not exist ID', async () => {
      const newId = uuidv4();
      const video = await getVideoFilePath('558k.mp4');
      await expect(testClient.media.uploadPart(newId, video)).rejects.toThrow(
        StreamError
      );
    });
  });

  describe('uploadVideoComplete', () => {
    it('Valid Get Upload When Video Completes', async () => {
      const resp = await testClient.media.uploadMediaComplete(testVideoID);
      expect(resp).toBeDefined();
    });

    it('Invalid Video ID', async () => {
      await expect(
        testClient.media.uploadMediaComplete('invalid-id')
      ).rejects.toThrow(StreamError);
    });

    it('Empty Video ID', async () => {
      await expect(testClient.media.uploadMediaComplete('')).rejects.toThrow(
        StreamError
      );
    });

    it('Not exist ID', async () => {
      const newId = uuidv4();
      await expect(testClient.media.uploadMediaComplete(newId)).rejects.toThrow(
        StreamError
      );
    });
  });

  describe('getVideoPlayerInfo', () => {
    it('Valid Get Video Player Info', async () => {
      const resp = await testClient.media.getMediaPlayerInfo({
        id: testVideoID,
      });
      expect(resp).toBeDefined();
    });

    it('Invalid Video ID', async () => {
      await expect(
        testClient.media.getMediaPlayerInfo({
          id: 'invalid-id',
        })
      ).rejects.toThrow(StreamError);
    });

    it('Empty Video ID', async () => {
      await expect(
        testClient.media.getMediaPlayerInfo({
          id: '',
        })
      ).rejects.toThrow(StreamError);
    });

    it('Not exist ID', async () => {
      const newId = uuidv4();
      await expect(
        testClient.media.getMediaPlayerInfo({
          id: newId,
        })
      ).rejects.toThrow(StreamError);
    });
  });

  describe('createCaption', () => {
    it('Valid Create Video Captions', async () => {
      const tmpFilePath = await createTempVTTFile();
      const resp = await testClient.media.createCaption(
        testVideoCaptionID,
        testLang,
        tmpFilePath
      );
      expect(resp).toBeDefined();
    });

    it('Empty Language', async () => {
      const tmpFile = await createTempVTTFile();
      await expect(
        testClient.media.createCaption(testVideoCaptionID, '', tmpFile)
      ).rejects.toThrow(StreamError);
    });

    it('Invalid Video ID', async () => {
      const tmpFile = await createTempVTTFile();
      await expect(
        testClient.media.createCaption('invalid-id', testLang, tmpFile)
      ).rejects.toThrow(StreamError);
    });
  });

  describe('getCaptions', () => {
    it('Valid Get Video Captions', async () => {
      const resp = await testClient.media.getCaptions({
        id: testVideoCaptionID,
      });
      expect(resp).toBeDefined();
    });

    it('Invalid Video ID', async () => {
      await expect(
        testClient.media.getCaptions({
          id: 'invalid-id',
        })
      ).rejects.toThrow(StreamError);
    });
    it('Empty Video ID', async () => {
      await expect(
        testClient.media.getCaptions({
          id: '',
        })
      ).rejects.toThrow(StreamError);
    });
    it('Not exist ID', async () => {
      const newId = uuidv4();
      await expect(
        testClient.media.getCaptions({
          id: newId,
        })
      ).rejects.toThrow(StreamError);
    });
  });

  describe('setDefaultCaption', () => {
    it('Valid Set Default Caption', async () => {
      const resp = await testClient.media.setDefaultCaption(
        testVideoCaptionID,
        testLang
      );
      expect(resp).toBeDefined();
    });

    it('Invalid Video ID', async () => {
      await expect(
        testClient.media.setDefaultCaption('invalid-id', testLang)
      ).rejects.toThrow(StreamError);
    });

    it('Empty Video ID', async () => {
      await expect(
        testClient.media.setDefaultCaption('', testLang)
      ).rejects.toThrow(StreamError);
    });
    it('Not exist ID', async () => {
      const newId = uuidv4();
      await expect(
        testClient.media.setDefaultCaption(newId, testLang)
      ).rejects.toThrow(StreamError);
    });
  });

  describe('deleteCaption', () => {
    it('Valid Delete Video Captions', async () => {
      const resp = await testClient.media.deleteCaption(
        testVideoCaptionID,
        testLang
      );
      expect(resp).toBeDefined();
    });

    it('Invalid Video ID', async () => {
      await expect(
        testClient.media.deleteCaption('invalid-id', testLang)
      ).rejects.toThrow(StreamError);
    });
    it('Not exist ID', async () => {
      const newId = uuidv4();
      await expect(
        testClient.media.deleteCaption(newId, testLang)
      ).rejects.toThrow(StreamError);
    });
  });

  describe('Delete Video', () => {
    beforeAll(async () => {
      const resp = await testClient.media.create({
        title: title,
        description: description,
        isPublic: true,
        metadata: [
          { key: 'key1', value: 'value1' },
          { key: 'key2', value: 'value2' },
        ],
        qualities: [
          {
            type: 'hls',
            containerType: 'mpegts',
            resolution: '240p',
          },
        ],
        tags: ['tag1', 'tag2'],
      });
      expect(resp).toBeDefined();
      expect(resp.data?.id).toBeDefined();
      testVideoID = resp.data?.id as string;
    });

    it('Delete other', async () => {
      await expect(
        anonymousTestClient.media.delete(testVideoID)
      ).rejects.toThrow(StreamError);
    });

    it('Valid Delete', async () => {
      if (!testVideoID) {
        throw new Error(
          'Video ID is not defined. Ensure the video is created before deletion tests.'
        );
      }
      const resp = await testClient.media.delete(testVideoID);
      expect(resp).toBeDefined();
    });

    it('Invalid Video ID', async () => {
      await expect(testClient.media.delete('invalid-id')).rejects.toThrow(
        StreamError
      );
    });
    it('Not exist ID', async () => {
      const newId = uuidv4();
      await expect(testClient.media.delete(newId)).rejects.toThrow(StreamError);
    });

    afterAll(async () => {
      for (const id of deletedVideoLater) {
        try {
          await testClient.media.delete(id);
        } catch (error) {
          console.error(
            `Failed to delete Live Stream Key with ID ${id}:`,
            error
          );
        }
      }
    });
  });
});
