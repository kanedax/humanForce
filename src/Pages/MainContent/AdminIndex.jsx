import React, { useEffect } from 'react';
import Header from './Header/Header';


const AdminIndex = () => {
    
    useEffect(()=>{
        require('../../utils/initialDom')
    },[])
    
    return (
        <div className='Admin-main-container'>
            <div className='admin-header red'>
                <Header/>
            </div>
            <div className='admin-content'>

            </div>
        </div>
    );
}

export default AdminIndex;
