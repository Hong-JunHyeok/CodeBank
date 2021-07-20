export interface Post {
  id: number;
  title: string;
  thumnail: string;
  createdAt: string;
  author: string;
  comments: Array<Object>;
}

export type Posts = Post[];
