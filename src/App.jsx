import React from 'react';
import { useLocation } from 'react-router-dom';
import Login from './Pages/Login/Login';
import AdminIndex from './Pages/MainContent/AdminIndex';

const Index = () => {
    const location = useLocation()
    return (
        <div>
            {
                location.pathname.includes('/auth') ? (
                    <Login />
                ) : (
                    <AdminIndex />
                )
            }
        </div>
    );
}

export default Index;
