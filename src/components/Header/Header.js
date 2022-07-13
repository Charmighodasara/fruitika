import React from 'react';
import { NavLink } from 'react-router-dom';

function Header(props) {
    return (
        <div>
            <div className="top-header-area" id="sticker">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-sm-12 text-center">
                            <div className="main-menu-wrap">
                                {/* logo */}
                                <div className="site-logo">
                                    <NavLink className="current-list-item" to={'/index'}>
                                        <img src="assets/img/logo.png" alt />
                                    </NavLink>
                                </div>
                                {/* logo */}
                                {/* menu start */}
                                <nav className="main-menu">
                                    <ul>
                                        <li className="current-list-item">
                                            <NavLink className="current-list-item" to={'/'}>Home</NavLink>
                                            <ul className="sub-menu">
                                                <li>
                                                    <NavLink to={'/index'}>Static Home</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to={'/index2'}>Slider Home</NavLink>
                                                </li>
                                             
                                            </ul>
                                        </li>
                                        <li><NavLink to={'/about'}>About</NavLink></li>
                                        
                                        <li><a href="#">Pages</a>
                                            <ul className="sub-menu">
                                                <li><NavLink to={'/pages1'}>404 page</NavLink></li>
                                                <li><NavLink to={'/about'}>About</NavLink></li>
                                                <li><NavLink to={'/cart'}>Cart</NavLink></li>
                                                <li><NavLink to={'/checkout'}>Check Out</NavLink></li>
                                                <li><NavLink to={'/contact'}>Contact</NavLink></li>
                                                <li><NavLink to={'/news'}>News</NavLink></li>
                                                <li><NavLink to={'/shop'}>Shop</NavLink></li>
                                            </ul>
                                        </li>
                                        <li><NavLink to={'/news'}>News</NavLink>
                                            <ul className="sub-menu">
                                                <li><NavLink to={'/news'}>News</NavLink></li>
                                                <li><NavLink to={'/single-new'}>Single News</NavLink></li>
                                            </ul>
                                        </li>
                                        <li><NavLink to={'/contact'}>Contact</NavLink></li>
                                        <li><NavLink to={'/shop'}>Shop</NavLink>
                                            <ul className="sub-menu">
                                                <li><li><NavLink to={'/fruit'}>Fruit</NavLink></li></li>
                                                <li><NavLink to={'/checkout'}>Check Out</NavLink> </li>
                                                <li><NavLink to={'/single-product'}>Single Product</NavLink></li>
                                                <li><NavLink to={'/cart'}>Cart</NavLink></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <div className="header-icons">
                                                <NavLink className="shopping-cart" to={'/cart'}><i className="fas fa-shopping-cart" /></NavLink>
                                                <NavLink  className="mobile-hide search-bar-icon" to={'/search'}><i className="fas fa-search" /></NavLink>
                                                <NavLink className="shopping-cart" to={'/login-signup'}><i className="fas fa-user" /></NavLink>
                                            </div>
                                        </li>
                                    </ul>
                                </nav>
                                <a className="mobile-show search-bar-icon" href="#"><i className="fas fa-search" /></a>
                                <div className="mobile-menu" />
                                {/* menu end */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Header;