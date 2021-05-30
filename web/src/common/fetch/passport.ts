import HttpClient from './core/httpClient';
import {AxiosResponse} from 'axios';


type TDoLoginRequest = {
  username: string,
  password: string,
}
export function httpDoLogin(props: TDoLoginRequest): Promise<AxiosResponse<string>> {
  return HttpClient.post<string, AxiosResponse<string>>('/user/doLogin', JSON.stringify(props));
}


type TDoRegisterRequest = {
  username: string,
  password: string,
}
export function httpDoRegister(props: TDoRegisterRequest): Promise<AxiosResponse<string>> {
  return HttpClient.post('/user/register', JSON.stringify(props));
}
