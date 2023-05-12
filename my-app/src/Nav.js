import React from 'react'
import './Nav.css';
import { Link } from 'react-router-dom';

export default function Nav() {
    return (
        <div>

            <nav className='nav'>

                <Link to="/" className='navbar-brand'>Logo</Link>

                <ul>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/aboute">Aboute</Link></li>

                </ul>

            </nav>

        </div>
    )
}
