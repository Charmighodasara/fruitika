import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Button } from 'reactstrap';
import { themeContext } from '../../context/ThemeContext';
import { SignOutAction } from '../../redux/Action/auth.action';
import Alert from '../Alert/Alert';

function Header(props) {
    const value = useContext(themeContext);
    console.log(value);
    const dispatch = useDispatch()

    const auth = useSelector(state => state.auth)
    return (
        <div>
            <div className="top-header-area" id="sticker">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-sm-12 text-center">
                            <div className="main-menu-wrap">
                                {/* logo */}
                                <div className="site-logo">
                                    <NavLink className="current-list-item" to={'/index'} onClick={() => {
                                        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                                    }}>
                                        <img src="assets/img/logo.png" alt />
                                    </NavLink>
                                </div>
                                {/* logo */}
                                {/* menu start */}
                                <nav className="main-menu">
                                    <ul>
                                        <li className="current-list-item">
                                            <NavLink className="current-list-item" to={'/'}>Home</NavLink>
                                        </li>
                                        <li><NavLink to={'/about'}>About</NavLink></li>

                                        <li><NavLink to={'/news'}>News</NavLink></li>
                                        <li><NavLink to={'/contact'}>Contact</NavLink></li>
                                        <li><NavLink to={'/shop'}>Shop</NavLink></li>
                                        {/* <li><li><NavLink to={'/fruit'}>Fruit</NavLink></li></li> */}
                                        {/* <li><NavLink to={'/single-product'}>Single Product</NavLink></li> */}
                                        {/* <li><NavLink to={'/checkout'}>Check Out</NavLink></li> */}


                                        <li><i class="fa-solid fa-moon-over-sun"></i>
                                            <div className="header-icons">
                                                <NavLink className="shopping-cart" to={'/cart'}><i className="fas fa-shopping-cart" /></NavLink>

                                                <NavLink className="mobile-hide search-bar-icon" to={'/search'}><i className="fas fa-search" /></NavLink>

                                                {
                                                    auth.user === '' ?
                                                        <NavLink className="shopping-cart" to={'/login-signup'} title="SignUp/Login"><i className="fas fa-user" /></NavLink>
                                                        :

                                                        <NavLink className="shopping-cart" to={'/login-signup'} title="LogOut" onClick={() => { dispatch(SignOutAction()) }}><i className="fas fa-user-slash" /></NavLink>

                                                }

                                                <a onClick={() => value.toggleTheme(value.theme)} >THEME TOGGLE</a>
                                            </div>
                                        </li>
                                    </ul>
                                </nav>
                                <Alert />
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