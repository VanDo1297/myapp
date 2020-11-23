import React, { createContext, useContext, useReducer } from 'react';
import {AuthReducer, initialState} from './auth/reducer';

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


