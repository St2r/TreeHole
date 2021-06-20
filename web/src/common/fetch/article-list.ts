import {AxiosResponse} from 'axios';
import HttpClient from './core/httpClient';

type TFetchArticleList = {
  type: string;
  page: number;
  size?: number;
}

export function httpFetchArticleList(props: TFetchArticleList): Promise<AxiosResponse<any>> {
  return HttpClient.get('/article/query', {
    params: props,
  });
}
