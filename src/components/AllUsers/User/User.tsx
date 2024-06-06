import { IUSER } from '../../../types';
import React from 'react';

interface Props {
  user: IUSER;
}
const User: React.FC<Props> = ({ user }) => {
  console.log(user.active);
  return (
    <div className="border border-5 p-3 mb-3">
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>active: {user.active}</p>
      <p>Role: {user.role}</p>
    </div>
  );
};

export default User;
