import React from 'react';
import 'react-phone-input-2/lib/bootstrap.css'
import PhoneInput from 'react-phone-input-2'
const InputPhone = ({ children, name, fun, value }) => {
  return (
    <div className="InputText">
      <label htmlFor={children} className="InputText__label">
        {children}
      </label>
      <PhoneInput
      inputProps={{
        name: name,
        id:children,
        required: true
      }}
      inputStyle={{width:'100%'}}
      country={'us'}
      value={value}
      onChange={(e) => fun(e)}
      />
    </div>
  );
};

export default InputPhone;
