import { Prisma } from '@prisma/client';
import { type PrismaArgsWithCallback } from '@fuseble.inc/node';

export namespace Types {
  export interface Functions {
    User?: User;
    UserSocial?: UserSocial;
    Post?: Post;
    PostCategory?: PostCategory;
    Notice?: Notice;
    FAQ?: FAQ;
    Contact?: Contact;
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

  export interface UserSocial extends Item {
    findUnique?: PrismaArgsWithCallback<Prisma.UserSocialFindUniqueArgs>;
    findFirst?: PrismaArgsWithCallback<Prisma.UserSocialFindFirstArgs>;
    findMany?: PrismaArgsWithCallback<Prisma.UserSocialFindManyArgs>;
    create?: PrismaArgsWithCallback<Prisma.UserSocialCreateArgs>;
    createMany?: PrismaArgsWithCallback<Prisma.UserSocialCreateManyArgs>;
    delete?: PrismaArgsWithCallback<Prisma.UserSocialDeleteArgs>;
    deleteMany?: PrismaArgsWithCallback<Prisma.UserSocialDeleteManyArgs>;
    update?: PrismaArgsWithCallback<Prisma.UserSocialUpdateArgs>;
    updateMany?: PrismaArgsWithCallback<Prisma.UserSocialUpdateManyArgs>;
  }

  export interface Post extends Item {
    findUnique?: PrismaArgsWithCallback<Prisma.PostFindUniqueArgs>;
    findFirst?: PrismaArgsWithCallback<Prisma.PostFindFirstArgs>;
    findMany?: PrismaArgsWithCallback<Prisma.PostFindManyArgs>;
    create?: PrismaArgsWithCallback<Prisma.PostCreateArgs>;
    createMany?: PrismaArgsWithCallback<Prisma.PostCreateManyArgs>;
    delete?: PrismaArgsWithCallback<Prisma.PostDeleteArgs>;
    deleteMany?: PrismaArgsWithCallback<Prisma.PostDeleteManyArgs>;
    update?: PrismaArgsWithCallback<Prisma.PostUpdateArgs>;
    updateMany?: PrismaArgsWithCallback<Prisma.PostUpdateManyArgs>;
  }

  export interface PostCategory extends Item {
    findUnique?: PrismaArgsWithCallback<Prisma.PostCategoryFindUniqueArgs>;
    findFirst?: PrismaArgsWithCallback<Prisma.PostCategoryFindFirstArgs>;
    findMany?: PrismaArgsWithCallback<Prisma.PostCategoryFindManyArgs>;
    create?: PrismaArgsWithCallback<Prisma.PostCategoryCreateArgs>;
    createMany?: PrismaArgsWithCallback<Prisma.PostCategoryCreateManyArgs>;
    delete?: PrismaArgsWithCallback<Prisma.PostCategoryDeleteArgs>;
    deleteMany?: PrismaArgsWithCallback<Prisma.PostCategoryDeleteManyArgs>;
    update?: PrismaArgsWithCallback<Prisma.PostCategoryUpdateArgs>;
    updateMany?: PrismaArgsWithCallback<Prisma.PostCategoryUpdateManyArgs>;
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

  export interface FAQ extends Item {
    findUnique?: PrismaArgsWithCallback<Prisma.FAQFindUniqueArgs>;
    findFirst?: PrismaArgsWithCallback<Prisma.FAQFindFirstArgs>;
    findMany?: PrismaArgsWithCallback<Prisma.FAQFindManyArgs>;
    create?: PrismaArgsWithCallback<Prisma.FAQCreateArgs>;
    createMany?: PrismaArgsWithCallback<Prisma.FAQCreateManyArgs>;
    delete?: PrismaArgsWithCallback<Prisma.FAQDeleteArgs>;
    deleteMany?: PrismaArgsWithCallback<Prisma.FAQDeleteManyArgs>;
    update?: PrismaArgsWithCallback<Prisma.FAQUpdateArgs>;
    updateMany?: PrismaArgsWithCallback<Prisma.FAQUpdateManyArgs>;
  }

  export interface Contact extends Item {
    findUnique?: PrismaArgsWithCallback<Prisma.ContactFindUniqueArgs>;
    findFirst?: PrismaArgsWithCallback<Prisma.ContactFindFirstArgs>;
    findMany?: PrismaArgsWithCallback<Prisma.ContactFindManyArgs>;

    create?: PrismaArgsWithCallback<Prisma.ContactCreateArgs>;
    createMany?: PrismaArgsWithCallback<Prisma.ContactCreateManyArgs>;
    delete?: PrismaArgsWithCallback<Prisma.ContactDeleteArgs>;
    deleteMany?: PrismaArgsWithCallback<Prisma.ContactDeleteManyArgs>;
    update?: PrismaArgsWithCallback<Prisma.ContactUpdateArgs>;
    updateMany?: PrismaArgsWithCallback<Prisma.ContactUpdateManyArgs>;
  }
}
