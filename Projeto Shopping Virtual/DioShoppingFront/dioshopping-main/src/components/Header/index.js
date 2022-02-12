import React from 'react';
import { Link } from 'react-router-dom';
import Cart from '../Cart';
import './styles.css'

const Header = () => {
  return(
    <nav>
      <span>
        Dio Shopping
      </span>
      <div className='links'>
        <Link to="/">
          <button className='homeButton'>Home</button>
        </Link>
        <Link to="/contato">
          <button className='contactButton'>Contato</button>
        </Link>
      </div>
      <Cart />            
    </nav>
  )
}

export default Header;