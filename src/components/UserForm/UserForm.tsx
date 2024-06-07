import React, { useState } from 'react';
import { IFormUser, IUSER } from '../../types';
interface Props {
  addUser: (value: IUSER) => void;
}

const initialState = {
  name: '',
  email: '',
  active: false,
  role: '',
};

const UserForm: React.FC<Props> = ({ addUser }) => {
  const [userInfo, setUserInfo] = useState<IFormUser>(initialState);

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
    addUser({ ...userInfo, id: Math.random() });
    setUserInfo(initialState);
  };

  return (
    <div className="userForm col-4 border border-5 p-5">
      <form action="" className="d-flex flex-column gap-5" onSubmit={onSubmitForm}>
        <div className="form-group">
          <label htmlFor="name"></label>
          <input
            required
            onChange={onClickChange}
            className="form-control"
            name="name"
            id="name"
            type="text"
            value={userInfo.name}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email"></label>
          <input
            required
            onChange={onClickChange}
            className="form-control"
            name="email"
            id="email"
            type="email"
            value={userInfo.email}
          />
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
