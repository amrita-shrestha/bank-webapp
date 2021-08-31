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
    else{
      let errorMsg = "visible"
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
    <div className='row calculator flex-row justify-content-center'>

      <div className="emi-title d-flex justify-content-center">
        <h1 className="flexable-font px-3">EMI Calculator</h1>
      </div>
      <div className="emi-error-msg" >
        <p className="flexable-font2">{error}</p>
      </div>
      <div className="emi-calculator m-1">
        <form onSubmit={handleSubmitValues} id="emi-form">
          {!results.isResult ? (
            <div className="emi-form-items flex-row ">
              <fieldset className="row">
                <legend className="emi-item flexable-font2 ">Loan Amount</legend>
                <input className="emi-input mb-2 mx-sm-2 flexable-font2"
                  type='text'
                  name='amount'
                  placeholder='Loan amount'
                  value={userValues.amount}
                  onChange={handleInputChange}
                />
              </fieldset >
              <fieldset className="row">
                <legend className="emi-item flexable-font2">Interest </legend>
                <input className="emi-input mb-2 mx-sm-2 flexable-font2"
                  type='text'
                  name='interest'
                  placeholder='Interest'
                  value={userValues.interest}
                  onChange={handleInputChange}
                />
              </fieldset>
              <fieldset className="row">
                <legend className="emi-item flexable-font2">Paying Period</legend>
                <input className="emi-input mb-2 mx-sm-2 flexable-font2" 
                  type='text'
                  name='years'
                  placeholder='Years to repay'
                  value={userValues.years}
                  onChange={handleInputChange}
                />
              </fieldset>
              <input type='submit' className='button' />
            </div>
          ) : (
            <div className='form-items'>
              <h4 className="flexable-font2">
                Loan amount: {userValues.amount} <br /> Interest:{' '}
                {userValues.interest}% <br /> Years to repay: {userValues.years}
              </h4>
              <div>
                <label id='label' className="emi-item flexable-font2">Monthly Payment:</label>
                <input className="emi-input mb-2 mx-sm-2 flexable-font2"  type='text' value={results.monthlyPayment} disabled />
              </div>
              <div>
                <label className="emi-item flexable-font2" id='label'>Total Payment: </label>
                <input className="emi-input mb-2 mx-sm-2 flexable-font2" type='text' value={results.totalPayment} disabled />
              </div>
              <div>
                <label className="emi-item flexable-font2" id='label'>Total Interest:</label>
                <input className="emi-input mb-2 mx-sm-2 flexable-font2"  type='text' value={results.totalInterest} disabled />
              </div>
              <input
                className='button'
                value='Calculate again'
                type='button'
                onClick={clearFields}
              />
            </div>
          )}
        </form>
      </div>

    </div>
  );
}

export default EmiCalculator;