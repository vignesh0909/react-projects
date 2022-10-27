import Footer from '../Footer';
//import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Row } from 'react-bootstrap';
import '../../css/styles.css'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Auth from '../Auth';

function CoachLogin(props) {
    const [coachId, setCoachId] = useState("");
    const [password, setPassword] = useState("");
    const [mandatory, setMandatory] = useState(false);
    const [invalidCred, setInvalidCred] = useState("");
    const [message, setMessage] = useState("");
    const [formErrors, setFormErrors] = useState({
        passwordError: "",
        emptyFormError: "",
        coachIdError: ""
    })
    const navigate = useNavigate();

    const validateInput = (e) => {
        if (e.target.id === "formGridCoachId") {
            let cid = e.target.value;
            if (cid === "") {
                setFormErrors({ ...formErrors, coachIdError: "Required field" })
            } else {
                setFormErrors({ ...formErrors, coachIdError: "" })
            }
        }
        else if (e.target.id === "formGridPassword") {
            let pass = e.target.value;
            if (pass.length < 5 || pass.length > 10) {
                setFormErrors({ ...formErrors, passwordError: "Password should have 5 to 10 characters" })
            } else {
                setFormErrors({ ...formErrors, passwordError: "" });
            }
        }
    }

    const onLogin = (e) => {
        e.preventDefault()
        setMessage("");
        setInvalidCred("");

        if (coachId === "" || password === "") {
            setMandatory(true)
        } else {
            setMessage("");
            axios.get('http://localhost:8000/coaches/all')
                .then((res) => {
                    let value = res.data
                    var result = value.find(val => val.coachId === coachId && val.password === password)
                    if (result) {
                        localStorage.setItem('coachId', coachId)
                        Auth.login(() => {
                            console.log("login")
                            navigate('/coachhome');
                        })
                    }
                    else {
                        setInvalidCred("Invalid Credentials")
                    }
                }).catch((err) => {
                    console.log(err);
                })
        }
    }

    return (<>
        <nav className="navbar navbar-dark bg-dark">
            <a href="/home" className="m-2 navbar-brand font" >
                WeCare
            </a>
            <a href="/home" className="m-2 font navbar-brand" >
                Call Us:080 22333447
            </a>
        </nav>

        <div id='bg'>
            <div className="row justify-content-center m-3">
                <div id="divLogin" className="mt-5 bgImage panel-body-login">
                    <div className="d-flex justify-content-center m-2">
                        <h5 className='col-sm-6 col-md-6 col-xs-12'><span><img src={process.env.PUBLIC_URL + "images/coach.png"} className="mr-5 mx-auto card-img-sm text-right" alt="..." /></span>Login As Life Coach</h5>
                    </div>
                    <Form onSubmit={onLogin}>
                        <p className='text-danger'>{message}</p>
                        <Row className="mb-3">
                            <Form.Group controlId="formGridCoachId">
                                <Form.Label>Coach ID</Form.Label>
                                <Form.Control type="text" placeholder="Enter Coach Id" onChange={(e) => { setMandatory(false); validateInput(e); setCoachId(e.target.value) }} />
                                {/* <Form.Label className='text-danger'>{formErrors.emptyFormError}</Form.Label> */}
                                <Form.Label className='h6 text-danger'>{formErrors.nameError}</Form.Label>
                                {mandatory ? <Form.Label className='text-danger'>Form field cannot be empty</Form.Label> : null}
                            </Form.Group>

                            <Form.Group controlId="formGridPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Enter Password" onChange={(e) => { setMandatory(false); validateInput(e); setPassword(e.target.value) }} />
                                {/* <Form.Label className='text-danger'>{formErrors.emptyFormError}</Form.Label> */}
                                <Form.Label className='h6 text-danger'>{formErrors.passwordError}</Form.Label>
                                {mandatory ? <Form.Label className='text-danger'>Form field cannot be empty</Form.Label> : null}
                            </Form.Group>
                        </Row>
                        <div className="d-grid gap-2">
                            <Button variant="primary" size="lg" type="submit">
                                Login
                            </Button>
                        </div>
                        <p className='mt-3 text-danger'>{invalidCred}</p>
                    </Form>
                </div>

            </div>
        </div>
        <Footer className="foot" />
    </>)
}

export default CoachLogin;