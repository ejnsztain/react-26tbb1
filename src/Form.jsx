import React, { useState } from 'react';
import './form.css';

const Form = ({ addTask }) => {
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!content) return;
    addTask(content);
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        required
        className="content"
        value={content}
        placeholder="Task Content"
        type="text"
        onChange={(e) => setContent(e.target.value)}
      ></input>
      <input type="submit" value="+" className="add"></input>
    </form>
  );
};

export default Form;
