import React from 'react';
import Banner from './components/banner';
import Box from '../../components/box';
import Footer from '../../components/footer';
import CategoryTour from './components/categoryTour';
import CategoryBlog from './components/categoryBlog';
import HotTour from './components/hot';
import { ITourItem } from '../../@types/tour.type';
import { IBlogItem } from '../../@types/blog.type';


interface IProps{
    tours: ITourItem[],
    blogs: IBlogItem[],
    handleClickTourItem:(id:string)=>void;
}
function PLanding(props: IProps){
    return (
        <div>
            <div className="bg" />
            <div className='d-flex justify-content-center flex-column align-items-center bg-1'>
                <Banner />
                <div className='w-100  bg-white pt-5'>
                    <div className="container">
                        <div className="align-items-center">
                            <Box 
                                idImage='image1'
                                categoryTitle={`What new's`}
                                description='Description fills in setting details and character details for the reader who would otherwise be unable to see or hear them. For all our efforts at making a story real, for putting readers inside the fictional world, the readers aren’t actually there.'
                                classname='flex-row-reverse'
                            />
                            <CategoryTour 
                                tours={props.tours.slice(0,6)}
                                handleClickTourItem={props.handleClickTourItem}
                            />

                            <HotTour 
                                tours={props.tours.slice(props.tours.length - 6, props.tours.length).reverse()} 
                                handleClickTourItem={props.handleClickTourItem}
                            />
                            <CategoryBlog 
                                blogs={props.blogs}
                            />
                        </div>
                    </div>
                </div>
                <div className="gettouch">
                    <p className="mb-0 text-lg text-white font-weight-bold">Exclusive Travel Specials</p>
                    <p className="mb-0 text-md text-white">Discover a New Destination</p>
                    <button className="button-base bg-yellow text-sm text-uppercase text-white">Join now</button>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default PLanding;