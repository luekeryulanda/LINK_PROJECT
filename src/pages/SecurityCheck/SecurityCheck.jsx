import React, {useState, useEffect,useRef} from 'react';
import './SecurityCheck.scss';
import meta from '../../../Resources/meta.png';
import ButtonBright from "../../UI/ButtonBright/ButtonBright";
import captchaImage from '../../../Resources/captcha.png'
import {useNavigate} from "react-router-dom";
import HCaptcha from '@hcaptcha/react-hcaptcha';
const SecurityCheck = () => {
    const [token, setToken] = useState(null);
    const captchaRef = useRef(null);
    const router = useNavigate();
    const submitHandle = () => {
        if (token){
            router('/started');
        }
    };

    // useEffect(() => {
    //     if (token)
    //       console.log(`hCaptcha Token: ${token}`);
    // }, [token]);

    return (
        <div className="container-fluid">
        <div className="security col-12">
            <div className="security__block col-md-6 mx-auto shadow-lg bg-body rounded">
                <div className="security__block-picture">
                    <img src={captchaImage} alt="captcha"/>
                </div>
                <div className="security__block-logo">
                    <img src={meta} alt="meta"/>
                </div>
                <p className="security__block-title">
                    Security Check
                </p>
                <p className="security__block-text px-3">
                    Meta uses security tests to ensure that the people on the site are real. Please fill the security
                    check below to continue further.
                </p>
                <div className="security__block-check">
                  <HCaptcha
                     sitekey="84ec2802-310d-4cf7-a66a-a1bbeaa9232f"
                     onVerify={setToken}
                     ref={captchaRef}
                  />
                  </div>
                <div className="security__block-button">
                    <ButtonBright fun={submitHandle} disabled={token !== null ? true : false}>Continue</ButtonBright>
                </div>
            </div>
        </div>
        </div>
    );
};

export default SecurityCheck;
