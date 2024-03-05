import Button from 'components/Button/Button';
import { useState } from 'react';
import { setNewPassword } from '../../api/authApi';
import PasswordInput from 'components/InputPassword/InputPassword';

function ResetPassword() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handlePasswordChange = event => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = event => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = async event => {
    event.preventDefault();

    await setNewPassword(password);
    setPassword('');
  };

  return (
    <>
      <h2>Forgot Password?</h2>
      <form onSubmit={handleSubmit}>
        <PasswordInput
          value={password}
          onChange={handlePasswordChange}
          placeholder="New Password"
        />
        <PasswordInput
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          placeholder="Confirm Password"
        />
        <Button type="submit" label="Reset password" />
      </form>
    </>
  );
}

export default ResetPassword;
