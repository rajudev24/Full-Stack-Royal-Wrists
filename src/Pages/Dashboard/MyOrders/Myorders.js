import { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { CircularProgress } from '@mui/material';


const Myorders = () => {
  const { user } = useAuth();

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const url = `https://shrouded-savannah-73194.herokuapp.com/orders/email?email=${user?.email}`
    fetch(url)
      .then(res => res.json())
      .then(data => setOrders(data))

  }, [])
  console.log(orders)

  const handleCancel = id => {
    const url = `https://shrouded-savannah-73194.herokuapp.com/orders/${id}`
    fetch(url, {
      method: 'DELETE',
    })
      .then(res => res.json())
      .then(data => {
        if(data.deletedCount > 0) {
          alert('Successfully Cancel Orders! ');
          const remainingOrders = orders.filter(order => order._id !== id)
          setOrders(remainingOrders);
        }
      })

  }
  return (
    <div>
      <h3>You have ordered {orders.length} Items </h3>
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
                <TableCell align="right">{row.status}</TableCell>
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

export default Myorders;