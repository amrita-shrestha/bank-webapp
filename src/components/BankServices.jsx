import React from 'react'
import EmiCalculator from './EmiCalculator';
import Services from './Services';
export default function BankServices() {
    return (
        <>
            <div className="row home-servicesecond mt-2" style={{backgroundColor:"rgb(69, 150, 16)"}}>
            {/* style={{backgroundColor:"rgb(56,34,56)"}} */}
                <div className="col-6 ">
                    <EmiCalculator />
                </div>
                <div className="col-6">
                    <Services />
                </div>
            </div>
        </>
    )
}


