import React from 'react';
import { User } from '../types';

type Props = {
  user: User;
};

const UserProfile: React.FC<Props> = ({ user }) => {
  return (
    <div>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
    </div>
  );
};

export default UserProfile;
