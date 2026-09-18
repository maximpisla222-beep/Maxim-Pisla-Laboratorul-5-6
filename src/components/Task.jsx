 // Componenta pentru afișarea unei sarcini în listă și apăsă Enter.
function Task({ task, onToggleComplete, onDeleteTask }) {
  return (
    <li className="task-item">
      <span
        className={task.completed ? "task-title completed" : "task-title"}
        onClick={() => onToggleComplete(task.id)}
      >
        {task.completed ? "✓" : "☐"} {task.title}
      </span>
      <button className="delete-btn" onClick={() => onDeleteTask(task.id)}>
        Șterge
      </button>
    </li>
  );
}

export default Task;
