 // Componenta principală - gestionează adăugarea, marcarea și ștergerea sarcinilor
import { useState } from "react";
import TaskForm from "./components/TaskForm";
import Task from "./components/Task";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);

  function addTask(title) {
    const newTask = {
      id: Date.now(),
      title: title,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  }

  function toggleComplete(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;

  return (
    <main className="app">
      <h1>Task Manager</h1>

      <TaskForm onAddTask={addTask} />

      <div className="stats">
        <p>Total sarcini: {totalTasks}</p>
        <p>Finalizate: {completedTasks}</p>
      </div>

      {tasks.length === 0 ? (
        <p className="empty-message">Nu există sarcini momentan.</p>
      ) : (
        <ul className="task-list">
          {tasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              onToggleComplete={toggleComplete}
              onDeleteTask={deleteTask}
            />
          ))}
        </ul>
      )}
    </main>
  );
}

export default App;
