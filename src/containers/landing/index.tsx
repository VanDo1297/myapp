import React,{useState, useContext, useEffect} from 'react';
import Presentational from './presentational';
import {RouteComponentProps} from 'react-router-dom';
import {tours, blogs} from '../../constants/mock';
import Loading from '../../components/loading';
import { GlobalContext, IAuthValue } from "../../context/provider";

interface IProps extends RouteComponentProps<{}>{}

function Landing(props: IProps){
    const { authState} = useContext(GlobalContext) as IAuthValue;

    const [isLoading, setLoading]= useState(false);
    
    useEffect(()=>{
        setLoading(authState.loading)
    },[authState.loading])

    return (
        <>
            <Presentational 
                tours={tours}
                blogs={blogs}
            />
            <Loading isShowLoading={isLoading} />
        </>
    )
}
export default Landing;