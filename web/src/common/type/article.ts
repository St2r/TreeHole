import {TComment} from './comment';

export type TArticle = {
  id: string,
  title: string,
  content: string,
  comments: TComment[],
  createTime: string,
  // eslint-disable-next-line camelcase
  modify_time: string,
  // eslint-disable-next-line camelcase
  is_private: number,
  type: string,
  username: string,
  avatar: string,
}
