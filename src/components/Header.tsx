import  { useState } from 'react';
import { HiMiniArrowTrendingUp } from "react-icons/hi2";
import { FaBars } from "react-icons/fa6";
import { GiMoon } from "react-icons/gi";
import { MdWbSunny } from "react-icons/md";
import { toggleDarkMode } from '../redux/features/themeSlice';
import { setSearchQuery } from "../redux/features/crytpoSlice"
import { useAppDispatch, useAppSelector } from '../redux/hooks/customHook';


const Header = () => {
     const [dropdown, setDropdown] = useState(false);
     const dispatch = useAppDispatch();
     const isDarkMode = useAppSelector((state) => state.theme.isDarkMode)
     
     const handleDropdown = () => {
          setDropdown(prevState => !prevState)
     }

  return (
     <header>
          <nav className="shadow dark:bg-[#1F2937] bg-white md:h-16">
            <div className="w-[95vw] max-w-[1170px] mx-auto flex flex-col md:justify-between  md:flex-row justify-center md:items-center py-4 px-4">
              <div className="w-full md:w-auto flex justify-between items-center">
               <h2 className="text-black dark:text-white flex items-center gap-2">
                   <HiMiniArrowTrendingUp className="semibold text-blue-500 text-xl sm:text-2xl md:text-3xl lg:text-4xl" />
                   <span className="text-lg sm:text-xl md:text-2xl font-semibold tracking-wide">
                       Crypto-Tracker
                   </span>
                </h2>   
                <button onClick={handleDropdown} className="text-black md:hidden dark:text-white text-2xl transition-all ease-linear duration-400 hover:text-gray-300 cursor-pointer">
                     <FaBars />
                </button>
            </div>
            <div className={`flex overflow-hidden  flex-col md:flex-row items-start justify-center gap-4 md:gap-y-0 md:mt-0 dark:text-white text-sm tracking-wide transition-all duration-400 ease-linear md:text-base ${dropdown ? 'h-[150px] mt-4': 'h-0 mt-0' } md:!h-auto`}>
                {
                  ["Cryptocurrencies", "Exchanges", "NFTs", "Portfolio"].map((linkItem, index) => {
                     return <a href="#" key={index} className="">
                          {linkItem}
                     </a>
                  })
                }
            </div>
           </div>   
          </nav>
          <div className="w-[95vw] max-w-[1170px] mx-auto flex flex-col md:flex-row  md:justify-between md:items-end px-5 md:px-0 py-5">
              <h1 className="text-xl font-semibold text-black dark:text-white md:text-2xl tracking-wide">
                   Today's Cryptocurrency Prices
              </h1>
              <div className="flex flex-col md:flex-row gap-4 text-white mt-4">
                 <input onChange={(e) => dispatch(setSearchQuery(e.target.value))} type="text"  className="dark:text-white text-black w-full py-2 text-base px-4 rounded bg-[#f1f8f9] dark:bg-slate-700 dark:placeholder:text-gray-400 placeholder:text-black outline-none" placeholder="Search..."/> 
                 <button onClick={() => dispatch(toggleDarkMode())} className="text-black dark:text-white text-2xl cursor-pointer flex items-center justify-center dark:bg-slate-600 p-2 rounded-full bg-[#f1f8f9]">
                      {isDarkMode ? <MdWbSunny /> : <GiMoon />}
                 </button> 
              </div>  
           </div>  
          </header>
  )
}

export default Header
