import axios from 'axios';
import {tokenTransform} from './httpTransform';

const HttpClient = axios.create({
  baseURL: 'http://localhost:8080',
  timeout: 5000,
  transformRequest: [tokenTransform],
  transformResponse: [],
});

export default HttpClient;
