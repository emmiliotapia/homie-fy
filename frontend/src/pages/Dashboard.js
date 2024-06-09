import React from 'react';
import UserList from '../components/UserList';  // Asegúrate de tener este componente creado
import AddTask from '../components/AddTask';    // Importa el componente AddTask

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Bienvenido a Homiefy</p>
      <UserList />
      <AddTask />  // Añade el componente AddTask
    </div>
  );
};

export default Dashboard;
