import {TUser} from '../user';

export type TAppContext = {
  user: TUser & { isLogin: boolean };
  setUser: any,
  setSnackStatus: any,
}
