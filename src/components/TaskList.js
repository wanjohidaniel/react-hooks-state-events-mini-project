import React from "react";
import Task from "./Task";

function TaskList({ tasks }) {
  return (
    <div className="task-list">
      {tasks.map((task, index) => ( // Use index as fallback key
        <Task key={task.id || index} text={task.text} category={task.category} />
      ))}
    </div>
  );
}

export default TaskList;
