import React from 'react';
import logo from '../../assets/images/car.svg';
import {Formik} from 'formik';
import { Form } from 'antd';
import * as yup from 'yup';
import {IFormType } from '../../@types/form.type';
// import { withRouter, RouteComponentProps } from "react-router-dom";

const loginSchema = yup.object({
    username: yup.string().min(6).required(),
    password: yup.string().min(6).required(),
    verifypassword: yup.string().min(6).required(),
});

interface BaseProps{
    onSubmit: (formData: IFormType)=>void
}

type IProps = BaseProps;

function PRegister(props: IProps){

    const renderPanel=()=>{
        return (
            <div className="col-lg-6 col-md-12 panel-register h-100">
                <div className="panel-content">
                    <img src={logo} />
                    <h2 className='text-lg '>Travel</h2>
                    <p className='text-md '>I haven account? Login now</p>
                    <button className='button-signup button-base text-white text-md'><a href='/sign-in'>Sign in</a></button>
                </div>
            </div>
        )
    }
   
    const renderForm=()=>{
        return (
            <div className="col-lg-6 col-md-12 effect">
                <Formik
                    validateOnBlur={false}
                    validateOnChange={false}
                    onSubmit={props.onSubmit}
                    initialValues={{
                        username:'',
                        password:'',
                        verifypassword: '',
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
                                <p className='text-lg font-bold'>Sign up</p>
                                <input 
                                    name='username'
                                    placeholder='Username' 
                                    onChange={handleChange}
                                    value={values.username}
                                />
                                {!!errors.username && <p className='mb-0 text-danger text-sm text-base'>{errors.username}</p> }
                                <input 
                                    name='password'
                                    type='password'
                                    placeholder='Password' 
                                    onChange={handleChange}
                                    value={values.password}
                                />
                                {!!errors.password && <p className='mb-0 text-danger text-sm text-base'>{errors.password}</p> }
                                <input 
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
        <div className="row register-section w-100 h-100">
            {renderForm()}
            {renderPanel()}
        </div>
    )
}
export default PRegister;