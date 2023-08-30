function Itemsadded({ cart, deleteItem }) {
  let totalprice = 0;
  let totalquantiy = 0;
  return (
    <div>
      <div class="relative overflow-x-auto">
        <table class="w-16 text-sm text-left text-gray-500 dark:text-gray-400 lg:w-full">
          <thead class="text-xs text-white uppercase bg-green-50 dark:bg-green-700 dark:text-white-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Product name
              </th>
              <th scope="col" class="px-6 py-3">
                quantity
              </th>
              <th scope="col" class="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3 lg:px-6 py-3">
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => {
              return (
                <tr class="text-green bg-gray">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-black"
                  >
                    {item.name}
                  </th>
                  <td class="px-6 py-4 text-black">
                    {item.quantity}
                    <p className="hidden">
                      {(totalquantiy = totalquantiy + item.quantity)}
                    </p>
                  </td>
                  <td class="px-6 py-4 text-black">
                    {item.quantity * item.price}Rs
                    <p className="hidden">
                      {(totalprice = totalprice + item.quantity * item.price)}
                    </p>
                  </td>
                  <td className="px-9 py-3 lg:px-6 py-4">
                    {item.quantity > 1 ? (
                      <button
                        onClick={() => {
                          deleteItem(item.id);
                        }}
                        className="w-5 h-5 rounded-full flex  items-center justify-center text-lg 
                       bg-blue-800 hover:bg-blue-300 text-white lg:w-6 h-6"
                      >
                        -
                      </button>
                    ) : (
                      <button
                        onClick={() => {
                          deleteItem(item.id);
                        }}
                        className="py-2 px-4 bg-blue-800 hover:bg-blue-300 text-white font-bold rounded lg:py-2 px-4"
                      >
                        Remove from Cart
                      </button>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="flex justify-end mr-52 p-3">
          <span>
            SubTotal ({totalquantiy}{" "}
            {totalquantiy === 1 ? <span>item</span> : <span>items</span>}):
          </span>
          <span className="font-bold">₹{totalprice}.00</span>
        </div>
      </div>
    </div>
  );
}
export default Itemsadded;
