import { type ControllerAPI } from '@fuseble.inc/node';
import { adminCoreFunctions } from 'controllers/_core';

export const getAdminContactAPI: ControllerAPI = {
  tags: ['Contact'],
  schema: 'Contact',
  method: 'GET',
  path: '/admin/contacts/:id',
  authorize: 'admin',
  params: [{ key: 'id', type: 'string' }],
};

export const getAdminContact = adminCoreFunctions.Contact.findUnique;
