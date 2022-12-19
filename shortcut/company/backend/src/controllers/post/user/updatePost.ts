import { type ControllerAPI } from '@fuseble.inc/node';
import { coreFunctions } from 'controllers/_core';

export const updatePostAPI: ControllerAPI = {
  tags: ['Post'],
  schema: 'Post',
  method: 'PATCH',
  path: '/posts/:id',
  authorize: 'user',
  params: [{ key: 'id', type: 'string' }],
  body: [
    { key: 'title', type: 'string' },
    { key: 'content', type: 'string', nullable: true },
    { key: 'categoryId', type: 'string' },
  ],
};

export const updatePost = coreFunctions.Post.update;
