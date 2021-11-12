import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Navigation = () => {
  const { user, logOutUser } = useAuth();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Royal Wristss
          </Typography>
          <NavLink to='/home'
          style={{
            marginRight: '10px',
            textDecoration: 'none',
            color: 'white',
            fontSize: '15px',
            // backgroundColor: 'lightGray',
            borderRadius: '5px',
            padding: '8px'
            }}
          > HOME</NavLink>
          <NavLink to='/products'
          style={{
            marginRight: '10px',
            textDecoration: 'none',
            color: 'white',
            fontSize: '15px',
            // backgroundColor: 'lightGray',
            borderRadius: '5px',
            padding: '8px'
            }}
          > MORE WATCH</NavLink>
          
          {
            user?.email && 
            <NavLink style={{
              textDecoration:'none',
              color: 'white',
              // backgroundColor: 'lightGray',
              borderRadius: '5px'
              }} to='/dashboard'>
              <Button color="inherit">Dashboard</Button>
            </NavLink>
          }
          {
            user?.displayName && <h5
            style={{
              marginRight: '10px'
              }}
            >{`Welcome ${user.displayName}`}</h5>
          }
          {
            user?.email ?
              <Button style={{
                textDecoration:'none',
                color: 'black',
                backgroundColor: 'lightGray',
                borderRadius: '5px'
                }} onClick={logOutUser} color="inherit">Logout</Button>
              :
              <NavLink style={{
                textDecoration:'none',
                color: 'black',
                backgroundColor: 'lightGray',
                borderRadius: '5px'
                }} to='/login'>
                <Button color="inherit">Login</Button>
              </NavLink>

          }
         
          

        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navigation;