import React from 'react';
import { Navigate } from 'react-router-dom';
import useLogin from '../../../hooks/AuthLogin';
import AdminIndex from './AdminIndex';

const Index = () => {

    const[loading , isLogin] = useLogin()

    return (
        <div>
            {
                loading ? (

                    <h4>لطفا صبر کنید...</h4>

                ) : isLogin ? (
                    <>
                    <AdminIndex />
                    </>
                ) : (

                    <Navigate to={'/auth/login'} />

                )
            }
        </div>
    );
}

export default Index;
