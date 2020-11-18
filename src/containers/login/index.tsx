import React from 'react';
import Presentational from './presentational';
import {IFormType } from '../../@types/form.type';
import {RouteComponentProps} from 'react-router-dom';

interface IProps extends RouteComponentProps<{}>{}

function Login(props: IProps){

    const onSubmit =(formData: IFormType)=>{
        props.history.push('/dashboard')
    }

    return (
        <Presentational  onSubmit={onSubmit}/>
    )
}
export default Login;