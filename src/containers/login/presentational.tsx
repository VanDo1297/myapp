import React from 'react';
import logo from '../../assets/images/panel.svg';
import {Formik} from 'formik';
import { Form } from 'antd';
import * as yup from 'yup';
import {IFormType } from '../../@types/form.type';

const loginSchema = yup.object({
    username: yup.string().min(6).required(),
    password: yup.string().min(6).required(),
});

interface IProps {
    onSubmit: (formData: IFormType) => void;
}

function PLogin(props: IProps){
    const renderPanel=()=>{
        return (
            <div className="col-lg-6 col-md-12 panel-login h-100">
                <div className="panel-content" data-aos='fade-right' data-aos-duration="3000">
                    <img className='ltr2s' src={logo} alt=''/>
                    <div className="ltr3s d-flex flex-column w-100 align-items-center">
                        <h2 className='text-lg'>Travel</h2>
                        <p className='text-md'>I haven't account? Create now</p>
                        <button className='button-signup button-base text-white text-md'><a href='/sign-up'>Sign up</a></button>
                    </div>
                </div>
            </div>
        )
    }

    const renderForm=()=>{
        return (
            <div className="col-lg-6 col-md-12">
                <Formik
                    validateOnBlur={false}
                    validateOnChange={false}
                    onSubmit={props.onSubmit}
                    initialValues={{
                        username:'',
                        password:''
                    } as IFormType}
                    validationSchema={loginSchema}
                >
                    {({
                        handleSubmit,
                        handleChange,
                        values,
                        errors,
                    })=>(
                        <Form className='h-100'>
                            <div className="d-flex flex-column form justify-content-center align-items-center w-100 h-100">
                                <p className='text-lg font-bold rtl1s'>Sign in</p>
                                <input 
                                    className='rtl2s'
                                    name='username'
                                    placeholder='Username' 
                                    onChange={handleChange}
                                    value={values.username}
                                />
                                {!!errors.username && <p className='mb-0 text-danger text-sm text-base'>{errors.username}</p> }
                                <input 
                                    className='rtl3s'
                                    name='password'
                                    type='password'
                                    placeholder='Password' 
                                    onChange={handleChange}
                                    value={values.password}
                                />
                                {!!errors.password && <p className='mb-0 text-danger text-sm text-base'>{errors.password}</p> }
                                <button className='rtl4s button-base text-white text-sm text-uppercase' onClick={()=>handleSubmit()}>Login</button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        )
    }
    return (
        <div className="row login-section w-100 h-100">
            {renderPanel()}
            {renderForm()}
        </div>
    )
}
export default PLogin;