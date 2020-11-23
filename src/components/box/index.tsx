import React from 'react';
import image from '../../assets/images/polina.jpg';
interface IProps{
    idImage: string,
    classname?:string,
    categoryTitle:string,
    description:string
}

const Box= React.memo((props: IProps)=>{
    
    return (
        <div className={`d-flex ${props.classname} row`}>
            <div className="col-md-6 col-sm-12 aos-init aos-animate" data-aos='fade-right'>
                <img className='box-image' src={image} alt=''/>
            </div>
            <div className="col-md-6 col-sm-12">
                <div className="title">
                    <p className="category mb-0">{props.categoryTitle}</p>
                </div>
                <p className="description mb-0">{props.description}</p>
            </div>
        </div>
        
    )
})

export default Box;