import React from 'react';
import { Form } from '../Form';
import { Header } from '../Header';
import './Registration.scss';

export const Registration = () => (
  <div className="registration">
    <div className="registration__container">
      <Header />
      <h1 className="registration__title">
        Sing in
      </h1>

      <p className="registration__invite">
        Hello, please enter your login and
        password to continue
      </p>

      <Form />
    </div>
  </div>
);
