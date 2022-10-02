import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';
import {  GetCategory, } from '../../../redux/Action/Category.action';
import { GetProduct } from '../../../redux/Action/Product.getaction';


function OrderData(props) {
    
    const product = useSelector(state => state.product)
    const cart = useSelector(state => state.cart)
    console.log(product.product);
    const cartData = []
    product.product.map((p) => {
        cart.cart.map((c) => {
            if (p.id === c.id) {
                cartData.push({ ...p, quantity: c.quantity })
            }
        })
    })

 
    const columns = [
        { field: 'name', headerName: 'Categoty Name', width: 150 },
        {
            field: 'profile_img',
            headerName: 'Profile Image',
            width: 100,
            renderCell: (params) => (
                <img src={params.row.profile_img} width={50} height={50} />
            )
        },
    ];


    return (
        <div>
            <div>
                <h2>Order Details</h2>
                <div style={{ height: 400, width: '100%' }}>
                    <DataGrid
                        rows={cartData}
                        columns={columns}
                        pageSize={6}
                        rowsPerPageOptions={[6]}
                        checkboxSelection
                    />
                </div>
            </div>
        </div>
    );
}

export default OrderData;