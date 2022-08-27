import React from 'react';
import { NavLink } from 'react-router-dom';

function Single_product(props) {
    return (
        <div>
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
                                <p>See more Details</p>
                                <h1>Single Product</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* end breadcrumb section */}
            {/* single product */}
            <div className="single-product mt-150 mb-150">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="single-product-img">
                                <img src="assets/img/products/product-img-5.jpg" alt />
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="single-product-content">
                                <h3>Green apples have polyphenols</h3>
                                <p className="single-product-pricing"><span>Per Kg</span> $50</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta sint dignissimos, rem commodi cum voluptatem quae reprehenderit repudiandae ea tempora incidunt ipsa, quisquam animi perferendis eos eum modi! Tempora, earum.</p>
                                <div className="single-product-form">
                                    <form action="index.html">
                                        <input type="number" placeholder={0} />
                                    </form>
                                    <NavLink to={'/cart'} className="cart-btn mt-3"><i className="fas fa-shopping-cart" /> Add to Cart</NavLink>
                                    <p><strong>Categories: </strong>Fruits, Organic</p>
                                </div>
                                <h4>Share:</h4>
                                <ul className="product-share">
                                    <li><a href><i className="fab fa-facebook-f" /></a></li>
                                    <li><a href><i className="fab fa-twitter" /></a></li>
                                    <li><a href><i className="fab fa-google-plus-g" /></a></li>
                                    <li><a href><i className="fab fa-linkedin" /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* end single product */}
            {/* more products */}
            <div className="more-products mb-150">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 text-center">
                            <div className="section-title">
                                <h3><span className="orange-text">Related</span> Products</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, fuga quas itaque eveniet beatae optio.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 text-center">
                            <div className="single-product-item">
                                <div className="product-image">
                                    <a href="single-product.html"><img src="assets/img/products/product-img-1.jpg" alt /></a>
                                </div>
                                <h3>Strawberry</h3>
                                <p className="product-price"><span>Per Kg</span> 85$ </p>
                                <NavLink to={'/cart'} className="cart-btn mt-3"><i className="fas fa-shopping-cart" /> Add to Cart</NavLink>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 text-center">
                            <div className="single-product-item">
                                <div className="product-image">
                                    <a href="single-product.html"><img src="assets/img/products/product-img-2.jpg" alt /></a>
                                </div>
                                <h3>Berry</h3>
                                <p className="product-price"><span>Per Kg</span> 70$ </p>
                                <NavLink to={'/cart'} className="cart-btn mt-3"><i className="fas fa-shopping-cart" /> Add to Cart</NavLink>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3 text-center">
                            <div className="single-product-item">
                                <div className="product-image">
                                    <a href="single-product.html"><img src="assets/img/products/product-img-3.jpg" alt /></a>
                                </div>
                                <h3>Lemon</h3>
                                <p className="product-price"><span>Per Kg</span> 35$ </p>
                                <NavLink to={'/cart'} className="cart-btn mt-3"><i className="fas fa-shopping-cart" /> Add to Cart</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* end more products */}
            {/* logo carousel */}
            {/* <div className="logo-carousel-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="logo-carousel-inner">
                                <div className="single-logo-item">
                                    <img src="assets/img/company-logos/1.png" alt />
                                </div>
                                <div className="single-logo-item">
                                    <img src="assets/img/company-logos/2.png" alt />
                                </div>
                                <div className="single-logo-item">
                                    <img src="assets/img/company-logos/3.png" alt />
                                </div>
                                <div className="single-logo-item">
                                    <img src="assets/img/company-logos/4.png" alt />
                                </div>
                                <div className="single-logo-item">
                                    <img src="assets/img/company-logos/5.png" alt />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* end logo carousel */}
        </div>

    );
}

export default Single_product;