import React from 'react';
import AddUser from "./Componenets/Users/AddUser";
import UsersList from "./Componenets/Users/UsersList";


function App() {
  return (
    <div>
      <AddUser/>
      <UsersList users={[]}/>
    </div>
  );
}

export default App;
