import React from 'react'
import EmiCalculator from './EmiCalculator';
import Services from './Services';
export default function BankServices() {
    return (
        <>
            <div className="row home-servicesecond" style={{backgroundColor:"rgb(69, 150, 16)"}}>
                <div className="col-6 " style={{backgroundColor:"rgb(56,34,56)"}}>
                    <EmiCalculator />
                </div>
                <div className="col-6">
                    <Services />
                </div>
            </div>
        </>
    )
}


