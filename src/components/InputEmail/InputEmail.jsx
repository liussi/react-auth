import React from 'react';

function EmailInput({ value, onChange, placeholder, name }) {
  return (
    <div>
      <label htmlFor={name}>Електронна пошта:</label>
      <input
        type="email"
        id={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}

export default EmailInput;
