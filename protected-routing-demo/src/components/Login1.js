import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import Auth from './Auth';

const Login1 = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        if (username === "admin" || password === "admin@123") {
            setSuccess("Login successful");
            Auth.login(() => {
                this.props.history.replace('/view');
            }
            )
            setError("");
        }
        else {
            setError("Enter username and password");
            setSuccess("");
        }
    }
    return (
        <>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Username:</label>
                        <input
                            style={{ width: "40%" }}
                            type="text"
                            id="name"
                            value={username}
                            onChange={(event) => setUsername(event.target.value)}
                            className="form-control"
                            placeholder="Enter Name"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="pwd">Password:</label>
                        <input
                            style={{ width: "40%" }}
                            type="password"
                            id="pwd"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            className="form-control"
                            placeholder="Enter password"
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Login
                    </button>
                    {success ? <div className="text-success">{success}</div> : null}
                    {error ? <div className="text-danger">{error}</div> : null}
                </form>
            </div>
        </>
    );
};
export default Login1;
