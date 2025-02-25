import { expect } from '@jest/globals';
import StreamError from '../src/StreamError';
import fs from 'fs';
import path from 'path';
import { mockTestClient } from './src/mockTestClient';
import { v4 as uuidv4 } from 'uuid';

const testLang = 'en';
const testVideoIDForChapter = '8aa2c5e3-72a2-451e-ae99-73d65a4762b7';
const chapterContent = `WEBVTT

00:00:00.000 --> 00:01:00.000
Chapter 1

00:01:00.000 --> 00:02:00.000
Chapter 2`;

let tmpFilePath: string;

export async function createTempVTTFile(): Promise<fs.ReadStream> {
  tmpFilePath = path.join(__dirname, 'test-*.vtt');
  fs.writeFileSync(tmpFilePath, chapterContent);
  return fs.createReadStream(tmpFilePath);
}

export function deleteTempVTTFile(filePath: string) {
  fs.unlinkSync(filePath);
}

const testClient = mockTestClient();

describe('VideoChapter Service', () => {
  describe('CreateVideoChapter', () => {
    it('Valid Create', async () => {
      const tmpFilePath = await createTempVTTFile();
      const response = await testClient.videoChapter.create(
        testVideoIDForChapter,
        testLang,
        tmpFilePath
      );
      expect(response).toBeDefined();
      tmpFilePath.close();
    });

    it('Invalid Video ID', async () => {
      const tmpFilePath = await createTempVTTFile();
      await expect(
        testClient.videoChapter.create('invalid-id', testLang, tmpFilePath)
      ).rejects.toThrow(StreamError);
      tmpFilePath.close();
    });

    it('Invalid Language', async () => {
      const tmpFilePath = await createTempVTTFile();
      await expect(
        testClient.videoChapter.create(
          testVideoIDForChapter,
          'invalid',
          tmpFilePath
        )
      ).rejects.toThrow(StreamError);
      tmpFilePath.close();
    });

    it('Not exist Video ID', async () => {
      const tmpFilePath = await createTempVTTFile();
      const newId = uuidv4();
      await expect(
        testClient.videoChapter.create(newId, testLang, tmpFilePath)
      ).rejects.toThrow(StreamError);
      tmpFilePath.close();
    });

    afterEach(() => {
      deleteTempVTTFile(tmpFilePath);
    });
  });

  describe('GetVideoChapters', () => {
    it('Valid Get', async () => {
      const response = await testClient.videoChapter.get({
        id: testVideoIDForChapter,
        limit: 10,
        offset: 0,
      });
      expect(response).toBeDefined();
      expect(response.data).toBeDefined();
    });

    it('Invalid Video ID', async () => {
      await expect(
        testClient.videoChapter.get({
          id: 'invalid-id',
          limit: 10,
          offset: 0,
        })
      ).rejects.toThrow(StreamError);
    });
    it('Not exist ID', async () => {
      const newId = uuidv4();
      await expect(
        testClient.videoChapter.get({
          id: newId,
          limit: 10,
          offset: 0,
        })
      ).rejects.toThrow(StreamError);
    });
  });

  describe('DeleteVideoChapter', () => {
    it('Valid Delete', async () => {
      const response = await testClient.videoChapter.delete(
        testVideoIDForChapter,
        testLang
      );
      expect(response).toBeDefined();
    });

    it('Invalid Video ID', async () => {
      await expect(
        testClient.videoChapter.delete('invalid-id', testLang)
      ).rejects.toThrow(StreamError);
    });

    it('Empty Video ID', async () => {
      await expect(
        testClient.videoChapter.delete('', testLang)
      ).rejects.toThrow(StreamError);
    });

    it('Empty Language', async () => {
      await expect(
        testClient.videoChapter.delete(testVideoIDForChapter, '')
      ).rejects.toThrow(StreamError);
    });

    it('Not exist ID', async () => {
      const newId = uuidv4();
      await expect(
        testClient.videoChapter.delete(newId, testLang)
      ).rejects.toThrow(StreamError);
    });
  });
});
