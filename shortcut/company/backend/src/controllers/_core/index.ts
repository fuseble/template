import { PrismaCore } from '@fuseble.inc/node';
import db from 'database';
import { Types } from './types';
import Common from './common';
import User from './user';
import Post from './post';

const core = new PrismaCore(db);
const adminCore = new PrismaCore(db);

core.init<Types.Functions>({
  ...Common.Core,
  ...User.Core,
  ...Post.Core,
});

adminCore.init<Types.Functions>({
  ...Common.AdminCore,
  ...User.AdminCore,
  ...Post.AdminCore,
});

export const coreFunctions = core.functions;
export const adminCoreFunctions = adminCore.functions;
