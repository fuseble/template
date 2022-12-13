import { PrismaCore } from '@fuseble.inc/node';
import db from 'database';
import { Types } from './types';
import { user, adminUser } from './user';
import { notice, adminNotice } from './notice';

const core = new PrismaCore(db);
const adminCore = new PrismaCore(db);

core.init<Types.Functions>({
  User: user,
  Notice: notice,
});

adminCore.init<Types.Functions>({
  User: adminUser,
  Notice: adminNotice,
});

export const coreFunctions = core.functions;
export const adminCoreFunctions = adminCore.functions;
