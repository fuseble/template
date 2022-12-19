import { user, adminUser } from './user';
import { userSocial, adminUserSocial } from './social';

const USER = {
  Core: {
    User: user,
    UserSocial: userSocial,
  },
  AdminCore: {
    User: adminUser,
    UserSocial: adminUserSocial,
  },
};

export default USER;
