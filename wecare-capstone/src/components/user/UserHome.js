import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/styles.css'
//import Footer from '../Footer';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { Button } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import '../../css/styles.css'
import BookAppointment from './BookAppointment';
import Footer from '../Footer';

function UserHome() {
    const [coaches, setCoaches] = useState([]);
    const [currCId, setCurrCId] = useState("");
    const [flag, setFlag] = useState(false);
    //const [errorResponse, setErrorResponse] = useState([]);

    useEffect(() => {
        setFlag(false);
        axios.get('http://localhost:8000/coaches/all')
            .then(result => {
                console.log(result.data)
                setCoaches(result.data)
                //console.log(coach)
            }).catch((err) => {
                setFlag(true);
                //setErrorResponse(err.message);
                console.log(err.message);
            })
    }, []);

    const logout = () => {
        localStorage.clear();
    }

    const handleBooking = (e, data) => {
        e.preventDefault();
        setCurrCId("");
        setFlag(true);
        setCurrCId(data.coachId);
    }

    const handleCallback = (childData) =>{
        setFlag(false);
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
            {flag ? (
                <BookAppointment data={currCId} callback={handleCallback}/>
            ) : (
                <div className='row-wrapper'>
                    <Row className='m-3'>
                        {coaches.map(coach => (<>
                            {/* <CoachCard key={coach.coachId} coach={coach} /> */}
                            <Col xs={12} md={6} lg={3} xl={3} key={coach.coachId}>
                                <Card style={{ width: '18rem' }}>
                                    <CardMedia
                                        component="img"
                                        height="150"
                                        image={process.env.PUBLIC_URL + "images/coach.png"}
                                        alt="coach img"
                                    />
                                    <CardContent >
                                        <Typography gutterBottom variant="h5" component="div">{coach.name}</Typography>
                                        <Typography gutterBottom variant="h6" component="div">Coach Id : {coach.coachId}</Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Mobile No: {coach.mobileNumber}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Speciality: {coach.speciality}
                                        </Typography>
                                        <div className="mt-2 d-grid gap-2">
                                            <Button variant="primary" size="md" type="submit" onClick={(e) => handleBooking(e, coach)}>
                                                Book an Appointment
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Col>
                        </>))}
                    </Row>
                </div>
            )}
            <Footer />
        </div>
    </>)
}

export default UserHome;