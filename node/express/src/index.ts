import App from 'app';
import config from 'config';
import jwt from 'middlewares/jsonwebtoken';
import 'database';

const init = async () => {
  await App.init();
  await App.middlewares([jwt]);
  await App.routers({ globalOptions: { title: 'FUSEBLE Inc.' } });

  App.listen(config.PORT, {
    callback: () => {
      console.log(`🚀 Sever Listening on ${config.PORT}...`);
    },
    keepAliveTimeout: 90 * 1000, // alb timeout 방지
    headersTimeout: 90 * 1000, // alb timeout 방지
  });
};

init().then();
