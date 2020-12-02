import React from 'react';
import Presentational from './presentational';
import {RouteComponentProps} from 'react-router-dom';
import { GlobalContext, IValue } from "../../context/provider";
import {signInWithPopup, signInWithEmailAndPassword} from '../../context/auth/actions';
import {ILogin} from '../../@types/auth.type';
interface IProps extends RouteComponentProps<{}>{}

function Login(props: IProps){

    const {authDispatch:dispath,  authState} = React.useContext(GlobalContext) as IValue;
    console.log(authState);
    const handleLoginWithGoogle = async ()=>{
       await signInWithPopup()(dispath);
    }
    const handleLoginWithEmailAndPassword =async(data: ILogin)=>{
        console.log(data.password);
        await signInWithEmailAndPassword(data.email, data.password)(dispath);
    }

    return (
        <Presentational 
            handleLoginWithEmailAndPassword={handleLoginWithEmailAndPassword} 
            handleLoginWithGoogle={handleLoginWithGoogle} 
        />
    )
}
export default Login;