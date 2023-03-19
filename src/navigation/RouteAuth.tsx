import { IntroduceScreen } from '@src/screen/Auth/IntroduceScreen';
import {LoginScreen} from '@src/screen/Auth/LoginScreen';

export const ROUTE_AUTH = {
  LOGIN: 'LOGIN',
  INTRODUCE : 'INTRODUCE'
};
const {LOGIN, INTRODUCE} = ROUTE_AUTH;
const SCREEN_ROUTE_AUTH = {
  [INTRODUCE]:IntroduceScreen,
  [LOGIN]: LoginScreen,
};
export default SCREEN_ROUTE_AUTH;
