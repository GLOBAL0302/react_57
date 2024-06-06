import './App.css';
import UserForm from './components/UserForm/UserForm';
import { useState } from 'react';
import { IUSER } from './types';

const App = () => {
  const [allUsers, setAllusers] = useState<IUSER[]>([]);

  return (
    <>
      <div className="container-fluid row">
        <UserForm />
        <div className="allUsers col-8">
          <p>allUsers</p>
        </div>
      </div>
    </>
  );
};

export default App;
