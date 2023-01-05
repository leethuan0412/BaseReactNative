import {LoginScreen} from '@src/screen/Auth/LoginScreen';

export const ROUTE_AUTH = {
  HOME: 'HOME',
};
const {HOME} = ROUTE_AUTH;
const SCREEN_ROUTE_AUTH = {
  [HOME]: LoginScreen,
};
export default SCREEN_ROUTE_AUTH;
