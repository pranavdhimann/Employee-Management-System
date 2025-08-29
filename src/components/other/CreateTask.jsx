import React, { useState, useContext } from "react";
import { addNewTask } from "../../utils/taskUtils";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = ({ employees }) => {
  const [userData, setUserData] = useContext(AuthContext);

  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [category, setCategory] = useState("");
  const [employeeId, setEmployeeId] = useState("");

  const handleCreateTask = () => {
    if (!taskTitle || !taskDescription || !taskDate || !category || !employeeId) {
      alert("⚠️ Please fill all fields!");
      return;
    }

    const newTaskData = {
      taskTitle,
      taskDescription,
      taskDate,
      category,
    };

    // 🔥 Update localStorage + get fresh employees
    const updatedEmployees = addNewTask(Number(employeeId), newTaskData);

    // 🔥 Update global context so AllTask + dashboards refresh
    setUserData(updatedEmployees);

    alert("✅ Task assigned successfully");

    // reset fields
    setTaskTitle("");
    setTaskDescription("");
    setTaskDate("");
    setCategory("");
    setEmployeeId("");
  };

  return (
    <div className="p-5 bg-gray-800 rounded-lg mt-5">
      <h2 className="text-xl font-bold mb-4 text-white">Create Task</h2>

      <input
        className="block mb-2 p-2 w-full rounded bg-gray-700 text-white placeholder-gray-400
                   focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="text"
        placeholder="Task Title"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
      />

      <input
        className="block mb-2 p-2 w-full rounded bg-gray-700 text-white placeholder-gray-400
                   focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="text"
        placeholder="Task Description"
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
      />

      <input
        className="block mb-2 p-2 w-full rounded bg-gray-700 text-white
                   focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="date"
        value={taskDate}
        onChange={(e) => setTaskDate(e.target.value)}
      />

      <input
        className="block mb-2 p-2 w-full rounded bg-gray-700 text-white placeholder-gray-400
                   focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />

      <select
        className="block mb-2 p-2 w-full rounded bg-gray-700 text-white
                   focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={employeeId}
        onChange={(e) => setEmployeeId(e.target.value)}
      >
        <option value="">Select Employee</option>
        {employees.map((emp) => (
          <option key={emp.id} value={emp.id}>
            {emp.firstName} ({emp.email})
          </option>
        ))}
      </select>

      <button
        onClick={handleCreateTask}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mt-2
                   focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
      >
        Assign Task
      </button>
    </div>
  );
};

export default CreateTask;
