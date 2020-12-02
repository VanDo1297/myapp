import * as consAuth from '../../constants/auth';
import { loginWithGoogle, loginWithEmaillAndPassword, registerWithEmailAndPassword } from '../../services/authService';
import firebase from 'firebase';
import {mapUser} from '../../helpers';

export const logout =()=> (dispatch: any)=>{
    if(dispatch){
        dispatch({
            type: consAuth.LOGOUT,
        })
    }
}

export const updateToken=(token:string)=>async (dispatch: any)=> {
    if(dispatch){
        dispatch({
            type: consAuth.UPDATE_TOKEN,
            payload: token
        })
    }
}

export const signInWithPopup= () => (dispatch: any)=> {
    dispatch({
        type: consAuth.LOGIN,
    });
    try {
        loginWithGoogle().then( (res: any) =>{
            dispatch({
                type: consAuth.LOGIN_SUCCESS,
                payload:{
                    user: mapUser(res.user as firebase.User),
                }
            })
            updateToken(res.credential && res.credential.idToken)(dispatch)
        })
    } catch (error) {
        dispatch({ type: consAuth.LOGIN_FAILURE, error: error.message });
    }
}

export const signInWithEmailAndPassword=(email: string, password: string)=>(dispatch: any)=>{
    dispatch({
        type: consAuth.LOGIN
    })
    try {
        loginWithEmaillAndPassword(email, password).then((res: any) =>{
            dispatch({
                type: consAuth.LOGIN_SUCCESS,
                payload:{
                    user: mapUser(res.user as firebase.User),
                }
            })
            updateToken(res.credential && res.credential.idToken)(dispatch)
        })
    } catch (error) {
        dispatch({ 
            type: consAuth.LOGIN_FAILURE, 
            payload: error.message });
    }
}

export const signUpWithEmailAndPassword=(email: string, password: string)=> (dispatch: any)=>{
    dispatch({
        type: consAuth.REGISTER
    })
    try {
        registerWithEmailAndPassword(email, password).then((res: any) =>{
            dispatch({
                type: consAuth.REGISTER_SUCCESS,
                payload:{
                    user: mapUser(res.user as firebase.User),
                }
            })
            updateToken(res.credential && res.credential.idToken)(dispatch)
        })
    } catch (error) {
        dispatch({ 
            type: consAuth.REGISTER_FAILURE, 
            payload: error.message });
    }
}

