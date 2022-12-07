import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './Login/Login';
import Logout from './Login/Logout';
import AdminIndex from './MainContent/AdminIndex';

const RouteMap = () => {
    return (
        <Routes>
            <Route path='/' element={<AdminIndex/>}/>
            <Route path='/*' element={<AdminIndex/>}/>
            <Route path='/logout' element={<Logout/>}/>
        </Routes>
    );
}

export default RouteMap;
