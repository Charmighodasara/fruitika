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
                                            <NavLink className="current-list-item" to={'/index'}>Home</NavLink>
                                            <ul className="sub-menu">
                                                <li>
                                                    <NavLink to={'/index'}>Static Home</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to={'/index2'}>Static Home</NavLink>
                                                </li>
                                            </ul>
                                        </li>
                                        <li><NavLink to={'/about'}>About</NavLink></li>
                                        <li><a href="#">Pages</a>
                                            <ul className="sub-menu">
                                                <li><NavLink to={'/pages1'}>404 page</NavLink></li>
                                                <li><NavLink to={'/about'}>About</NavLink></li>
                                                <li><a href="cart.html">Cart</a></li>
                                                <li><a href="checkout.html">Check Out</a></li>
                                                <li><a href="contact.html">Contact</a></li>
                                                <li><a href="news.html">News</a></li>
                                                <li><a href="shop.html">Shop</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="news.html">News</a>
                                            <ul className="sub-menu">
                                                <li><a href="news.html">News</a></li>
                                                <li><a href="single-news.html">Single News</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="contact.html">Contact</a></li>
                                        <li><a href="shop.html">Shop</a>
                                            <ul className="sub-menu">
                                                <li><a href="shop.html">Shop</a></li>
                                                <li><a href="checkout.html">Check Out</a></li>
                                                <li><a href="single-product.html">Single Product</a></li>
                                                <li><a href="cart.html">Cart</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <div className="header-icons">
                                                <a className="shopping-cart" href="cart.html"><i className="fas fa-shopping-cart" /></a>
                                                <a className="mobile-hide search-bar-icon" href="#"><i className="fas fa-search" /></a>
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