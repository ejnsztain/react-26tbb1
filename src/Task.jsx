import React from 'react';
import './task';

function Task({ task, done, index, remove, isDone }) {
  return (
    <div
      className="task"
      style={{ backgroundColor: task.isDone ? 'rgb(30, 253, 105)' : '' }}
    >
      {task.content}
      <div className="taskBtn">
        <button className="done" onClick={() => done(index)}>
          Done
        </button>
        <button className="remove" onClick={() => remove(index)}>
          Remove
        </button>
      </div>
    </div>
  );
}

export default Task;
