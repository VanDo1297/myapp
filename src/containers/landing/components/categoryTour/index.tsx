import React from 'react';
import { ITourItem } from '../../../../@types/tour.type';
interface IProps{
    tours: ITourItem[]
}
const CategoryTour = React.memo((props:IProps)=>{
    const renderTourItem =(tour: ITourItem)=>{
        return (
            <div key={tour.startDate} className='col-lg-4 col-md-6 col-sm-12 tour-item' data-aos="fade-up" data-aos-duration='1500'>
                <img src={tour.image} alt=""/>
                <div className="content">
                    <p className="mb-0 tour-price pointer">
                        {tour.prince} VND
                    </p>
                    <p className="mb-0 tour-name">
                        {tour.tourName}
                    </p>
                </div>
            </div>
        )
    }
    return (
        <div className="categorys">
            <div className="category-title">
                <p className="name mb-0">Category</p>
            </div>
            <div className='row w-100 ' >
                {
                    props.tours.map(tour => renderTourItem(tour))
                }
            </div>
        </div>
    )
})

export default CategoryTour;