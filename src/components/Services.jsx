import React from 'react';
import loanimage from '../Assets/images/loan.jpg';
import '../Assets/Style/Services.css';

export default function Services() {
    return (
        <>
            <div className="row" style={{ backgroundColor: "#ffcc00" }}>
                <div className=" mt-2 d-flex justify-content-center mt-2" style={{ backgroundColor: "#ff2400" }}>
                    <h1 className="card  service-text mt-1">Our Services</h1>
                </div>
                <div class="container mt-3 pt-2" style={{ backgroundColor: "#aa3300" }}>
                    <div class="row row-cols-2 g-1">
                        <div class="col">
                            <div class=" border bg-light">
                                <img src={loanimage} className="img-fluid service-image" alt="..." />
                                <div className="d-flex justify-content-center">
                                    <h5 className="flexable-font service-title">Deposite</h5>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class=" border bg-light">
                                <div className="service-card">
                                    <img src={loanimage} className="img-fluid service-image" alt="..." />
                                    <div className="d-flex justify-content-center">
                                        <h5 className="service-title  flexable-font">Loan</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="border bg-light">
                                <img src={loanimage} className="img-fluid service-image" alt="..." />
                                <div className="d-flex justify-content-center">
                                <h5 className="service-title flexable-font">Remittance</h5></div>
                                </div>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}
