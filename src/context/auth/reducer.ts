import * as authConts from '../../constants/auth';
import {IAuth} from '../../@types/auth.type';
import {UserAccount} from '../../@types/servers/auth.types';

export const initialState = {
  user: {} as UserAccount,
  token : '',
  loading: false,
  errorMessage: ''
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
        token: action.payload.token,
        loading: false
      };
    case authConts.LOGIN_FAILURE:
      return {
        ...initialState,
        errorMessage: action.payload,
        user: "",
        token: null,
        loading: false,
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
