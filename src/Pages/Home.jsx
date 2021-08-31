import React from 'react';

import backgroundcolorPrimary from '../Assets/Color'
import '../Assets/Style/home.css';
import BankInfo from '../components/BankInfo';
import BankServices from '../components/BankServices';

export default function Home() {
    return (
        <>
            <section id="home-card " >
                <div className="container-fluid my-1">
                    <div className="row">
                        <div className="col-lg-12 mx-auto " >
                            <BankInfo/>
                            <BankServices/>
                            <div className="row">
                                <div className="service mt-2" style={backgroundcolorPrimary}>
                                    <h1 className="card text-center" style={{ backgroundColor: '#2CD62C', border: "none" }}>Administrative</h1>
                                </div>
                                <div className="card-group">
                                    <div className="card mb-3 mx-2 my-1 col-xs-6">
                                        <div className="row g-0">
                                            <div className="col-md-4 py-2">
                                                <img src="https://picsum.photos/1200/500" className="img-fluid rounded-start" alt="profileimage" />
                                            </div>
                                            <div className="col-md-8">
                                                <div className="card-body">
                                                    <h5 className="card-title">Manager</h5>
                                                    <p className="card-text">Amrita Shrestha</p>
                                                    <p className="card-text">98XXXXXXXXXX</p>
                                                    <p className="card-text"><small className="text-muted">In-service since 2070</small></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card mb-3 my-1">
                                        <div className="row g-0">
                                            <div className="col-md-4 py-2">
                                                <img src="https://picsum.photos/1200/500" className="img-fluid rounded-start" alt="profileimage" />
                                            </div>
                                            <div className="col-md-8">
                                                <div className="card-body">
                                                    <h5 className="card-title">CEO</h5>
                                                    <p className="card-text">Amrita Shrestha</p>
                                                    <p className="card-text">98XXXXXXXXXX</p>
                                                    <p className="card-text"><small className="text-muted">In-service since 2070</small></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}
