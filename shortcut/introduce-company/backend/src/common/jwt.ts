import { Jsonwebtoken } from '@fuseble.inc/node';
import config from 'config';

export const jsonwebtoken = new Jsonwebtoken(config.JWT_KEY);

export default jsonwebtoken;
