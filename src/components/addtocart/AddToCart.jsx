// AddToCart.jsx
import React, { useContext } from 'react';
import CartContext from '../context/CartContext';
import { Link } from 'react-router-dom';

const AddToCart = () => {
  const { cart, dispatch } = useContext(CartContext);

  if (!cart) {
    return <div>Error: Cart context is not available</div>;
  }

  const handleRemoveFromCart = (item) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: item });
  };

  return (
    <div className="container mx-auto p-4 mt-20">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      <ul>
        {cart.length > 0 ? (
          cart.map((item) => (
            <li key={item.id} className="mb-4">
              <div className="flex items-center">
                <img src={item.img} alt={item.title} className="w-20 h-20 mr-4" />
                <div>
                  <h3 className="font-bold">{item.title}</h3>
                  <p>{item.price}</p>
                  <button onClick={() => handleRemoveFromCart(item)} className="btn btn-danger">
                    Remove
                  </button>
                </div>
              </div>
            </li>
            
          ))
        ) : (
          <p>Your cart is empty</p>
        )}
      </ul>
      <Link to='/'>
                <button className='btn btn-success'>Back-to-Home-Page</button>
                </Link>
    </div>
  );
};

export default AddToCart;