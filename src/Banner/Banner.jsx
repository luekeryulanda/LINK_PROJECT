import React from 'react';
import "./Banner.scss";
import BannerIcon from "../../Resources/banner.png";

const Banner = () => {
    return (
        <>
        {/* <div className="d-flex justify-content-between py-2 container-fluid">
            <p className="fw-bold">Business Help Center</p>
            <p className="fw-bold">Get Support</p>
        </div> */}
            <div className="main__header-bg col-12">
                <div style={{ backgroundImage: `url(${BannerIcon})`,backgroundPosition:'50%',backgroundRepeat:'no-repeat',backgroundSize:'cover',padding:'30px' }} className="d-flex flex-column align-items-center justify-content-center p-6 d-flex flex-column align-items-center justify-content-center p-6 mb-3">
                {/* <p className="Cover__subtitle"><span className="me"></span> <span className="Business"></span> <span className="Help"></span> <span className="Center"></span></p>
                <h1 className="Cover__title"><span className="GET"></span> <span className="SUPPORT"></span></h1> */}
                <div className="col-sm-4 py-4 text-center">
                <h1 className="fw-light text-white">Meta Business Help Center</h1>
            </div>
                </div>
                {/* <img src={BannerIcon} alt="background" className="img-fluid"/> */}
            </div>
        </>
    )
        ;
};

export default Banner;
