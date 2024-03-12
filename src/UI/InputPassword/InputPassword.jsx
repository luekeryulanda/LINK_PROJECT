import React from 'react';
import './InputPassword.scss';

const InputPassword = ({ children, name, fun, value }) => {
    return (
        <div className="InputText">
            <label htmlFor={children} className="InputText__label">
                {children}
            </label>
            <input
                id={children}
                type="password"
                name={name}
                className="InputText__input"
                value={value}
                onChange={(e) => fun(e)}
            />
        </div>
    );
};

export default InputPassword;
