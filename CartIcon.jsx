import React, { useContext } from 'react';
// import { CartContext } from '../Contexts/CartContext';
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';

const CartIcon = () => {
  const { cart } = useContext(CartContext);

  return (
    <div style={{ position: 'fixed', top: '10px', right: '10px' }}>
      <Link to='/cart'>
        <i className="fa fa-shopping-cart"></i> ({cart.length})
      </Link>
    </div>
  );
};

export default CartIcon;
