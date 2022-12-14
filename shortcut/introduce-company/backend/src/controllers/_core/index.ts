import { PrismaCore } from '@fuseble.inc/node';
import db from 'database';
import { Types } from './types';
import { user, adminUser } from './user';
import { post, adminPost } from './post';
import { postCategory, adminPostCategory } from './postCategory';
import { notice, adminNotice } from './notice';
import { contact, adminContact } from './contact';
import { faq, adminFAQ } from './faq';

const core = new PrismaCore(db);
const adminCore = new PrismaCore(db);

core.init<Types.Functions>({
  User: user,
  Post: post,
  PostCategory: postCategory,
  Notice: notice,
  FAQ: faq,
  Contact: contact,
});

adminCore.init<Types.Functions>({
  User: adminUser,
  Post: adminPost,
  PostCategory: adminPostCategory,
  Notice: adminNotice,
  FAQ: adminFAQ,
  Contact: adminContact,
});

export const coreFunctions = core.functions;
export const adminCoreFunctions = adminCore.functions;
