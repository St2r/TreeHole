import HttpClient from './core/httpClient';
import {AxiosResponse} from 'axios';


type TDoLoginRequest = {
  username: string,
  password: string,
}
export function httpDoLogin(props: TDoLoginRequest): Promise<AxiosResponse<string>> {
  return HttpClient.post<string, AxiosResponse<string>>('/user/doLogin', props);
}
