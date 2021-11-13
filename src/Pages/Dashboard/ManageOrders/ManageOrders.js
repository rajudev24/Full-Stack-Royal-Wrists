import { useEffect, useState } from 'react';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const ManageOrders = () => {
    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch('https://shrouded-savannah-73194.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    const handleCancel = id => {
        const url = `https://shrouded-savannah-73194.herokuapp.com/orders/${id}`
        fetch(url, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('Successfully Cancel Orders! ');
                    const remainingOrders = orders.filter(order => order._id !== id)
                    setOrders(remainingOrders);
                }
            })

    }

    const handleUpdate = id =>{
        const status = {
            status: 'shipped'
        }
        const url = `https://shrouded-savannah-73194.herokuapp.com/orders/${id}`
        fetch(url,{
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(status)
        })
        .then(res=> res.json(status))
        .then(data =>{
            if(data.modifiedCount > 0){
                alert('Successfully updated the status')
            }
        })
    }
    return (
        <div>
            <h2>Total Orders {orders.length} Items </h2>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Product Name</TableCell>
                            <TableCell align="right">Price</TableCell>
                            <TableCell align="right">Email</TableCell>
                            <TableCell align="right">Status</TableCell>
                            <TableCell align="right">Cancel Order</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.productName}</TableCell>
                                <TableCell align="right">${row.price}</TableCell>
                                <TableCell align="right">{row.email}</TableCell>
                                <TableCell align="right"> <button
                                    onClick={() => handleUpdate(row._id)}
                                    style={{
                                        backgroundColor: 'lightseagreen',
                                        padding: '8px 15px',
                                        border: '0px',
                                        color: 'white',
                                        borderRadius: '5px',
                                    }}
                                >Update</button></TableCell>
                                <TableCell align="right"> <button
                                    onClick={() => handleCancel(row._id)}
                                    style={{
                                        backgroundColor: 'lightseagreen',
                                        padding: '8px 15px',
                                        border: '0px',
                                        color: 'white',
                                        borderRadius: '5px',
                                    }}
                                >Cancel</button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default ManageOrders;