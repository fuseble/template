import { Prisma } from '@prisma/client';
import { type PrismaArgsWithCallback } from '@fuseble.inc/node';

export namespace Types {
  export interface Functions {
    User?: User;
  }

  export interface Item {
    function: string;
  }

  export interface User extends Item {
    findUnique?: PrismaArgsWithCallback<Prisma.UserFindUniqueArgs>;
    findFirst?: PrismaArgsWithCallback<Prisma.UserFindFirstArgs>;
    findMany?: PrismaArgsWithCallback<Prisma.UserFindManyArgs>;
    create?: PrismaArgsWithCallback<Prisma.UserCreateArgs>;
    createMany?: PrismaArgsWithCallback<Prisma.UserCreateManyArgs>;
    delete?: PrismaArgsWithCallback<Prisma.UserDeleteArgs>;
    deleteMany?: PrismaArgsWithCallback<Prisma.UserDeleteManyArgs>;
    update?: PrismaArgsWithCallback<Prisma.UserUpdateArgs>;
    updateMany?: PrismaArgsWithCallback<Prisma.UserUpdateManyArgs>;
  }
}
