import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";
import Myorders from '../MyOrders/Myorders';
import Payment from '../Payment/Payment';
import Review from '../Review/Review';
import useAuth from '../../../Hooks/useAuth';
import { Button } from '@mui/material';
import ManageOrders from '../ManageOrders/ManageOrders';
import ManageProducts from '../ManageProducts/ManageProducts';
import AddProduct from '../AddProduct/AddProduct';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import DashboardHome from '../DashboardHome/DashboardHome';

const drawerWidth = 240;

function Dashboard(props) {
    const { logOutUser, admin } = useAuth();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    let { path, url } = useRouteMatch();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div >

            <Toolbar
                style={{
                    backgroundColor: '#9700F0',
                }}
            />
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: '#9700F0',
                color: 'white'
            }}>
                <NavLink to='/home'
                    style={{
                        marginRight: '45px',
                        textDecoration: 'none',
                        color: 'white',
                        fontSize: '20px',
                        // backgroundColor: 'lightGray',
                        borderRadius: '5px',
                        padding: '8px'
                    }}
                > HOME</NavLink>
                <NavLink to='/dashboard'
                    style={{
                        marginRight: '45px',
                        textDecoration: 'none',
                        color: 'white',
                        fontSize: '20px',
                        // backgroundColor: 'lightGray',
                        borderRadius: '5px',
                        padding: '8px'
                    }}
                > Dashboard</NavLink>

                {!admin &&
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',

                        }}
                    >

                        <NavLink to={`${url}/myorders`}
                            style={{
                                marginRight: '45px',
                                textDecoration: 'none',
                                color: 'white',
                        fontSize: '20px',
                                // backgroundColor: 'lightGray',
                                borderRadius: '5px',
                                padding: '8px'
                            }}
                        > My Orders</NavLink>
                        <NavLink to={`${url}/review`}
                            style={{
                                marginRight: '45px',
                                textDecoration: 'none',
                                color: 'white',
                        fontSize: '20px',
                                // backgroundColor: 'lightGray',
                                borderRadius: '5px',
                                padding: '8px'
                            }}
                        > Review</NavLink>
                        <NavLink to={`${url}/payment`}
                            style={{
                                marginRight: '45px',
                                textDecoration: 'none',
                                color: 'white',
                        fontSize: '20px',
                                // backgroundColor: 'lightGray',
                                borderRadius: '5px',
                                padding: '5px'
                            }}
                        > Payment</NavLink>
                    </div>
                }
                {
                    admin &&
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            
                        }}
                    >
                        <NavLink to={`${url}/manageorders`}
                            style={{
                                marginRight: '45px',
                                textDecoration: 'none',
                                color: 'white',
                        fontSize: '20px',
                                // backgroundColor: 'lightGray',
                                borderRadius: '5px',
                                padding: '8px'
                            }}
                        > Manage Orders</NavLink>
                        <NavLink to={`${url}/manageproducts`}
                            style={{
                                marginRight: '45px',
                                textDecoration: 'none',
                                color: 'white',
                        fontSize: '20px',
                                // backgroundColor: 'lightGray',
                                borderRadius: '5px',
                                padding: '8px'
                            }}
                        > Manage Products</NavLink>
                        <NavLink to={`${url}/addproduct`}
                            style={{
                                marginRight: '45px',
                                textDecoration: 'none',
                                color: 'white',
                        fontSize: '20px',
                                // backgroundColor: 'lightGray',
                                borderRadius: '5px',
                                padding: '8px'
                            }}
                        > Add Product</NavLink>
                        <NavLink to={`${url}/makeadmin`}
                            style={{
                                marginRight: '45px',
                                textDecoration: 'none',
                                color: 'white',
                        fontSize: '20px',
                                // backgroundColor: 'lightGray',
                                borderRadius: '5px',
                                padding: '8px'
                            }}
                        > Make Admin</NavLink>
                    </div>
                }

                <Button style={{
                    marginRight: '45px',
                    textDecoration: 'none',
                    color: 'white',
                    fontSize: '20px',
                    // backgroundColor: 'lightGray',
                    borderRadius: '5px'
                }} onClick={logOutUser} color="inherit">Logout</Button>
            </div>


        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                style={{
                    backgroundColor: '#6122F5',
                    color: 'white'
                }}
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box

                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer

                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer

                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box

                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Switch>
                    <Route exact path={path}>
                        <DashboardHome></DashboardHome>
                    </Route>
                    <Route path={`${path}/myorders`}>
                        <Myorders></Myorders>
                    </Route>
                    <Route path={`${path}/payment`}>
                        <Payment></Payment>
                    </Route>
                    <Route path={`${path}/review`}>
                        <Review></Review>
                    </Route>
                    <Route path={`${path}/manageorders`}>
                        <ManageOrders></ManageOrders>
                    </Route>
                    <Route path={`${path}/manageproducts`}>
                        <ManageProducts></ManageProducts>
                    </Route>
                    <Route path={`${path}/addproduct`}>
                        <AddProduct></AddProduct>
                    </Route>
                    <Route path={`${path}/makeadmin`}>
                        <MakeAdmin></MakeAdmin>
                    </Route>
                </Switch>
            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
