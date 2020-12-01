import React from 'react';
import logo from '../../assets/images/panel.svg';
import googleLogo from '../../assets/images/google.jpg';
import facebookLogo from '../../assets/images/fb.png';
interface IProps {
    handleLoginWithGoogle:()=>void;
}

function PLogin(props: IProps){
    const handleLoginWithGoogle =()=>{
        props.handleLoginWithGoogle()
    }
    const renderPanel=()=>{
        return (
            <div className="col-lg-6 col-md-12 panel-login h-100">
                <div className="panel-content" data-aos='fade-right' data-aos-duration="3000">
                    <img className='ltr2s' src={logo} alt=''/>
                </div>
            </div>
        )
    }

    return (
        <div className="row login-section w-100 h-100">
            {renderPanel()}
           <div className="col-lg-6 col-md-12 right-login">
                <div className="google">
                    <img className='google-logo' src={googleLogo} alt=""/>
                    <button onClick={handleLoginWithGoogle} className="google-button">Login with google</button>
                </div>
                <div className="facebook mt-5">
                    <img className='google-logo' src={facebookLogo} alt=""/>
                    <button onClick={handleLoginWithGoogle} className="google-button">Login with facebook</button>
                </div>
           </div>
        </div>
    )
}
export default PLogin;