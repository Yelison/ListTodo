import React from 'react';
import { Link } from 'react-router-dom';
import '../style/nav.css';

const Nav = () => (

    <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/contact">Users</Link>
            </li>
        </ul>
    </nav>
)


export default Nav;