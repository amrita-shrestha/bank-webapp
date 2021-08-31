import React from 'react';
import loanimage from '../Assets/images/loan.jpg';
import backgroundcolorPrimary from '../Assets/Color'

export default function Services() {
    return (
        <>
          <div className="row">
                    <div className="service mt-2" style={backgroundcolorPrimary}>
                        <h1 className="card text-center" style={{ backgroundColor: '#2CD62C', border: "none" }}>Our Services</h1>
                    </div>
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        <div className="col">
                            <div className="card">
                                <img src={loanimage} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Deposite</h5>
                                    <p className="card-text">We offer different type of saving.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <img src={loanimage} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Loan</h5>
                                    <p className="card-text">We provide loan for different sector.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <img src={loanimage} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Remittance</h5>
                                    <p className="card-text">Get money from any part of the world.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  
        </>
    )
}
