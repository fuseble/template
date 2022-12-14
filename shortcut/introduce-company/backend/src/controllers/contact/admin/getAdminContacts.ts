import { type ControllerAPI, paginationQuery } from '@fuseble.inc/node';
import { adminCoreFunctions } from 'controllers/_core';

export const getAdminContactsAPI: ControllerAPI = {
  tags: ['Contact'],
  schema: 'Contact[]',
  method: 'GET',
  path: '/admin/contacts',
  authorize: 'admin',
  query: paginationQuery,
};

export const getAdminContacts = adminCoreFunctions.Contact.findMany;
