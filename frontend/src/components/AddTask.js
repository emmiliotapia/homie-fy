import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';

const ADD_TASK = gql`
  mutation AddTask($title: String!, $description: String!) {
    addTask(title: $title, description: $description) {
      id
      title
      description
    }
  }
`;

const AddTask = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [addTask, { data, loading, error }] = useMutation(ADD_TASK);

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({ variables: { title, description } });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && <p>Task Added Successfully</p>}
    </div>
  );
};

export default AddTask;
