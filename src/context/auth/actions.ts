import {LOGIN_FAILURE, LOGIN_SUCCESS, LOGIN} from '../../constants/auth';
import {ILogin} from '../../@types/auth.type';
import { login } from '../../services/authService';

export const loginUser=({username, password}: ILogin) => (dispatch: any)=> {

    dispatch({
        type: LOGIN,
    });

    try {
        login({username, password}).then((res: any)=>{
            console.log(res);
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data,
            });
        })
    } catch (error) {
        dispatch({ type: LOGIN_FAILURE, error: error });
    }

}
