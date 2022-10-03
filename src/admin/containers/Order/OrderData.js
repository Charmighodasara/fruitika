import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';
import { getOrderAction } from '../../../redux/Action/Order.action';


function OrderData(props) {
    const dispatch  = useDispatch()
    const product = useSelector(state => state.product)
    const cart = useSelector(state => state.cart)
    const order = useSelector(state =>state.order)
    console.log(order.order);


    useEffect(()=>{
        dispatch(getOrderAction())
    },[])

 
    const columns = [
        { field: 'id', headerName: 'user id', width: 200 },
        { field: 'totalcart', headerName: 'Total', width: 150 },
        { field: 'quantity', headerName: 'Categoty Name', width: 150 },
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
                        rows={order.order}
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