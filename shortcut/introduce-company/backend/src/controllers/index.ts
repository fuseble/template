import './_core';
import * as user from './user';
import * as post from './post';
import * as notice from './notice';
import * as faq from './faq';
import * as contact from './contact';

const controllers = {
  ...user,
  ...post,
  ...notice,
  ...faq,
  ...contact,
};

export default controllers;
