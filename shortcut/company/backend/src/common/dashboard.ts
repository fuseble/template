import { type Application } from 'express';
import AdminJS from 'adminjs';
import { Database, Resource } from '@adminjs/prisma';
import AdminJSExpress from '@adminjs/express';
import { DMMFClass } from '@prisma/client/runtime';
import db from 'database';
import { COMPANY_NAME } from 'constant/company';

const dmmf = (db as any)._baseDmmf as DMMFClass;
const modelMap = dmmf.modelMap;

const dashboard = (app: Application) => {
  AdminJS.registerAdapter({ Database, Resource });

  const adminResources = Object.entries(modelMap).map(([modelName, model]) => {
    return {
      resource: { model, client: db },
      options: {},
    };
  });

  const adminjs = new AdminJS({
    resources: adminResources,
    rootPath: '/adminjs',
    loginPath: '/adminjs/login',
    logoutPath: '/adminjs/logout',
    branding: { companyName: COMPANY_NAME },
  });

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
