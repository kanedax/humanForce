import React from 'react';

const Header = () => {

    return (
        <div>
            <nav>
                <div className="nav-wrapper hamburger cyan">
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger show-on-large">
                        <i className="fas fa-bars"></i>
                    </a>
                </div>
            </nav>
            <ul className="sidenav sidenav-ul" id="mobile-demo">
                <li><a href="#">Sass</a>   </li>
                <li><a href="#">Components</a>   </li>
                <li><a href="#">Javascript</a></li>
                <li><a href="#">Mobile</a></li>
            </ul>
            <a className='dropdown-trigger btn ddbtn' href='#' data-target='dropdown1'>Drop Me!</a>
            <ul id='dropdown1' className='dropdown-content dditems'>
                <li><a href="#!">one</a></li>
                <li><a href="#!">two</a></li>
                <li><a href="#!">two</a></li>
                <li><a href="#!">two</a></li>
                <li><a href="#!">two</a></li>
            </ul>

        </div>
    );
}

export default Header;