//import Footer from '../Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Col, Row } from 'react-bootstrap';
import '../../css/styles.css'
import { useEffect, useState } from 'react';
import axios from 'axios';

function UpdateAppointment(props) {
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

    useEffect(() => {
        setDoa(props.data.DateOfAppointment);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // const validateInput = (e) => {
    //     e.preventDefault();
    //     console.log(e.target.value);
    //     if (e.target.id === "formGridDoa") {
    //         let doa = e.target.value;
    //         console.log(doa);
    //         if (doa) {
    //             setFormErrors({ ...formErrors, nameError: "" })
    //         } else {
    //             setFormErrors({ ...formErrors, nameError: "Name should have 3 to 50 characters" });
    //         }
    //     }
    // }

    const onTrigger = (e) => {
        e.preventDefault();
        props.callback();
    }

    const handleRadio = (e) => {
        console.log(e);
        if (e.target.id === "formGridSlot") {
            console.log("grid slot");
            setMandatory(false);
            setSlot(e.target.value)
        }
    }

    const onSubmit = (e) => {
        e.preventDefault()
        setSuccess("");
        console.log("submit call")
        setFormErrors({});

        console.log(doa);
        console.log(slot);
        let updatedApp = {
            DateOfAppointment: doa,
            slot: slot
        }
        console.log(updatedApp)
        axios.put('http://localhost:8000/booking/' + props.data.bookingId, updatedApp)
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

    return (<>

        {success ? (<>
            <div className='row justify-content-center m-3'>
                <div className='m-3 bgImage panel-body-appointment-success'>
                    <div className="row justify-content-center text-center">
                        <h6 className='m-3'>Your appointment is rescheduled Successfully!</h6>
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
                                    onChange={(e) => { setDoa(e.target.value) }}
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
                                        id="formGridSlot"
                                        value="9 AM to 10 AM"
                                        //checked={props.data.slot}
                                        onChange={handleRadio}
                                        required
                                    />
                                    <Form.Check
                                        inline
                                        label="10 AM to 11 AM"
                                        name="gender"
                                        type="radio"
                                        id="formGridSlot"
                                        value="10 AM to 11 AM"
                                        onChange={handleRadio}
                                        required
                                    />
                                    <Form.Check
                                        inline
                                        label="11 AM to 12 PM"
                                        name="gender"
                                        type="radio"
                                        id="formGridSlot"
                                        value="11 AM to 12 PM"
                                        // checked={props.data.slot === "11 AM to 12 PM"}
                                        onChange={handleRadio}
                                        required
                                    />
                                    <Form.Check
                                        inline
                                        label="2 PM to 3 PM"
                                        name="gender"
                                        type="radio"
                                        id="formGridSlot"
                                        value="2 PM to 3 PM"
                                        //checked={props.data.slot === "2 PM to 3 PM"}
                                        onChange={handleRadio}
                                        required
                                    />
                                    <Form.Check
                                        inline
                                        label="3 PM to 4 PM"
                                        name="gender"
                                        type="radio"
                                        id="formGridSlot"
                                        value="3 PM to 4 PM"
                                        //checked={props.data.slot === "3 PM to 4 PM"}
                                        onChange={handleRadio}
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

export default UpdateAppointment;