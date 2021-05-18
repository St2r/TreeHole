import {TUser} from './user';
import {TComment} from './comment';

export type TArticle = {
  articleId: string,
  title: string,
  content: string,
  comment: TComment[],
  author: TUser,
}
