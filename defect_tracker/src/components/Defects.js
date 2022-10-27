//import { Link, Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Defects(props) {
    return (<>
        <center>
        <div className='m-3 border border-secondary'>
                    <h3>Filter Details</h3>
                    <form>
                        <div className="form-group m-3">
                            <label className="fw-bold" for="cars">Priority</label> &nbsp;&nbsp;
                            <select id="prior" name="priority" form="" >
                                <option value="all">All</option>
                                <option value="all">All</option>
                            </select>
                        </div>
                        <div className="form-group m-3">
                            <label className="fw-bold" for="cars">Category</label> &nbsp;&nbsp;
                            <select id="prior" name="priority" form="">
                                <option value="all">All</option>
                            </select>
                        </div>
                    </form>
                </div>
        </center>
    </>);
}

export default Defects;