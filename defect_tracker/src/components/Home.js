import { Link, Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/style.css'
import { useState, useEffect } from 'react';
import axios from 'axios';

function Home(props) {
    const [defects, setDefects] = useState([]);
    const [filteredDefects, setFilteredDefects] = useState([]);
    const [message, setMessage] = useState("");
    useEffect(() => {
        axios.get("http://localhost:4000/defects").then((res) => {
            setDefects(res.data);
        });
    }, []);

    const findDefectByCat = (cat) => {
        setMessage("")
        setFilteredDefects([])
        //let employeeId = parseInt(empId);
        //console.log(isNan(cat))
        if (cat === null) {
            setMessage("Please select Category")
        } else {
            axios
                .get("http://localhost:4000/defects")
                .then((res) => {
                    //console.log(res) 
                    let value = res.data;
                    var ans = [];
                    //var result = value.find(val => val.category === cat)
                    for (var i = 0; i < value.length; i++) {
                        if (value[i].category === cat) {
                            ans.push(value[i])
                        }
                    }
                    console.log(ans)
                    setFilteredDefects(ans)
                    console.log(filteredDefects)
                    //console.log(filteredDefects.length)

                });
        }
    }

    const findDefectByPrior = (pri) => {
        setMessage("")
        setFilteredDefects([])
        //let employeeId = parseInt(empId);
        //console.log(isNan(cat))
        if (pri === null) {
            setMessage("Please select Priority")
        } else {
            axios
                .get("http://localhost:4000/defects")
                .then((res) => {
                    //console.log(res) 
                    let value = res.data;
                    var ans = [];
                    //var result = value.find(val => val.category === cat)
                    for (var i = 0; i < value.length; i++) {
                        if (value[i].priority === pri) {
                            ans.push(value[i])
                        }
                    }
                    console.log(ans)
                    setFilteredDefects(ans)
                    console.log(filteredDefects)
                    //console.log(filteredDefects.length)

                });
        }
    }

    let cats = [...new Set(defects.map(cat => cat.category))]
    let priors = [...new Set(defects.map(pri => pri.priority))]
    priors.sort()

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
                <div className='m-3 border border-secondary'>
                    <h3>Filter Details</h3>
                    <h6 className='text-danger'>Search Results:{filteredDefects.length}</h6>
                    <form>
                        <div className="form-group m-3">
                            <label className="fw-bold" for="cars">Priority</label> &nbsp;&nbsp;
                            <select id="prior" name="priority" form="" onChange={(e) => { findDefectByPrior(e.target.value) }}>
                                <option value="">Select</option>
                                {
                                    priors.map(
                                        (pri) => {
                                            return <option key={pri} value={pri} >{pri}</option>
                                        }
                                    )
                                }
                            </select>
                        </div>
                        <div className="form-group m-3">
                            <label className="fw-bold" for="cars">Category</label> &nbsp;&nbsp;
                            <select id="cats" name="category" form="" onChange={(e) => { findDefectByCat(e.target.value) }}>
                                <option value="">Select</option>
                                {
                                    cats.map(
                                        (cat) => {
                                            return <option key={cat} value={cat} >{cat}</option>
                                        }
                                    )
                                }
                            </select>
                            <table className="m-3 table table-bordered table-secondary">
                                <thead className='table-primary'>
                                    <tr>
                                        <th className="bg-primary">Defect Category</th>
                                        <th className="bg-primary">Description</th>
                                        <th className="bg-primary">Priority</th>
                                        <th className="bg-primary">Status</th>
                                        <th className="bg-primary">Change Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredDefects.length > 0 ? (
                                        filteredDefects.map((defect) => {
                                            return (
                                                <tr key={defect.id} >
                                                    <td>{defect.category} </td>
                                                    <td>{defect.description}</td>
                                                    <td>{defect.priority}</td>
                                                    <td>{defect.status}</td>
                                                    {defect.status === "open" ? (
                                                        <td>Close Defect</td>
                                                    ) : (<td>No Action Pending</td>)}
                                                    {/* <td>
                                                <button onClick={() => deleteEmployee(employee.id)}><i className="fa fa-trash"></i></button>
                                            </td> */}
                                                </tr>
                                            );
                                        })
                                    ) : (
                                        <div>No data found</div>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </form>
                </div>
                <div>
                    <h2>Defect Details</h2>
                    <h6 className='text-danger'>Search Results:3</h6>
                    <table className="m-3 table table-bordered table-secondary">
                        <thead className='table-primary'>
                            <tr>
                                <th className="bg-primary">Defect Category</th>
                                <th className="bg-primary">Description</th>
                                <th className="bg-primary">Priority</th>
                                <th className="bg-primary">Status</th>
                                <th className="bg-primary">Change Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {defects.length > 0 ? (
                                defects.map((defect, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{defect.category}</td>
                                            <td>{defect.description}</td>
                                            <td>{defect.priority}</td>
                                            <td>{defect.status}</td>
                                            {defect.status === "open" ? (
                                                <td>Close Defect</td>
                                            ) : (<td>No Action Pending</td>)}
                                            {/* <td>
                                                <button onClick={() => deleteEmployee(employee.id)}><i className="fa fa-trash"></i></button>
                                            </td> */}
                                        </tr>
                                    );
                                })
                            ) : (
                                <div>No data found</div>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </center>
    </>);
}

export default Home;