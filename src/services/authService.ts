import {AxiosInstance} from "./axios";
import config from '../config';

export const getAccessToken = (code: string) => {
    const data = {
        code: code,
        client_secret: config.AUTH.APP_CLIENT_SECRET,
        client_id: config.AUTH.APP_CLIENT_ID,
        grant_type: 'authorization_code',
        redirect_uri: `${window.location.origin}/login-callback`,
        access_type: 'offline'
    };

    return AxiosInstance().post('/auth/token', {
        data: data
    })
};
