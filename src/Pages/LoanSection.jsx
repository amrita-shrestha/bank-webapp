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
        {/* style={{ backgroundColor: "#33ff16" }} */}
            <div className="row" >
                <div className="col-12 mt-2">
                    <h1 className="d-flex justify-content-center loan-section-header-font">LOAN APPLICATION FORM</h1>
                </div>
                {/* style={{ backgroundColor: "#33dd16" }} */}
                <div className="row contact-info-div mx-1" >
                    <form id="contact-form" onSubmit={sendEmail}>
                        <p className='status-message'>{statusMessage}</p>

                        <div class="col">
                            <div class="row row-cols-1 row-cols-md-3 g-lg-3 m-2">
                                <div class="col">
                                    <div class="p-3">
                                        <label for="exampleFormControlInput1" className="form-label" >First Name</label>
                                        <input type="text" name="fname" className="form-control loan-section-input-font" id="exampleFormControlInput1" placeholder="Enter your first name" required /></div>
                                </div>
                                <div class="col">
                                    <div class="p-3">
                                        <label for="exampleFormControlInput1" className="form-label">Middle Name</label>
                                        <input type="text" name="mname" className="form-control loan-section-input-font" id="mname" placeholder="Enter your last name" /></div>
                                </div>
                                <div class="col">
                                    <div class="p-3"><label for="exampleFormControlInput1" className="form-label">Last Name</label>
                                        <input type="text" name="lname" className="form-control loan-section-input-font" id="lname" placeholder="Enter your last name" required /></div>
                                </div>
                            </div>

                        </div>
                        <div class="col">
                            <div class="row row-cols-1 row-cols-md-2 g-2 g-md-3 m-2">
                                <div class="col">
                                    <div class="p-3">
                                        <label for="exampleFormControlInput1" className="form-label">Citizenship Number</label>
                                        <input type="text" name="citizenshipNumber" className="form-control loan-section-input-font" id="exampleFormControlInput1" placeholder="Enter your citizenship number" required /></div>
                                </div>
                                <div class="col">
                                    <div class="p-3"><label for="exampleFormControlInput1" className="form-label">Profession</label>
                                        <input type="text" name="profession" className="form-control loan-section-input-font" id="exampleFormControlInput1" placeholder="Enter your profession" required /></div>
                                </div>

                            </div>

                        </div>
                        <div class="col mb-2">
                            <div class="row row-cols-1 row-cols-md-2 g-2 g-md-3 m-2">
                                <div class="col">
                                    <div class="p-3">
                                        <select className="form-select form-select-sm loan-section-input-font" aria-label=".form-select-sm example" name="loanCategory" required>
                                            <option value=" " selected>Select Option</option>
                                            <option value="Home Loan">Home Loan</option>
                                            <option value="Personal Loan">Personal Loan</option>
                                            <option value="Vehical Loan">Vehical Loan</option>
                                            <option value="Land Loan">Land Loan</option>
                                        </select></div>
                                </div>
                                <div class="col">
                                    <div class="p-3">
                                        <div className="row row-cols-3 loan-section-input-font">
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
                            <div class="row row-cols-1 row-cols-md-2 g-2 g-md-3 m-2">
                                <div class="col">
                                    <div class="p-3">
                                        <label for="exampleFormControlInput1" className="form-label">Permanent Address</label>
                                        <input type="text" name="permanentAddress" className="form-control loan-section-input-font" id="exampleFormControlInput1" placeholder="Enter permanent address" required />
                                    </div>
                                </div>
                                <div class="col">

                                    <div class="p-3">
                                        <label for="exampleFormControlInput1" className="form-label">Current Address</label>
                                        <input type="text" name="currentAddress" className="form-control loan-section-input-font" id="exampleFormControlInput1" placeholder="Enter current address" required />
                                    </div>

                                </div>

                            </div>

                        </div>
                        <div class="col mb-2">
                            <div class="row row-cols-1 row-cols-md-2 g-2 g-md-3 m-2">
                                <div class="col">
                                    <div class="p-3">
                                        <label for="exampleFormControlInput1" className="form-label">Contact Number</label>
                                        <input type="text" name="contactNumber" className="form-control loan-section-input-font" id="contact" placeholder="Phone Number" required />
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="p-3">
                                        <label for="exampleFormControlInput1" className="form-label">Email address</label>
                                        <input type="email" name="clientEmail" className="form-control loan-section-input-font" id="exampleFormControlInput1" placeholder="Enter your email address" />
                                    </div>
                                </div>

                            </div>

                        </div>
                        <div class="col mb-2">
                            <div class="row row-cols-1 row-cols-md-2 g-2 g-md-3 m-2">

                                <div class="col">
                                    <div class="p-3">
                                        <label for="exampleFormControlTextarea1" className="form-label">Add message[Optional]</label>
                                        <textarea className="form-control loan-section-input-font" name="additionalMsg" id="exampleFormControlTextarea1" rows="3" placeholder="Briefly explain "></textarea>
                                    </div>
                                </div>

                            </div>

                        </div>
                        <div className="col-12 m-3 d-flex justify-content-center">
                            <button className="btn btn-success round-btn" type="submit">Apply Loan</button>
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
};

export default LoanSection;