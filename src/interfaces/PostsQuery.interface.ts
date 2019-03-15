import { EdgeNode } from './EdgeNode.interface';

interface Post {
  date: string;
  slug: string;
  title: string;
}

export interface PostsQueryData {
  allMdx: {
    edges?: [EdgeNode<Post>];
  };
}
