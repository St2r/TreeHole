import {AxiosTransformer} from 'axios';

export const tokenTransform: AxiosTransformer = (data, headers) => {
  headers['token'] = 'xxxxxx';
  return data;
};

export const jsonTransform: AxiosTransformer = (data, headers) => {
  if (data !== undefined && data !== null && data !== '') {
    return JSON.parse(data);
  } else {
    return data;
  }
};
