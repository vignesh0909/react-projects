import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import Auth from './Auth';

function Login() {
    const [state, setState] = useState({ name: '', password: '', auth: false, msg: '' });
    const navigate = useNavigate();

    const setEmpState = (e) => {
        const value = e.target.value;
        const field = e.target.name;
        console.log(value, field)
        setState({...state, [field]: value })
        state[field] = value;
        console.log(state.name);
        console.log(state);
    }

    const handleLogin = (e) => {
        e.preventDefault();
        console.log(state);
        setState({ msg: '' })
        if ((state.name === "admin") && (state.password === "admin@123")) {
            Auth.login(() => {
                console.log("login")
                navigate('/view');
            })
        }
        else {
            setState({ msg: 'Please enter valid credentials' })
        }
    }

    return (<>
        <form className="form" onSubmit={handleLogin} style={{ width: '30%', paddingLeft: '10px' }} >
            <div className="form-group">
                <br /><h5>Please login to view training</h5><br />
                <div className="form-group">
                    <input type="text" name="name"
                        placeholder="UserName" className="form-control"
                        value={state.name}
                        onChange={setEmpState} />
                </div>
                <div className="form-group">
                    <input type="password" className="form-control"
                        name="password" value={state.password}
                        placeholder="Password"
                        onChange={setEmpState} /></div>
                <br />
                <button type="submit" className="btn btn-primary"> Login </button>
            </div>
            <p disabled={!state.msg}>{state.msg}</p>
        </form>
    </>)
}
export default Login;
