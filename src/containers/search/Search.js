import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Input } from 'reactstrap';
import TextField from '@mui/material/TextField';

function Search(props) {
    const [search, setSearch] = useState([])
    const frutika = [
        {
            id: 401,
            name: "Strawberry",
            quantity: "10",
            price: "50"
        },
        {
            id: 402,
            name: "Berry",
            quantity: "100",
            price: "70"
        },
        {
            id: 403,
            name: "apple",
            quantity: "100",
            price: "50"
        },
        {
            id: 404,
            name: "Lemon",
            quantity: "10",
            price: "35"
        },
        {
            id: 405,
            name: "Green Apple",
            quantity: "10",
            price: "45"
        },
        {
            id: 406,
            name: "Avocado",
            quantity: "20",
            price: "50"
        },
    ]
    const hancleSearch = (val) => {
        let fData = frutika.filter((f) => (
            f.name.toLowerCase().includes(val.toLowerCase()) ||
            f.quantity.toString().includes(val) ||
            f.price.toString().includes(val)
        ))
        console.log(fData)
        setSearch(fData)
    }

    return (
        <div>
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
                                    <p>We sale fresh fruits</p>
                                    <h1>Search Products</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-12 col-md-12" >
            </div>
            <div>
                <div className="cart-section mt-150 mb-150">
                    <div className='container'>
                        <div className='row'>
                            <div className="col-lg-12 col-md-12">
                                <div className='search col-lg-8 mx-auto my-5' >
                                    <TextField
                                        margin="dense"
                                        name="search"
                                        label="Search Medicine "
                                        type="text"
                                        fullWidth
                                        variant="standard"
                                        onChange={(e) => hancleSearch(e.target.value)}
                                    />
                                </div>
                                <div className="cart-table-wrap">
                                    <table className="cart-table">
                                        <thead className="cart-table-head">
                                            <tr className="table-head-row">
                                                <th className="product-id">id</th>
                                                <th className="product-name">Name</th>
                                                <th className="product-quantity">Quantity</th>
                                                <th className="product-price">Price</th>
                                            </tr>
                                        </thead>
                                        {
                                            frutika.map((f, i) => {
                                                return (
                                                    <tbody key={i}>
                                                        <tr className="table-body-row">
                                                            <td className="product-id">{f.id}</td>
                                                            <td className="product-name">{f.name}</td>
                                                            <td className="product-price">{f.quantity}</td>
                                                            <td className="product-price">{f.price}</td>
                                                        </tr>
                                                    </tbody>
                                                )
                                            })
                                        }
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Search;