import React from 'react';
import { ITourItem} from '../../../../@types/tour.type';
interface IProps{
    tours: ITourItem[],
    handleClickTourItem:(id: string)=> void;
}
const HotTour = React.memo((props:IProps)=>{

    const handleClickTourItem =(id: string)=>{
        props.handleClickTourItem(id)
    }

    const renderTourItem =(tour: ITourItem)=>{
        return (
            <div onClick={()=>handleClickTourItem(tour.id.toString())} key={tour.id} className='col-lg-4 col-md-6 col-sm-12 tour-item' data-aos="fade-up" data-aos-duration='1500'>
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
            <div className="hot-title">
                <p className="name mb-0">Hot</p>
            </div>
            <div className='row w-100 ' >
                {
                    props.tours.map(tour => renderTourItem(tour))
                }
            </div>
        </div>
    )
})

export default HotTour;