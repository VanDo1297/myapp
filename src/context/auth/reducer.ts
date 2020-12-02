import * as authConts from '../../constants/auth';
import {IAuth} from '../../@types/auth.type';

export const AuthReducer = (initialState: IAuth, action: any) => {
  switch (action.type) {
    case authConts.UPDATE_TOKEN:
      localStorage.setItem('token', JSON.stringify(action.payload))
      return {
        ...initialState,
        token: action.payload
      }

    case authConts.LOGIN:
      return {
        ...initialState,
        loading: true
      };
    case authConts.LOGIN_SUCCESS:
      localStorage.setItem('user', JSON.stringify(action.payload.user))
      return {
        ...initialState,
        user: action.payload.user,
        loading: false
      };
    case authConts.LOGIN_FAILURE:
      return {
        ...initialState,
        errorMessage: action.payload,
        loading: false,
      };
    case authConts.LOGOUT:
      localStorage.removeItem('user')
      localStorage.removeItem('token')
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
      localStorage.setItem('user', JSON.stringify(action.payload.user))
      return {
        ...initialState,
        loading: false,
        user: action.payload.user,
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
