import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { themeContext } from '../../context/ThemeContext';
import { GetProduct } from '../../redux/Action/Product.getaction';

function ProductsView(props) {

    const value = useContext(themeContext);
    const handleClick = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }

    const dispatch = useDispatch()
    const product = useSelector(state => state.product)
    const category = useSelector(state => state.category)

    console.log(product.product);

    useEffect(() => {
        dispatch(GetProduct())
    }, [])

    return (
        <div>
            <div className={`product-section mt-100 ${value.theme}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 text-center">
                            <div className="section-title">
                                <h3><span className="orange-text">Add</span> Products</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row ">{
                        product.product.map((p) => (
                            <div className="col-lg-3 col-md-6 text-center">
                                <div className={`single-product-item ${value.theme}`}>
                                    <div className="product-image">
                                        <NavLink to={'/single-product'}><img src={p.profile_img} alt /></NavLink>
                                    </div>
                                    <h3>{p.name}</h3>
                                    <p className="product-price"><span>Per {p.quantity}</span> {p.price}$ </p>
                                    <NavLink to={'/cart'} className="cart-btn"><i className="fas fa-shopping-cart" /> Add to Cart</NavLink>
                                </div>
                            </div>

                        ))

                    }
                    </div>

                    {/* <div className={`col-lg-3 col-md-6 text-center ${value.theme}`}>
                            <div className={`single-product-item ${value.theme}`}>
                                <div className="product-image">
                                    <NavLink to={'/single-product'}><img src="assets/img/products/product-img-2.jpg" alt /></NavLink>
                                </div>
                                <h3>Grapes</h3>
                                <p className="product-price"><span>Per Kg</span> 70$ </p>
                                <NavLink to={'/cart'} className="cart-btn"><i className="fas fa-shopping-cart" /> Add to Cart</NavLink>
                            </div>
                        </div>
                       */}
                 
                </div>
            </div>
        </div>
    );
}

export default ProductsView;