import React from 'react'
import {Link} from "react-router-dom"

function Header() {
  return (
    <header className='flex flex-center flex-between'>
        <Link to="/" className='logo'>
            Food Diary
        </Link>
        <nav>
            <ul className='flex'>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="checkout">Checkout</Link>
                </li>
            </ul>
        </nav>

    </header>
  )
}

export default Header
