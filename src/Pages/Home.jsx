import React from 'react'
import loanimage from '../Assets/images/loan.jpg'

export default function Home() {
    return (
        <>
            <section id="home-card " >
                <div className="container-fluid my-1">
                    <div className="row">
                        <div className="col-lg-12 mx-auto " >
                            <div className="row" style={{
                                backgroundImage: `url("https://picsum.photos/1200/350/?blur")`
                                }}>
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column" >
                                    <h1>
                                        Today <strong className=" btn-outline-primary pe-none">INVESTMENT</strong> tomorrow <strong className=" btn-outline-primary pe-none">Success</strong>
                                    </h1>
                                    <h2 className="my-3">
                                        <strong>JOIN WITH US TODAY</strong>.
                                    </h2>

                                </div>
                                <div className="col-lg-6 order-1 order-lg-2 header-img my-2">
                                    <img src="https://picsum.photos/seed/picsum/600/320" className=" animated img-fluid img-thumbnail" alt="home-img" />
                                </div>
                            </div>
                            <div className="row">
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
                            <div className="row">
                                <div className="row row-cols-1 row-cols-md-3 g-4">
                                    <div className="col">
                                        <div className="card">
                                            <img src={loanimage} className="card-img-top" alt="..."/>
                                            <div className ="card-body">
                                            <h5 className ="card-title">Deposite</h5>
                                            <p className ="card-text">We offer different type of saving.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card">
                                            <img src={loanimage} className="card-img-top" alt="..."/>
                                            <div className ="card-body">
                                            <h5 className ="card-title">Loan</h5>
                                            <p className ="card-text">We provide loan for different sector.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card">
                                            <img src={loanimage} className="card-img-top" alt="..."/>
                                            <div className ="card-body">
                                            <h5 className ="card-title">Remittance</h5>
                                            <p className ="card-text">Get money from any part of the world.</p>
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
