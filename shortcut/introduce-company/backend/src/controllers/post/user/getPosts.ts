import { type ControllerAPI, searchPaginationQuery } from '@fuseble.inc/node';
import { coreFunctions } from 'controllers/_core';

export const getPostsAPI: ControllerAPI = {
  tags: ['Post'],
  schema: 'Post[]',
  method: 'GET',
  path: '/posts',
  query: [{ key: 'categoryId', type: 'string', nullable: true }, ...searchPaginationQuery],
};

export const getPosts = coreFunctions.Post.findMany;
