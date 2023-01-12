import { App } from '@fuseble.inc/node';
import * as enums from '@prisma/client';
import path from 'path';
import config from 'config';
import controllers from 'controllers';
import { modelMap } from 'database';
import Authorization from 'middlewares/authorization';
import dashboard from 'common/dashboard';

const expressApp = new App({
  controllers,
  authControllers: Authorization,
  modelMap,
  enums,
  openAPI: {
    path: path.join(__dirname, config.SWAGGER_PATH),
    options: {
      title: 'FUSEBLE Inc.',
      version: '1.0,0',
      urls: (config.SWAGGER_URLS || '')?.split(','),
    },
    endPoint: '/api-docs',
  },
});

dashboard(expressApp.app);

export default expressApp;
