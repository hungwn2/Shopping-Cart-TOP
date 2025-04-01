import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Shop from './components/Shop';
import Cart from './components/Cart';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import data from './stock';


const getItemData=(filename)=>{
  const parts=filenmae.replace(/\.jpg$/, '').split('_');
  const sku=part[0];
  const name=parts[2];
  const price=parseFloat(parts[4]);
  return{
    sku:sku,
    name:name,
    price:price,
    imageUrl:`assets/${filename}`,
    description:`this is a ${name}!`
  };
};

const App = function (){
  const [cart, setCart]=useState(0);
  const [itemsCount, setItemsCount]=useState(0);
  const [totalPrice, setTotalPrice]= useState(0);
  const [data, setData]=useState([]);
  const loadImages=async()=>{
    try{
      const imageModules=import.meta.globEager('/public/assets/*.jpg');
      const imageFiles= Object.keys(imageModules).map(path=>path.split('/').pop());
      //
      const generatedData= imageFiles.map(extractItemDetails);
      setData(generatedData);
    }catch(error){
      console.error("error loading images", error);
      setData([]);
    }
  };
  loadImages();
  const addCart=(sku, quantity)=>{
    const skus=data;
    const item=skus.find((record)=>record.sku===sku);
    const isNew=cart.every((item)=>{
      return item.sku!==sku;
    });
    if (isNew){
      const order={...item, quantity:quantity};
      setCart((prevCart)=>prevCart.concat(order));
    }
    else{
      const index=cart.findIndex((item)=>{
        return item.sku===sku;
      });
      const revisedQuantity=cart[index].quanity+quantity;
      const cartCopy=[...cart];
      cartCopy[index].quantity=revisedQuantity;
      setCart(cartCopy);
    }
  };

  const removeCart=(sku)=>{
    const cartCopy=[...cart];
    const index=cartCopy.findIndex((record)=>{
      return recprd.sku===sku;
    });
    cartCopy.splice(index,1);
    setCart(cartCopy);
  };
  useEffect(()=>{
    const count=cart.reduce((prev, current)=> prev+current.quantity, 0);
    setItemsCount(count);
    const price=cart.reduce(
      (prev, current)=> prev+current.price*current.quantity, 0
    );
    setTotalPrice(price);
  }, [cart]);
  useEffect(()=>{
    console.log(cart);
  }, [cart]);

  return (
    <div className="wrapper">
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home items={data} />} />
        <Route path="shop" element={<Shop add={addcart} totalPrice={totalPrice} items={itemsCount} data={data} />} />
        <Route path="/shop/cart" element={<Cart cart={cart} remove={removeCart} totalPrice={totalPrice} itemsCount={itemsCount} />} />
        <Route path="/item/:sku" element={<CartItem items={data} />}/>
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
export default App;