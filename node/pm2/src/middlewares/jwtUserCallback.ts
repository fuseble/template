import { Jsonwebtoken } from '@fuseble.inc/node';
import config from 'config';

const jwt = new Jsonwebtoken(config.JWT_KEY);

export type JWTPayload = { id: string;  };

const jwtUserCallback = async (accessToken: string) => {
  const userPayload: JWTPayload = jwt.verifyJwt<JWTPayload>(accessToken);
  if (!userPayload || !userPayload.id) {
    return null;
  }
  return userPayload;
};

export default jwtUserCallback;
