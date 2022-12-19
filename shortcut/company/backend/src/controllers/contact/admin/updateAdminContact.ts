import { type ControllerAPI } from '@fuseble.inc/node';
import { adminCoreFunctions } from 'controllers/_core';

export const updateAdminContactAPI: ControllerAPI = {
  tags: ['Contact'],
  schema: 'Contact',
  method: 'PUT',
  path: '/admin/contacts/:id',
  authorize: 'admin',
  params: [{ key: 'id', type: 'string' }],
  body: [
    { key: 'name', type: 'string' },
    { key: 'email', type: 'string', nullable: true },
    { key: 'phoneNumber', type: 'string', nullable: true },
    { key: 'content', type: 'string' },
    { key: 'userId', type: 'string', nullable: true },
  ],
};

export const updateAdminContact = adminCoreFunctions.Contact.update;
