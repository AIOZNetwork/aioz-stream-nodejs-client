import { expect } from '@jest/globals';
import StreamError from '../src/StreamError';
import { anonymousMockTestClient, mockTestClient } from './src/mockTestClient';
import { v4 as uuidv4 } from 'uuid';
let testWebhookForUpdateAndDelete: string | undefined;
const webhookURL = 'https://webhook.site/335e64d4-96f7-4bef-906a-b8cd3862a071';
const webhookName = 'Test Webhook';

const testClient = mockTestClient();
const anonymousTestClient = anonymousMockTestClient();

describe('Webhook Service', () => {
  describe('Create', () => {
    it('Valid Create Request with All Fields', async () => {
      const response = await testClient.webhook.create({
        url: webhookURL,
        name: webhookName,
        encodingFinished: true,
        encodingStarted: true,
        fileReceived: true,
      });
      testWebhookForUpdateAndDelete = response.data?.webhook?.id;
      expect(response).toBeDefined();
    });

    it('Invalid Create Request Without Events', async () => {
      await expect(
        testClient.webhook.create({
          url: webhookURL,
          name: webhookName,
        })
      ).rejects.toThrow(StreamError);
    });

    it('Invalid URL', async () => {
      await expect(
        testClient.webhook.create({
          url: 'not-a-url',
          name: webhookName,
          encodingFinished: true,
          encodingStarted: true,
          fileReceived: true,
        })
      ).rejects.toThrow(StreamError);
    });

    it('Missing URL', async () => {
      await expect(
        testClient.webhook.create({
          name: webhookName,
          encodingFinished: true,
          encodingStarted: true,
          fileReceived: true,
        })
      ).rejects.toThrow(StreamError);
    });

    it('Missing Name', async () => {
      const response = await testClient.webhook.create({
        url: webhookURL,
        encodingFinished: true,
        encodingStarted: true,
        fileReceived: true,
      });
      expect(response).toBeDefined();
    });

    it('Empty Request', async () => {
      await expect(testClient.webhook.create({})).rejects.toThrow(StreamError);
    });
  });

  describe('Update', () => {
    it('Update other', async () => {
      await expect(
        anonymousTestClient.webhook.update(
          testWebhookForUpdateAndDelete as string,
          {
            encodingFinished: true,
            encodingStarted: false,
            fileReceived: true,
            name: 'Updated Webhook',
            url: webhookURL,
          }
        )
      ).rejects.toThrow(StreamError);
    });
    it('Valid Update All Fields', async () => {
      const response = await testClient.webhook.update(
        testWebhookForUpdateAndDelete as string,
        {
          encodingFinished: true,
          encodingStarted: false,
          fileReceived: true,
          name: 'Updated Webhook',
          url: webhookURL,
        }
      );
      expect(response).toBeDefined();
    });

    it('Update Partial Fields, only Name', async () => {
      await expect(
        testClient.webhook.update(testWebhookForUpdateAndDelete as string, {
          name: 'Updated Name Only',
        })
      ).rejects.toThrow(StreamError);
    });

    it('Invalid URL', async () => {
      await expect(
        testClient.webhook.update(testWebhookForUpdateAndDelete as string, {
          url: 'not-a-url',
        })
      ).rejects.toThrow(StreamError);
    });

    it('Invalid ID', async () => {
      await expect(testClient.webhook.update('invalid-id', {})).rejects.toThrow(
        StreamError
      );
    });

    it('Not exist ID', async () => {
      const newId = uuidv4();
      await expect(testClient.webhook.update(newId, {})).rejects.toThrow(
        StreamError
      );
    });
  });

  describe('List', () => {
    it('List All Webhooks', async () => {
      const response = await testClient.webhook.list({});
      expect(response).toBeDefined();
      expect(response.data).toBeDefined();
    });

    it('List with Pagination', async () => {
      const response = await testClient.webhook.list({ limit: 10, offset: 0 });
      expect(response).toBeDefined();
      expect(response.data).toBeDefined();
    });

    it('List with Search', async () => {
      const response = await testClient.webhook.list({ search: 'test' });
      expect(response).toBeDefined();
    });

    it('List with Event Filters', async () => {
      const response = await testClient.webhook.list({
        encodingFinished: true,
        encodingStarted: false,
        fileReceived: true,
      });
      expect(response).toBeDefined();
    });

    it('Invalid Offset', async () => {
      await expect(testClient.webhook.list({ offset: -1 })).rejects.toThrow(
        StreamError
      );
    });
  });

  describe('Get', () => {
    it('Get other', async () => {
      await expect(
        anonymousTestClient.webhook.get(testWebhookForUpdateAndDelete as string)
      ).rejects.toThrow(StreamError);
    });
    it('Valid Get', async () => {
      const response = await testClient.webhook.get(
        testWebhookForUpdateAndDelete as string
      );
      expect(response).toBeDefined();
    });

    it('Invalid ID', async () => {
      await expect(testClient.webhook.get('invalid-id')).rejects.toThrow(
        StreamError
      );
    });

    it('Not exist ID', async () => {
      const newId = uuidv4();
      await expect(testClient.webhook.get(newId)).rejects.toThrow(StreamError);
    });
  });

  describe('Delete', () => {
    it('Delete other user', async () => {
      await expect(
        anonymousTestClient.webhook.delete(
          testWebhookForUpdateAndDelete as string
        )
      ).rejects.toThrow(StreamError);
    });
    it('Valid Delete', async () => {
      const response = await testClient.webhook.delete(
        testWebhookForUpdateAndDelete as string
      );
      expect(response).toBeDefined();
      expect(response.status).toBe('success');
    });

    it('Not exist ID', async () => {
      const newId = uuidv4();
      await expect(testClient.webhook.delete(newId)).rejects.toThrow(
        StreamError
      );
    });

    it('Invalid ID', async () => {
      await expect(testClient.webhook.delete('invalid-id')).rejects.toThrow(
        StreamError
      );
    });
  });
});
