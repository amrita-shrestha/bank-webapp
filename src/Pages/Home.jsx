import React from 'react';

import '../Assets/Style/home.css';
import Adminstration from '../components/Adminstration';
import BankInfo from '../components/BankInfo';
import BankServices from '../components/BankServices';


export default function Home() {
    return (
        <>
                <div className="container-fluid my-1">
                    <div className="row">
                        <div className="col-lg-12 mx-auto " >
                            <BankInfo />
                            <BankServices />
                            <Adminstration/>
                        </div>
                    </div>
                </div>
        </>

    )
}
