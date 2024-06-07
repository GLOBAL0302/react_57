import { IUSER } from '../../../types';
import React from 'react';

interface Props {
  user: IUSER;
}
const User: React.FC<Props> = ({ user }) => {
  return (
    <div className="border border-5 p-3 mb-3">
      <p>
        <strong>Name: </strong> {user.name}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <img
        style={{ width: '50px' }}
        src={
          user.active
            ? 'https://cdn-icons-png.freepik.com/256/5610/5610944.png?semt=ais_hybrid'
            : 'https://cdn-icons-png.flaticon.com/512/169/169779.png'
        }
        alt="img"
      />
      <p>
        <strong>Role: </strong> {user.role}
      </p>
    </div>
  );
};

export default User;
