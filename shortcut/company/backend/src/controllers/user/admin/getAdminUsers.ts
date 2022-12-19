import { type ControllerAPI, paginationQuery } from '@fuseble.inc/node';
import { adminCoreFunctions } from 'controllers/_core';

export const getAdminUsersAPI: ControllerAPI = {
  tags: ['User'],
  schema: 'User[]',
  method: 'GET',
  path: '/admin/users',
  authorize: 'admin',
  query: paginationQuery,
};

export const getAdminUsers = adminCoreFunctions.User.findMany;
