import React, { useContext } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import CartContext from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

const Cardddd = ({ item, onCardClick }) => {
  const { dispatch } = useContext(CartContext);
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const shortDescription = item.description.split(' ').slice(0, 3).join(' ') + '...';

  const handleAddToCart = () => {
    if (isAuthenticated) {
      dispatch({ type: 'ADD_TO_CART', payload: item });
      alert('Item successfully added to your cart! 🎉\n\nClick OK and view the added books at the top under "MY CART".\n\n Click on "My CART AND SEE YOUR ADDED BOOKS"');
    }
    else {
      //  toast.error('please login')
      alert('Please log in to add items to your cart.');
      navigate('/login'); // Redirect to login page if not authenticated
    }
  };

  return (
    <div className="card bg-base-100 w-100 shadow-xl top-10 mb-10 m-1">
      <figure>
        <img className="w-60 h-60 cursor-pointer" src={item.img} alt={item.title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {item.title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <h2 className="card-title">{item.price}</h2>
        <p>{shortDescription}</p>
        <div className="card-actions justify-end space-x-4">
          <button className="btn btn-info w-20" onClick={() => onCardClick(item)}>Card Details</button>
          <button className="btn btn-info w-22" onClick={handleAddToCart}>Add-to-Cart</button>
       
        </div>
      </div>
    </div>
  );
};

export default Cardddd;

