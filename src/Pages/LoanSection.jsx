import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../Assets/Style/LoanSection.css';

const LoanSection = () => {
    const [statusMessage, setStatusMessage] = useState(" ");

    const sendEmail = (e) => {
        e.preventDefault();
        console.log(e.target);
        const statusMessage = document.querySelector('.status-message');
        const form = document.querySelector('#contact-form');
        console.log(form);

        emailjs.sendForm('service_jjmz8rk', 'template_flva0gc', e.target, 'user_2Csfrhh6MLVrJFLjfvAun')
            .then((result) => {
                console.log(result.text);
                setStatusMessage("Message sent!");
                statusMessage.className = "status-message success";
                setTimeout(() => {
                    statusMessage.className = 'status-message'
                }, 5000)
                form.reset();
            }, (error) => {
                console.log(error.text);
                setStatusMessage("Failed to send message! Please try again later.");
                statusMessage.className = "status-message failure";
                setTimeout(() => {
                    statusMessage.className = 'status-message'
                }, 5000)
            });
    }

    return (
        <>
            <div className="container ">
                <div className="my-5">
                    <h1 className="card text-center">LOAN APPLICATION FORM</h1>
                </div>
                <div className="container contact_div">
                    <div className="row">
                        <div className="col-md-6 col-10 mx-auto">
                            <form id="contact-form" onSubmit={sendEmail}>
                                <p className='status-message'>{statusMessage}</p>
                                <div className="mb-3">
                                    <label for="exampleFormControlInput1" className="form-label">FirstName</label>
                                    <input type="text" name="fname" className="form-control" id="exampleFormControlInput1" placeholder="Enetr your first name" required />
                                </div>
                                <div className="mb-3">
                                    <label for="exampleFormControlInput1" className="form-label">LastName</label>
                                    <input type="text" name="lname" className="form-control" id="lname" placeholder="Enter your last name" required />
                                </div>
                                <div className="mb-3">
                                    <label for="exampleFormControlInput1" className="form-label">Conact Number</label>
                                    <input type="text" name="contactNumber" className="form-control" id="contact" placeholder="Phone Number" required />
                                </div>
                                <div className="mb-3">
                                    <select className="form-select form-select-sm" aria-label=".form-select-sm example" name="loanCategory">
                                        <option selected>Select loan </option>
                                        <option value="Home Loan">Home Loan</option>
                                        <option value="Personal Loan">Personal Loan</option>
                                        <option value="Vehical Loan">Vehical Loan</option>
                                        <option value="Land Loan">Land Loan</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label for="exampleFormControlInput1" className="form-label">Email address</label>
                                    <input type="email" name="clientEmail" className="form-control" id="exampleFormControlInput1" placeholder="Enter your email address" required />
                                </div>
                                <div className="mb-3">
                                    <label for="exampleFormControlInput1" className="form-label">Address</label>
                                    <input type="text" name="clientAddress" className="form-control" id="exampleFormControlInput1" placeholder="Enter your address" required />
                                </div>
                                
                                <div className="mb-3">
                                    <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                                    <textarea className="form-control" name="detail" id="exampleFormControlTextarea1" rows="3" placeholder="Briefly explain " required></textarea>
                                </div>
                                <div className="col-12">
                                    <button className="btn btn-outline-primary" type="submit">Submit form</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
};

export default LoanSection;