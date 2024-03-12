import {React, useState} from "react";
import '../App.css'
import data from '../employee_data.json'

const Dashboard = () => {
    const employeeInfo = data.map(employee => ({
        id: employee.employee_id,
        name: employee.first_name + ' ' + (employee.last_name === null ? '' : employee.last_name),
        totalHours: employee.labour.reduce((sum, hour) => sum + hour.total, 0) //where sum starts at 0 per user
    }))

    // set search and filter variables up
    const [search, setSearch] = useState('')
    const [filteredItems, setFilterItems] = useState(employeeInfo)

    //function to handle user search based on name
    const handleSearch = (item) => {
        const searchTerm = item.target.value
        setSearch(searchTerm)
        
        const filter = employeeInfo.filter((employee) => employee.name.toLowerCase().includes(searchTerm.toLowerCase()))
        setFilterItems(filter)
    }

    return(
        <div className='w-full'>
            <div className='p-8 sm:flex lg:grid lg:grid-cols-1'>
                <input 
                    className="sm:w-full lg:w-1/2 px-4 py-2 border" 
                    placeholder="Filter employees by name" 
                    type="text"
                    value={search}
                    onChange={handleSearch}
                />
            </div>
 
            <div className="p-8 grid sm:justify-center sm:grid-cols-2 sm:gap-4 lg:grid-cols-4 lg:gap-2 text-[#0D325F]">
                {
                    filteredItems.map((employee) => (
                        <div key={employee.id} className="bg-white border p-4 flex justify-between">
                            <div>
                                <div className="sm:font-bold lg:font-extrabold sm:text-sm lg:text-lg">{employee.name}</div>
                                <div className="font-semibold sm:text-sm lg:text-base">Total hours</div>
                            </div>
                            
                            <div className="sm:font-light sm:text-sm lg:font-semibold pt-7">{employee.totalHours}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Dashboard