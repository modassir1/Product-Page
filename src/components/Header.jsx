import React from 'react'
import '../style/Header.css'
import cart from '../svg/cart-shopping-solid.svg'
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <div className='header'>
            <div className='logo'>
                <Link to={'/'}>
                    <h1>NIKE</h1>
                </Link>
            </div>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Product</li>
                    <li>Contact</li>
                </ul>
                <div className="nav-cart">
                    <span>0</span>
                    <img src={cart} alt="" height={20} />
                </div>
            </nav>

        </div>
    )
}

export default Header