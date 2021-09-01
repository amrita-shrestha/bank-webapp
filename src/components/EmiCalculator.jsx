import React, { useState } from 'react';
import '../Assets/Style/EmiCalc2.css';
// import '../Assets/Style/EmiCalculator.css'

function EmiCalculator() {
  const [userValues, setUserValues] = useState({
    amount: '',
    interest: '',
    years: '',
  });

  const [results, setResults] = useState({
    monthlyPayment: '',
    totalPayment: '',
    totalInterest: '',
    isResult: false,
  });

  const [error, setError] = useState('');

  const handleInputChange = (event) =>
    setUserValues({ ...userValues, [event.target.name]: event.target.value });

  const isValid = () => {
    const { amount, interest, years } = userValues;
    let actualError = '';
    if (!amount || !interest || !years) {
      actualError = 'All the values are required';
    }
    if (isNaN(amount) || isNaN(interest) || isNaN(years)) {
      actualError = 'All the values must be a valid number';
    }
    if (Number(amount) <= 0 || Number(interest) <= 0 || Number(years) <= 0) {
      actualError = 'All the values must be a positive number';
    }
    if (actualError) {
      setError(actualError);
      return false;
    }
    return true;
  };

  const handleSubmitValues = (e) => {
    e.preventDefault();
    if (isValid()) {
      setError('');
      calculateResults(userValues);
    }

  };

  const calculateResults = ({ amount, interest, years }) => {
    const userAmount = Number(amount);
    const calculatedInterest = Number(interest) / 100 / 12;
    const calculatedPayments = Number(years) * 12;
    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (userAmount * x * calculatedInterest) / (x - 1);

    if (isFinite(monthly)) {
      const monthlyPaymentCalculated = monthly.toFixed(2);
      const totalPaymentCalculated = (monthly * calculatedPayments).toFixed(2);
      const totalInterestCalculated = (
        monthly * calculatedPayments -
        userAmount
      ).toFixed(2);

      setResults({
        monthlyPayment: monthlyPaymentCalculated,
        totalPayment: totalPaymentCalculated,
        totalInterest: totalInterestCalculated,
        isResult: true,
      });
    }
    return;
  };

  const clearFields = () => {
    setUserValues({
      amount: '',
      interest: '',
      years: '',
    });

    setResults({
      monthlyPayment: '',
      totalPayment: '',
      totalInterest: '',
      isResult: false,
    });
  };

  return (
    // <div className='row calculator flex-row justify-content-center'>
    // style={{ backgroundColor: "#ffcc00" }}
    <div className="row m-sm-2" >
      <div className="mt-2 emi-title d-flex justify-content-center">
        <h1 className=" mt-1">EMI Calculator</h1>
      </div>
      <div className="emi-error-msg text-white" >
        <p className="flexable-font2 p-1">{error}</p>
      </div>
      <div className="emi-calculator">
        <form onSubmit={handleSubmitValues} id="emi-form">
          {!results.isResult ? (
            <div className="emi-form-items flex-row ">
              <fieldset >
                <legend className="emi-item flexable-font2 ">Loan Amount</legend>
                <input className="emi-input mb-2 mx-sm-2 flexable-font2"
                  type='text'
                  name='amount'
                  placeholder='Loan amount'
                  value={userValues.amount}
                  onChange={handleInputChange}
                />
              </fieldset >
              <fieldset >
                <legend className="emi-item flexable-font2">Interest </legend>
                <input className="emi-input mb-2 mx-sm-2 flexable-font2"
                  type='text'
                  name='interest'
                  placeholder='Interest'
                  value={userValues.interest}
                  onChange={handleInputChange}
                />
              </fieldset>
              <fieldset >
                <legend className="emi-item flexable-font2">Paying Period</legend>
                <input className="emi-input mb-2 mx-sm-2 flexable-font2"
                  type='text'
                  name='years'
                  placeholder='Years to repay'
                  value={userValues.years}
                  onChange={handleInputChange}
                />
              </fieldset>
              <div className="d-flex justify-content-center">
                <button className="btn btn-success btn-sm emi-calculate-btn flexable-font2" type="submit">Calculate</button>
              </div>
            </div>
          ) : (
            // <div className="form-items row" style={{ backgroundColor: "#ff11aa" }}>
            <div className="form-items row" >
              
              <div>
                <label id='label' className="emi-item flexable-font2">Loan amount</label>
                <input className="emi-input  mx-sm-2 flexable-font2" type='text' value={userValues.amount} disabled />
              </div>
              <div>
                <label className="emi-item flexable-font2" id='label'>Interest </label>
                <input className="emi-input mx-sm-2 flexable-font2" type='text' value={userValues.interest} disabled />
              </div>
              <div>
                <label className="emi-item flexable-font2" id='label'>Years to repay</label>
                <input className="emi-input mx-sm-2 flexable-font2" type='text' value={userValues.years} disabled />
              </div>
              {/* <div className="col-12" style={{ backgroundColor: "#a44" }}> */}
              <div className="col-12">
                <table className="table table-sm table-borderless mytable mb-0">
                {/* style={{ backgroundColor: "#ddaa" }} */}
                  <tbody>
                    <tr className="table-rows">
                      <td className="flexable-font2 table-rows">Monthly Payment</td>
                      <td className="flexable-font2">{results.monthlyPayment}</td>
                    </tr>
                    <tr className="table-rows" >
                      <td className="flexable-font2">Total Payment</td>
                      <td className="flexable-font2">{results.totalPayment}</td>
                    </tr>
                    <tr className="table-rows">
                      <td className="flexable-font2">Total Interest</td>
                      <td className="flexable-font2">{results.totalInterest}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="d-flex justify-content-center">
                <button className="btn btn-success btn-sm flexable-font2" onClick={clearFields} type="submit">Calculate</button>
              </div>
            </div>
          )}
        </form>
      </div>

    </div>
  );
}

export default EmiCalculator;