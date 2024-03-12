import React from "react";
import '../App.css'

const Header = () => {
    return (
        <div className="flex justify-between items-center bg-white p-4 border">
          <h2 className="text-2xl font-bold text-[#0D325F]">Employees</h2>
          <div className="flex items-center space-x-3">   
            <div className="flex items-center justify-center bg-[#68BEE2] rounded-full h-10 w-10 text-white font-extrabold">
              JS 
            </div>
            <div>
              <div className='font-extrabold text-[#0D325F]'>John Smith</div>
              <div className='font-light text-[#61748F]'> johnsmith@gmail.com</div>
            </div>
          </div>         
        </div>
    )
}

export default Header