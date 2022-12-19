import { type ControllerAPI } from '@fuseble.inc/node';
import { coreFunctions } from 'controllers/_core';

export const getPostAPI: ControllerAPI = {
  tags: ['Post'],
  schema: 'Post',
  method: 'GET',
  path: '/posts/:id',
  params: [{ key: 'id', type: 'string' }],
};

export const getPost = coreFunctions.Post.findUnique;
