import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/styles.css'
import { Button } from 'react-bootstrap';
import axios from 'axios';
import Footer from '../Footer';
import { useEffect, useState } from 'react';
import UpdateAppointment from './UpdateAppointment';

function UserAppointments(props) {
    const [flag, setFlag] = useState(false);
    const [updateSuccess, setUpdateSuccess] = useState(false);
    const [delBooking, setDelBooking] = useState("");
    const [appointments, setAppointments] = useState([]);
    const [appToBeUpdated, setAppToBeUpdated] = useState([]);

    useEffect(() => {
        setFlag("false");
        axios.get('http://localhost:8000/users/booking/' + localStorage.getItem('userId'))
            .then(result => {
                console.log(result.data)
                setAppointments(result.data)
            }).catch((err) => {
                setFlag("true");
                console.log(err.message);
            })
    }, [delBooking, updateSuccess]);

    const logout = () => {
        localStorage.clear();
    }

    const rescheduleAppointment = (e, data) => {
        e.preventDefault();
        setFlag("update");
        setAppToBeUpdated(data);
    }

    const cancelAppointment = (e, data) => {
        e.preventDefault();
        setDelBooking("");
        //console.log(delBooking);
        axios.delete('http://localhost:8000/booking/' + data.bookingId)
            .then(res => {
                setDelBooking(data.bookingId)
                console.log(res)
            })
    }

    const handleCallback = (childData) =>{
        setUpdateSuccess(true);
        setFlag("false");
    }

    return (<>
        <div id="bg-appointments">
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
            {flag === "true" ? (<h1 className='text-center'>No bookings available</h1>)
                : (flag === "false") ? (
                    <div>
                        <div className='m-3 row'>
                            {appointments.map(app => (<>
                                <div className='col-sm-6 col-md-4 col-lg-3 text-center'>
                                    <div id="divLogin" className="mt-3 bgImage panel-body-appointment1">
                                        <div className="m-2">
                                            <h4>Appointment Date: {app.DateOfAppointment}</h4>
                                            <h5>Slot: {app.slot}</h5>
                                            <h6>Booking Id: {app.bookingId}</h6>
                                            <h6>User Id: {app.userId}</h6>
                                            <h6>Coach Id: {app.coachId}</h6>
                                        </div>
                                        <div className="text-white mt-4 d-grid gap-2">
                                            <Button className='m-2' variant="info" size="md" onClick={(e) => { rescheduleAppointment(e, app) }}>
                                                Reschedule Appointment
                                            </Button>
                                            <Button className='m-2' variant="danger" size="md" onClick={(e) => { cancelAppointment(e, app) }}>
                                                Cancel Appointment
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </>))}
                        </div>
                    </div>
                ): (
                    <UpdateAppointment data={appToBeUpdated} callback={handleCallback}/>
                )
            }
            <Footer />
        </div>
    </>)
}

export default UserAppointments;