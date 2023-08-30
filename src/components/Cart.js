import Itemsadded from "./Itemsadded";
import { Link } from "react-router-dom";

function Cart({cart ,DeleteItem}) {
  return (
    <div className="m-10 leading-10">
      <div>
        <p className="p-1 font-medium">Shopping Cart</p>
        {cart.length==0?<p className="text-lime-700 font-medium">No items added to cart</p>:<Itemsadded cart={cart} deleteItem={DeleteItem}/>
        }<br/>
        <Link className="" to="/">Continue Shopping</Link>
        <div className="p-2">
        <p className="font-medium">Enter the details To Procced</p><br/>
        <form className="w-full max-w-lg">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-first-name">
                Name:{" "}
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                name="name"
              />
              <br />
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Address for Delivary:{" "}
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                type="text"
                name="address"
              />
              <br />
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Phone number:{" "}
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                type="text"
                name="phone"
              />
              <br />
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Leave it in door step or not :
              </label>
              <input className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" type="radio" value="yes" name="step" />
              &nbsp;yes&nbsp;&nbsp;&nbsp;&nbsp;
              <input  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" type="radio" value="no" name="step" />
              &nbsp;No
              <br />
            </div>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" type="submit" name="submit">
              Procced to Order
            </button>
          </div>
        </form>
        </div>
      </div>
    </div>
  );
}
export default Cart;


