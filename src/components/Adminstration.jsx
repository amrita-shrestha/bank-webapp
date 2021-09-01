import React from 'react'
import '../Assets/Style/Adminstration.css'

export default function Adminstration() {
    return (
        <>
            <div className="row mt-1" style={{backgroundColor:"rgb(69, 150, 16)"}}>
                <h1 className="text-center" style={{ backgroundColor: '#2CD62C', border: "none" }}>Administration</h1>
                <div class="container">
                    <div class="row row-cols-2  g-2 g-lg-3">
                        <div className="col">
                            <div class="row row-cols-1 row-cols-md-2 g-1">
                                <div className="col">
                                    <img src="https://picsum.photos/200" className="img-fluid rounded-start p-1 adminstration-img" alt="profileimage" />
                                </div>
                                <div className="col" >
                                    <h5 className="card-title">Manager</h5>
                                    <p className="card-text">Amrita Shrestha</p>
                                    <p className="card-text">98XXXXXXXXXX</p>
                                    <p className="card-text"><small className="text-white">In-service since 2070</small></p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div class="row row-cols-1 row-cols-md-2 g-1">
                                <div className="col">
                                    <img src="https://picsum.photos/200" className="img-fluid rounded-start p-1 adminstration-img" alt="profileimage" />
                                </div>
                                <div className="col">
                                <h5 className="card-title">CEO</h5>
                                        <p className="card-text">Amrita Shrestha</p>
                                        <p className="card-text">98XXXXXXXXXX</p>
                                        <p className="card-text"><small className="text-white">In-service since 2070</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
            </div>
        </>
    )
}
