import React from 'react';
import Presentational from './presentational';
import {RouteComponentProps} from 'react-router-dom';
import config from '../../config'

interface IProps extends RouteComponentProps<{}>{}

function Login(props: IProps){

    console.log(props);

    const handleLoginWithGoogle =()=>{
        const path = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${config.AUTH.APP_CLIENT_ID}&response_type=code&scope=openid email profile&access_type=offline&redirect_uri=${window.location.origin}/login-callback`
        window.open(path)
    }

    return (
        <Presentational handleLoginWithGoogle={handleLoginWithGoogle} />
    )
}
export default Login;