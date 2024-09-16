import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import search_icon from "../assets/search_icon.png";
import profile_icon from "../assets/profile_icon.png";
import cart_icon from "../assets/cart_icon.png";
import menu_icon from "../assets/menu_icon.png";
import dropdown_icon from "../assets/dropdown_icon.png";
import { ShopContext } from "../context/ShopContext";
const Navbar = () => {
  // Get the current route
  const location = useLocation();
  const currentPath = location.pathname;
const [visible,setVisible] = useState(false)
const {setShowSearch, getCartCount} = useContext(ShopContext)
  return (
    <div className="flex justify-between items-center py-5 font-medium">
      <div>
        <h1>ShopWith-Ajji</h1>
      </div>
      <ul className="hidden sm:flex gap-5 text-m text-gray-700">
        <li>
          <Link to={"/"}>
            <p className="uppercase text-[17px] font-[500]">Home</p>
            {currentPath === "/" && (
              <hr className="w-2/4 border-none h-[1.5px] bg-gray-700" />
            )}
          </Link>
        </li>
        <li>
          <Link to={"/collection"}>
            <p className="uppercase text-[17px] font-[500]">Collections</p>
            {currentPath === "/collection" && (
              <hr className="w-2/4 border-none h-[1.5px] bg-gray-700" />
            )}
          </Link>
        </li>
        <li>
          <Link to={"/about"}>
            <p className="uppercase text-[17px] font-[500]">About</p>
            {currentPath === "/about" && (
              <hr className="w-2/4 border-none h-[1.5px] bg-gray-700" />
            )}
          </Link>
        </li>
        <li>
          <Link to={"/contact"}>
            <p className="uppercase text-[17px] font-[500]">Contact</p>
            {currentPath === "/contact" && (
              <hr className="w-2/4 border-none h-[1.5px] bg-gray-700" />
            )}
          </Link>
        </li>
      </ul>
      <div className="flex items-center gap-6">
        <img onClick={()=>setShowSearch(true)} src={search_icon} alt="search" className="w-5 cursor-pointer" />
        <div className="group relative">
          <Link to={'/login'}>
          <img
            src={profile_icon}
            alt="Profile"
            className="w-5 cursor-pointer"
          />
          </Link>
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                <p className="cursor-pointer hover:text-black">My Profile</p>
                <p className="cursor-pointer hover:text-black">Orders</p>
                <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>
        <Link to={'/cart'} className="relative">
        <img src={cart_icon} alt="Cart"  className="w-5 cursor-pointer"  />
        <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-squre rounded-full text-[8px]">{getCartCount()}</p>
        </Link>
        <div>
            <img onClick={()=>setVisible(true)} src={menu_icon} alt="Menu" className="w-5 cursor-pointer sm:hidden"/>
        </div>
        {/*Side bar menu for small screen*/}
        <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible?'w-full':'w-0'}`}>
        <div className="flex flex-col text-gray-600">
            <div onClick={()=>setVisible(false)}  className="flex items-center gap-4 p-3 cursor-pointer">
                <img src={dropdown_icon} alt="dropdown" className="h-4 rotate-180" />
                <p>Back</p>
            </div>
            <Link onClick={()=>setVisible(false)}  className="py-2 pl-6 border" to={'/'}>HOME</Link>
            <Link onClick={()=>setVisible(false)}  className="py-2 pl-6 border" to={'/collection'}>COLLECTION</Link>
            <Link onClick={()=>setVisible(false)}  className="py-2 pl-6 border" to={'/about'}>ABOUT</Link>
            <Link onClick={()=>setVisible(false)}  className="py-2 pl-6 border" to={'/contact'}>CONTACT</Link>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
