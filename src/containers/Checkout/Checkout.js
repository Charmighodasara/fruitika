import { Form, Formik, useFormik } from 'formik';
import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { themeContext } from '../../context/ThemeContext';
import * as yup from 'yup';
import { history } from '../../history';


function Checkout(props) {
    const value = useContext(themeContext);
    const cart = useSelector(state => state.cart)
    const product = useSelector(state => state.product)
    const dispatch = useDispatch()
    console.log(cart.cart);

    const cartData = []
    product.product.map((p) => {
        cart.cart.map((c) => {
            if (p.id === c.id) {
                cartData.push({ ...p, quantity: c.quantity })
            }
        })
    })

    const handleClick = () => {
        window.scrollTo({ top: 150, left: 0, behavior: 'smooth' })
    }
    const handleOrder = ()=>{
        history.push('/order')
        handleClick()
    }

    let schema = yup.object().shape({
        name: yup.string().required("please enter your name."),
        email: yup.string().required("please enter your email id.").email("please enter valid email id."),
        Address: yup.string().required("please enter your shipping address."),
        phone: yup.string().required("please enter your mobile number."),
    });
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            Address: '',
            phone: '',
        },
        validationSchema: schema,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
            handleOrder()
        },
    });

    const { errors, handleBlur, handleSubmit, handleChange, touched } = formik;
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
                                    <h1>Check Out Product</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end breadcrumb section */}

                {/* check out section */}
                <div className="checkout-section mt-150 ">
                    <div className="container">
                        <div className="row ">
  {/* Your order Details */}
                            <div className="col-lg-4">
                                <div className="order-details-wrap">
                                    <table className="order-details">
                                    </table>
                                    
                                    <NavLink className="current-list-item " to={'/cart'}><a onClick={() => handleClick()} className="boxed-btn mt-4">Update Cart</a></NavLink>

                                </div>
                            </div>
                            <div className="col-lg-8 mb-150" >
                                <div className="checkout-accordion-wrap">
                                    <div className="accordion" id="accordionExample">
                                        <div className="card single-accordion">
                                            <div className="card-header" id="headingOne">
                                                <h5 className="mb-0">
                                                    <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                        Shipping Address
                                                    </button>
                                                </h5>
                                            </div>
                                            <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                                <div className="card-body">
                                                    <div className="billing-address-form">

                                                        <Formik>
                                                            <Form type="POST" id="fruitkha-contact" onSubmit={handleSubmit}>
                                                                <p><input type="text" placeholder="Name" name="name" id="name" onChange={handleChange} onBlur={handleBlur} /></p>
                                                                <p>{errors.name && touched.name ? errors.name : ''}</p>

                                                                <p><input type="text" placeholder="Email" name="email" id="email" onChange={handleChange} onBlur={handleBlur} /></p>
                                                                <p>{errors.email && touched.email ? errors.email : ''}</p>

                                                                <p><input type="text" placeholder="Address" name="Address" id="Address" onChange={handleChange} onBlur={handleBlur} /></p>
                                                                <p>{errors.Address && touched.Address ? errors.Address : ''}</p>

                                                                <p><input type="tel" placeholder="Contact Number" name="phone" id="phone" onChange={handleChange} onBlur={handleBlur} /></p>
                                                                <p>{errors.phone && touched.phone ? errors.phone : ''}</p>

                                                                <p><button className="boxed-btn mt-4" >Place Order</button></p>
                                                            </Form>
                                                        </Formik>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                          
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Checkout;