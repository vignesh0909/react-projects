import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/styles.css'
import axios from 'axios';
import Footer from '../Footer';
import { useEffect, useState } from 'react';

function CoachSchedules(props) {
    const [flag, setFlag] = useState(false);
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        setFlag(false);
        axios.get('http://localhost:8000/coaches/booking/' + localStorage.getItem('coachId'))
            .then(result => {
                console.log(result.data)
                setAppointments(result.data)
            }).catch((err) => {
                setFlag(true);
                console.log(err.message);
            })
    }, []);

    const logout = () => {
        localStorage.clear();
    }

    return (<>
        <div id="bg-appointments">
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
                                My Schedules
                            </Link>
                            <Link to="/coachhome" className="navfont text-white m-2 navbar-brand" >
                                Call Us: 080 223347
                            </Link>
                            <Link to="/home" className="navfont text-white m-2 navbar-brand" onClick={logout}>
                                Logout
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
            {flag ? (<h1 className='text-center'>No bookings available</h1>)
                : (
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
                                        </div>
                                    </div>
                                </div>
                            </>))}
                        </div>
                    </div>
                )
            }
            <Footer />
        </div>
    </>)
}

export default CoachSchedules;