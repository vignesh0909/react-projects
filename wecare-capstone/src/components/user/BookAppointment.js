//import Footer from '../Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Col, Row } from 'react-bootstrap';
import '../../css/styles.css'
import { useState } from 'react';
import axios from 'axios';

function BookAppointment(props) {
    console.log(props);
    const [doa, setDoa] = useState("");
    const [slot, setSlot] = useState("");
    const [mandatory, setMandatory] = useState(false);
    const [formErrors, setFormErrors] = useState({
        doaError: "",
        slotError: "",
        emptyFormError: "",
        formResponse: ""
    })
    const [success, setSuccess] = useState(false);

    const validateInput = (e) => {
        console.log(e.target.value);
        if (e.target.id === "formGridDoa") {
            let doa = e.target.value;
            console.log(doa);
            if (doa) {
                setFormErrors({ ...formErrors, nameError: "" })
            } else {
                setFormErrors({ ...formErrors, nameError: "Name should have 3 to 50 characters" });
            }
        }
    }

    const onTrigger = (e) => {
        e.preventDefault();
        props.callback();
    }

    const onSubmit = (e) => {
        e.preventDefault()
        setSuccess("");
        //setMessage("");
        setFormErrors({});
        //console.log(name);

        if (doa === "" || slot === "") {
            setMandatory(true)
        } else {
            //setMessage("");
            let newApp = {
                DateOfAppointment: doa,
                slot: slot
            }
            axios.post('http://localhost:8000/users/booking/' + localStorage.getItem('userId') + '/' + props.data, newApp)
                .then((res) => {
                    setSuccess("")
                    setFormErrors({})
                    console.log(res.data)
                    console.log(res)
                    setSuccess(true);
                }).catch((err) => {
                    setFormErrors({ ...formErrors, formResponse: "There is an appointment in this slot already" })
                })
        }
    }

    return (<>

        {success ? (<>
            <div className='row justify-content-center m-3'>
                <div className='m-3 bgImage panel-body-appointment-success'>
                    <div className="row justify-content-center text-center">
                        <h6 className='m-3'>Your appointment is scheduled Successfully!</h6>
                        <div className='d-flex justify-content-center'>
                            <button className="mt-3 btn btn-info" onClick={onTrigger}>Go Back</button>
                        </div>
                        {/* <Footer /> */}
                    </div>
                </div>
            </div>

        </>) :
            <div className="row justify-content-center m-3">
                <div id="divLogin" className="m-3 bgImage panel-body-appointment">
                    <div className="text-center">
                        <h5 className='col-xs-12'>Proceed with your Appointment</h5>
                    </div>
                    <Form onSubmit={onSubmit}>
                        <p className='text-danger'>{formErrors.formResponse}</p>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridDoa">
                                <Form.Label>Date of Appointment</Form.Label>
                                <Form.Control
                                    type="date"
                                    name="datepic"
                                    placeholder="DateRange"
                                    value={doa}
                                    onChange={(e) => { setMandatory(false); setDoa(e.target.value); validateInput(e) }}
                                />
                                {mandatory ? <Form.Label className='text-danger'>Form field cannot be empty</Form.Label> : null}
                            </Form.Group>
                        </Row>
                        <Row className='mb-3'>
                            <Form.Group as={Col} controlId="formGridSlot">
                                <Form.Label>Preferred Slot</Form.Label>
                                <div key={'inline-radio'} className="mb-3">
                                    <Form.Check
                                        inline
                                        label="9 AM to 10 AM"
                                        name="gender"
                                        type="radio"
                                        id="male"
                                        value="9 AM to 10 AM"
                                        onChange={(e) => { setMandatory(false); setSlot(e.target.value); validateInput(e) }}
                                        required
                                    />
                                    <Form.Check
                                        inline
                                        label="10 AM to 11 AM"
                                        name="gender"
                                        type="radio"
                                        id="female"
                                        value="10 AM to 11 AM"
                                        onChange={(e) => { setMandatory(false); setSlot(e.target.value); validateInput(e) }}
                                        required
                                    />
                                    <Form.Check
                                        inline
                                        label="11 AM to 12 PM"
                                        name="gender"
                                        type="radio"
                                        id="female"
                                        value="11 AM to 12 PM"
                                        onChange={(e) => { setMandatory(false); setSlot(e.target.value); validateInput(e) }}
                                        required
                                    />
                                    <Form.Check
                                        inline
                                        label="2 PM to 3 PM"
                                        name="gender"
                                        type="radio"
                                        id="female"
                                        value="2 PM to 3 PM"
                                        onChange={(e) => { setMandatory(false); setSlot(e.target.value); validateInput(e) }}
                                        required
                                    />
                                    <Form.Check
                                        inline
                                        label="3 PM to 4 PM"
                                        name="gender"
                                        type="radio"
                                        id="female"
                                        value="3 PM to 4 PM"
                                        onChange={(e) => { setMandatory(false); setSlot(e.target.value); validateInput(e) }}
                                        required
                                    />
                                    {mandatory ? <Form.Label className='text-danger'>Form field cannot be empty</Form.Label> : null}
                                </div>
                            </Form.Group>
                        </Row>
                        <div className="d-grid gap-2">
                            <Button variant="success" size="lg" type="submit">
                                Confirm your Appointment
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>
        }
    </>)
}

export default BookAppointment;