import App from 'app';
import config from 'config';
import jwt from 'middlewares/jsonwebtoken';
import { TestAuthorization } from 'middlewares/authorization';
import html from 'constant/globalHTML';
import 'database';

const init = async () => {
  await App.init();

  App.middlewares([jwt, TestAuthorization]);
  App.routers({ globalOptions: { html } });
  App.listen(config.PORT, () => {
    console.log(`🚀 Sever Listening on ${config.PORT}...`);
  });
};

init().then();
