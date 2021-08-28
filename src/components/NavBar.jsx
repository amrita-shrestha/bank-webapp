import React from 'react'
import { NavLink } from 'react-router-dom'
import backgroundcolorPrimary from '../Assets/Color'

export default function NavBar() {
    return (
        <>
            <section id="header">
                <div className="row">
                    <nav className="navbar navbar-expand-lg navbar-dark" style={backgroundcolorPrimary}>
                        <div className="container-fluid">
                            <a className="navbar-brand" href="/">Services</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ms-auto me-5 mb-2 mb-lg-0">
                                    <li className="nav-item rounded-pill">
                                        <NavLink exact activeClassName="active" className="nav-link" aria-current="page" to="/">Home</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink exact activeClassName="active" className="nav-link" aria-current="page" to="/openaccount">OpenAccount</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink exact activeClassName="active" className="nav-link" aria-current="page" to="/loansection">LoanSection</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </section>
        </>
    )

};
