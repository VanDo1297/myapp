import React, { createContext, useReducer } from 'react';
import {AuthReducer} from './auth/reducer';
import {BlogReducer} from './blog/reducer'
import {IAuth} from '../@types/auth.type';
import {IBlog, IBlogItem} from '../@types/blog.type';

const token=localStorage.getItem('token');
const user= JSON.parse(localStorage.getItem('user') as string)
export const GlobalContext = createContext({});

export const initialState = {
    user: user,
    token : token,
    loading: false,
    errorMessage: ''
} as IAuth;
export interface IAuthValue {
    authState: typeof initialState,
    authDispatch : any
}

export const initialBlogState = {
    blogs : [] as IBlogItem[],
    loading: false,
    errorMessage: ''
} as IBlog;

export interface IBlogValue{
    blogState: typeof initialBlogState,
    blogDispatch : any
}

export type IState = IAuthValue & IBlogValue

export const GlobalProvider =({children}: any)=>{
    const [authState, authDispatch]= useReducer(AuthReducer, initialState);
    const [blogState, blogDispatch]= useReducer(BlogReducer, initialBlogState);
    return (
        <GlobalContext.Provider
            value={{
                authState,
                authDispatch,
                blogState,
                blogDispatch
            }}
        >
            {children}
        </GlobalContext.Provider>
    )
}


