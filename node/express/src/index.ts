import 'database';
import config from 'config';
import App from 'app';
import jwt from 'middlewares/jsonwebtoken';
import { getDebug } from 'common';

const debug = getDebug('index');

const init = async () => {
  await App.init();
  await App.middlewares([jwt]);
  await App.routers({ globalOptions: { title: 'FUSEBLE Inc.' } });

  App.listen(config.PORT, {
    keepAliveTimeout: 90 * 1000, // alb timeout 방지
    headersTimeout: 90 * 1000, // alb timeout 방지
  });

  debug(`Config ${JSON.stringify(config, null, 2)}`);
};

init().then();
