import './App.css';
import React from 'react';


function App() {
  return (
    <div className='flex h-screen bg-[#F4F6F9]'>
      {/* Sidebar Nav */}
      <div className="hidden md:hidden lg:block">
        <div className="bg-white text-black w-64 min-h-screen p-5">
          {/* Logo and Icon */}
          <div className='flex mb-10'>
            <img src="/logo.svg" alt="Push Logo" className='h-[30px] w-[30px] mr-3' />
            <h1 className="text-2xl font-bold">Push</h1>
          </div>

          {/* Dashboard Menu */}
          <ul>
            <li className="mb-5">
              <a href="#employees" className="block hover:bg-[#E2E9F2]">Employees</a>
            </li>
            <li className="mb-5">
              <a href="#scheduler" className="block hover:bg-[#E2E9F2]">Scheduler</a>
            </li>
            <li className="mb-5">
              <a href="#timetracking" className="block hover:bg-[#E2E9F2]">Timetracking</a>
            </li>
          </ul>
        </div>
      </div>
      {/* Header */}
      <div className='flex-1 flex-col'>
        <div className="flex justify-between items-center bg-white p-4 ">
          <h2 className="text-2xl font-bold">Employees</h2>
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
      </div>
      {/* End */}
    </div>
  )
}

export default App;
