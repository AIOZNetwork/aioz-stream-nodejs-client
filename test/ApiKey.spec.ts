import { expect } from '@jest/globals';
import StreamError from '../src/StreamError';
import { anonymousMockTestClient, mockTestClient } from './src/mockTestClient';
import { v4 as uuidv4 } from 'uuid';

let testApiKeyForUpdateAndDelete: string | undefined;
const testApiKeyName = 'Test API Key';

const testClient = mockTestClient();
const anonymousTestClient = anonymousMockTestClient();
const deleteApiKeyLater: string[] = [];

describe('ApiKey Service', () => {
  describe('Create', () => {
    it('Valid Create', async () => {
      const response = await testClient.apiKey.create({
        apiKeyName: testApiKeyName,
        type: 'full_access',
        ttl: '100000000',
      });
      expect(response).toBeDefined();
      testApiKeyForUpdateAndDelete = response.data?.apiKey?.id;
      if (testApiKeyForUpdateAndDelete) {
        deleteApiKeyLater.push(testApiKeyForUpdateAndDelete);
      }
    });

    it('Empty Name', async () => {
      await expect(
        testClient.apiKey.create({
          type: 'read',
          ttl: '24h',
        })
      ).rejects.toThrow(StreamError);
    });

    it('Invalid Type', async () => {
      await expect(
        testClient.apiKey.create({
          apiKeyName: testApiKeyName,
          type: 'invalid',
          ttl: '24h',
        })
      ).rejects.toThrow(StreamError);
    });

    it('Invalid TTL', async () => {
      await expect(
        testClient.apiKey.create({
          apiKeyName: testApiKeyName,
          type: 'read',
          ttl: 'invalid',
        })
      ).rejects.toThrow(StreamError);
    });
  });

  describe('Update', () => {
    it('Update other', async () => {
      await expect(
        anonymousTestClient.apiKey.update(
          testApiKeyForUpdateAndDelete as string,
          {
            apiKeyName: 'Updated API Key',
          }
        )
      ).rejects.toThrow(StreamError);
    });
    it('Valid Update', async () => {
      const response = await testClient.apiKey.update(
        testApiKeyForUpdateAndDelete as string,
        {
          apiKeyName: 'Updated API Key',
        }
      );
      expect(response).toBeDefined();
    });

    it('Invalid ID', async () => {
      await expect(
        testClient.apiKey.update('invalid-id', {
          apiKeyName: 'Updated API Key',
        })
      ).rejects.toThrow(StreamError);
    });

    it('Empty Name', async () => {
      await expect(
        testClient.apiKey.update(testApiKeyForUpdateAndDelete as string, {
          apiKeyName: '',
        })
      ).rejects.toThrow(StreamError);
    });

    it('Not exist ID', async () => {
      const newId = uuidv4();
      await expect(
        testClient.apiKey.update(newId, {
          apiKeyName: 'Updated API Key',
        })
      ).rejects.toThrow(StreamError);
    });
  });

  describe('Delete', () => {
    it('Delete other user', async () => {
      await expect(
        anonymousTestClient.apiKey.delete(
          testApiKeyForUpdateAndDelete as string
        )
      ).rejects.toThrow(StreamError);
    });
    it('Valid Delete', async () => {
      const response = await testClient.apiKey.delete(
        testApiKeyForUpdateAndDelete as string
      );
      expect(response).toBeDefined();
    });

    it('Invalid ID', async () => {
      await expect(testClient.apiKey.delete('invalid-id')).rejects.toThrow(
        StreamError
      );
    });

    it('Empty ID', async () => {
      await expect(testClient.apiKey.delete('')).rejects.toThrow(StreamError);
    });

    it('Not exist ID', async () => {
      const newId = uuidv4();
      await expect(testClient.apiKey.delete(newId)).rejects.toThrow(
        StreamError
      );
    });
  });

  describe('List', () => {
    it('Valid List No Filters', async () => {
      const response = await testClient.apiKey.list({});
      expect(response).toBeDefined();
      expect(response.data).toBeDefined();
    });

    it('Valid List With Filters', async () => {
      const response = await testClient.apiKey.list({
        search: 'test',
        sortBy: 'created_at',
        orderBy: 'desc',
        offset: 0,
        limit: 10,
      });
      expect(response).toBeDefined();
      expect(response.data).toBeDefined();
    });

    it('Invalid Offset', async () => {
      await expect(testClient.apiKey.list({ offset: -1 })).rejects.toThrow(
        StreamError
      );
    });

    it('Invalid Limit', async () => {
      await expect(testClient.apiKey.list({ limit: 1001 })).rejects.toThrow(
        StreamError
      );
    });
  });
});
