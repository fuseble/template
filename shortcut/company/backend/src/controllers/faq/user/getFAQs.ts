import { type ControllerAPI, paginationQuery } from '@fuseble.inc/node';
import { coreFunctions } from 'controllers/_core';

export const getFAQsAPI: ControllerAPI = {
  tags: ['FAQ'],
  schema: 'FAQ[]',
  method: 'GET',
  path: '/faqs',
  query: paginationQuery,
};

export const getFAQs = coreFunctions.FAQ.findMany;
