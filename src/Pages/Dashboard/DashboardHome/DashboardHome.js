import React from 'react';
import useAuth from '../../../Hooks/useAuth';


const DashboardHome = () => {
    const {user} = useAuth();
    return (
        <div>
            <h1>Welcome {user.displayName} to your Dashboard</h1>
        </div>
    );
};

export default DashboardHome;