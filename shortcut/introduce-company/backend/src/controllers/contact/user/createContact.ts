import { type ControllerAPI } from '@fuseble.inc/node';
import { coreFunctions } from 'controllers/_core';

export const createContactAPI: ControllerAPI = {
  tags: ['Contact'],
  schema: 'Contact',
  method: 'POST',
  path: '/contacts',
  body: [
    { key: 'name', type: 'string' },
    { key: 'content', type: 'string' },
    { key: 'email', type: 'string', nullable: true },
    { key: 'phoneNumber', type: 'string', nullable: true },
  ],
};

export const createContact = coreFunctions.Contact.create;
