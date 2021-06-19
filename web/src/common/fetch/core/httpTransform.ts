import {AxiosTransformer} from 'axios';

export const tokenTransform: AxiosTransformer = (data, headers) => {
  headers['token'] = 'xxxxxx';
  return data;
};

export const jsonTransform: AxiosTransformer = (data, headers) => {
  return JSON.parse(data);
};
