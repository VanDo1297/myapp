import React from 'react';

function Footer(){

    React.useEffect(()=>{
        runClock();
    },[])

    const runClock =()=>{
        const deg= 6;
        const hr= document.getElementById('hr');
        const mn= document.getElementById('mn');
        const sc= document.getElementById('sc');

        setInterval(()=>{
            let day = new Date();
            let hh = day.getHours() * 30;
            let mm = day.getMinutes() * deg;
            let ss = day.getSeconds() * deg;
    
            if(hr){
                hr.style.transform = `rotateZ(${(hh) + (mm/12)}deg)` 
            }
            if(mn){
                mn.style.transform = `rotateZ(${mm}deg)` 
            }
            if(sc){
                sc.style.transform = `rotateZ(${ss}deg)` 
            }
        },1000)
        
    }

    const renderClock =()=>{
        return <div className="clock">
            <div className="hour">
                <div className="hr" id="hr">

                </div>
            </div>
            <div className="min">
                <div className="mn" id="mn">

                </div>
            </div>
            <div className="sec">
                <div className="sc" id="sc">

                </div>
            </div>
        </div>
    }
    return (
        <div className='footer bg-darkblue d-flex flex-row'>
            <div className="infor">
                {renderClock()}
            </div>
            <div className="form  d-flex flex-column align-items-center">
                <p className="contact-title text-base text-md">Contact with me</p>
                <input  type="text" placeholder='Email' />
                <textarea placeholder='Content...' />
                <button className='button-base bg-yellow color-white'>Send</button>
            </div>
        </div>
    )
}
export default Footer;