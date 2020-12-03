import React,{useEffect, useContext} from 'react';
import Presentational from './presentational';
import {RouteComponentProps} from 'react-router-dom';
import { GlobalContext, IAuthValue } from "../../context/provider";
import {signInWithPopup, signInWithEmailAndPassword} from '../../context/auth/actions';
import {ILogin} from '../../@types/auth.type';
interface IProps extends RouteComponentProps<{}>{}

function Login(props: IProps){

    const {authDispatch:dispath,  authState} = useContext(GlobalContext) as IAuthValue;

    useEffect(()=>{
        if(authState.user && authState.user.accountId){
            props.history.push('/home')
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[authState])

    const handleLoginWithGoogle = ()=>{
        signInWithPopup()(dispath);
    }
    const handleLoginWithEmailAndPassword =(data: ILogin)=>{
        signInWithEmailAndPassword(data.email, data.password)(dispath);
    }

    return (
        <Presentational 
            handleLoginWithEmailAndPassword={handleLoginWithEmailAndPassword} 
            handleLoginWithGoogle={handleLoginWithGoogle} 
        />
    )
}
export default Login;