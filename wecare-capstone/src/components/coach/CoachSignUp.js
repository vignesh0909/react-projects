import Footer from '../Footer';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Col, Row } from 'react-bootstrap';
import '../../css/styles.css'
import { useState } from 'react';
import axios from 'axios';

function CoachSignUp() {
    const [coaches, setCoaches] = useState([]);
    //const [newCoach, setNewCoach] = useState({});
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [dob, setDob] = useState("");
    const [gender, setGender] = useState("");
    const [mobile, setMobile] = useState("");
    const [speciality, setSpeciality] = useState("");
    const [message, setMessage] = useState("");
    const [flag, setFlag] = useState(false);
    const [formErrors, setFormErrors] = useState({
        nameError: "",
        passwordError: "",
        dobError: "",
        mobileError: "",
        specialityError: "",
        genderError: "",
        emptyFormError: ""
    })
    const [success, setSuccess] = useState("");

    const validateInput = (e) => {
        if (e.target.id === "formGridName") {
            let name = e.target.value;
            if (name.length >= 3 && name.length <= 50) {
                setFormErrors({ ...formErrors, nameError: "" })
            } else {
                setFormErrors({ ...formErrors, nameError: "Name should have 3 to 50 characters" });
            }
        }
        else if (e.target.id === "formGridPassword") {
            let pass = e.target.value;
            if (pass.length >= 5 && pass.length <= 10) {
                setFormErrors({ ...formErrors, passwordError: "" })
            } else {
                setFormErrors({ ...formErrors, passwordError: "Password should have 5 to 10 characters" });
            }
        } else if (e.target.id === "formGridMobile") {
            let mobile = e.target.value;
            if (mobile.length === 10) {
                setFormErrors({ ...formErrors, mobileError: "" })
            } else {
                setFormErrors({ ...formErrors, mobileError: "Mobile Number should have 10 digits" });
            }
        } else if (e.target.id === "formGridSpeciality") {
            let spcl = e.target.value;
            if (spcl.length >= 10 && spcl.length <= 50) {
                setFormErrors({ ...formErrors, specialityError: "" })
            } else {
                setFormErrors({
                    ...formErrors, specialityError: "Speciality should have 10 to 50 characters"
                });
            }
        }
    }

    const onSubmit = (e) => {
        e.preventDefault()
        setSuccess("");
        setMessage("");
        setFormErrors({});
        console.log(name);
        console.log(password);
        console.log(dob);
        console.log(gender);
        console.log(mobile);
        console.log(speciality);

        if (name === "" || password === "" || dob === "" || gender === "" || mobile === "" || speciality === "") {
            setFormErrors({ ...formErrors, emptyFormError: "Form field cannot be empty" })
        } else {
            setMessage("");
            let newCoach = {
                name: name,
                password: password,
                dateOfBirth: dob,
                gender: gender,
                mobileNumber: mobile,
                speciality: speciality
            }
            axios.post('http://localhost:8000/coaches', newCoach)
                .then((res) => {
                    setSuccess("")
                    setFormErrors({})
                    console.log(res.data)
                    console.log(res)
                    setCoaches([...coaches, res.data])
                    if (res.status === 201) {
                        setFormErrors({ ...formErrors, nameError: res.data.message })
                    } else {
                        setSuccess(res.data.message)
                        setFlag(true)
                    }
                }).catch((err) => {
                    throw(err);
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

        {flag ? (<>

            <div className="row justify-content-center text-center">
                <img src={process.env.PUBLIC_URL + "images/coach.png"} className="mt-5 mx-auto card-img-top2" alt="..." />
                <h1>You are a Coach now!</h1>
                <h4 className='text-success text-center m-2'>{success}</h4>
                <div className='d-flex justify-content-center'>
                    <Link to="/coachlogin" className="m-3 btn btn-primary">Login Now</Link>
                </div>
                <Footer />
            </div>

        </>) :
            <div className="row justify-content-center m-3">
                <div id="divLogin" className="m-3 bgImage panel-body">
                    <div className="d-flex justify-content-center">
                        <h3 className='col-sm-6 col-md-6 col-xs-12'><span><img src={process.env.PUBLIC_URL + "images/coach.png"} className="mr-5 mx-auto card-img-sm text-right" alt="..." /></span>Life Coach Profile</h3>
                    </div>
                    <Form onSubmit={onSubmit}>
                        <p className='text-danger'>{message}</p>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Name" onChange={(e) => { setFormErrors({ ...formErrors, emptyFormError: "" }); validateInput(e); setName(e.target.value) }} />
                                <Form.Label className='text-danger'>{formErrors.emptyFormError}</Form.Label>
                                <Form.Label className='h6 text-danger'>{formErrors.nameError}</Form.Label>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" onChange={(e) => { setFormErrors({ ...formErrors, emptyFormError: "" }); validateInput(e); setPassword(e.target.value) }} />
                                <Form.Label className='text-danger'>{formErrors.emptyFormError}</Form.Label>
                                <Form.Label className='h6 text-danger'>{formErrors.passwordError}</Form.Label>
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridDob">
                                <Form.Label>Date of Birth</Form.Label>
                                <Form.Control
                                    type="date"
                                    name="datepic"
                                    placeholder="DateRange"
                                    value={dob}
                                    onChange={(e) => { setFormErrors({ ...formErrors, emptyFormError: "" }); setDob(e.target.value) }}
                                />
                                <Form.Label className='h6 text-danger'>{formErrors.emptyFormError}</Form.Label>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridGender">
                                <Form.Label>Gender</Form.Label>
                                <div key={'inline-radio'} className="mb-3">
                                    <Form.Check
                                        inline
                                        label="Male"
                                        name="gender"
                                        type="radio"
                                        id="male"
                                        value="M"
                                        onChange={(e) => { setFormErrors({ ...formErrors, emptyFormError: "" }); setGender(e.target.value) }}
                                    />
                                    <Form.Check
                                        inline
                                        label="Female"
                                        name="gender"
                                        type="radio"
                                        id="female"
                                        value="F"
                                        onChange={(e) => { setFormErrors({ ...formErrors, emptyFormError: "" }); setGender(e.target.value) }}
                                    />
                                    <Form.Label className='h6 text-danger'>{formErrors.emptyFormError}</Form.Label>
                                </div>
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridMobile">
                                <Form.Label>Mobile Number</Form.Label>
                                <Form.Control type="number" placeholder="Enter Mobile Number" onChange={(e) => { setFormErrors({ ...formErrors, emptyFormError: "" }); validateInput(e); setMobile(e.target.value) }} />
                                <Form.Label className='text-danger'>{formErrors.emptyFormError}</Form.Label>
                                <Form.Label className='h6 text-danger'>{formErrors.mobileError}</Form.Label>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridSpeciality">
                                <Form.Label>Speciality</Form.Label>
                                <Form.Control type="text" placeholder="Enter Speciality" onChange={(e) => { setFormErrors({ ...formErrors, emptyFormError: "" }); validateInput(e); setSpeciality(e.target.value) }} />
                                <Form.Label className='text-danger'>{formErrors.emptyFormError}</Form.Label>
                                <Form.Label className='h6 text-danger'>{formErrors.specialityError}</Form.Label>
                            </Form.Group>
                        </Row>

                        <div className="d-grid gap-2">
                            <Button variant="success" size="lg" type="submit">
                                Register
                            </Button>
                        </div>
                    </Form>
                </div>
                <Footer />
            </div>
        }
    </>)
}

export default CoachSignUp;