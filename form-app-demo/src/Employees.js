import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const Employees = () => {
  const [employees, setEmployees] = useState([]);
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");
  const [addFlag, setAddFlag] = useState(false);
  const [update, setUpdate] = useState(false);
  const [empToBeUpdated, setEmpToBeUpdated] = useState({ id: 0, name: "", designation: "" });

  useEffect(() => {
    axios.get("http://localhost:4000/employees").then((res) => {
      setEmployees(res.data);
    });
  }, []);

  const addEmployee = (e) => {
    e.preventDefault()
    setSuccess("");
    if (name === "" || designation === "") {
      setMessage("Name or Designation cannot be empty")
    } else {
      setMessage("");
      setAddFlag(false);
      let newEmployee = {
        name: name,
        designation: designation
      }
      axios.post("http://localhost:4000/employees", newEmployee)
        .then((res) => {
          setEmployees([...employees, res.data])
          setSuccess(`New Employee with id:${res.data.id} is added`)
        });
      setName('')
      setDesignation('')
    }
  }

  const updateEmployee = (e) => {
    console.log("ho")
    e.preventDefault()
    setSuccess("");
    setMessage("");
    setAddFlag(false);
    axios.put("http://localhost:4000/employees/" + empToBeUpdated.id, empToBeUpdated)
      .then((res) => {
        let index = employees.findIndex((employee) => employee.id === empToBeUpdated.id)
        let temp = [...employees];
        temp[index] = res.data
        console.log(temp)
        setEmployees(temp)
        setMessage("Employee updated successfully! ")
      }).catch(() => {
        setMessage("Something went wrong!")
      }
      );
    setName('')
    setDesignation('')
  }

  const findEmployee = (empId) => {
    setMessage("")
    let employeeId = parseInt(empId);
    if (isNaN(employeeId)) {
      setMessage("Please select EMp Id")
    } else {
      axios
        .get("http://localhost:4000/employees/" + employeeId)
        .then((res) => {
          console.log(res.data)
          setEmpToBeUpdated(res.data)
        });
    }
  }

  const deleteEmployee = (empId) => {
    setSuccess("");
    let employeeId = parseInt(empId);
    axios
      .delete("http://localhost:4000/employees/" + employeeId)
      .then((res) => {
        axios.get("http://localhost:4000/employees").then((res) => {
          setEmployees(res.data);
        });
      });
  };

  return (
    <>
      <center>
        <h1>Employees Data</h1>
        <table style={{ width: "60%" }} className="table table-bordered">
          <thead>
            <tr>
              <th>EmpID</th>
              <th>Name</th>
              <th>Designation</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.length > 0 ? (
              employees.map((employee) => {
                return (
                  <tr key={employee.empId}>
                    <td>{employee.id}</td>
                    <td>{employee.name}</td>
                    <td>{employee.designation}</td>
                    <td>
                      <button onClick={() => deleteEmployee(employee.id)}><i className="fa fa-trash"></i></button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <div>No data found</div>
            )}
          </tbody>
        </table>

        <div className="row">
          <div className="col-md-8">
            <button className="btn btn-primary" onClick={() => setAddFlag(!addFlag)}>Add Employee</button>
            &nbsp;&nbsp;
            <button className="btn btn-primary" onClick={() => setUpdate(!addFlag)}>Update Employee</button>
            <br />
            <div className="text-success"> {success} </div>
            {
              addFlag ? (
                <form>
                  EmpName: <input type="text" value={name}
                    onChange={(e) => { setName(e.target.value); setMessage("") }} />
                  Designation: <input type="text" value={designation}
                    onChange={(e) => { setDesignation(e.target.value); setMessage("") }} /><br /><br />
                  <button className="btn btn-primary" onClick={addEmployee}>Add</button>

                  <div className="text-danger"> {message} </div>
                </form>
              ) : null
            }
          </div>
          <div className="col-md-2">
            <br />
            <div className="text-success"> {success} </div>
            {
              update ? (
                <form>
                  <p>Employee ID<br />
                    <select onChange={(e) => { findEmployee(e.target.value) }}>
                      <option value="">Select</option>
                      {
                        employees.map(
                          (employee) => {
                            return <option key={employee.id} value={employee.id} >{employee.id}</option>
                          }
                        )
                      }
                    </select> </p>
                  <p>Name <br />
                    <input value={empToBeUpdated.name} onChange={(e) => { setEmpToBeUpdated({ ...empToBeUpdated, name: e.target.value }) }} /></p>
                  <p>Designation<br />
                    <input value={empToBeUpdated.designation} onChange={(e) => { setEmpToBeUpdated({ ...empToBeUpdated, designation: e.target.value }) }} /></p>
                  <p> <button onClick={(e) => { updateEmployee(e) }}>Update</button></p>
                </form>
              ) : null
            }
            <p>{message}</p>
          </div>
        </div>
      </center>
    </>
  );
};
export default Employees;
