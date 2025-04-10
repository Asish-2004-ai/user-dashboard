import React from 'react';
import { Post } from '../types';

type Props = {
  activities: Post[];
};

const UserActivities: React.FC<Props> = ({ activities }) => {
  return (
    <div>
      <h3>User Activities</h3>
      <ul>
        {activities.map(post => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserActivities;
