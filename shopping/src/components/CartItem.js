import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/cartitem.css'; // Create a cartitem.css file for styling if needed

const CartItem = ({ items }) => {
  const { sku } = useParams(); // Get the SKU from the URL parameter
  const item = items.find((item) => item.sku === sku); // Find the item in the data array

  if (!item) {
    return <div>Item not found</div>; // Handle the case where the item is not found
  }

  return (
    <div className="cart-item-container">
      <h1>{item.name}</h1>
      <img src={item.imageUrl} alt={item.name} />
      <p>Price: ${item.price}</p>
      <p>{item.description}</p>
      {/* Add other item details as needed */}
    </div>
  );
};

export default CartItem;