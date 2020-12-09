import React,{useContext, useEffect, useState} from 'react';
import { GlobalContext, IState} from '../../context/provider';
import { getTourDetails, getMyTourDetails , bookTour } from '../../context/tour/actions';
import {RouteComponentProps} from 'react-router-dom';
import { ITourItem } from '../../@types/tour.type';
import {getDaysBetweenDates} from '../../helpers';
import Loading from '../../components/loading';

const queryString = require('query-string');
interface IProps extends RouteComponentProps<{}>{}
const TourDetails =(props: IProps)=>{

    const {tourDispatch:dispatch,  tourState, authState} = useContext(GlobalContext) as IState;
    const [detail, setDetail]= useState({} as ITourItem);
    const [isLoading, setLoading]= useState(false);

    useEffect(()=>{
        const parsed = queryString.parse(props.location.search);
        if(parsed.type  && parsed.type === 'public'){
            getTourDetails(parsed.id )(dispatch)
        }else{
            getMyTourDetails(authState.user && authState.user.accountId ,parsed.id )(dispatch)
        }
         // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    useEffect(()=>{
        setDetail(tourState.tourDetail)
      
    },[tourState.tourDetail])

    useEffect(()=>{
        setDetail(tourState.myTourDetail)
    },[tourState.myTourDetail])

    useEffect(()=>{
        setLoading(tourState.loading)
    },[tourState.loading])

    const handleBooking = () =>{
        bookTour(detail)(dispatch)
    }

    return (
        <>
            <Loading isShowLoading={isLoading} />
            {!isLoading && <div className='tour-detail'>
                <div className="tour-detail__content">
                    <div className="tour-image">
                        <img src={detail.image} alt=""/>
                    </div>
                    <p className="tourName">{detail.tourName}</p>
                    <div className="location">
                        <p className="location-d">Location: </p>
                        <p className="location-c">{detail.location}</p>
                    </div>
                    <div className="description">
                        <p className="description-d">Description: </p>
                        <p className="description-c">{detail.description}</p>
                    </div>

                    <div className="prince">
                        <p className="prince-d">Prince: </p>
                        <p className="prince-c">{Number(detail.prince).toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</p>
                    </div>

                    <div className="duration">
                        <p className="duration-d">Duration: </p>
                        <p className="duration-c">{getDaysBetweenDates(detail.startDate, detail.endDate).length -1} days - {getDaysBetweenDates(detail.startDate, detail.endDate).length - 2} nights</p>
                    </div>
                    <div className="tour-button">
                        <button onClick={handleBooking} className='tour-booking'>Booking now</button>
                    </div>
                </div>
            </div>}
        </>
    )
}

export default TourDetails;