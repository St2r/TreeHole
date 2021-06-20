import {AxiosResponse} from 'axios';
import HttpClient from './core/httpClient';
import {TArticle} from '../type/article';

type TFetchArticleList = {
  type: string;
  page: number;
  size?: number;
}

export function httpFetchArticleList(props: TFetchArticleList): Promise<AxiosResponse<TArticle[]>> {
  return HttpClient.get('/article/query', {
    params: props,
  });
}
