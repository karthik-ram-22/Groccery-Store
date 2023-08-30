import { Link } from "react-router-dom";

function SingleProduct({ single ,addItem,cart,DeleteItem}) {
    {console.log(cart)}
  return (
    <div className="flex grid place-content-left">
      <p className="ml-5 font-base text-sm"><Link to="/">HOME</Link></p>
    <div className="mt-24">
    <div class="justify-items-center max-w-sm w-full lg:max-w-full lg:flex" >
  <div class="h-96 lg:h-auto lg:w-96 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" 
   >
    <img  className="p-4  w-full h-full object-cover" src={single.image} alt="none"/>
  </div>
      <div class="text-gray-700 font-semi-bold text-xl mb-2">
        <p className="tracking-wide">Fresh {single.item_name}, 1kg</p><br/>
        <p className="font-light text-sm">MRP:<span className="line-through">Rs {single.price+15}</span></p>
        <p className="font-bold">Price: Rs {single.price}</p>
        <p className="font-base text-sm text-red-600">You Save : 15%</p>
        <p className="font-light text-xs">(Inclusive of All Taxes)</p>
        <div className="pt-2 pr-9">
            {cart.length==0?<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-0.5 px-4 rounded"
            onClick={()=>
            {
                addItem(
                    single.id,
                    single.item_name,
                    single.image,
                    single.price
                  );
            }}
            >Add to cart</button>:<div className="space-x-4"><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-0.5 px-4 rounded"
            onClick={()=>
            {
                addItem(
                    single.id,
                    single.item_name,
                    single.image,
                    single.price
                  );
            }}
            >+</button><span>{cart[0].quantity}</span><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-0.5 px-4 rounded"
            onClick={()=>
            {
                DeleteItem(single.id,);
            }}
            >-</button></div>}
        </div><br/>
        </div>
    </div>
  </div></div>
  );
}
export default SingleProduct;


