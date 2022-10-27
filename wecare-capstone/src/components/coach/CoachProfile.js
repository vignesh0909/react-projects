import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/styles.css'
// import { Button, Form, Col, Row } from 'react-bootstrap';
import axios from 'axios';
import Footer from '../Footer';
import { useEffect, useState } from 'react';

function CoachProfile(props) {

    const [coach, setCoach] = useState({});

    useEffect(() => {
        const CId = localStorage.getItem('coachId');
        axios.get('http://localhost:8000/coaches/' + CId)
            .then(result => {
                console.log(result.data)
                console.log(CId)
                setCoach(result.data)
            }).catch((err) => {
                console.log(err);
            })
    }, []);

    const logout = () => {
        localStorage.clear();
    }

    return (<>
        <div id="bg">
            <nav className="navbar navbar-dark bg-dark">
                <Link to="/coachhome" className="m-2 navbar-brand font" >
                    WeCare
                </Link>
                <div className="navbar justify-content-end" id="navbarCollapse">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/coachviewprofile" className="navfont text-white m-2 navbar-brand" >
                                View Profile
                            </Link>
                            <Link to="/coachschedules" className="navfont text-white m-2 navbar-brand" >
                                My schedules
                            </Link>
                            <Link to="/home" className="navfont text-white m-2 navbar-brand" >
                                Call Us: 080 223347
                            </Link>
                            <Link to="/home" className="navfont text-white m-2 navbar-brand" onClick={logout}>
                                Logout
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="row justify-content-center m-3">
                <div id="divLogin" className="mt-5 bgImage panel-body-appointment-success">
                    <div className="d-flex justify-content-center m-2">
                        <img src={process.env.PUBLIC_URL + "images/coach.png"} className="mr-5 mx-auto card-img-coachprofile" alt="..." />
                        <div className=''>
                            <br />
                            <h5>Coach Id: {coach.coachId}</h5>
                            <h6>Name: {coach.name}</h6>
                            <h6>DOB: {coach.dateOfBirth}</h6>
                            <h6>Ph. No: {coach.mobileNumber}</h6>
                            <h6>Speciality: {coach.speciality}</h6>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    </>)
}

export default CoachProfile;