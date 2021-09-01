import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../Assets/Style/OpenAccount.css';

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
        {/* style={{ backgroundColor: "#33ff16" }} */}
            <div className="row" >
                <div className="col-12 mt-2">
                    <h1 className="d-flex justify-content-center open-account-header-font">OPEN ACCOUNT APPLICATION FORM</h1>
                </div>
                {/* style={{ backgroundColor: "#33dd16" }} */}
                <div className="row contact-info-div mx-1" >
                    <form id="contact-form" onSubmit={sendEmail}>
                        <p className='status-message'>{statusMessage}</p>

                        <div class="col">
                            <div class="row row-cols-1 row-cols-md-3 g-md-3 m-2">
                                <div class="col">
                                    <div class="p-3">
                                        <label for="exampleFormControlInput1" className="form-label" >First Name</label>
                                        <input type="text" name="fname" className="form-control open-account-inpuy-form" id="exampleFormControlInput1" placeholder="Enter first name" required /></div>
                                </div>
                                <div class="col">
                                    <div class="p-3">
                                        <label for="exampleFormControlInput1" className="form-label">Middle Name</label>
                                        <input type="text" name="mname" className="form-control open-account-inpuy-form" id="mname" placeholder="Enter middle name" /></div>
                                </div>
                                <div class="col">
                                    <div class="p-3"><label for="exampleFormControlInput1" className="form-label">Last Name</label>
                                        <input type="text" name="lname" className="form-control open-account-inpuy-form" id="lname" placeholder="Enter last name" required /></div>
                                </div>
                            </div>

                        </div>
                        <div class="col">
                            <div class="row row-cols-1 row-cols-md-2 g-md-3 m-2">
                                <div class="col">
                                    <div class="p-3">
                                        <label for="exampleFormControlInput1" className="form-label">Citizenship Number</label>
                                        <input type="text" name="citizenshipNumber" className="form-control open-account-inpuy-form" id="exampleFormControlInput1" placeholder="Enter citizenship number" required /></div>
                                </div>
                                <div class="col">
                                    <div class="p-3"><label for="exampleFormControlInput1" className="form-label">Profession</label>
                                        <input type="text" name="profession" className="form-control open-account-inpuy-form" id="exampleFormControlInput1" placeholder="Enter profession" required /></div>
                                </div>

                            </div>

                        </div>
                        <div class="col mb-2">
                            <div class="row row-cols-1 row-cols-md-2 g-md-3 m-2">
                                <div class="col">
                                    <div class="p-3">
                                        <select className="form-select form-select-sm" aria-label=".form-select-sm example" name="accountCategory" required>
                                            <option selected>select Account Category </option>
                                            <option value="Daily Saving">Daily Saving</option>
                                            <option value="Personal Saving">Personal Saving</option>
                                            <option value="Organization Account">Organization Account</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="p-3">
                                        <div className="row row-cols-3 open-account-inpuy-form">
                                            <div className="col">
                                                <input type="radio" id="genderChoice1" name="gender" value="Male" />
                                                <label for="genderChoice1">Male</label>
                                            </div>
                                            <div className="col">
                                                <input type="radio" id="genderChoice2" name="gender" value="Female" />
                                                <label for="genderChoice2">Female</label>
                                            </div>
                                            <div className="col">
                                                <input type="radio" id="genderChoice3" name="gender" value="Other" />
                                                <label for="genderChoice3">Other</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                        <div class="col mb-2">
                            <div class="row row-cols-1 row-cols-md-2 g-md-3 m-2">
                                <div class="col">
                                    <div class="p-3">
                                        <label for="exampleFormControlInput1" className="form-label">Permanent Address</label>
                                        <input type="text" name="permanentAddress" className="form-control open-account-inpuy-form" id="exampleFormControlInput1" placeholder="Enter your permanent address" required />
                                    </div>
                                </div>
                                <div class="col">

                                    <div class="p-3">
                                        <label for="exampleFormControlInput1" className="form-label">Current Address</label>
                                        <input type="text" name="currentAddress" className="form-control open-account-inpuy-form" id="exampleFormControlInput1" placeholder="Enter your permanent address" required />
                                    </div>

                                </div>

                            </div>

                        </div>
                        <div class="col mb-2">
                            <div class="row row-cols-1 row-cols-md-2 g-md-3 m-2">
                                <div class="col">
                                    <div class="p-3">
                                        <label for="exampleFormControlInput1" className="form-label">Contact Number</label>
                                        <input type="text" name="contactNumber" className="form-control open-account-inpuy-form" id="contact" placeholder="Phone Number" required />
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="p-3">
                                        <label for="exampleFormControlInput1" className="form-label">Email address</label>
                                        <input type="email" name="clientEmail" className="form-control open-account-inpuy-form" id="exampleFormControlInput1" placeholder="Enter your email address" />
                                    </div>
                                </div>

                            </div>

                        </div>
                        <div className="col-12 m-3 d-flex justify-content-center">
                            <button className="btn btn-success round-btn" type="submit">Open Account</button>
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}
