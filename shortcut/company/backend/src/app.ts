import { ExpressApp } from '@fuseble.inc/node';
import * as enums from '@prisma/client';
import path from 'path';
import config from 'config';
import controllers from 'controllers';
import db from 'database';
import Authorization from 'middlewares/authorization';
import dashboard from 'common/dashboard';
import { COMPANY_NAME, SERVICE_VERSION } from 'constant/company';

const expressApp = new ExpressApp({
  controllers,
  authControllers: Authorization,
  modelMap: (db as any)._baseDmmf.modelMap,
  enums,
  openAPI: {
    path: path.join(__dirname, config.SWAGGER_PATH),
    options: {
      title: COMPANY_NAME,
      version: SERVICE_VERSION,
      urls: (config.SWAGGER_URLS || '')?.split(','),
    },
    endPoint: '/api-docs',
  },
});

dashboard(expressApp.app);

export default expressApp;
