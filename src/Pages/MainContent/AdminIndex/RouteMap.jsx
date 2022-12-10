import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../../Dashboard/Dashboard';
import Logout from '../../Logout/Logout';
import MultiPageForm from '../MultiPageForm/MultiPageForm';
import AdminIndex from './AdminIndex';

const RouteMap = () => {
    return (
        <Routes>
            <Route path='/' element={<AdminIndex/>}/>
            <Route path='/logout' element={<Logout/>}/>
            <Route path='/multipageform' element={<MultiPageForm/>}  />
            <Route path='/dashboard' element={<Dashboard/>}/>
        </Routes>
    );
}

export default RouteMap;
