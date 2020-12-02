import {LOGIN_FAILURE, LOGIN_SUCCESS, LOGIN, REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE} from '../../constants/auth';
import { loginWithGoogle, loginWithEmaillAndPassword, registerWithEmailAndPassword } from '../../services/authService';
import firebase from 'firebase';
import {mapUser} from '../../helpers'

export const signInWithPopup= () => async (dispatch: any)=> {
    dispatch({
        type: LOGIN,
    });
    try {
        await loginWithGoogle().then((res: firebase.auth.UserCredential) =>{
            dispatch({
                type: LOGIN_SUCCESS,
                payload:{
                    user: mapUser(res.user as firebase.User),
                }
            })
        })
    } catch (error) {
        dispatch({ type: LOGIN_FAILURE, error: error.message });
    }
}

export const signInWithEmailAndPassword=(email: string, password: string)=>async(dispatch: any)=>{
    dispatch({
        type: LOGIN
    })
    try {
        await loginWithEmaillAndPassword(email, password).then((res: firebase.auth.UserCredential) =>{
            dispatch({
                type: LOGIN_SUCCESS,
                payload:{
                    user: mapUser(res.user as firebase.User),
                }
            })
        })
    } catch (error) {
        dispatch({ 
            type: LOGIN_FAILURE, 
            payload: error.message });
    }
}

export const signUpWithEmailAndPassword=(email: string, password: string)=> async (dispatch: any)=>{
    dispatch({
        type: REGISTER
    })
    try {
        await registerWithEmailAndPassword(email, password).then((res: firebase.auth.UserCredential) =>{
            
            dispatch({
                type: REGISTER_SUCCESS,
                payload:{
                    user: mapUser(res.user as firebase.User),
                }
            })
        })
    } catch (error) {
        dispatch({ 
            type: REGISTER_FAILURE, 
            payload: error.message });
    }
}

