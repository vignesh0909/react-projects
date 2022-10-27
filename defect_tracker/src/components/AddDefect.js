import { Link, Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Col, Row } from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';

function AddDefect(props) {
    const [defects, setDefects] = useState([]);
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    //const [status, setStatus] = useState("");
    const [priority, setPriority] = useState("");
    const [message, setMessage] = useState("");
    const [success, setSuccess] = useState("");

    const handleInputChange = (event) => {
        const target = event.target;
        var value = target.value;
        if (target.type === 'select-one') {
            console.log(target.value)
            setCategory(target.value)
        }
    }

    const addDefect = (e) => {
        e.preventDefault()
        setSuccess("");
        console.log(category);
        console.log(description);
        console.log(priority);
        //console.log(category);
        if (category === "" || description === "" || priority === "") {
            setMessage("Name or Designation cannot be empty")
        } else {
            setMessage("");
            let newDefect = {
                category: category,
                description: description,
                priority: priority,
                status: "open"
            }
            axios.post("http://localhost:4000/defects", newDefect)
                .then((res) => {
                    setDefects([...defects, res.data])
                    setSuccess(`New defect is added`)
                });

        }
    }

    return (<>
        <center>
            <div className='m-3 border border-secondary'>
                <h1>Defect Tracker</h1>
                <nav className='mr-5'>
                    <Link style={{ textDecoration: 'none' }} to="\">Logout</Link>
                    &nbsp; &nbsp; &nbsp;
                    <Link style={{ textDecoration: 'none' }} to="add-defect">Add Defect</Link>
                    &nbsp; &nbsp; &nbsp;
                    <Link style={{ textDecoration: 'none' }} to="defects">View Defects</Link>
                    <Outlet />
                </nav>

                <div>
                    <p className='head-style text-bg-primary'>Add Defects</p>
                </div>
                <div id="divLogin" className="m-3 bgImage panel-body">
                    <Form horizontal="true" onSubmit={addDefect}>
                        <p>Select Category</p>
                        <Form.Select onChange={handleInputChange}>
                            <option>--Select--</option>
                            <option value="UI">UI</option>
                            <option value="Change Request">Change Request</option>
                            <option value="Functional">Functional</option>
                        </Form.Select>
                        <br />
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Enter Description</Form.Label>
                            <Form.Control as="textarea" rows={3} onChange={(e) => { setDescription(e.target.value); }} />
                        </Form.Group>
                        <p>Priority</p>
                        <Form.Control
                            type="text"
                            id="priority"
                            aria-describedby="priority"
                            onChange={(e) => { setPriority(e.target.value); }}
                        />
                        <div className='d-flex justify-content-center'>
                            <Form.Group >
                                <Col>
                                    <Button className="m-3 ml1 ms-4" variant="success" type="submit">Add Defect</Button>
                                </Col>
                            </Form.Group>
                        </div>
                    </Form>
                </div>
            </div>
        </center>
    </>);
}

export default AddDefect;