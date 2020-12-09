import React,{useContext, useEffect, useState ,Suspense} from 'react';
import { GlobalContext, IState} from '../../context/provider';
import {addNewTour, getTour} from '../../context/tour/actions';
import AddModal from '../../components/modal/addtour';
import {ITourItem} from '../../@types/tour.type';
import {PlusCircleOutlined} from '@ant-design/icons';
import Loading from '../../components/loading';
import {RouteComponentProps} from 'react-router-dom';

const TourItem = React.lazy(()=> import('../../components/tour/tourItem'));

type IProps = RouteComponentProps;

const MyTour = (props: IProps)=>{

    const {tourDispatch:dispatch,  tourState, authState} = useContext(GlobalContext) as IState;
    const [tours, setTours]= useState([] as ITourItem[])
    const [isShowAddModal, setShowAddModal]= useState(false);
    const [isLoading, setLoading]= useState(false);

    useEffect(()=>{
        getTour(authState.user.accountId)(dispatch);
         // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    useEffect(()=>{
        setTours(tourState.tours);
    },[tourState.tours])

    useEffect(()=>{
        setLoading(tourState.loading)
    },[tourState.loading])

    const addModalToggle =()=>{
        setShowAddModal(!isShowAddModal)
    }

    const handleConfirmAddTour =(tour: ITourItem, file: File)=>{
        addNewTour(authState.user.accountId, tour, file)(dispatch);
        setShowAddModal(false);
    }

    const goTo =(tourId:string)=>{
        props.history.push(`/tour/details?id=${tourId}`)
    }

    return (
        <>
            <div className="myblog">
                <div className="adding">
                    <button onClick={addModalToggle} className='button-add bg-success'><PlusCircleOutlined /></button>
                </div>
                <div className="blogs row">
                    {
                        tours && tours.length>0 &&  tours.map((tour: ITourItem, index: number) =>{
                            return <Suspense fallback={<div>Loading...</div>}>
                                    <TourItem goTo={goTo} tour={tour} index={index}/>
                                </Suspense>
                        })
                    }
                </div>
            </div>
            <Loading isShowLoading={isLoading} />
            <AddModal 
                handleConfirmAddTour={handleConfirmAddTour}
                addModalToggle={addModalToggle}
                isShowModal={isShowAddModal}
            />
        </>
    )
}

export default MyTour;