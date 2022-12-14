import { type ControllerAPI } from '@fuseble.inc/node';
import { adminCoreFunctions } from 'controllers/_core';

export const createAdminContactAPI: ControllerAPI = {
  tags: ['Contact'],
  schema: 'Contact',
  method: 'POST',
  path: '/admin/contacts',
  authorize: 'admin',
  body: [
    { key: 'name', type: 'string' },
    { key: 'content', type: 'string' },
    { key: 'email', type: 'string', nullable: true },
    { key: 'phoneNumber', type: 'string', nullable: true },
    { key: 'userId', type: 'string', nullable: true },
  ],
};

export const createAdminContact = adminCoreFunctions.Contact.create;
