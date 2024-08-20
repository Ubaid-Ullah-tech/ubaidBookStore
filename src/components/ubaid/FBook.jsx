import React, { useContext, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import list from '../data/list.json'
import Slider from "react-slick";
import Cardddd from './Cardddd';
import CartContext from '../context/CartContext.jsx';
const FBook = (item) => {
  // const { dispatch } = useContext(CartContext);
    const [selectedcard , setSelectedCard] = useState(null);
 const filterData = list.filter((ubaid)=> ubaid.category === 'Free');
  
 
 var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

      const handleClick = (item)=>{
        setSelectedCard(item)
      }

    //   const handleAddToCart = () => {
    //     dispatch({ type: 'ADD_TO_CART', payload: item });
    //     alert('Item successfully added to your cart! 🎉\n\nClick OK and view the added books at the top under "MY CART".\n\n Click on "My CART AND SEE YOUR ADDED BOOKS"');
    
    // };
    
  return (
    <div className="max-screen-2xl container mx-auto md:px-20 px-9 ">
        {!selectedcard ? (
      <div>
 <Slider {...settings}>
       {filterData.map((item)=>(
        <Cardddd item={item} key={item.id} onCardClick={handleClick}/>
       ))}
      </Slider>
      </div>
        ):(
            <div className="card bg-base-100 w-100 shadow-xl top-10 mb-10 m-1">
            <figure>
              <img className='w-60 h-60'
                src={selectedcard.img}
                alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {selectedcard.title}
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <h2 className="card-title">
                {selectedcard.price}
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>{selectedcard.description}</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Fashion</div>
                <div className="badge badge-outline">Products</div>
              </div>
            </div>
            {/* <button className="btn btn-info   w-22" onClick={handleAddToCart}>Add-to-Cart</button> */}
            <button className="btn btn-success" onClick={()=>setSelectedCard(null)}>Back to All Card</button>
          </div>
        )}
    </div>
  )
}

export default FBook