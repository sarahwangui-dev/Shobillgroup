import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: 'fs3ky14l',
  dataset: 'production',
  apiVersion: '2024-11-01',
  useCdn: false
});

const { projectId, dataset } = client.config();
export const builder = (source) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;
