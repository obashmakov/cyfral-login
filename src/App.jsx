import React, { useEffect, useState } from 'react';
import { Singin } from './components/Singin';
import './App.scss';
import { UserPage } from './components/UserPage';

export const App = () => {
  const [newUser, setNewUser] = useState([]);
  const [userId, setUserId] = useState('');
  const [user, setUser] = useState(null);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('user') || '[]');

    setNewUser(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(newUser));
  }, [newUser]);

  useEffect(() => {
    const find = newUser.find(person => person.id === userId);

    setUser(find);
  }, [userId]);

  return (
    <div className="content">
      {!user && (
        <Singin
          setNewUser={setNewUser}
          newUser={newUser}
          setUserId={setUserId}
        />
      )}

      {user && (
        <UserPage user={user} />
      )}
    </div>
  );
};
