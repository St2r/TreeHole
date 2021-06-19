import HttpClient from './core/httpClient';
import {AxiosResponse} from 'axios';
import {TUser} from '../type/user';


type TDoLoginRequest = {
  username: string,
  password: string,
}
export function httpDoLogin(props: TDoLoginRequest): Promise<AxiosResponse<TUser>> {
  return HttpClient.post<string, AxiosResponse<TUser>>('/user/doLogin', JSON.stringify(props));
}


type TDoRegisterRequest = {
  username: string,
  password: string,
}
export function httpDoRegister(props: TDoRegisterRequest): Promise<AxiosResponse<string>> {
  return HttpClient.post('/user/register', JSON.stringify(props));
}
