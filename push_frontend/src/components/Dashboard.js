import React from "react";
import '../App.css'

const Dashboard = () => {
    return(
        <div className='w-full'>
          <div className='flex p-8'>
            <input className="w-2/3 px-4 py-2 border" placeholder="Filter employees by name" type="search" />
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
    )
}

export default Dashboard