/* eslint-disable react/prop-types */
import React from 'react';
import { Form } from '../Form';
import { Header } from '../Header';
import './Singin.scss';

export const Singin = ({ newUser, setNewUser, setUserId }) => (
  <div className="singin">
    <div className="singin__container">
      <Header />
      <>
        <h1 className="singin__title">
          Sing in
        </h1>

        <p className="singin__invite">
          Hello, please enter your login and
          password to continue
        </p>
      </>

      <Form
        newUser={newUser}
        setNewUser={setNewUser}
        setUserId={setUserId}
      />
    </div>
  </div>
);
