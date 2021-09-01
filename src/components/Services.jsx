import React from 'react';
import loanimage from '../Assets/images/needloan.jpg';
import remittaceimage from '../Assets/images/remittance.jpg';
import depositimage from '../Assets/images/deposit.jpg';
import '../Assets/Style/Services.css';

export default function Services() {
    return (
        <>
            {/*  style={{ backgroundColor: "#ffcc00" }} */}
            <div className="row">
                {/* style={{ backgroundColor: "#ff2400" }} */}
                <div className=" mt-2 d-flex justify-content-center mt-2" >
                    <h1 className="service-text mt-1">Our Services</h1>
                </div>
                {/* style={{ backgroundColor: "#aa3300" }} */}
                <div className="container mt-3 pt-2" >
                    <div className="row row-cols-2 g-2">
                        <div className="col">
                            <div className="d-flex justify-content-center">
                            <img src={depositimage} className="img-fluid service-image" alt="..." />
                            </div>
                                
                                <div className="d-flex justify-content-center">
                                    <h5 className="flexable-font service-title">Deposite</h5>
                                </div>
                            
                        </div>
                        <div className="col">
                        <div className="d-flex justify-content-center">
                            <img src={loanimage} className="img-fluid service-image" alt="..." />
                            </div>
                            <div className="d-flex justify-content-center">
                                <h5 className="service-title  flexable-font">Loan</h5>
                            </div>
                        </div>
                        <div className="col">
                        <div className="d-flex justify-content-center">
                            <img src={remittaceimage} className="img-fluid service-image" alt="..." />
                            </div>
                            <div className="d-flex justify-content-center">
                                <h5 className="service-title flexable-font">Remittance</h5></div>

                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}
