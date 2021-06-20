import {AxiosResponse} from 'axios';
import HttpClient from './core/httpClient';

type TPostArticleProps = {
  content: string;
  // eslint-disable-next-line camelcase
  author_id: string;
  type: string;
}

export function httpPostArticle(props: TPostArticleProps): Promise<AxiosResponse<any>> {
  return HttpClient.post('/article/create', JSON.stringify(props));
}
