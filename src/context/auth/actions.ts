import {LOGIN_FAILURE, LOGIN_SUCCESS, LOGIN} from '../../constants/auth';
import { loginWithGoogle, loginWithEmaillAndPassword } from '../../services/authService';
import firebase from 'firebase';

export const signInWithPopup= () => async (dispatch: any)=> {
    dispatch({
        type: LOGIN,
    });
    try {
        await loginWithGoogle().then((res: firebase.auth.UserCredential) =>{
            console.log(res);
            dispatch({
                type: LOGIN_SUCCESS,
                payload:{
                    user: res.additionalUserInfo &&  res.additionalUserInfo.profile
                }
            })
        })
    } catch (error) {
        dispatch({ type: LOGIN_FAILURE, error: error });
    }
}

export const signInWithEmailAndPassword=(email: string, password: string)=>async(dispatch: any)=>{
    dispatch({
        type: LOGIN
    })
    console.log(email, password);
    try {
        await loginWithEmaillAndPassword(email, password).then((res: firebase.auth.UserCredential) =>{
            dispatch({
                type: LOGIN_SUCCESS,
                payload:{
                    user: res.additionalUserInfo &&  res.additionalUserInfo.profile
                }
            })
        })
    } catch (error) {
        console.log(error);
        dispatch({ 
            type: LOGIN_FAILURE, 
            payload: error.message });
    }
}

