import React from 'react';
import Banner from './components/banner';
import Box from '../../components/box';
import Footer from '../../components/footer';
import CategoryTour from './components/categoryTour';
import CategoryBlog from './components/categoryBlog';
import { TourItem } from '../../@types/tour.type';
import { BlogItem } from '../../@types/blog.type';

interface IProps{
    tours: TourItem[],
    blogs: BlogItem[]
}
function PLanding(props: IProps){
    return (
        <div>
            <div className="bg" />
            <div className='d-flex justify-content-center flex-column align-items-center bg-1'>
                <Banner />
                <div className='w-100  bg-white pt-5'>
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
                                blogs={props.blogs}
                            />
                            
                        </div>
                    </div>
                </div>
                <div className="gettouch">
                    <p className="mb-0 text-lg text-white font-weight-bold">Join and Trip</p>
                    <p className="mb-0 text-md text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <button className="button-base bg-yellow text-sm text-uppercase text-white">Join now</button>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default PLanding;