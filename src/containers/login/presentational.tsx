import React from 'react';
import logo from '../../assets/images/logo.svg';
import {Formik} from 'formik';
import { Form } from 'antd';
import * as yup from 'yup';

const loginSchema = yup.object({
    username: yup.string().min(6).required(),
    password: yup.string().min(6).required(),
});

function PLogin(){
    const renderPanel=()=>{
        return (
            <div className="col-lg-6 col-md-12 login-left h-100">
                <div className="login-content">
                    <h2 className='text-lg'>New hear?</h2>
                    <p className='text-md'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <button className='button-signup button-base text-white text-md'>Sign up</button>
                    <img src={logo} />
                </div>
            </div>
        )
    }

    const onSubmit =()=>{

    }

    const renderForm=()=>{
        return (
            <div className="col-lg-6 col-md-12">
                <Formik
                    validateOnBlur={false}
                    validateOnChange={false}
                    onSubmit={onSubmit}
                    initialValues={{
                        username:'',
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
                        <Form className='h-100'>
                            <div className="d-flex flex-column form-login justify-content-center align-items-center w-100 h-100">
                                <p className='text-lg'>Sign in</p>
                                <input 
                                    name='username'
                                    placeholder='Username' 
                                    onChange={handleChange}
                                    value={values.username}
                                />
                                {!!errors.username && <p>{errors.username}</p> }
                                <input 
                                    name='password'
                                    placeholder='Password' 
                                    onChange={handleChange}
                                    value={values.password}
                                />
                                {!!errors.username && <p>{errors.username}</p> }
                                <button className='button-base text-white text-sm text-uppercase' onClick={()=>handleSubmit()}>Login</button>
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