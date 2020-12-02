import React from 'react';
import logo from '../../assets/images/car.svg';
import {Formik} from 'formik';
import { Form } from 'antd';
import * as yup from 'yup';
import {IRegister } from '../../@types/auth.type';

import { withRouter, RouteComponentProps } from "react-router-dom";

const registerSchema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
    verifypassword: yup.string().min(6).required(),
});

interface BaseProps{
    handleRegisterWithEmailAndPassword:(data: IRegister)=>void;
}

type IProps = RouteComponentProps & BaseProps;

function PRegister(props: IProps){
    const renderPanel=()=>{
        return (
            <div className="col-lg-6 col-md-12 panel-register">
                <div className="panel-content" data-aos='fade-left' data-aos-duration="3000">
                    <img src={logo} alt='resgister'/>
                    <h2 className='text-lg '>Travel</h2>
                    <p className='text-md '>I haven account? Login now</p>
                    <button className='button-signup button-base text-white text-md'><a href='/login'>Sign in</a></button>
                </div>
            </div>
        )
    }

    const onSubmit =(formData: IRegister)=>{
        props.handleRegisterWithEmailAndPassword(formData);
    }

    const renderForm=()=>{
        return (
            <div className="col-lg-6 col-md-12">
                <Formik
                    validateOnBlur={false}
                    validateOnChange={false}
                    onSubmit={onSubmit}
                    initialValues={{
                        email:'',
                        password:'',
                        verifypassword: '',
                    } as IRegister}
                    validationSchema={registerSchema}
                >
                    {({
                        handleSubmit,
                        handleChange,
                        values,
                        errors,
                    })=>(
                        <Form className='d-flex flex-column justify-content-center align-items-center h-100'>
                            <div className="d-flex flex-column form justify-content-center align-items-center w-100">
                                <p className='text-lg font-bold'>Sign up</p>
                                <input
                                    data-aos='fade-left' data-aos-duration="1000" 
                                    name='email'
                                    placeholder='Email' 
                                    onChange={handleChange}
                                    value={values.email}
                                />
                                {!!errors.email && <p className='mb-0 text-danger text-sm text-base'>{errors.email}</p> }
                                <input 
                                 data-aos='fade-right' data-aos-duration="2000" 
                                    name='password'
                                    type='password'
                                    placeholder='Password' 
                                    onChange={handleChange}
                                    value={values.password}
                                />
                                {!!errors.password && <p className='mb-0 text-danger text-sm text-base'>{errors.password}</p> }
                                <input 
                                 data-aos='fade-left' data-aos-duration="3000" 
                                    name='verifypassword'
                                    type='password'
                                    placeholder='Verify password' 
                                    onChange={handleChange}
                                    value={values.verifypassword}
                                />
                                {!!errors.verifypassword && <p className='mb-0 text-danger text-sm text-base'>{errors.verifypassword}</p> }
                                <button className='button-base text-white text-sm text-uppercase' onClick={()=>handleSubmit()}>Register</button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        )
    }
    return (
        <div className="row register-section w-100 ">
            {renderForm()}
            {renderPanel()}
        </div>
    )
}
export default withRouter(PRegister); 
