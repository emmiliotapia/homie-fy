import React from 'react';
import { useMutation, gql } from '@apollo/client';

const DELETE_TASK = gql`
  mutation DeleteTask($id: ID!) {
    deleteTask(id: $id) {
      id
    }
  }
`;

const DeleteTask = ({ taskId }) => {
  const [deleteTask, { data, loading, error }] = useMutation(DELETE_TASK);

  const handleDelete = () => {
    deleteTask({ variables: { id: taskId } });
  };

  return (
    <div>
      <button onClick={handleDelete}>Delete Task</button>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && <p>Task Deleted Successfully</p>}
    </div>
  );
};

export default DeleteTask;
