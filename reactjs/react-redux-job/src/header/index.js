import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './styles.css';

class Header extends React.Component {
    render() {
        return (
            <header>
                <ul>
                    <li><NavLink to="/" activeClassName='actives'>Home</NavLink></li> 
                    <li><NavLink to="/job-list" activeClassName='actives'>Job list</NavLink></li> 
                    <li><NavLink to="/applied-jobs" activeClassName='actives'>Applied jobs list</NavLink></li> 
                </ul>
                <ol>
                    <li><Link to="/parent-child">Route Parent</Link></li>
                </ol>
                
            </header>
        )
    }
}

export default Header;  