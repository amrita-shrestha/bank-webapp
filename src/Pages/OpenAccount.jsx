import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../Assets/Style/LoanSection.css';

export default function OpenAccount() {
    const [statusMessage, setStatusMessage] = useState(" ");

    const sendEmail = (e) => {
        e.preventDefault();
        console.log(e.target);
        const statusMessage = document.querySelector('.status-message');
        const form = document.querySelector('#contact-form');
        console.log(form);

        emailjs.sendForm('service_jjmz8rk', 'template_se1jias', e.target, 'user_2Csfrhh6MLVrJFLjfvAun')
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
                    <h1 className="card text-center">OPEN ACCOUNT APPLICATION FORM</h1>
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
                                    <div className="row">
                                        <div className="col">
                                            <input type="radio" id="genderChoice1"
                                        name="gender" value="Male" />
                                        <label for="genderChoice1">Male</label></div>
                                        <div className="col"><input type="radio" id="genderChoice2"
                                            name="gender" value="Female" />
                                        <label for="genderChoice2">Female</label></div>
                                        <div className="col"><input type="radio" id="genderChoice3"
                                            name="gender" value="Other" />
                                        <label for="genderChoice3">Other</label></div></div>
                                </div>
                                <div className="mb-3">
                                    <label for="exampleFormControlInput1" className="form-label">Conact Number</label>
                                    <input type="text" name="contactNumber" className="form-control" id="contact" placeholder="Phone Number" required />
                                </div>
                                <div className="mb-3">
                                    <select className="form-select form-select-sm" aria-label=".form-select-sm example" name="accountCategory" required>
                                        <option selected>select Account Category </option>
                                        <option value="Daily Saving">Daily Saving</option>
                                        <option value="Personal Saving">Personal Saving</option>
                                        <option value="Organization Account">Organization Account</option>
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
}
