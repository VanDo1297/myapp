import React,{useState, useContext, useEffect} from 'react';
import Presentational from './presentational';
import {RouteComponentProps} from 'react-router-dom';
import { blogs} from '../../constants/mock';
import Loading from '../../components/loading';
import { GlobalContext, IState } from "../../context/provider";
import { ITourItem } from '../../@types/tour.type';
import {getTour} from '../../context/tour/actions';

interface IProps extends RouteComponentProps<{}>{}

function Landing(props: IProps){
    const { tourDispatch, authState, tourState } = useContext(GlobalContext) as IState;

    const [isLoading, setLoading]= useState(false);
    const [tours, setTours]= useState([] as ITourItem[])

    useEffect(()=>{
        getTour(authState.user.accountId)(tourDispatch)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    
    useEffect(()=>{
        setLoading(authState.loading)
    },[authState.loading])

    useEffect(()=>{
        setTours(tourState.tours)
    },[tourState.tours])

    const handleClickTourItem =(id: string)=>{
        props.history.push(`/tour/details?id=${id}`)
    }

    return (
        <>
            <Presentational 
                tours={tours}
                blogs={blogs}
                handleClickTourItem={handleClickTourItem}
            />
            <Loading isShowLoading={isLoading} />
        </>
    )
}
export default Landing;