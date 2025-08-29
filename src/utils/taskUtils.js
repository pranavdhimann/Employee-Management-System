// 📌 src/utils/taskUtils.js

// update status of a task (complete, fail, accept)
export const updateTaskStatus = (employeeId, taskIndex, status) => {
  let employees = JSON.parse(localStorage.getItem("employees")) || [];

  employees = employees.map(emp => {
    if (emp.id === employeeId) {
      emp.tasks = emp.tasks.map((task, idx) => {
        if (idx === taskIndex) {
          return {
            ...task,
            active: status === "active",
            newTask: status === "newTask",
            completed: status === "completed",
            failed: status === "failed",
          };
        }
        return task;
      });

      // ✅ recalc task counts
      emp.taskCounts = {
        active: emp.tasks.filter(t => t.active).length,
        newTask: emp.tasks.filter(t => t.newTask).length,
        completed: emp.tasks.filter(t => t.completed).length,
        failed: emp.tasks.filter(t => t.failed).length,
      };
    }
    return emp;
  });

  localStorage.setItem("employees", JSON.stringify(employees));
  return employees;
};


// add a brand new task (used by AdminDashboard -> CreateTask)
export const addNewTask = (employeeId, taskData) => {
  let employees = JSON.parse(localStorage.getItem("employees")) || [];

  employees = employees.map(emp => {
    if (emp.id === employeeId) {
      const newTask = {
        ...taskData,
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      };

      emp.tasks = [...emp.tasks, newTask];

      // ✅ recalc task counts
      emp.taskCounts = {
        active: emp.tasks.filter(t => t.active).length,
        newTask: emp.tasks.filter(t => t.newTask).length,
        completed: emp.tasks.filter(t => t.completed).length,
        failed: emp.tasks.filter(t => t.failed).length,
      };
    }
    return emp;
  });

  localStorage.setItem("employees", JSON.stringify(employees));
  return employees;
};
