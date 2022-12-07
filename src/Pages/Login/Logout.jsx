import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

const Logout = () => {
    const [loading, setLoading] = useState(true);
    console.log(Logout);
    useEffect(() => {
        axios.delete("http://45.138.135.108:8080/api/Auth/logout", {
            headers: {
                Authorization: `Bearer ${loginToken.data.token}`,
            },
        }).then(res => {
            console.log(loginToken.data.token);
            localStorage.clear
            setLoading(false);
            console.log(res);
        }).catch(err => {
            console.log(err);
            setLoading(false);
        })
    }, []);

    return (
        <>
            {
                loading ? (
                    <h2>لطفا صبر کنید...</h2>
                ) : (
                    <Navigate to='/auth/login' />
                )
            }
        </>
    );
}

export default Logout;
