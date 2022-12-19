import { type ControllerAPI } from '@fuseble.inc/node';
import { coreFunctions } from 'controllers/_core';

export const createPostAPI: ControllerAPI = {
  tags: ['Post'],
  schema: 'Post',
  method: 'POST',
  path: '/posts',
  authorize: 'user',
  body: [
    { key: 'title', type: 'string' },
    { key: 'content', type: 'string', nullable: true },
    { key: 'categoryId', type: 'string', nullable: true },
  ],
};

export const createPost = coreFunctions.Post.create;
