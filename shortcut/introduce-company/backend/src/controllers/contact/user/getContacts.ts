import { type ControllerAPI } from '@fuseble.inc/node';
import { coreFunctions } from 'controllers/_core';

export const getContactsAPI: ControllerAPI = {
  tags: ['Contact'],
  schema: 'Contact',
  method: 'GET',
  path: '/contacts',
  authorize: 'user',
};

export const getContacts = coreFunctions.Contact.findMany;
