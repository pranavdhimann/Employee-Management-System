import React, { useEffect, useState } from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import AllTask from '../other/AllTask'

const AdminDashboard = (props) => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const employeesFromStorage = JSON.parse(localStorage.getItem("employees")) || [];
    setEmployees(employeesFromStorage);
  }, []);

  return (
    <div className='h-screen w-full p-7'>
      <Header changeUser={props.changeUser} />
      {/* ✅ pass employees into CreateTask */}
      <CreateTask employees={employees} />
      <AllTask />
    </div>
  )
}

export default AdminDashboard
