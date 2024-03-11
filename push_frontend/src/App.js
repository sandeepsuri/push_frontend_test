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

      
      <div className='flex-1 flex-col'>

        {/* Header */}
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

        {/* Dashboard */}
        <div className='w-full'>
          <div className='flex p-8'>
            <input className="w-2/3 px-4 py-2 border" placeholder="Filter employees by name" type="search" />
          </div>
        </div>

        <div className="w-2/3 p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">

          <div className="bg-white rounded shadow p-4 flex justify-between items-center">
            <div>
              <div className="font-medium text-lg">John Smith</div>
              <div className="text-gray-600">Total hours</div>
            </div>
            <div className="text-gray-800 font-semibold">20.6</div>
          </div>

          <div className="bg-white rounded shadow p-4 flex justify-between items-center">
            <div>
              <div className="font-medium text-lg">John Smith</div>
              <div className="text-gray-600">Total hours</div>
            </div>
            <div className="text-gray-800 font-semibold">20.6</div>
          </div>

        </div>

      </div>

      

      {/* End */}
    </div>
  )
}

export default App;
