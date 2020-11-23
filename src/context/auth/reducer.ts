import * as authConts from '../../constants/auth';
import {IAuth} from '../../@types/auth.type';

let user = !localStorage.getItem('currentUser') && JSON.parse(localStorage.getItem('currentUser') as string) ? JSON.parse(localStorage.getItem('currentUser') as string) ?.user : '';
let token = !localStorage.getItem('currentUser') && JSON.parse(localStorage.getItem('currentUser') as string)? JSON.parse(localStorage.getItem('currentUser') as string).token : '';

export const initialState = {
  user: user || "",
  token :  token || null,
  loading: false,
  errorMessage: null
} as IAuth;

export const AuthReducer = (initialState: IAuth, action: any) => {
  switch (action.type) {
    case authConts.LOGIN:
      return {
        ...initialState,
        loading: true
      };
    case authConts.LOGIN_SUCCESS:
      return {
        ...initialState,
        user: action.payload.user,
        token: action.payload.auth_token,
        loading: false
      };
    case authConts.LOGIN_FAILURE:
      return {
        ...initialState,
        user: "",
        token: null,
        loading: false
      };
    case authConts.LOGOUT:
      return {
        ...initialState,
        user: "",
        token: null,
      };

    case authConts.REGISTER:
      return {
        ...initialState,
        loading: true
      };
    case authConts.REGISTER_SUCCESS:
      return {
        ...initialState,
        loading: false
      };
    case authConts.REGISTER_FAILURE:
      return {
        ...initialState,
        loading: false,
        errorMessage: action.error,
      };
 
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
