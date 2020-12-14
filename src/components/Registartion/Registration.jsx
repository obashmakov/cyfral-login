import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Registration.scss';

export const Registration = ({ user, setNewUser, message, setMessage }) => {
  const [userName, setUserName] = useState('');
  const [position, setPosition] = useState('');
  const [phone, setPhone] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);

  const id = Date.now();

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'userName') {
      setUserName(value);
    } else if (name === 'position') {
      setPosition(value);
    } else if (name === 'phone') {
      setPhone(value);
    } else if (name === 'login') {
      setLogin(value);
    } else if (name === 'password') {
      setPassword(value);
    } else if (name === 'confirmPassword') {
      setConfirmPassword(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newUser = {
      name: userName,
      position,
      phone,
      login,
      password,
      id,
    };

    if (password !== confirmPassword) {
      setPasswordError(true);
    } else {
      setNewUser([...user, newUser]);
      setUserName('');
      setPosition('');
      setPhone('');
      setLogin('');
      setPassword('');
      setConfirmPassword('');
      setMessage(true);
      setPasswordError(false);
    }
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        {message
          ? (
            <p className="form__text form__text--success">
              You are registered now! Try to sing in.
            </p>
          ) : (
            <p className="form__text">
              There are no users with this login.
              Please register new account.
            </p>
          )}
        <label htmlFor="userName">
          <input
            className="form__input"
            id="userName"
            name="userName"
            type="text"
            placeholder="Your complete name"
            value={userName}
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="position">
          <input
            className="form__input"
            id="position"
            name="position"
            type="text"
            placeholder="Your position"
            value={position}
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="phone">
          <input
            className="form__input"
            id="phone"
            name="phone"
            type="tel"
            placeholder="Your phone number"
            value={phone}
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="login">
          <input
            className="form__input"
            id="login"
            name="login"
            type="text"
            placeholder="Your login"
            value={login}
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="password">
          <input
            className="form__input"
            id="password"
            name="password"
            type="password"
            placeholder="Your password"
            value={password}
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="confirmPassword">
          <input
            className="form__input"
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={handleChange}
            required
          />
          {passwordError && (
            <p className="form__error">
              Wrong password!!!
            </p>
          )}
        </label>

        <button className="form__button" type="submit">
          Register
        </button>
      </form>
    </>
  );
};

Registration.propTypes = {
  user: PropTypes.arrayOf(PropTypes.shape({
    userName: PropTypes.string,
    position: PropTypes.string,
    phone: PropTypes.string,
    login: PropTypes.string,
    password: PropTypes.string,
  })).isRequired,
  setNewUser: PropTypes.func.isRequired,
  message: PropTypes.bool.isRequired,
  setMessage: PropTypes.func.isRequired,
};
