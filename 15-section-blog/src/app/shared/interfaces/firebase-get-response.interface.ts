import { IPost } from './post.interface';

export interface IFirebaseGetResponse {
  [id: string]: IPost;
}
