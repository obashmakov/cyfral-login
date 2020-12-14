/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Registration } from '../Registartion';
import './Form.scss';

export const Form = ({ setNewUser, newUser, setUserId }) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [errorLogin, setErrorLogin] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [registration, setRegistration] = useState(false);
  const [message, setMessage] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'login') {
      setLogin(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = localStorage.getItem('user');
    const userInfo = JSON.parse(user);

    const userInStorage = userInfo.find(
      person => person.login === login && person.password === password,
    );

    if (!login) {
      setErrorLogin('Please enter your login');
    }

    if (!password) {
      setErrorPassword('Please enter your password');
    }

    if (!userInStorage) {
      setRegistration(true);
      setMessage(false);
    }

    if (login && password && userInStorage) {
      setLogin('');
      setPassword('');
      setErrorLogin('');
      setErrorPassword('');
      setUserId(userInStorage.id);
    }
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="login">
          <input
            className="form__input"
            type="text"
            id="login"
            name="login"
            placeholder="Your login"
            value={login}
            onChange={handleChange}
          />
          {!login && (
            <p className="form__error">
              {errorLogin}
            </p>
          )}
        </label>
        <label htmlFor="password">
          <input
            className="form__input"
            type="password"
            id="password"
            name="password"
            placeholder="Your password"
            value={password}
            onChange={handleChange}
          />
          {!password && (
            <p className="form__error">
              {errorPassword}
            </p>
          )}
        </label>
        <button className="form__button" type="submit">
          Sing in
        </button>
      </form>

      {registration && (
        <Registration
          user={newUser}
          setNewUser={setNewUser}
          message={message}
          setMessage={setMessage}
        />
      )}
    </>
  );
};

Form.propTypes = {
  setNewUser: PropTypes.func.isRequired,
};
