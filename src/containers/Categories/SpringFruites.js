import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { themeContext } from '../../context/ThemeContext';


function SpringFruites(props) {
    const value = useContext(themeContext);
    const handleClick = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }
    return (
        <div>
            <div className={`${value.theme}`}>
                {/* search area */}
                <div className="search-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <span className="close-btn"><i className="fas fa-window-close" /></span>
                                <div className="search-bar">
                                    <div className="search-bar-tablecell">
                                        <h3>Search For:</h3>
                                        <input type="text" placeholder="Keywords" />
                                        <button type="submit">Search <i className="fas fa-search" /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end search arewa */}
                {/* breadcrumb-section */}
                <div className="breadcrumb-section breadcrumb-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2 text-center">
                                <div className="breadcrumb-text">
                                    <p>Fresh and Organic</p>
                                    <h1>Spring Season Fruits</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end breadcrumb section */}
                {/* products */}
                <div className="product-section mt-150 mb-150">
                    <div className="container">
                        <div className="row product-lists">
                            <div className="col-lg-4 col-md-6 text-center strawberry">
                                <div className="single-product-item">
                                    <div className="product-image">
                                        <a href="single-product.html"><img src="assets/img/products/product-img-9.jpg" alt /></a>
                                    </div>
                                    <h3>Mango</h3>
                                    <p className="product-price"><span>Per Kg</span> 90$ </p>
                                    <NavLink to={'/cart'} className="cart-btn" onClick={() => handleClick()}><i className="fas fa-shopping-cart" /> Add to Cart</NavLink>                           
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 text-center strawberry">
                                <div className="single-product-item">
                                    <div className="product-image">
                                        <a href="single-product.html"><img src="assets/img/products/product-img-15.jpg" alt /></a>
                                    </div>
                                    <h3>Pineapple</h3>
                                    <p className="product-price"><span>Per Kg</span> 40$ </p>
                                    <NavLink to={'/cart'} className="cart-btn" onClick={() => handleClick()}><i className="fas fa-shopping-cart" /> Add to Cart</NavLink>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 text-center strawberry">
                                <div className="single-product-item">
                                    <div className="product-image">
                                        <a href="single-product.html"><img src="assets/img/products/product-img-1.jpg" alt /></a>
                                    </div>
                                    <h3>Strawberry</h3>
                                    <p className="product-price"><span>Per Kg</span> 85$ </p>
                                    <NavLink to={'/cart'} className="cart-btn" onClick={() => handleClick()}><i className="fas fa-shopping-cart" /> Add to Cart</NavLink>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 text-center strawberry">
                                <div className="single-product-item">
                                    <div className="product-image">
                                        <a ><img src="assets/img/products/product-img-8.jpg" alt /></a>
                                    </div>
                                    <h3>Banana</h3>
                                    <p className="product-price"><span>Per Kg</span> 40$ </p>
                                    <NavLink to={'/cart'} className="cart-btn" onClick={() => handleClick()}><i className="fas fa-shopping-cart" /> Add to Cart</NavLink>                            
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 text-center strawberry">
                                <div className="single-product-item">
                                    <div className="product-image">
                                        <a ><img src="assets/img/products/product-img-17.jpg" alt /></a>
                                    </div>
                                    <h3>Star Fruit</h3>
                                    <p className="product-price"><span>Per Kg</span> 35$ </p>
                                    <NavLink to={'/cart'} className="cart-btn" onClick={() => handleClick()}><i className="fas fa-shopping-cart" /> Add to Cart</NavLink>                            
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 text-center strawberry">
                                <div className="single-product-item">
                                    <div className="product-image">
                                        <a ><img src="assets/img/products/product-img-18.jpg" alt /></a>
                                    </div>
                                    <h3>Papaya</h3>
                                    <p className="product-price"><span>Per Kg</span> 50$ </p>
                                    <NavLink to={'/cart'} className="cart-btn" onClick={() => handleClick()}><i className="fas fa-shopping-cart" /> Add to Cart</NavLink>                            
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default SpringFruites;