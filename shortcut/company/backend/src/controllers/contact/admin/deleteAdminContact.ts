import { type ControllerAPI } from '@fuseble.inc/node';
import { adminCoreFunctions } from 'controllers/_core';

export const deleteAdminContactAPI: ControllerAPI = {
  tags: ['Contact'],
  schema: 'Contact',
  method: 'DELETE',
  path: '/admin/contacts/:id',
  authorize: 'admin',
  params: [{ key: 'id', type: 'string' }],
};

export const deleteAdminContact = adminCoreFunctions.Contact.delete;
