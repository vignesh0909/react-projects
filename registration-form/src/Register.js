import React from 'react'
import { useState } from 'react'
import './index.css'
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";

function Register() {

    const [employees, setEmployees] = useState([])
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("");
    const [role, setRole] = useState("");
    const [hobbies, setHobbies] = useState([]);
    const [message, setMessage] = useState("");
    const [success, setSuccess] = useState("");
    const [addFlag, setAddFlag] = useState(false);

    const handleInputChange = (event) => {
        // console.log(event.target.value)
        // console.log(event.target.name)
        const target = event.target;
        var value = target.value;
        //console.log(target.type)x

        if (target.type === 'checkbox') {
            if (target.checked) {
                console.log(value)
                setHobbies([...hobbies, target.value]);
                console.log(hobbies)
            } else {
                employees.hobbies.splice(value, 1);
            }
        } else if (target.type === 'select-one') {
            console.log(target.value)
            setRole(target.value)
        }
        else {
            setGender(value)
            console.log(gender)
        }

    }

    const handleSubmit = (e) => {
        console.log("hi")
        e.preventDefault();
        e.target.reset();
       }

    const addEmployee = (e) => {
        //console.log(e)
        e.preventDefault()
        e.target.reset()
        setSuccess("");
        // console.log(name)
        // console.log(email)
        // console.log(gender)
        // console.log(role)
        // console.log(hobbies)
        if (name === "" || email === "" || gender === "" || role === "" || hobbies === "") {
            setMessage("Form field cannot be empty")
        } else {
            setMessage("");
            setAddFlag(false);
            let newEmployee = {
                name: name,
                email: email,
                role: role,
                gender: gender,
                hobbies: hobbies
            }
            axios.post("http://localhost:4000/employees", newEmployee)
                .then((res) => {
                    setEmployees([...employees, res.data])
                    setSuccess(`New Employee with id:${res.data.id} is added`)

                });
            setName('')
            setEmail('')
            setGender('')
            setRole('')
            setHobbies([])
           
        }
    }


    return (<>
        <div>
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <br /><br />
                    <h3>Register Form</h3><br />
                    <form onSubmit={addEmployee}>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label>Name :</label>
                                <input type="text" class="form-control" placeholder="Enter your name" name="name" onChange={(e) => { setName(e.target.value); }} />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label>Email :</label>
                                <input type="email" class="form-control" placeholder="Enter your Email" name="email" onChange={(e) => { setEmail(e.target.value); }} />
                            </div>
                            <div className="form-group col-md-6">
                                <label>Gender :</label><br />
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="gender" id="inlineRadiom" value="male" onChange={handleInputChange} />
                                    <label className="form-check-label" for="inlineRadiom">Male</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="gender" id="inlineRadiof" value="female" onChange={handleInputChange} />
                                    <label className="form-check-label" for="inlineRadiof">Female</label>
                                </div>
                            </div>
                        </div>
                        <div className="form-group col-md-6">
                            <label>Role :</label>
                            <select className="form-control" name="city" onChange={handleInputChange}>
                                <option selected>Select Role</option>
                                <option value="SE">SE</option>
                                <option value="DSE">DSE</option>
                                <option value="PP">PP</option>
                            </select>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label>Hobbies :</label><br />
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" name="hobbies" id="inlineCheckboxh1" value="Reading" onChange={handleInputChange} />
                                    <label className="form-check-label" for="inlineCheckboxh1">Reading</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" name="hobbies" id="inlineCheckboxh2" value="Developing" onChange={handleInputChange} />
                                    <label className="form-check-label" for="inlineCheckboxh2">Developing</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" name="hobbies" id="inlineCheckboxh3" value="Desiging" onChange={handleInputChange} />
                                    <label className="form-check-label" for="inlineCheckboxh3">Desiging</label>
                                </div>
                            </div>
                        </div>
                        &nbsp;&nbsp;
                        <div className="form-row">
                            <div className="col-md-12 text-center">
                                <button type="submit" className="btn btn-primary"  >Submit</button>
                            </div>
                        </div>
                    </form>
                    <h4>{success}</h4>
                </div>
            </div>
        </div>
    </>)
}

export default Register;