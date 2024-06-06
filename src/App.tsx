import './App.css';
import UserForm from './components/UserForm/UserForm';
import { useState } from 'react';
import { IUSER } from './types';
import AllUsers from './components/AllUsers/AllUsers';

const App = () => {
  const [allUsers, setAllUsers] = useState<IUSER[]>([]);

  const addUser = (value: IUSER) => {
    setAllUsers((prevState) => [...prevState, value]);
  };

  return (
    <>
      <div className="container-fluid row">
        <UserForm addUser={addUser} />
        <AllUsers allUsers={allUsers} />
      </div>
    </>
  );
};

export default App;
