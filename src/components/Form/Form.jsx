import React from 'react';
import './Form.scss';

export const Form = () => (
  <form className="form">
    <label htmlFor="login">
      <input
        className="form__input"
        type="text"
        id="login"
        name="login"
        placeholder="Your login"
      />
    </label>
    <label htmlFor="password">
      <input
        className="form__input"
        type="password"
        id="password"
        name="password"
        placeholder="Your password"
      />
    </label>
    <button className="form__button" type="button">
      Sing in
    </button>
  </form>
);
