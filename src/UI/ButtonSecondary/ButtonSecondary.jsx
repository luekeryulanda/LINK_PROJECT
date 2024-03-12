import React from 'react';
import "./ButtonSecondary.scss";
const ButtonSecondary = ({fun,children,BackColor}) => {
    return (
        <button style={{backgroundColor:BackColor}} type="button" className="ButtonSecondary btn-secondary" onClick={()=>fun()}>{children}</button>
    );
};

export default ButtonSecondary;
