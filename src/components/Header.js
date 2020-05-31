import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (<div>
    <h1>Expensify it!</h1>
    <NavLink activeClassName="isActive" exact={true} to="/">Go home</NavLink>
    <NavLink activeClassName="isActive" to="/create">Go create</NavLink>
    <NavLink activeClassName="isActive" to="/help">Go help</NavLink>
</div>);

export default Header