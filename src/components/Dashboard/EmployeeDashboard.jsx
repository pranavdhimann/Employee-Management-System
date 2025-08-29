import React, { useState, useEffect } from 'react'
import Header from '../other/Header'
import TaskListNumbers from '../other/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = (props) => {
  const [employeeData, setEmployeeData] = useState(props.data);

  // 🔄 fetch latest data from localStorage
  const refreshData = () => {
    const employees = JSON.parse(localStorage.getItem("employees")) || [];
    const updated = employees.find(emp => emp.id === props.data.id);
    setEmployeeData(updated);
  };

  useEffect(() => {
    refreshData(); // load fresh data on mount

    // 👀 Listen to localStorage changes (like when Admin assigns a task)
    const handleStorageChange = (e) => {
      if (e.key === "employees") {
        refreshData();
      }
    };
    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
        <Header changeUser={props.changeUser} data={employeeData}/>
        <TaskListNumbers data={employeeData} />
        <TaskList data={employeeData} refreshData={refreshData} />
    </div>
  )
}

export default EmployeeDashboard
