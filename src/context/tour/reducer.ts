import * as consTour from '../../constants/tour';
import {ITour} from '../../@types/tour.type';
import {initialTourState} from '../provider'

export const TourReducer = (initialState:ITour = initialTourState , action: any) => {
    switch (action.type) {
        case consTour.ADD_TOUR:
        case consTour.GET_MY_TOUR:
        case consTour.GET_TOUR_DETAIL:
        case consTour.GET_TOUR:
        case consTour.GET_MY_TOUR_DETAIL:
            return {
                ...initialState,
                loading: true
            }
        case consTour.GET_TOUR_FAILURE:
        case consTour.ADD_TOUR_FAILURE:
        case consTour.GET_MY_TOUR_FAILURE:
        case consTour.GET_TOUR_DETAIL_FAILURE:    
        case consTour.GET_MY_TOUR_DETAIL_FAILURE:
            return {
                ...initialState,
                loading: false,
                errorMessage: action.error
            }
        case consTour.GET_MY_TOUR_DETAIL_SUCCESS:
            return{
                ...initialState,
                loading:false,
                myTourDetail: action.payload.tourDetail
            }

        case consTour.GET_TOUR_SUCCESS:
            return {
                ...initialState,
                loading: false,
                tours: action.payload.tours
            }
        case consTour.GET_TOUR_DETAIL_SUCCESS:
            return{
                ...initialState,
                loading: false,
                tourDetail: action.payload.tourDetail
            }
        case consTour.ADD_TOUR_SUCCESS:
            return {
                ...initialState,
                loading: false,
            }
        case consTour.GET_MY_TOUR_SUCCESS:
            return {
                ...initialState,
                loading: false,
                mytours: action.payload.tours
            }
        
        case consTour.BOOKING_TOUR:
            return{
                ...initialState,
                tourBooking: [
                    ...initialState.tourBooking,
                    action.payload.tour
                ]
            }
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
};
