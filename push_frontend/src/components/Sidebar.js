import '../App.css';
import React from 'react';


const Sidebar = () => {
    return (
    <div className="hidden lg:block">
        <div className="bg-white text-[#0D325F] w-64 min-h-screen border">
          {/* Logo and Icon */}
          <div className='flex p-5'>
            <img src="/logo.svg" alt="Push Logo" className='h-[30px] w-[30px] mr-3' />
            <h1 className="text-2xl font-bold">Push</h1>
          </div>
          {/* Dashboard Menu */}
          <ul>
            <li className="mb-5 hover:bg-[#E2E9F2] hover:font-bold py-1">
              <a href="#employees" className="px-4">Employees</a>
            </li>
            <li className="mb-5 hover:bg-[#E2E9F2] hover:font-bold py-1">
              <a href="#scheduler" className="px-4">Scheduler</a>
            </li>
            <li className="mb-5 hover:bg-[#E2E9F2] hover:font-bold py-1">
              <a href="#timetracking" className="px-4">Timetracking</a>
            </li>
          </ul>
        </div>
      </div>
    )
}

export default Sidebar