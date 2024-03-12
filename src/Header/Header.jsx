import React from 'react';
import "./Header.scss";
import metaLogo from "../../Resources/meta.svg";
import searchIcon from "../../Resources/search.svg";
const Header = () => {
    return (
        <div className="Header">
         <div className="Header__container container-fluid">
            <div className="row justify-content-between align-items-center">
               <div className="Header__content col-10 d-flex align-items-center">
                  <div className="Header__logo d-flex"><img src={metaLogo} alt="Metaicon"/></div>
                  <span className=" Header__sublogo border-start"><span className="SupportInbox"></span></span>
               </div>
               <div className="Header__search col-1 d-flex justify-content-end"><img src={searchIcon} alt="Search Icon"/></div>
            </div>
         </div>
      </div>
    );
};

export default Header;
