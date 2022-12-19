import { type ControllerAPI } from '@fuseble.inc/node';
import { adminCoreFunctions } from 'controllers/_core';

export const deleteAdminUserAPI: ControllerAPI = {
  tags: ['User'],
  schema: 'User',
  method: 'DELETE',
  path: '/admin/users/:id',
  authorize: 'admin',
  params: [{ key: 'id', type: 'string' }],
};

export const deleteAdminUser = adminCoreFunctions.User.delete;
