import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';
import landing from '../assets/landing.svg'

const Landing = () => {
  return (
    <>
      <div>
        {/* Navigation bar */}
        <nav className="navbar navbar-expand-sm navbar-light py-3">
          <div className="container ">
            <Link to="/" className="navbar-brand text-dark">
              <img width="100px" src={logo} alt="logo" />
            </Link>

            <button
              className="navbar-toggler ml-auto"
              type="button"
              data-bs-toggle="collapse"
              // data-target="#navmenu"
              href="#navmenu"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navmenu">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link
                    to="/signup_login/login/"
                    className="btn text-light btn-lg text-sm-start rounded-pill"
                    style={{
                      background: '#35CBBD',
                    }}
                  >
                    Login
                  </Link>
                  {/* <Link to="/signup_login/login/" className="nav-link text-dark">Log in</Link> */}
                </li>
                <li className="nav-item">
                  <Link
                    to="/signup_login/register/"
                    className="btn text-light btn-lg text-sm-start rounded-pill"
                    style={{
                      background: '#35CBBD',
                    }}
                  >
                    Register
                  </Link>
                  {/* <Link to="/signup_login/register/" className="nav-link text-dark">Register</Link> */}
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Hero section */}
        <section>
          <div className="container">
            <div className="d-sm-flex align-items-center justify-content-between">
              <div>
                <h1 class="font" style={{ color: '#000000' }}>
                  Welcome to{' '}
                  <span style={{ color: '#35CBBD' }}>
                    Health monitoring system
                  </span>{' '}
                </h1>
              </div>
            </div>

            <div className="container">
              <div className="d-sm-flex justify-content-left flex-row">
                <img
                  style={{
                    width: '600px',
                    height: '500px',
                  }}
                  className="img-fluid pt-5"
                  src={landing}
                  alt="image"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Landing;

// <Link  to="/signup_login/login/" >Sign in</Link>
//             <div><Link  to="/signup_login/register/" >Register</Link></div>
