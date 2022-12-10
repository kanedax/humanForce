import React from 'react';
import { Link } from 'react-router-dom';

const SidenavItems = () => {
    return (
        <div>
            <li >
                <i className='fa-regular fa-user sidenav-items1'></i>
                <Link to={'/multipageform'}>مدیریت کارمندان</Link>
            </li>
            <li >
                <i className='fa-regular fa-user'></i>
                <a href="#">مدیریت فرمها</a>
            </li>
            <li >
                <i className='fa-regular fa-user'></i>
                <a href="#">مدیریت مرخصی</a>
            </li>
            <li >
                <i className='fa-regular fa-user'></i>
                <a href="#">مدیریت حقوق و مزایا</a>
            </li>
            <li >
                <i className='fa-regular fa-user'></i>
                <a href="#">مدیریت دسترسی ها</a>
            </li>
            <li >
                <i className='fa-regular fa-user'></i>
                <a href="#">مدیریت ساعات تردد</a>
            </li>
            <li >
                <i className='fa-regular fa-user'></i>
                <a href="#">مدیریت پیمانکاران</a>
            </li>
            <li >
                <i className='fa-regular fa-user'></i>
                <a href="#">مدیریت کارشناسان</a>
            </li>
            <li >
                <i className='fa-regular fa-user'></i>
                <a href="#">مدیریت نگهبانی</a>
            </li>
        </div>
    );
}

export default SidenavItems;
