import React from 'react';
import './InputText.scss';

const InputText = ({ children, name, fun, value }) => {
  return (
    <div className="InputText">
      <label htmlFor={children} className="InputText__label">
        {children}
      </label>
      <input
        id={children}
        type="text"
        name={name}
        className="InputText__input"
        value={value}
        onChange={(e) => fun(e)}
      />
    </div>
  );
};

export default InputText;
