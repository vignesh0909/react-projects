import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/styles.css'
// import { Button, Form, Col, Row } from 'react-bootstrap';
import axios from 'axios';
import Footer from '../Footer';
import { useEffect, useState } from 'react';

function UserProfile(props) {

    //const [userId, setUserId] = useState("");
    const [user, setUser] = useState({});
    

    useEffect(() => {
        const uId = localStorage.getItem('userId');
        //setUserId(uId)
        console.log(uId);
        axios.get('http://localhost:8000/users/' + uId)
            .then(result => {
                //console.log(result.data)
                setUser(result.data[0])
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
                <Link to="/userhome" className="m-2 navbar-brand font" >
                    WeCare
                </Link>
                <div className="navbar justify-content-end" id="navbarCollapse">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/userviewprofile" className="navfont text-white m-2 navbar-brand" >
                                View Profile
                            </Link>
                            <Link to="/userappointments" className="navfont text-white m-2 navbar-brand" >
                                My Appointments
                            </Link>
                            <Link to="/userhome" className="navfont text-white m-2 navbar-brand" >
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
                <div id="divLogin" className="mt-5 bgImage panel-body-login">
                    <div className="d-flex justify-content-center m-2">
                        <div className=''>
                            <br />
                            <h3>Name: {user.name}</h3>
                            <p>DOB: {user.dateOfBirth}</p>
                            <p>Ph. No: {user.mobileNumber}</p>
                            <p>Address: {user.city},{user.state},{user.country}</p>
                            <p>Pincode: {user.pincode}</p>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    </>)
}

export default UserProfile;