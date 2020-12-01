import jwt from 'jsonwebtoken';
import { AxiosResponse } from 'axios';
import {LOGIN_FAILURE, LOGIN_SUCCESS, LOGIN} from '../../constants/auth';
import { getAccessToken } from '../../services/authService';
import {AccessTokenResponse, UserAccount} from '../../@types/servers/auth.types'

export const getAccessTokenActions= (code: string) => async (dispatch: any)=> {
    dispatch({
        type: LOGIN,
    });
    try {
        await getAccessToken(code).then((res: AxiosResponse<AccessTokenResponse>)=>{
            let userAccount = {} as UserAccount;
            const u = jwt.decode(res.data.data.id_token) as any;
            if(u){
                userAccount = {
                    accountId: u['sub'],
                    displayName:u['name'],
                    emailAddress: u['email'],
                    avatarUrl: u['picture'],
                } as UserAccount;
            }
            dispatch({
                type: LOGIN_SUCCESS,
                payload: {
                    user: userAccount,
                    token : res.data.data.id_token
                }
            });
        })
    } catch (error) {
        dispatch({ type: LOGIN_FAILURE, error: error });
    }
}

