import React, {Fragment}  from 'react';
import { Link } from 'react-router-dom';
import '../css/nav.css';

const Nav = () => (
	<Fragment>
		<div className="header"></div>
		<input type="checkbox" className="openSidebarMenu" id="openSidebarMenu" />
		<label htmlFor="openSidebarMenu" className="sidebarIconToggle">
			<div className="spinner diagonal part-1"></div>
			<div className="spinner horizontal"></div>
			<div className="spinner diagonal part-2"></div>
		</label>

		<div id="sidebarMenu">
			<ul className="sidebarMenuInner">
				<ul className="sidebarMenuInner">
					<li><Link to="/">Home</Link></li>
					<li><Link to="/about">About</Link></li>
					<li><Link to="/contact">Contact</Link></li>
				</ul>
			</ul>
		</div>
	</Fragment>	
)


export default Nav;

