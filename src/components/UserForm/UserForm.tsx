import React, { useState } from 'react';
import { IUSER } from '../../types';

const initialState = {
  name: '',
  email: '',
  active: false,
  role: '',
};

const UserForm = () => {
  const [userInfo, setUserInfo] = useState<IUSER>(initialState);

  const onClickChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo((prevState) => {
      return {
        ...prevState,
        [event.target.name]: event.target.value,
      };
    });
  };

  const onClickChangeActive = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo((prevState) => {
      return {
        ...prevState,
        [event.target.name]: event.target.checked,
      };
    });
  };

  const onClickSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(event.target.value);
    setUserInfo((prevState) => {
      return {
        ...prevState,
        role: event.target.value,
      };
    });
  };

  const onSubmitForm = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(userInfo);
  };

  return (
    <div className="userForm col-4 border border-5 p-5">
      <form action="" className="d-flex flex-column gap-5" onSubmit={onSubmitForm}>
        <div className="form-group">
          <label htmlFor="name"></label>
          <input onChange={onClickChange} className="form-control" name="name" id="name" type="text" placeholder="Name" />
        </div>
        <div className="form-group">
          <label htmlFor="email"></label>
          <input onChange={onClickChange} className="form-control" name="email" id="email" type="email" placeholder="Email" />
        </div>
        <div className="form-group">
          <label htmlFor="active">Active</label>
          <input onChange={onClickChangeActive} name="active" id="active" type="checkbox" />
        </div>
        <div className="form-group">
          <label htmlFor="role"></label>
          <select onChange={onClickSelect} name="role" id="role" className="form-control">
            <option value="user">user</option>
            <option value="editor">editor</option>
            <option value="admin">admin</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Add User
        </button>
      </form>
    </div>
  );
};

export default UserForm;
