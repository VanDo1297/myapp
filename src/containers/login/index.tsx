import React,{useContext} from 'react';
import Presentational from './presentational';
import {IFormType } from '../../@types/form.type';
import {RouteComponentProps} from 'react-router-dom';
import { GlobalContext, IValue } from "../../context/provider";
import {loginUser} from '../../context/auth/actions';

interface IProps extends RouteComponentProps<{}>{}

function Login(props: IProps){

    const {authDispatch: dispatch, authState} = useContext(GlobalContext) as IValue;

    const onSubmit =async (formData: IFormType)=>{
        console.log(authState.loading);
        loginUser(formData)(dispatch);
    }

    return (
        <Presentational  onSubmit={onSubmit}/>
    )
}
export default Login;