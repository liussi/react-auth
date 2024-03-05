import Button from 'components/Button/Button';
import EmailInput from 'components/InputEmail/InputEmail';
import { useState } from 'react';
import { resetPassword } from '../../api/authApi';

function ForgotPasswordForm() {
  const [email, setEmail] = useState('');

  const handleEmailChange = event => {
    setEmail(event.target.value);
  };

  const handleSubmit = async event => {
    event.preventDefault();

    await resetPassword(email);
    setEmail('');
  };

  return (
    <>
      <h2>Forgot Password?</h2>
      <form onSubmit={handleSubmit}>
        <EmailInput
          value={email}
          onChange={handleEmailChange}
          placeholder="Enter your email"
        />

        <Button type="submit" label="Send" />
        <Button type="submit" label="Cancel" />
      </form>
    </>
  );
}

export default ForgotPasswordForm;
