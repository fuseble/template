import { Prisma } from '@prisma/client';
import { type PrismaArgsWithCallback } from '@fuseble.inc/node';

export namespace Types {
  export interface Functions {
    User?: User;
    Notice?: Notice;
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

  export interface Notice extends Item {
    findUnique?: PrismaArgsWithCallback<Prisma.NoticeFindUniqueArgs>;
    findFirst?: PrismaArgsWithCallback<Prisma.NoticeFindFirstArgs>;
    findMany?: PrismaArgsWithCallback<Prisma.NoticeFindManyArgs>;
    create?: PrismaArgsWithCallback<Prisma.NoticeCreateArgs>;
    createMany?: PrismaArgsWithCallback<Prisma.NoticeCreateManyArgs>;
    delete?: PrismaArgsWithCallback<Prisma.NoticeDeleteArgs>;
    deleteMany?: PrismaArgsWithCallback<Prisma.NoticeDeleteManyArgs>;
    update?: PrismaArgsWithCallback<Prisma.NoticeUpdateArgs>;
    updateMany?: PrismaArgsWithCallback<Prisma.NoticeUpdateManyArgs>;
  }
}
