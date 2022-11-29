import M from 'materialize-css';
import React, { useEffect } from 'react';
import Header from './Header/Header';



const AdminIndex = () => {
    
    useEffect(() => {
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.sidenav');
            var instances = M.Sidenav.init(elems, {
              edge : 'right',
            });
          });
    }, []);

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
