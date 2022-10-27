import Footer from '../Footer';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Col, Row } from 'react-bootstrap';
import '../../css/styles.css'
import { useState } from 'react';
import axios from 'axios';

function UserSignUp() {
    const [users, setUsers] = useState([]);
    //const [newCoach, setNewCoach] = useState({});
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [mobile, setMobile] = useState(0);
    const [email, setEmail] = useState("");
    const [dob, setDob] = useState("");
    const [gender, setGender] = useState("");
    const [pinCode, setPincode] = useState(0);
    const [city, setCity] = useState(0);
    const [state, setState] = useState(0);
    const [country, setCountry] = useState("");
    const [flag, setFlag] = useState(false);
    const [mandatory, setMandatory] = useState(false);
    const [formErrors, setFormErrors] = useState({
        nameError: "",
        passwordError: "",
        dobError: "",
        mobileError: "",
        emailError: "",
        pincodeError: "",
        genderError: "",
        cityError: "",
        stateError: "",
        countryError: "",
        emptyFormError: "",
        formResponse: ""
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
            if (mobile.toString().length === 10) {
                setFormErrors({ ...formErrors, mobileError: "" })
            } else {
                setFormErrors({ ...formErrors, mobileError: "Mobile Number should have 10 digits" });
            }
        } else if (e.target.id === "formGridPincode") {
            let pin = e.target.value;
            if (pin.toString().length !== 6) {
                setFormErrors({ ...formErrors, pincodeError: "Pincode should have 6 digits" })
            } else {
                setFormErrors({
                    ...formErrors, pincodeError: ""
                });
            }
        } else if (e.target.id === "formGridCity") {
            let city = e.target.value;
            if (city.toString().length < 6 || city.toString().length > 20) {
                setFormErrors({ ...formErrors, cityError: "City should have 6 to 20 characters" })
            } else {
                setFormErrors({
                    ...formErrors, cityError: ""
                });
            }
        } else if (e.target.id === "formGridState") {
            let city = e.target.value;
            if (city.toString().length < 6 || city.toString().length > 20) {
                setFormErrors({ ...formErrors, stateError: "State should have 6 to 20 characters" })
            } else {
                setFormErrors({
                    ...formErrors, stateError: ""
                });
            }
        }
        else if (e.target.id === "formGridCountry") {
            let city = e.target.value;
            if (city.length < 6 || city.length > 20) {
                setFormErrors({ ...formErrors, countryError: "Country should have 6 to 20 characters" })
            } else {
                setFormErrors({
                    ...formErrors, countryError: ""
                });
            }
        }
        else if (e.target.id === "formGridEmail") {
            let email = e.target.value;
            var mailformat = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
            if (mailformat.test(email)) {
                setFormErrors({
                    ...formErrors, emailError: ""
                });
            }
            else {
                setFormErrors({
                    ...formErrors, emailError: "Mail should be a valid one"
                });
            }
        }
    }

    const onSubmit = (e) => {
        e.preventDefault()
        setSuccess("");
        //setMessage("");
        setFormErrors({});
        console.log(name);
        console.log(password);
        console.log(dob);
        console.log(gender);
        console.log(mobile);
        console.log(city);
        console.log(state);
        console.log(country);

        if (name === "" || password === "" || dob === "" || gender === "" || mobile === "" || email === "" || pinCode === ""
            || city === "" || state === "" || country === "") {
            setMandatory(true)
        } else {
            //setMessage("");
            let newUser = {
                name: name,
                password: password,
                dateOfBirth: dob,
                gender: gender,
                mobileNumber: mobile,
                pincode: pinCode,
                email: email,
                city: city,
                state: state,
                country: country
            }
            axios.post('http://localhost:8000/users', newUser)
                .then((res) => {
                    setSuccess("")
                    setFormErrors({})
                    console.log(res.data)
                    console.log(res)
                    setUsers([...users, res.data])
                    if (res.status === 201) {
                        setFormErrors({ ...formErrors, formResponse: res.data.message })
                    } else {
                        setSuccess(res.data.message)
                        setFlag(true)
                    }
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
                <h1>Account Created Successfully!</h1>
                <h4 className='text-success text-center m-2'>{success}</h4>
                <div className='d-flex justify-content-center'>
                    <Link to="/userlogin" className="m-3 btn btn-primary">Login Now</Link>
                </div>
                <Footer />
            </div>

        </>) :
            <div className="row justify-content-center m-3">
                <div id="divLogin" className="m-3 bgImage panel-body-usersignup">
                    <div className="d-flex justify-content-center">
                        <h3 className='col-sm-6 col-md-6 col-xs-12'><span><img src={process.env.PUBLIC_URL + "images/user.png"} className="mr-5 mx-auto card-img-sm text-right" alt="..." /></span>User Profile</h3>
                    </div>
                    <Form onSubmit={onSubmit}>
                        <p className='text-danger'>{formErrors.formResponse}</p>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Name" onChange={(e) => { setMandatory(false); validateInput(e); setName(e.target.value) }} />
                                <Form.Label className='h6 text-danger'>{formErrors.nameError}</Form.Label>
                                {mandatory ? <Form.Label className='text-danger'>Form field cannot be empty</Form.Label> : null}
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" onChange={(e) => { setMandatory(false); validateInput(e); setPassword(e.target.value) }} />
                                {mandatory ? <Form.Label className='text-danger'>Form field cannot be empty</Form.Label> : null}
                                <Form.Label className='h6 text-danger'>{formErrors.passwordError}</Form.Label>
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridMobile">
                                <Form.Label>Mobile Number</Form.Label>
                                <Form.Control type="number" placeholder="Enter Mobile Number" onChange={(e) => { setMandatory(false); validateInput(e); setMobile(e.target.value) }} />
                                {mandatory ? <Form.Label className='text-danger'>Form field cannot be empty</Form.Label> : null}
                                <Form.Label className='h6 text-danger'>{formErrors.mobileError}</Form.Label>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter Email" onChange={(e) => { setMandatory(false); validateInput(e); setEmail(e.target.value) }} />
                                {mandatory ? <Form.Label className='text-danger'>Form field cannot be empty</Form.Label> : null}
                                <Form.Label className='h6 text-danger'>{formErrors.emailError}</Form.Label>
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
                                    onChange={(e) => { setMandatory(false); setDob(e.target.value) }}
                                />
                                {mandatory ? <Form.Label className='text-danger'>Form field cannot be empty</Form.Label> : null}
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
                                        onChange={(e) => { setMandatory(false); setGender(e.target.value) }}
                                    />
                                    <Form.Check
                                        inline
                                        label="Female"
                                        name="gender"
                                        type="radio"
                                        id="female"
                                        value="F"
                                        onChange={(e) => { setMandatory(false); setGender(e.target.value) }}
                                    />
                                    {mandatory ? <Form.Label className='text-danger'>Form field cannot be empty</Form.Label> : null}
                                </div>
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridPincode">
                                <Form.Label>Pincode</Form.Label>
                                <Form.Control type="number" placeholder="Enter Pincode" onChange={(e) => { setMandatory(false); validateInput(e); setPincode(e.target.value) }} />
                                {mandatory ? <Form.Label className='text-danger'>Form field cannot be empty</Form.Label> : null}
                                <Form.Label className='h6 text-danger'>{formErrors.pincodeError}</Form.Label>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>City</Form.Label>
                                <Form.Control type="text" placeholder="Enter City" onChange={(e) => { setMandatory(false); validateInput(e); setCity(e.target.value) }} />
                                {mandatory ? <Form.Label className='text-danger'>Form field cannot be empty</Form.Label> : null}
                                <Form.Label className='h6 text-danger'>{formErrors.cityError}</Form.Label>
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>State</Form.Label>
                                <Form.Control type="text" placeholder="Enter State" onChange={(e) => { setMandatory(false); validateInput(e); setState(e.target.value) }} />
                                {mandatory ? <Form.Label className='text-danger'>Form field cannot be empty</Form.Label> : null}
                                <Form.Label className='h6 text-danger'>{formErrors.stateError}</Form.Label>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridCountry">
                                <Form.Label>Country</Form.Label>
                                <Form.Control type="text" placeholder="Enter Country" onChange={(e) => { setMandatory(false); validateInput(e); setCountry(e.target.value) }} />
                                {mandatory ? <Form.Label className='text-danger'>Form field cannot be empty</Form.Label> : null}
                                <Form.Label className='h6 text-danger'>{formErrors.countryError}</Form.Label>
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

export default UserSignUp;