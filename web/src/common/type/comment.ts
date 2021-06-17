import {TUser} from './user';

export type TComment = {
  commentId: string,
  content: string,
  createTime: number,
  author: TUser,
  reply: Omit<TComment, 'reply'>[]
}
