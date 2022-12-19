import { type ControllerAPI } from '@fuseble.inc/node';
import { coreFunctions } from 'controllers/_core';

export const deletePostAPI: ControllerAPI = {
  tags: ['Post'],
  schema: 'Post',
  method: 'DELETE',
  path: '/posts/:id',
  authorize: 'user',
  params: [{ key: 'id', type: 'string' }],
};

export const deletePost = coreFunctions.Post.delete;
