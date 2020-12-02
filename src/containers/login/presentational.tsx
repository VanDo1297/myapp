import React from 'react';
import logo from '../../assets/images/panel.svg';
import googleLogo from '../../assets/images/google.jpg';
import facebookLogo from '../../assets/images/fb.png';
import {Formik} from 'formik';
import { Form } from 'antd';
import * as yup from 'yup';
import {ILogin} from '../../@types/auth.type';

const loginSchema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
});
interface IProps {
    handleLoginWithGoogle:()=>void;
    handleLoginWithEmailAndPassword:(data: ILogin)=>void;
}

function PLogin(props: IProps){

    const handleLoginWithGoogle =()=>{
        props.handleLoginWithGoogle()
    }

    const onSubmit =(formData: ILogin)=>{
        console.log(formData);
        props.handleLoginWithEmailAndPassword(formData)
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

    const renderForm=()=>{
        return (
            <Formik
                validateOnBlur={false}
                validateOnChange={false}
                onSubmit={onSubmit}
                initialValues={{
                    email:'',
                    password:''
                }}
                validationSchema={loginSchema}
            >
                {({
                    handleSubmit,
                    handleChange,
                    values,
                    errors,
                })=>(
                    <Form className=''>
                        <div className="d-flex flex-column form-login justify-content-center align-items-center w-100 h-100">
                            <p className='text-lg'>Sign in</p>
                            <input 
                                name='email'
                                placeholder='Email' 
                                onChange={handleChange}
                                value={values.email}
                            />
                            {!!errors.email && <p>{errors.email}</p> }
                            <input 
                                type='password'
                                name='password'
                                placeholder='Password' 
                                onChange={handleChange}
                                value={values.password}
                            />
                            {!!errors.password && <p>{errors.password}</p> }
                            <button className='button-base text-white text-sm text-uppercase' onClick={()=>handleSubmit()}>Login</button>
                        </div>
                    </Form>
                )}
            </Formik>
        )
    }

    return (
        <div className="row login-section w-100 h-100">
            {renderPanel()}
           <div className="col-lg-6 col-md-12 right-login">
                {renderForm()}
                <p className="mt-5">Sign in with Google or Facebook</p>
                <div className="google">
                    <img className='google-logo' src={googleLogo} alt=""/>
                    <button onClick={handleLoginWithGoogle} className="google-button">Login with google</button>
                </div>
                <div className="facebook mt-3">
                    <img className='google-logo' src={facebookLogo} alt=""/>
                    <button onClick={handleLoginWithGoogle} className="google-button">Login with facebook</button>
                </div>
               </div>
        </div>
    )
}
export default PLogin;