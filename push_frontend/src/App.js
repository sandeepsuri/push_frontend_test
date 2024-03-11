import './App.css';
import React from 'react';


function App() {
  return (
    <div className="flex">
      <div className="bg-white text-black w-64 min-h-screen p-5">
        {/* Logo and Icon */}
        <div className='flex'>
          <img src="/logo.svg" alt="Push Logo" className='h-[30px] w-[30px] mr-3' />
          <h1 className="text-2xl font-bold mb-10">Push</h1>
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
  )
}

export default App;
