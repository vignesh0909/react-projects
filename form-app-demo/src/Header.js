import { Link, Outlet } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

function Header(){
    return(<>
        <nav className='m-5'>
            <Link to="home">Home</Link>
            &nbsp; &nbsp; &nbsp;
            <Link to="about-us">About</Link>
            &nbsp; &nbsp; &nbsp;
            <Link to="contact-us">Contact</Link>
            &nbsp; &nbsp; &nbsp;
            <Link to="employees">View Employees</Link>
            &nbsp; &nbsp; &nbsp;
            <Link to="login" className='btn btn-primary'>Login</Link>
            <Outlet />
        </nav>
    </>)
}

export default Header;