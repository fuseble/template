import { type User } from '@prisma/client';
import { type ControllerAPI as API } from '@fuseble.inc/node';

declare global {
  namespace Express {
    interface Request {
      user: User & any;
      // file?: MulterFile | undefined;
      // files?: MulterFile[] | undefined;
    }
  }
}
