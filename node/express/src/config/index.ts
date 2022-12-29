import 'dotenv/config';
import { parseEnv } from '@fuseble.inc/node';
import * as process from 'process';

type ENV = {
  NODE_ENV: string;
  PORT: number;
  DATABASE_URL: string;
  CLIENT_URL: string;
  SWAGGER_PATH: string;
  SWAGGER_URLS: string;
  JWT_KEY: string;
  PASSWORD_SALT_ROUND: number;
  SOCIAL_SALT_ROUND: number;
};

const config = parseEnv<ENV>(process.env, [
  'NODE_ENV',
  'PORT',
  'DATABASE_URL',
  'CLIENT_URL',
  'SWAGGER_PATH',
  'SWAGGER_URLS',
  'JWT_KEY',
  'PASSWORD_SALT_ROUND',
  'SOCIAL_SALT_ROUND',
]);

export const COMPANY_NAME = 'FUSEBLE Inc.';

console.log('💙 Config Loading...', config);

export default config;
