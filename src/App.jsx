import React from 'react';
import { useLocation } from 'react-router-dom';
import AuthLayout from './Pages/AuthLayout/AuthLayout';
import AdminIndex from './Pages/MainContent/AdminIndex/AdminIndex';
import RouteMap from './Pages/MainContent/AdminIndex/RouteMap';


const Index = () => {
    const location = useLocation();

    return (
        <div>
            {
                location.pathname.includes('/auth') ? (
                    <AuthLayout />

                ) : (

                    <>
                    <AdminIndex />
                    <RouteMap/>
                    </>
                )
            }

        </div>
    );
}

export default Index;
