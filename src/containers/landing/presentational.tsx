import React from 'react';
import Banner from './components/banner';
import Box from '../../components/box';
import CategoryTour from './components/categoryTour';
import CategoryBlog from './components/categoryBlog';
import { TourItem } from '../../@types/tour.type';

interface IProps{
    tours: TourItem[]
}
function PLanding(props: IProps){
    return (
        <div className='d-flex justify-content-center flex-column align-items-center'>
            <Banner />
            <div className='w-100 mt-5'>
                <div className="container">
                    <div className="row align-items-center">
                        <Box 
                            idImage='image1'
                            categoryTitle={`What new's`}
                            description='Description fills in setting details and character details for the reader who would otherwise be unable to see or hear them. For all our efforts at making a story real, for putting readers inside the fictional world, the readers aren’t actually there.'
                            classname='flex-row-reverse'
                        />
                        <CategoryTour 
                            tours={props.tours}
                        />
                        <CategoryBlog 
                            tours={props.tours}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PLanding;