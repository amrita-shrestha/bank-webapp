import React from 'react'
import EmiCalculator from './EmiCalculator';
import Services from './Services';
export default function BankServices() {
    return (
        <>
            <div className="row home-servicesecond m-1">

                <div className="col-6 emi-section" style={{backgroundColor:"beige"}}>
                    <EmiCalculator />
                </div>
                <div className="col-6">
                    <Services />
                </div>
            </div>
        </>
    )
}


