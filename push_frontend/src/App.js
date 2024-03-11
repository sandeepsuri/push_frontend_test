import './App.css';
import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard'


function App() {
  return (
    <div className='flex h-screen bg-[#F4F6F9]'>
      <Sidebar />
      <div className='flex-1 flex-col'>
        <Header />
        <Dashboard />
      </div>
    </div>
  )
}

export default App;
