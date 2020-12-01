import React,{useContext, useState, useEffect} from 'react';
import {RouteComponentProps} from 'react-router-dom';
import {getAccessTokenActions} from '../../context/auth/actions';
import { GlobalContext, IValue } from "../../context/provider";
import Loading from '../../components/loading';
const queryString = require('query-string');

type IProps = RouteComponentProps

const LoginCallBack=(props: IProps)=>{
    const {authDispatch: dispatch, authState} = useContext(GlobalContext) as IValue;
    const [isLoading, setLoading]=useState(false)

    useEffect(()=>{
        getAccessToken()
    })

    useEffect(()=>{
        if(authState.token){
            props.history.push('/home')
        }  
        setLoading(authState.loading)
    },[authState, props.history])

    const getAccessToken = async ()=>{
        const parsed = queryString.parse(props.location.search);
        await getAccessTokenActions(parsed.code)(dispatch);
    }

    return <div>
            <Loading isShowLoading={isLoading}/>
        </div>
}

export default LoginCallBack;