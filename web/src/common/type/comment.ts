import {TUser} from './user';

export type TComment = {
  commentId: string,
  title: string,
  utc: string,
  author: TUser,
}
