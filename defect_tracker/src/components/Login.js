import { Link, Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Col, Row } from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';

function Login(props) {
    const [defects, setDefects] = useState([]);
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    //const [status, setStatus] = useState("");
    const [priority, setPriority] = useState("");
    const [message, setMessage] = useState("");
    const [success, setSuccess] = useState("");

    const handleLoginChange = (event) => {
        const target = event.target;
        var value = target.value;
        if (target.type === 'select-one') {
            console.log(target.value)
            setCategory(target.value)
        }
    }

    const validateLogin = (e) => {
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

                <div>
                    <p className='head-style text-bg-primary'>Login</p>
                </div>
                <div id="divLogin" className={"mb-5 bgImage panel-body"}>
                    <Form horizontal="true" onSubmit={validateLogin}>
                        <Form.Group controlId="formHorizontalUsername" className="mb-2">
                            <Col sm={12}>
                                <Form.Control size="lg" name="username" className="input-lg" onChange={handleLoginChange} type="text" placeholder="Enter Username" autoComplete='off' />
                            </Col>
                        </Form.Group>

                        <Form.Group controlId="formHorizontalPassword" className="mb-2">
                            <Col sm={12}>
                                <Form.Control size="lg" name="password" className="input-lg" onChange={handleLoginChange} type="password" placeholder="Enter Password" autoComplete='off' />
                            </Col>
                        </Form.Group>

                        <div className='d-flex justify-content-center'>
                            <Form.Group >
                                <Col>
                                    <Button className="m-3 ml1 ms-4" variant="success" type="submit">Sign in</Button>
                                </Col>
                            </Form.Group>
                        </div>
                    </Form>
                </div>
            </div>
        </center>
    </>);
}

export default Login;