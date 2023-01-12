import { type Application } from 'express';
import AdminJS, { type AdminJSOptions } from 'adminjs';
import { Database, Resource } from '@adminjs/prisma';
import AdminJSExpress from '@adminjs/express';

import db, { modelMap } from 'database';

const adminResources = Object.entries(modelMap).map(([modelName, model]) => {
  return {
    resource: { model, client: db },
    options: {},
  };
});

const options: AdminJSOptions = {
  resources: adminResources,
  rootPath: '/adminjs',
  loginPath: '/adminjs/login',
  logoutPath: '/adminjs/logout',
  branding: { companyName: 'FUSEBLE Inc.' },
};

const dashboard = (app: Application) => {
  AdminJS.registerAdapter({ Database, Resource });

  const adminjs = new AdminJS(options);

  // const router = AdminJSExpress.buildAuthenticatedRouter(admin, {
  // 	authenticate: async (email, password) => {
  // 		const user = (await prisma.user.findUnique({
  // 			where: {
  // 				email,
  // 			},
  // 			select: {
  // 				id: true,
  // 				email: true,
  // 				password: true,
  // 				role: true,
  // 				socialId: true,
  // 				socialType: true,
  // 			},
  // 		})) as User | undefined;
  //
  // 		if (!user || user.role !== UserRole.ADMIN) {
  // 			return false;
  // 		}
  // 		if (user.password && !(await bcrypt.compare(password, user.password))) {
  // 			return false;
  // 		}
  // 		if (!user.password) {
  // 			return false;
  // 		}
  //
  // 		return true;
  // 	},
  // 	cookiePassword: 'cookiePassword-shopping',
  // });

  const router = AdminJSExpress.buildRouter(adminjs);
  app.use(adminjs.options.rootPath, router);
};

export default dashboard;
