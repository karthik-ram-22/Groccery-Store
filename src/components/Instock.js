import { useEffect, useState } from "react";


function InStock({item,updateState,addItem})
{
const[stock,setStock]=useState();
useEffect(()=>
{
if(item.stock_left>0)
{
setStock("InStock");
}
else{
    setStock("Out of Stock");
}
},[item.stock_left])
return(
    <div>
        <p>{stock}</p>
        {stock=="InStock"?<button
                onClick={() => {
                        updateState(item.id);
                        addItem(
                          item.id,
                          item.item_name,
                          item.image,
                          item.price
                        );
                      }}
                      className="py-1 px-1 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded lg:py-1 px-4"
                    >
                      Add to cart
                    </button>:""}
    </div>
)
}
export default InStock;