import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import UserProfile from '../components/UserProfile';
import UserActivities from '../components/UserActivities';
import { User, Post } from '../types';
import { Link } from 'react-router-dom';

const UserDashboard: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState<User | null>(null);
  const [activities, setActivities] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [userRes, postsRes] = await Promise.all([
          axios.get(`https://jsonplaceholder.typicode.com/users/${id}`),
          axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
        ]);
        setUser(userRes.data);
        setActivities(postsRes.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load data.');
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error || !user) return <p>{error || 'User not found'}</p>;

  return (
    <div className="container">
      <h1>User Dashboard</h1>
      <div style={{ marginBottom: '1rem' }}>
        <strong>Switch User:</strong>{' '}
        <div className="user-switch-buttons">
  {[1, 2, 3, 4, 5].map(userId => (
    <Link
      key={userId}
      to={`/users/${userId}`}
    >
      User {userId}
    </Link>
  ))}
</div>

      </div>
  
      <UserProfile user={user} />
      <UserActivities activities={activities} />
    </div>
  );
  
};

export default UserDashboard;
