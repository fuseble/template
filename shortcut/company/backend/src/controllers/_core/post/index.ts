import { post, adminPost } from './post';
import { postCategory, adminPostCategory } from './category';

const POST = {
  Core: {
    Post: post,
    PostCategory: postCategory,
  },
  AdminCore: {
    Post: adminPost,
    PostCategory: adminPostCategory,
  },
};

export default POST;
