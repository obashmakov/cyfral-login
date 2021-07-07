import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './UserPage.scss';

export const UserPage = ({ user }) => {
  const [isActive, setIsActive] = useState(false);
  const [placeholder, setPlaceholder] = useState('');
  const [change, setChange] = useState('');

  const handleClick = (event) => {
    setIsActive(true);
    setPlaceholder(event.target.innerText);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'Change name') {
      setChange(value);
    }
  };

  const confirmChanges = () => {
    const raw = localStorage.getItem('user');
    const persons = JSON.parse(raw);

    const mans = persons.map(person => ({
      ...person,
      name: change,
    }));

    localStorage.setItem('user', JSON.stringify(mans));
  };

  return (
    <div className="userPage">
      <h1>
        {`Hello ${user.name} here are your profile data:`}
      </h1>
      <div>
        <p>{`Name: ${user.name}`}</p>
        <button type="button" onClick={handleClick}>
          Change name
        </button>
      </div>
      <div>
        <p>{`Phone: ${user.phone}`}</p>
        <button type="button" onClick={handleClick}>
          Change phone
        </button>
      </div>
      <div>
        <p>{`Position: ${user.position}`}</p>
        <button type="button" onClick={handleClick}>
          Change position
        </button>
      </div>
      <div>
        <p>{`Login: ${user.login}`}</p>
        <button type="button" onClick={handleClick}>
          Change login
        </button>
      </div>
      <div>
        <p>{`Password: ${user.password}`}</p>
        <button type="button" onClick={handleClick}>
          Change password
        </button>
      </div>
      {isActive && (
        <>
          <label htmlFor={placeholder}>
            <input
              type="text"
              placeholder={placeholder}
              id="change"
              name={placeholder}
              value={change}
              onChange={handleChange}
            />
          </label>
          <button type="button" onClick={confirmChanges}>
            Confirm
          </button>
        </>
      )}
    </div>
  );
};

UserPage.propTypes = {
  user: PropTypes.objectOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
  })).isRequired,
};
