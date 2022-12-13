import { PrismaCore } from '@fuseble.inc/node';
import db from 'database';
import { Types } from './types';

const core = new PrismaCore(db);
const adminCore = new PrismaCore(db);

core.init<Types.Functions>({});
adminCore.init<Types.Functions>({});

export const coreFunctions = core.functions;
export const adminCoreFunctions = adminCore.functions;
