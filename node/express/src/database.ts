import { PrismaClient } from '@prisma/client';
import { DMMFClass } from '@prisma/client/runtime';

export class Database {
  public prisma: PrismaClient;
  public softDeleteModels: string[] = [];
  public modelMap: DMMFClass['modelMap'] = {};

  constructor() {
    this.prisma = new PrismaClient();
    this.modelMap = ((this.prisma as any)._baseDmmf as DMMFClass).modelMap;
    this.softDeleteModels = Object.entries(this.modelMap).reduce((acc: string[], [modelName, modelConfig]) => {
      const { fields } = modelConfig;
      fields.forEach((field) => {
        if (field.name === 'deletedAt' && field.type === 'DateTime') {
          acc.push(modelName);
        }
      });
      return acc;
    }, []);

    this.prisma.$connect().then(() => {
      this.softDeleteInterceptors().then();
      this.loggingInterceptors().then();
    });
  }

  async softDeleteInterceptors() {
    this.prisma.$use(async (params: any, next: any) => {
      this.softDeleteModels.forEach((model: string) => {
        if (params.model === model) {
          if (params.action === 'delete') {
            params.action = 'update';
            params.args['data'] = { deletedAt: new Date() };
          }
          if (params.action === 'deleteMany') {
            params.action = 'updateMany';
            if (params.args.data != undefined) {
              params.args.data = { deletedAt: new Date() };
            } else {
              params.args['data'] = { deletedAt: new Date() };
            }
          }
        }
      });

      return next(params);
    });
  }

  async loggingInterceptors() {
    this.prisma.$use(async (params: any, next: any) => {
      const before = Date.now();
      const result = await next(params);
      const after = Date.now();

      console.log(`${new Date().toDateString()} | Query ${params.model}.${params.action} took ${after - before}ms`);
      return result;
    });
  }
}

export const database = new Database();

const db = database.prisma;
export const modelMap = database.modelMap;

export default db;
