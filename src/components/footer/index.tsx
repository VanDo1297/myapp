import React from 'react';
import {
    FacebookIcon,
    LinkedinIcon,
    RedditIcon,
    TelegramIcon,
    TwitterIcon,
    FacebookShareButton,
    LinkedinShareButton,
    RedditShareButton,
    TelegramShareButton,
    TwitterShareButton
  } from "react-share";
  
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

    const renderInformation =()=>{
        return (
            <div className="information">
                <p className="mb-0">Location: </p>
                <p className="information-location">Newtown Apaterment, 18 Street, Thu Duc Province, Ho Chi Minh City.</p>
                <p className="mb-0">Email:</p>
                <p className="information-email"><a href="mailto:docs2gtvt@gmail.com">docs2gtvt@gmail.com</a></p>
                <p className="mb-0">Social contact</p>
                <div className="d-flex flex-row w-100 social-link">
                    <FacebookShareButton url={''}><FacebookIcon size={32} round={true} /></FacebookShareButton>
                    <TwitterShareButton url={''}><TwitterIcon size={32} round={true} /></TwitterShareButton>
                    <LinkedinShareButton url={''}><LinkedinIcon size={32} round={true} /></LinkedinShareButton>
                    <RedditShareButton url={''}><RedditIcon size={32} round={true} /></RedditShareButton>
                    <TelegramShareButton url={''}><TelegramIcon size={32} round={true} /></TelegramShareButton>
                </div>
            </div>
        )
    }
    return (
        <div className='footer bg-darkblue d-flex'>
            <div className="infor">
                {renderClock()}
                {renderInformation()}
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