import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/styles.css'
// import { Button, Form, Col, Row } from 'react-bootstrap';
// import { useState } from 'react';
// import axios from 'axios';
import Footer from './Footer';


function Home() {
    return (<>
        <div id="bg">
            <nav className="navbar navbar-dark bg-dark">
                <a href="/home" className="m-2 navbar-brand font" >
                    WeCare
                </a>
                <a href="/home" className="m-2 font navbar-brand" >
                    Call Us:080 22333447
                </a>
            </nav>
            <div className="row justify-content-center m-3">
                <h1 className='m-3 mb-4 font text-center'>We are at the heart of appropriate care</h1>
                <div className="col-3">
                    <div className="card text-white bg-dark">
                        <img src={process.env.PUBLIC_URL + "images/coach.png"} className="mt-3 mx-auto card-img-top" alt="..." />
                        <div className="card-body">
                            <div className="d-grid gap-2">
                                <Link to='/coachlogin' type='button' className="m-2 btn btn-primary">Login as a Coach</Link>
                                <Link to='/coachsignup' type='button' className="m-2 mb-4 btn btn-primary">Join as a Coach</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="card text-white bg-dark">
                        <img src={process.env.PUBLIC_URL + "images/user.png"} className="mt-3 mx-auto card-img-top1" alt="..." />
                        <div className="card-body">
                            <div className="d-grid gap-2">
                                <Link to='/userlogin' type='button' className="m-2 btn btn-primary">Login as a User</Link>
                                <Link to='/usersignup' type='button' className="m-2 mb-4 btn btn-primary">Join as a User</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    </>)
}

export default Home;