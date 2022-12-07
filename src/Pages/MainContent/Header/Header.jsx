import React from 'react';
import DropDownItems from './DropDownItems';
import SidenavItems from './SidenavItems';

const Header = () => {

    return (
        <div>
            <nav>
                <div className="nav-wrapper hamburger teal lighten-1">
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger show-on-large">
                        <i className="fas fa-bars"></i>
                    </a>
                </div>
            </nav>
            <ul className="sidenav sidenav-ul" id="mobile-demo">
                <div className='avatar'></div>
                <SidenavItems />
            </ul>
            <a className='dropdown-trigger btn ddbtn' href='#' data-target='dropdown1'>خانم فرزانه آزاد</a>
            <ul id='dropdown1' className='dropdown-content'>
                <DropDownItems />
            </ul>
        </div>
    );
}

export default Header;