import React from 'react'

export default function NavBar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <a className="navbar-brand" href="#"><strong>ABC</strong></a>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-center">
                            <li className="nav-item mx-3">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item mx-3">
                                <a className="nav-link" href="#">Menu</a>
                            </li>
                            <li className="nav-item mx-3">
                                <a className="nav-link" href="#">Gallery</a>
                            </li>
                            <li className="nav-item mx-3">
                                <a className="nav-link" href="#">Services</a>
                            </li>
                            <li className="nav-item mx-3">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item mx-3">
                                <a className="nav-link disabled" aria-disabled="true">Reserve</a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>


        </div>
    )
}
