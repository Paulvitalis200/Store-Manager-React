import React from 'react';
import { NavLink } from 'react-router-dom'

const Navigation = () => {
    return (
        <div>
            <NavLink to='/dashboard'>Dashboard</NavLink>
            <NavLink to='/'>Products</NavLink>
            <NavLink to='/'>Sell</NavLink>
            <NavLink to='/'>Logout</NavLink>
        </div>
    )
}

export default Navigation