import React from "react";
import '../App.css'
import data from '../employee_data.json'



const Dashboard = () => {

    const employeeInfo = data.map(employee => ({
        id: employee.employee_id,
        name: employee.first_name + ' ' + employee.last_name,
        totalHours: employee.labour.reduce((sum, hour) => sum + hour.total, 0) //where sum starts at 0 per user
    }))

    return(
        <div className='w-full'>
          <div className='flex p-8'>
            <input className="w-2/3 px-4 py-2 border" placeholder="Filter employees by name" type="search" />
          </div>
          <div className="w-2/3 p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">

            {
                employeeInfo.map((employee) => (
                    <div key={employee.id} className="bg-white rounded shadow p-4 flex justify-between items-center">
                        <div>
                            <div className="font-extrabold text-lg">{employee.name}</div>
                            <div className="text-gray-600 font-bold">Total hours</div>
                        </div>
                        
                        <div className="text-gray-800 font-semibold pt-8">{employee.totalHours}</div>
                    </div>
                ))
            }
            
          </div>
        </div>
    )
}

export default Dashboard