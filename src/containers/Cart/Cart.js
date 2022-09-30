import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { themeContext } from '../../context/ThemeContext';
import { cartDelete } from '../../redux/Action/Cart.action';

function Cart(props) {
    const value = useContext(themeContext);
    const handleClick = () => {
        window.scrollTo({ top: 50, left: 0, behavior: 'smooth' })
    }

    const dispatch = useDispatch()
    const product = useSelector(state => state.product)
    const cart = useSelector(state => state.cart)
    console.log(cart.cart);

    const cartData = []
    product.product.map((p) => {
        cart.cart.map((c) => {
            if (p.id === c.id) {
                cartData.push({ ...p, quantity: c.quantity })
            }
        })
    })

    const handleDelete = (id) => {
        dispatch(cartDelete(id))
    }

    return (
        <div>
            <div className={` ${value.theme}`}>
                {/* search area */}
                <div className="search-area" >
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
                                    <h1>Cart</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end breadcrumb section */}
                {/* cart */}
                <div className="cart-section mt-150 mb-150">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-12">
                                <div className="cart-table-wrap">
                                    <table className="cart-table">
                                        <thead className="cart-table-head">
                                            <tr className="table-head-row">
                                                <th className="product-remove">Delete</th>
                                                <th className="product-image">Product Image</th>
                                                <th className="product-name">Name</th>
                                                <th className="product-price">Price</th>
                                                <th className="product-quantity">Quantity</th>
                                                <th className="product-total">Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>{
                                            cartData.map((d) => (

                                                <tr className="table-body-row">
                                                    <td className="product-remove"><div onClick={() => handleDelete(d.id)}><i className="fas fa-trash" /></div></td>
                                                    <td className="product-image"><img src={d.profile_img} alt /></td>
                                                    <td className="product-name">{d.name}</td>
                                                    <td className="product-price">${d.price}</td>
                                                    <td className="product-quantity">
                                                        <button className='counter-btn'><i class="fas fa-plus"></i></button>
                                                        <strong>{d.quantity}</strong>
                                                        <button className='counter-btn'><i class="fas fa-minus"></i></button>
                                                    </td>
                                                    <td className="product-total">$1</td>
                                                </tr>
                                            ))
                                        }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="total-section">
                                    <table className="total-table">
                                        <thead className="total-table-head">
                                            <tr className="table-total-row">
                                                <th>Total</th>
                                                <th>Price</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="total-data">
                                                <td><strong>Subtotal: </strong></td>
                                                <td>$500</td>
                                            </tr>
                                            <tr className="total-data">
                                                <td><strong>Shipping: </strong></td>
                                                <td>$45</td>
                                            </tr>
                                            <tr className="total-data">
                                                <td><strong>Total: </strong></td>
                                                <td>$545</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div className="cart-buttons">
                                        {/* <NavLink to={'/cart'} className="boxed-btn">Update Cart</NavLink> */}
                                        <NavLink to={'/checkout'} className="boxed-btn black">Check Out</NavLink>
                                    </div>
                                </div>
                                {/* <div className="coupon-section">
                                    <h3>Apply Coupon</h3>
                                    <div className="coupon-form-wrap">
                                        <form action="index.html">
                                            <p><input type="text" placeholder="Coupon" /></p>
                                            <p><NavLink className="current-list-item" to={'/'}><input type="submit" defaultValue="submit" /></NavLink></p>
                                        </form>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                        {/* <div className='row  mt-100'>
                            <div className='text-center mx-auto mb-100'>
                                <NavLink to={''} className="cart-btn" onClick={() => handleClick()}>Plase Order</NavLink>
                            </div>
                        </div> */}
                    </div>
                </div>
                {/* end cart */}

            </div>
            {/* end logo carousel */}
        </div>

    );
}

export default Cart;