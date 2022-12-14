import React from 'react';
import { Link } from 'react-router-dom';

const DropDownItems = () => {
    return (
        <div>
            <li className='dd-link' ><a href="#!">آخرین ورود</a></li>
            <li className='dd-link' ><a href="#!">اعلانات</a></li>
            <li className='dd-link' ><a href="#!">پیامها</a></li>
            <li className="divider" tabIndex="-1"></li>
            <li className='dd-link' >
                <i className='fas fa-power-off icon-handler'></i>
                <Link to={'/logout'}>خروج</Link>
            </li>
        </div>
    );
}

export default DropDownItems;
