import Main from "./components/Main.js";
import Header from "./components/Header.js";
import Cart from "./components/Cart.js";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import React from "react";
import { CartState } from "./Context/context";
import SingleProduct from "./components/SingleProduct.js";

function App() {
  const{products,setProduct}=CartState();

  const[single, setSingle] = useState();

  const SingleItem=(item)=>
  {
    setSingle(item);
  }

  const [cart, setCart] = useState([]);
  const DeleteItem = (id) => {
    const k = cart.filter(
      (
        item //returns only 1 item which is unique to the id
      ) => item.id === id
    )[0];
    const remaining = cart.filter((item) => item.id !== id); //returns remaining items except the id
    console.log(k);
    if (k.quantity > 1) {
      console.log(cart);
      setCart([...remaining, { ...k, quantity: k.quantity - 1 }]); //if the returned quantity is >1 we lessen it by 1 else we do nothing about the item
    } else {
      setCart(remaining); //we set the remaining items
    }
  };
  const addItem = (id, name, image, price) => {
    const exist = cart.filter((item) => item.id === id)[0];
    if (exist !== undefined) {
      setCart(
        cart.map((item) => {
          console.log(item);
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 }; //map will create a  new array if we come across the item we want to update we create new object replace the existing item and change the quantity
          } else {
            return item;
          }
        })
      );
    } else {
      // add
      let new_obj = {
        id: id,
        name: name,
        image: image,
        quantity: 1,
        price: price,
      };
      setCart([...cart, new_obj]);
    }
  };
  return (
    <div className="">
      <Header count={cart.length} />
      <Routes>
        <Route path="/" element={<Main addItem={addItem} setSingle={SingleItem}/>} />
        <Route
          path="/cart"
          element={<Cart cart={cart} DeleteItem={DeleteItem} />}
        />
        <Route path="/SingleProd" element={<SingleProduct single={single} addItem={addItem} cart={cart} DeleteItem={DeleteItem}/>}/>
      </Routes>
    </div>
  );
}

export default App;

