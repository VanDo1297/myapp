import React, { createContext, useReducer } from 'react';
import {AuthReducer} from './auth/reducer';
import {BlogReducer} from './blog/reducer';
import {TourReducer} from './tour/reducer';
import {IAuth} from '../@types/auth.type';
import {IBlog, IBlogItem} from '../@types/blog.type';
import{ITour, ITourItem} from '../@types/tour.type';

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

export const initialTourState = {
    tours : [] as ITourItem[],
    mytours: [] as ITourItem[],
    tourBooking:[] as ITourItem[],
    loading: false,
    errorMessage: '',
    tourDetail: {} as ITourItem,
    myTourDetail:{} as ITourItem,
} as ITour;

export interface IBlogValue{
    blogState: typeof initialBlogState,
    blogDispatch : any
}

export interface ITourValue{
    tourState: typeof initialTourState,
    tourDispatch: any
}

export type IState = IAuthValue & IBlogValue & ITourValue

export const GlobalProvider =({children}: any)=>{
    const [authState, authDispatch]= useReducer(AuthReducer, initialState);
    const [blogState, blogDispatch]= useReducer(BlogReducer, initialBlogState);
    const [tourState, tourDispatch]= useReducer(TourReducer, initialTourState);
    return (
        <GlobalContext.Provider
            value={{
                authState,
                authDispatch,
                blogState,
                blogDispatch,
                tourState,
                tourDispatch
            }}
        >
            {children}
        </GlobalContext.Provider>
    )
}


