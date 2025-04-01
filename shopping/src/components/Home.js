// filepath: c:\Users\User\react_stuff\shopping\src\components\Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css';

const Home = ({ items }) => {
  console.log("Items data:", items); // Add this line
  return (
    <div className="home-main">
      <div className="home-center-left">
        <h1>Welcome to MidSun</h1>
        <div className="item-list">
          {items.map((item) => (
            <div key={item.sku} className="item-card">
              <Link to={`/item/${encodeURIComponent(item.sku)}`}>
                <img src={item.imageUrl} alt={item.name} />
                <h3>{item.name}</h3>
                <p>${item.price}</p>
                <p>{item.description}</p>
              </Link>
            </div>
          ))}
        </div>
        <Link className="link-btn" to="shop">
          <button>Buy now</button>
        </div >
      </div >
    </div >
  );
};

export default Home;