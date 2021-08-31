import React from 'react'

export default function BankInfo() {
    return (
        <>
            <div className="row flex-row justify-content-center home-page-topdisplay ">
                <div className="col-5 mt-5 pt-lg-0 d-flex flex-column justify-content-center home-sologan">
                    <h1 className="flexable-font ">
                        Today <strong className=" btn-outline-primary pe-none">INVESTMENT</strong>
                    </h1>
                    <h1 className="flexable-font">
                        Tomorrow <strong className=" btn-outline-primary pe-none">Success</strong>
                    </h1 >
                    <h2 className="flexable-font2">
                        <strong>JOIN WITH US TODAY</strong>
                    </h2>
                </div>
                <div className="col-6 my-2 ">
                    <img src="https://picsum.photos/seed/picsum/600/320" className=" bank-image " alt="home-img" />
                </div>
            </div>
        </>
    )
}

