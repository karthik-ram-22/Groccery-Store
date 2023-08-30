
import logo from './header.png'
import { Link } from 'react-router-dom';
function Header({count})
{
    return(
        <div className="">
<nav className="flex items-center justify-between flex-wrap bg-white-400 p-6">
  <div className="flex items-center flex-shrink-0 text-black mr-6">
    <img className="fill-current h-8 w-8 mr-2" src={logo} alt=''/> 
    <span className="font-semibold text-xl decoration-gray-500 text-green">Groccery store</span>
  </div>
  <div className="block lg:hidden">
  </div>
  <div className="flex items-center justify-between flex-wrap bg-white-400 p-6">
    <div className="flex items-center flex-shrink-0 text-green lg:mr-6 ">
   <Link to='/cart' href="#responsive-header" className="">
    <button className='flex border-2 border-green-400 bg-white hover:bg-green-300  font-bold py-1 px-3 rounded'><img src="/images/cart2.png" className='h-5 w-5 fill-current lg:h-6 w-3 mr-2'/>
   Cart: {count}</button>
      </Link>
    </div>
  </div>
</nav>

        </div>
    )
}
export default Header;