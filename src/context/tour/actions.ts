import * as consTour from '../../constants/tour';
import { addTour, getTours, getTourWithId } from '../../services/tourService';
import {ITourItem} from '../../@types/tour.type';

export const addNewTour=(userId: string, tour: ITourItem, file: File)=>(dispatch: any)=>{
    dispatch({
        type: consTour.ADD_TOUR
    })
    try {
        addTour(userId, tour, file).then(res=>{
            getTour(userId)(dispatch)
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

export const getTour =(userId: string)=>async (dispatch: any)=>{
    dispatch({
        type: consTour.GET_TOUR
    })
    try {
        let tours = [] as any[];
        await getTours(userId).then(querySnapshot=>{
            querySnapshot.forEach(doc=>{
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

export const getTourDetails =(userId: string, tourId:string)=>async (dispatch: any)=>{
    dispatch({
        type: consTour.GET_TOUR_ID
    })
    try {
        let tour = {};
        await getTourWithId(userId, tourId).then(querySnapshot=>{
            querySnapshot.forEach(doc=>{
                tour = doc.data()
            })
        })
        dispatch({
            type: consTour.GET_TOUR_ID_SUCCESS,
            payload: {
                tourDetail: tour
            }
        })
    } catch (error) {
        dispatch({ type: consTour.GET_TOUR_FAILURE, error: error.message });
    }
}