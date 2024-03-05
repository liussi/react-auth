import React, { useState } from 'react';
import { createAccessToken, login } from '../../api/authApi';
import { Link } from 'react-router-dom';
import Button from 'components/Button/Button';
import EmailInput from 'components/InputEmail/InputEmail';
import PasswordInput from 'components/InputPassword/InputPassword';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPasswordInput, setShowPasswordInput] = useState(false);

  const handleEmailChange = event => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = event => {
    setPassword(event.target.value);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      if (!showPasswordInput) {
        await createAccessToken(email);
        setShowPasswordInput(true);
      } else {
        await login(email, password);
        console.log('Login successful'); // Тут можна обробити успішний логін
        setEmail('');
        setPassword('');
      }
    } catch (error) {
      console.error('Something went wrong', error);
    }
  };

  return (
    <div>
      <h2>Log in to your account</h2>

      <form onSubmit={handleSubmit}>
        <EmailInput
          value={email}
          onChange={handleEmailChange}
          placeholder="Work email"
        />
        {showPasswordInput && (
          <PasswordInput
            value={password}
            onChange={handlePasswordChange}
            placeholder="Password"
          />
        )}
        <Link to="/forgot-password">Forgot your password?</Link>
        <Button type="submit" label="Log in to Qencode" />
      </form>
    </div>
  );
}

export default Login;
