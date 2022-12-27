import { type ControllerAPI } from '@fuseble.inc/node';
import { adminCoreFunctions, coreFunctions } from 'controllers/_core';

export const getFAQAPI: ControllerAPI = {
  tags: ['FAQ'],
  schema: 'FAQ',
  method: 'GET',
  path: '/faqs/:id',
  params: [{ key: 'id', type: 'string' }],
};

export const getFAQ = coreFunctions.FAQ.findFirst;
