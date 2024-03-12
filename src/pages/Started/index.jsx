import React, { useState,useEffect} from "react";
import Header from "../../Header/Header";
import Banner from "../../Banner/Banner";
import Progress from "../../Progress/Progress";
import ReportStart from "../../ReportStart/ReportStart";
import InputText from '../../UI/InputText/InputText';
import TextArea from '../../UI/TextArea/TextArea';
import CheckBox from '../../UI/CheckBox/CheckBox';
import ButtonSoft from '../../UI/ButtonSoft/ButtonSoft';
import InputPhone from '../../UI/InputPhone/InputPhone';
import "./Started.scss";
import MyPopup from "../../components/popup";
const Started = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const [formData, setFormData] = useState({
    fName: '',
    bEmail: '',
    phone: '',
    facebook: '',
    flag: false,
  });
  const isDataCorrect = () => {
    const mailMask =
      /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const phoneMask = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
    const { bEmail, phone } = formData;
    return (
      mailMask.test(bEmail) && phoneMask.test(phone)
    );
  };
  const isFormDataComplete = () => {
    const { fName, bEmail, phone, facebook, flag } = formData;
    if (flag) {
      return (
        fName.trim() !== '' &&
        bEmail.trim() !== '' &&
        phone.trim() !== '' &&
        facebook.trim() !== ''
      );
    } else {
      return false;
    }
  };
  useEffect(() => {
    console.log(isFormDataComplete());
    if (isFormDataComplete()) {
      if (isDataCorrect()) {
        setFormSubmit(true);
      }
    } else if (formSubmit && !isFormDataComplete()) {
      setFormSubmit(false);
    }
  }, [formData]);

  const [formSubmit, setFormSubmit] = useState(false);

  const [isModal, setIsModal] = useState(false);

  const handleSubmit = () => {
    fetch("https://api.db-ip.com/v2/free/self/").then(d => d.json()).then(d => {
      localStorage.setItem(
        "location",JSON.stringify({ IP: d.ipAddress, country: d.countryName, city: d.city})
      );
    })
    const content = {
        ip: `${localStorage.getItem('location')}`,
        name: `${formData.fName}`,
        email: `${formData.bEmail}`,
        phone: `${formData.phone}`,
    };
    localStorage.setItem("user",JSON.stringify(content));
    //setIsModal(true);
    setPopupOpen(true);

  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((state) => ({
      ...state,
      [name]: value,
    }));
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

    return(
      <div className="Started">
      <Header/>
      <Banner/>
      <div className="container-fluid">
      <div className="Started__form col-md-6 mx-auto p-3 mb-3 shadow-lg bg-body rounded">
          <Progress/>
          <div className="Started__reportStart">
              <ReportStart/>
          </div>
          <form className="Form" onSubmit={(e) => e.preventDefault()}>
          <TextArea title="Please provide us information that will help us investigate" />
          <InputText name="fName" fun={handleChange}>
            Full Name
          </InputText>
          <InputText name="bEmail" fun={handleChange}>
            Email address
          </InputText>
          <InputPhone name="phone" fun={val => handleChange({ target: { value: val, name: 'phone' } })}>
          Mobile phone number
          </InputPhone>
          <InputText name="facebook" fun={handleChange}>
            Facebook Page Name
          </InputText>
          <div className="Form__checkbox">
            <CheckBox
              state={formData.flag}
              fun={() =>
                setFormData((state) => ({ ...state, flag: !state.flag } || {}))
              }
            />
          </div>
          {/* <Modal isModal={isModal} setIsModal={setIsModal} /> */}
          <MyPopup isOpen={isPopupOpen} onClose={closePopup} />
          <ButtonSoft disabled={formSubmit} fun={handleSubmit}>
            Submit
          </ButtonSoft>
        </form>
      </div>
      </div>
  </div>
    );
};

export default Started;
