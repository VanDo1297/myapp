import React from 'react';

interface IProps{}

const Banner = React.memo((props:IProps)=>{
    return <div className="banner">
            <div data-aos='fade-down' data-aos-duration="3000">
                <h2>Get the latest tours</h2>
                <p >Travel the world and be happy!</p>
            </div>
    </div>
})

export default Banner;