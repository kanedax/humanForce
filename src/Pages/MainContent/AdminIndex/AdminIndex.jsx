import React, { useEffect } from 'react';
import { sidenav } from '../../../utils/sidenav';
import Header from '../Header/Header';


const AdminIndex = () => {
    useEffect(() => {
        sidenav();
    }, []);

    return (
        <>
            <div className='Admin-main-container'>
                <Header />
            </div>
        </>
    );
}

export default AdminIndex;
