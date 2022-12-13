import './_core';
import * as user from './user';
import * as notice from './notice';

const controllers = {
  ...user,
  ...notice,
};

export default controllers;
