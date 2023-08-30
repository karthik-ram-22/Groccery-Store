import { useEffect, useState } from "react";
import InStock from "./Instock";
import { Link } from "react-router-dom";

function Main({ addItem ,setSingle}) {
  //global items in App js
  const [items] = useState([
    {
      id: 0,
      item_name: "Apple",
      stock_left: 20,
      image: "/images/Apple.jpg",
      type: "Fruits",
      price: 20, // '/'- public folder
    },
    {
      id: 1,
      item_name: "Mango",
      stock_left: 30,
      image: "/images/Mango.jpg",
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
    },
  ]);
  const [filter, setFilter] = useState([]);
  const [type, setType] = useState("All");
  const FilterItems = (e) => {
    setType(e.target.value);
  };
  useEffect(() => {
    if (type === "Fruits" || type === "Vegetable") {
      setFilter(items.filter((item) => item.type === type));
    } else {
      setFilter(items.filter((item) => item));
    }
  }, [type]);
  const updateState = (props) => {
    const newState = filter.map((obj) => {
      // 👇️ if id equals index, update stock
      if (obj.id === props) {
        return { ...obj, stock_left: obj.stock_left - 1 };
      }
      // 👇️ otherwise return the object as is
      return obj;
    });
    setFilter(newState);
  };
  return (
    <>
      <div className="m-2 flex flex-row"><span className="p-2">Filter: </span>
        <select
          className="w-44 h-10 border border-green-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-green-500 block w-15 p-2.5  dark:border-green-600 dark:placeholder-green-700 dark:text-black dark:focus:ring-blue-500 dark:focus:border-green-500"
          name="filter"
          onChange={(e) => {
            FilterItems(e);
          }}
          selected
        >
          <option value="All">All</option>
          <option value="Fruits">Fruits</option>
          <option value="Vegetable">Vegetables</option>
        </select>
      </div>

      <div className="flex grid grid-cols-2 gap-5 lg:grid-cols-3 gap-1">
        {filter.map((item) => {
          return (
            <div>
              <div key={item.id} className="p-12">
                <div className="h-24 w-28 overflow-hidden flex justify-center items-center lg:h-48 w-48">
                 <Link to='/SingleProd' onClick={()=>{setSingle(item)}}><img
                    className="p-4  w-full h-full object-cover"
                    src={item.image}
                    alt={item.name}
                  /></Link>
                </div>
                <div>
                  <p className="font-sans subpixel-antialiased text-lg">
                    Name: {item.item_name}
                  </p>
                  <p className="font-semibold">Price per kg: ₹{item.price}.00</p>
                  <p>
                    <InStock
                      item={item}
                      updateState={updateState}
                      addItem={addItem}
                    />
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default Main;
