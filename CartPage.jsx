import React, { useContext } from 'react';
// import { CartContext } from '../Contexts/CartContext';
import { CartContext } from './CartContext';

const CartPage = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div>
      <h1>Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map((product) => (
          <div key={product.id} style={{ display: 'flex', justifyContent: 'space-between', margin: '1rem 0' }}>
            <div>
              <h3>{product.title}</h3>
              <p>${product.price}</p>
            </div>
            <button onClick={() => removeFromCart(product.id)}>Remove</button>
          </div>
        ))
      )}
    </div>
  );
};

export default CartPage;
