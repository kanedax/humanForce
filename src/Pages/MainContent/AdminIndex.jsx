import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import useLogin from '../../hooks/AuthLogin';
import { sidenav } from '../../utils/sidenav';
import Header from './Header/Header';
import MultiPageForm from './MultiPageForm/MultiPageForm';


const AdminIndex = () => {
    useEffect(() => {
        sidenav();
    }, []);
    const [loading, isLogin] = useLogin()

    return (
        <>
            {
                loading ? (
                    <h4> لطفا صبر کنید... </h4>
                ) : isLogin ? (
                    <>
                        <div className='Admin-main-container'>
                            <div className='admin-header red'>
                                <Header />
                            </div>
                            <div className='admin-content'>
                                <MultiPageForm />
                            </div>
                        </div>
                    </>

                ) : (
                    <Navigate to={'/auth/login'} />
                )
            }
        </>
    );
}

export default AdminIndex;
