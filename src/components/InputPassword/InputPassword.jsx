import React from 'react';

function PasswordInput({ value, onChange, placeholder, name }) {
  return (
    <div>
      <label htmlFor={name}>Пароль:</label>
      <input
        type="password"
        id={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}

export default PasswordInput;
