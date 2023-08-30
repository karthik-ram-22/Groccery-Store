import React,{ createContext, useContext, useState } from "react";

const Cart=createContext()

function Context({children})
{
const[products,setProduct]=useState([{
    id: 0,
    item_name: "Apple",
    stock_left: 20,
    image: "/images/Apple.png",
    type: "Fruits",
    price: 20, // '/'- public folder
  },
  {
    id: 1,
    item_name: "Mango",
    stock_left: 30,
    image: "/images/mango.png",
    type: "Fruits",
    price: 30,
  },
  {
    id: 2,
    item_name: "brocolli",
    stock_left: 30,
    image: "/images/brocolli.jpg",
    type: "Vegetable",
    price: 60,
  },
  {
    id: 3,
    item_name: "carrot",
    stock_left: 30,
    image: "/images/carrot.jpg",
    type: "Vegetable",
    price: 12,
  },
  {
    id: 4,
    item_name: "spinach",
    stock_left: 30,
    image: "/images/spinach.jpg",
    type: "Vegetable",
    price: 8,
  },
  {
    id: 5,
    item_name: "onion",
    stock_left: 30,
    image: "/images/onion.jpg",
    type: "Vegetable",
    price: 35,
  }]);

return<Cart.Provider value={{products,setProduct}}>{children}</Cart.Provider>;

}
export default Context;

export const CartState=()=>
{
    return useContext(Cart);
}