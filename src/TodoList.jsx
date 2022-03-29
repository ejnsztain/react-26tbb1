import React, { useState } from 'react';
import Form from './Form';
import './list';
import Task from './Task';

const TodoList = () => {
  const [todos, setTodos] = useState([
    { content: 'finish your todo app', isDone: false },
  ]);

  const addTask = (content) => {
    setTodos([...todos, { content }]);
  };

  const doneTask = (index) => {
    const newTask = [...todos];
    newTask[index].isDone = true;
    setTodos(newTask);
  };

  const removeTask = (index) => {
    const newTask = [...todos];
    newTask.splice(index, 1);
    setTodos(newTask);
  };

  return (
    <div className="list">
      <Form addTask={addTask} />
      <ul>
        {todos.map((task, index, isDone) => {
          return (
            <Task
              key={index}
              index={index}
              task={task}
              done={doneTask}
              remove={removeTask}
              isDone={isDone}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
