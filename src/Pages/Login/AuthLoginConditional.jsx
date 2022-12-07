import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import useLogin from '../../hooks/AuthLogin';
import Login from './Login';

const AuthLoginConditional = () => {
    const [loading, isLogin] = useLogin()
    return (
        <>
            {loading ? (
                <h4>لطفا صبر کنید...</h4>
            ) :
                !isLogin ? (
                    <Routes>
                        <Route path='/auth/login' element={<Login />} />
                    </Routes>

                ) : (
                    <Navigate to={'/'} />
                )
            }
        </>
    );
}

export default AuthLoginConditional;
