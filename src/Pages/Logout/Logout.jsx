import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Alert } from '../../Components/Alert';

const Logout = () => {
    const [loading, setLoading] = useState(true);

    const handleLogout = async () => {
        const loginToken = JSON.parse(localStorage.getItem("loginToken"))

        await axios.delete("http://45.138.135.108:8080/api/Auth/logout", {
            headers: {
                Authorization: `Bearer ${loginToken.data.token}`,
            },
        }).then(res => {
            if (res.status == 200) {
                localStorage.removeItem('loginToken')
                setLoading(false);
                Alert("خروج", "شما با موفقیت خارج شدید", "success")
            }else{
                Alert("متاسفم", "خروج موفقیت آمیز نبود", "warning")
            }
        }).catch(err => {
            console.log(err);
            Alert("متاسفم", "ایرادی از سمت سرور رخ داده است", "error")
            
            setLoading(false);
        })
    }

    useEffect(() => {
        handleLogout()
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
