import React, { createContext, useReducer } from 'react';
import {AuthReducer} from './auth/reducer';
import {IAuth} from '../@types/auth.type';

const token=localStorage.getItem('token');
const user= JSON.parse(localStorage.getItem('user') as string)

export const initialState = {
    user: user,
    token : token,
    loading: false,
    errorMessage: ''
  } as IAuth;
  
export const GlobalContext = createContext({});
export interface IValue {
    authState: typeof initialState,
    authDispatch : any
}

export const GlobalProvider =({children}: any)=>{
    const [authState, authDispatch]= useReducer(AuthReducer, initialState);
    return (
        <GlobalContext.Provider
            value={{
                authState,
                authDispatch
            }}
        >
            {children}
        </GlobalContext.Provider>
    )
}


