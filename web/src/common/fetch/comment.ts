import {AxiosResponse} from 'axios';
import HttpClient from './core/httpClient';

type TNewCommentProps = {
  // eslint-disable-next-line camelcase
  father_id: string,
  content: string,
  type: number,
  // eslint-disable-next-line camelcase
  author_id: string,
}

export function httpNewComment(props: TNewCommentProps): Promise<AxiosResponse<any>> {
  return HttpClient.post('comment/create', JSON.stringify(props));
}
