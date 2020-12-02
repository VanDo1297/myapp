import React,{useContext, useEffect} from 'react';
import Presentational from './presentational';
import {RouteComponentProps} from 'react-router-dom';
import { GlobalContext, IValue } from "../../context/provider";
import {signUpWithEmailAndPassword} from '../../context/auth/actions';
import {IRegister } from '../../@types/auth.type';
import {toast} from 'react-toastify';

interface IProps extends RouteComponentProps<{}>{}

function Register(props: IProps){

    const {authDispatch:dispath,  authState} = useContext(GlobalContext) as IValue;
    useEffect(()=>{
        if(authState.user && authState.user.accountId){
            props.history.push('/home')
        }
    },[authState, props.history])

    const handleRegisterWithEmailAndPassword=async(data: IRegister)=>{
        if(data.password !== data.verifypassword){
            toast.error(`Password doesn't match!`, {position: "top-center"});
            return;
        }
        await signUpWithEmailAndPassword(data.email, data.password)(dispath)
    }
    return (
        <Presentational 
            handleRegisterWithEmailAndPassword={handleRegisterWithEmailAndPassword}
        />
    )
}
export default Register;