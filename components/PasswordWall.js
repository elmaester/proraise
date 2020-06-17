import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Button } from '../style';

const PasswordWallStyle = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #000;
  color: #fff;

  h2 {
    font-size: 32px;
    margin: 0;
  }

  input {
    font-size: 20px;
    margin: 20px 0;
    border-radius: 8px;
    padding: 5px;
  }

  p {
    color: #ff0000;
    margin-bottom: 20px;
  }
`;

const PasswordWall = ({ success }) => {
  useEffect(() => inputField.current.focus(), []);
  const [passwordField, setPasswordField] = useState('');
  const [message, setMessage] = useState(null);
  const inputField = useRef(null);
  const correctPassword = 'hubxiswonderful';
  const checkPass = () => {
    if (passwordField === correctPassword) {
      setMessage('Access granted');
      success();
    } else {
      setPasswordField('');
      setMessage('Wrong password');
      inputField.current.focus();
    }
  };

  return (
    <>
      <PasswordWallStyle>
        <h2>Enter the password to gain access</h2>
        <input
          type='password'
          value={passwordField}
          onChange={(event) => {
            if (message) setMessage(null);
            setPasswordField(event.target.value);
          }}
          onKeyDown={(event) => event.key === 'Enter' && checkPass()}
          ref={inputField}
        />
        {message && <p>{message}</p>}
        <Button onClick={checkPass}>Submit</Button>
      </PasswordWallStyle>
    </>
  );
};

export default PasswordWall;
