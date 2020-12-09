import * as consTour from '../../constants/tour';
import {  addMyTour, getTours,getMyTours, getMyTourDetail, getTourDetailService } from '../../services/tourService';
import { ITourItem} from '../../@types/tour.type';

export const addNewTour=(userId: string, tour: ITourItem, file: File)=>(dispatch: any)=>{
    dispatch({
        type: consTour.ADD_TOUR
    })
    try {
        addMyTour(userId, tour, file).then(res=>{
            getMyTour(userId)(dispatch)
            dispatch({
                type: consTour.ADD_TOUR_SUCCESS,
                payload: {
                    tours: res
                }
            })
        })
    } catch (error) {
        dispatch({ type: consTour.ADD_TOUR_FAILURE, error: error.message });
    }
}

export const getTour =()=>async (dispatch: any)=>{
    dispatch({
        type: consTour.GET_TOUR
    })
    try {
        let tours = [] as any[];
        await getTours().then(querySnapshot=>{
            querySnapshot.forEach(doc=>{
                console.log(doc);
                tours.push(doc.data())
            })
        })
        dispatch({
            type: consTour.GET_TOUR_SUCCESS,
            payload: {
                tours: tours
            }
        })
    } catch (error) {
        dispatch({ type: consTour.GET_TOUR_FAILURE, error: error.message });
    }
}

export const getMyTour =(userId: string)=>async (dispatch: any)=>{
    dispatch({
        type: consTour.GET_MY_TOUR
    })
    try {
        let tours = [] as any[];
        await getMyTours(userId).then(querySnapshot=>{
            querySnapshot.forEach(doc=>{
                tours.push(doc.data())
            })
        })
        dispatch({
            type: consTour.GET_MY_TOUR_SUCCESS,
            payload: {
                tours: tours
            }
        })
    } catch (error) {
        dispatch({ type: consTour.GET_MY_TOUR_FAILURE, error: error.message });
    }
}

export const getMyTourDetails =(userId: string, tourId:string)=>async (dispatch: any)=>{
    dispatch({
        type: consTour.GET_MY_TOUR_DETAIL
    })
    try {
        let tour = {};
        await getMyTourDetail(userId, tourId).then(querySnapshot=>{
            querySnapshot.forEach(doc=>{
                console.log(doc.data());
                tour = doc.data()
            })
        })
        dispatch({
            type: consTour.GET_MY_TOUR_DETAIL_SUCCESS,
            payload: {
                tourDetail: tour
            }
        })
    } catch (error) {
        dispatch({ type: consTour.GET_MY_TOUR_DETAIL_FAILURE, error: error.message });
    }
}

export const getTourDetails =(tourId:string)=>async (dispatch: any)=>{
    dispatch({
        type: consTour.GET_TOUR_DETAIL
    })
    try {
        let tour = {};
        await getTourDetailService(tourId).then(querySnapshot=>{
            querySnapshot.forEach(doc=>{
                tour = doc.data()
            })
        })
        dispatch({
            type: consTour.GET_TOUR_DETAIL_SUCCESS,
            payload: {
                tourDetail: tour
            }
        })
    } catch (error) {
        dispatch({ type: consTour.GET_MY_TOUR_FAILURE, error: error.message });
    }
}

export const bookTour = (tour: ITourItem)=>(dispatch: any)=>{
    dispatch({
        type: consTour.BOOKING_TOUR,
        payload: {
            tour:tour
        }
    })
}