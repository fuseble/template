import App from 'app';
import config from 'config';
import jwt from 'middlewares/jsonwebtoken';
import html from 'constant/globalHTML';
import 'database';

const init = async () => {
  await App.init();
  await App.middlewares([jwt]);
  await App.routers({ globalOptions: { html } });

  App.listen(config.PORT, () => {
    console.log(`🚀 Sever Listening on ${config.PORT}...`);
  });
};

init().then();
