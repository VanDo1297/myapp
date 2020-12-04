import React from 'react';
import {ITourItem} from '../../@types/tour.type';

interface IProps {
    tour: ITourItem,
    index: number
}
const TourItem = React.memo((props: IProps)=>{
    const { tour, index }= props;
    return(
        <div key={index} className='col-lg-4 col-md-6 col-sm-12 tour-item' data-aos="fade-up" data-aos-duration='1500'>
            <img src={tour.image} alt=""/>
            <div className="content">
                <p className="mb-0 tour-price pointer">
                    {tour.prince ? tour.prince + 'VND' : 'FREE'} 
                </p>
                <p className="mb-0 tour-name">
                    {tour.tourName}
                </p>
            </div>
        </div>
    )
})
export default TourItem;