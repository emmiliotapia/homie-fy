// src/components/UserList.js
import React from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_USERS = gql`
  query GetUsers {
    users {
      id
      username
      email
      balance {
        experiencePoints
        monetaryRewards
      }
      tasks {
        id
        title
        description
        status
      }
    }
  }
`;

const UserList = () => {
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      {data.users.map(user => (
        <div key={user.id}>
          <h2>{user.username}</h2>
          <p>{user.email}</p>
          {/* Renderiza más detalles del usuario */}
        </div>
      ))}
    </div>
  );
};

export default UserList;
