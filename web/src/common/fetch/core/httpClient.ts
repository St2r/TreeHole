import axios from 'axios';
import {tokenTransform} from './httpTransform';

const HttpClient = axios.create({
  baseURL: 'http://localhost:8088',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
  transformRequest: [tokenTransform],
  transformResponse: [],
});

export default HttpClient;
