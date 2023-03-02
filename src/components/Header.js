import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";


export const Header = () => {
  const activeClass = "block py-2 pl-3 pr-4  text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white";
  const inActiveClass ="block py-2 pl-3 pr-4  text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700";

  return (
    <header>

      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2  dark:bg-gray-900">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <Link to="/" className="flex items-center">
            <img src={Logo} className="h-6 mr-3 sm:h-9" alt="Shopping Cart Logo" />
            <span className="self-center  font-semibold whitespace-nowrap dark:text-white">Shopping Cart</span>
          </Link>

          <div className="flex md:order-2">
            <button type="button" className=" text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 text-center mr-3 md:mr-0">Cart: 2</button>
            
          </div>

          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <NavLink to="/" className={({isActive}) => isActive ? activeClass: inActiveClass} end>Home</NavLink>
              </li>
              <li>
                <NavLink to="cart" className={({isActive}) => isActive ? activeClass: inActiveClass}>Cart</NavLink>
              </li>
             
            </ul>
          </div>
        </div>
      </nav>


    </header>
  )
}
