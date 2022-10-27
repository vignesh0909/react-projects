import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import Button from 'react-bootstrap/Button';
// import Typography from "@mui/material/Typography";
// import Button1 from "@mui/material/Button";
// import DisplayBook from "./DisplayBook";
// import { useState } from 'react';

function App() {
  return (
    <>
      <h3 className="text-center">Navigation Bar</h3>
      {/* <!-- horizontal navbar --> */}
      <nav className="navbar navbar-expand-sm navbar-default navbar-light">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Contact Us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">About</a>
          </li>
        </ul>
      </nav><br />
      {/* <!-- vertical navbar --> */}
      <nav className="navbar bg-light">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Contact Us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">About</a>
          </li>
        </ul>
      </nav><br />
      {/* <!-- navbar dark in color : Toggleable navbar--> */}
      <nav className="navbar navbar-expand-md bg-dark navbar-dark">
        {/* <!-- replace bg-dark className with bg-primary, .bg-success, .bg-info, .bg-warning, .bg-danger, .bg-secondary, and .bg-light 
    to obtain navbar of diiferent colours -->
        <!-- Add a white text color to all links in the navbar with the .navbar-dark className, 
    or use the .navbar-light className to add a black text color. -->
        <!-- Brand --> */}
        <a className="navbar-brand" href="#">Navbar</a>

        {/* <!-- Toggler/collapsibe Button --> */}
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* <!-- Navbar links --> */}
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">Shop</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact Us</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container">I am a div with className .container</div>
      <div className="container-fluid">
        I am a div with className .container-fluid
      </div>
      <div className="mt-5 text-center row">
        <div className="col-lg-3 col-md-12 border border-info">Hello</div>
        <div className="col-lg-3 col-md-6 border border-info">Hello</div>
        <div className="col-lg-3 col-md-6 border border-info">Hello</div>
        <div className="col-lg-3 col-md-12 border border-info">Hello</div>
      </div>

      <div className="mt-5 text-center row">
        <div className="col border border-info">Hello</div>
        {/* <div className='col border border-info'>Hello</div> */}
        <div className="col border border-info offset-4">Hello</div>
      </div>

      <div className="mt-5 text-center row gx-2">
        <div className="col">
          <div className="col border border-info">Hello</div>
        </div>
        <div className="col">
          <div className="col border border-info">Hello</div>
        </div>
        <div className="col">
          <div className="col border border-info">Hello</div>
        </div>
        <div className="col">
          <div className="col border border-info">Hello</div>
        </div>
      </div>

      <div className="mt-3 p-3 text-center container">
        <h3>Display Headings</h3>
        <h5>Display headings stand out more than normal headings:</h5>
        <h3 className="display-1">Display 1</h3>
        <h3 className="display-2">Display 2</h3>
        <h3 className="display-3">Display 3</h3>
        <h3 className="display-4">Display 4</h3>
      </div>

      <h3 className="text-center">**Text Transformation**</h3>
      <div className="text-center">
        <p className="text-capitalize">text capitalize</p>
        <p className="text-uppercase">text UPPERCASE</p>
        <p className="text-lowercase">TEXT lowercase</p>
      </div>
      {/* <!--Text Emphasizing--> */}
      <h3 className="text-center">***Text Emphasis***</h3>
      <div className="text-center">
        <p className="text-success">I am a Success Text</p>
        <p className="text-primary">I am a Primary Text</p>
        <p className="text-info">I am a Info Text</p>
        <p className="text-warning">I am a Warning Text</p>
        <p className="text-danger">I am a Danger Text</p>
        <p className="text-muted">I am a Muted Text</p>
      </div>
      {/* <!--Text Alignment--> */}
      <h3 className="text-center">***Text Alignment***</h3>
      <div className="text-center">
        <p className="text-left">
          <b>Text left</b> gives a paragraph left alignment in which every first
          of a line touches the left edge but last word won't touch the right
          edge.
        </p>
        <p className="text-center">
          <b>.text-center</b>
        </p>
        <p className="text-right">
          <b>.text-right</b>
        </p>
        <p className="text-justify">
          <b>Text justify </b>uses full length of a line and fit the data into
          it. First word of a line is at the left edge and last word of the line
          touches right edge.
        </p>
      </div>

      <div className="mb-3 p-4 container text-center">
        <h2>Mern Stack list</h2>
        <ul className="list-group">
          <li className="list-group-item list-group-item-success">MongoDB</li>
          <li className="list-group-item list-group-item-secondary">
            Express Js
          </li>
          <li className="list-group-item list-group-item-primary">React</li>
          <li className="list-group-item list-group-item-warning">Node Js</li>
        </ul>
      </div>

      <div className="mb-3 p-4 container text-center">
        <h2>List group with linked items</h2>
        <ul className="list-group">
          <a
            className="list-group-item active"
            href="https://lex.infosysapps.com/"
          >
            MongoDB
          </a>
          <a
            className="list-group-item disabled"
            href="https://lex.infosysapps.com/"
          >
            Express Js
          </a>
          <a className="list-group-item" href="https://lex.infosysapps.com/">
            React
          </a>
          <a className="list-group-item" href="https://lex.infosysapps.com/">
            Node Js
          </a>
        </ul>
      </div>

      <div className="mb-3 p-4 text-center">
        <h2>Buttons in bootstrap</h2>
        <button className="btn btn-primary m-2">Tag Button</button>
        <button className="btn btn-primary btn-sm m-2">Small Button</button>
        <button className="btn btn-primary btn-md m-2">Medium Button</button>
        <button className="btn btn-primary btn-lg m-2">Large Button</button>
        <input
          type="button"
          value="Input Button"
          className="btn btn-danger m-2"
        />
        <a
          href="https://getbootstrap.com"
          className="btn btn-outline-warning m-2"
        >
          Anchor Button
        </a>

        <div className="row">
          <div className="col-md-4">
            <div className="d-grid">
              <button className="btn btn-info m-2">Button 1</button>
            </div>
          </div>
          <div className="col-md-4">
            <div className="d-grid gap-2">
              <button className="btn btn-success">Block Level Button</button>
              <button className="btn btn-success">Button 2</button>
              <button className="btn btn-success">Button 2</button>
            </div>
          </div>
          <div className="col-md-4">
            <div className="d-grid">
              <button className="btn btn-warning m-2">Button 3</button>
            </div>
          </div>
        </div>
      </div>

      <div className="p-5 container-fluid">
        <h3>Radio buttons:</h3>
        <h5>Vertical alignment</h5>
        <div className="form-check">
          <label className="form-check-label">
            <input className="form-check-input" type="radio" name="term" />I
            accept
          </label>
        </div>
        <div className="form-check">
          <label className="form-check-label">
            <input className="form-check-input" type="radio" name="term" />I
            decline
          </label>
        </div>
        <br />
        <h5>Horizontal alignment</h5>
        {/* <!-- form-check-inline  className is used to position the radio button horizontally --> */}
        <div className="form-check-inline">
          <label className="form-check-label" for="radio2">
            <input className="form-check-input" type="radio" name="term" />I
            accept
          </label>
        </div>
        <div className="form-check-inline">
          <label className="form-check-label">
            <input className="form-check-input" type="radio" name="term" />I
            decline
          </label>
        </div>
        <br />
        <hr />
        {/* <!-- Aligning Checkbox--> */}
        <h3>Checkbox:</h3>
        <h5>Vertical alignment</h5>
        <div className="form-check">
          <label className="form-check-label">
            <input className="form-check-input" type="checkbox" name="course" />
            JavaScript
          </label>
        </div>
        <div className="form-check">
          <label className="form-check-label">
            <input className="form-check-input" type="checkbox" name="course" />
            Python
          </label>
        </div>
        <br />
        <h5>Horizontal alignment</h5>
        {/* <!-- form-check-inline  className is used to position the check boxes horizontally --> */}
        <div className="form-check-inline">
          <label className="form-check-label">
            <input className="form-check-input" type="checkbox" name="course" />
            JavaScript
          </label>
        </div>
        <div className="form-check-inline">
          <label className="form-check-label">
            <input className="form-check-input" type="checkbox" name="course" />
            Python
          </label>
        </div>
      </div>

      <div className="mt-4 container text-center">
        <h2>Badges in bootstrap</h2>
        {/* <!--  Usage of Badges in various elements --> */}
        <br />
        <div className="row">
          <div className="col-md-2 offset-md-1">
            <h4>In a List</h4>
            <ul>
              <li>About us</li>
              <li>Careers</li>
              <li>Gallery <span className="badge  badge-dark">40</span></li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="col-md-2 offset-md-1">
            <h4 >In a Button</h4>
            <button type="button" className="btn btn-info">Gallery <span className="badge badge-dark">25</span></button>
          </div>
          <div className="col-md-2 offset-md-1">
            <h4>In a Link</h4>
            <h5><a href="https://getbootstrap.com">Products<span className="badge">1000</span></a></h5>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h1>Bootstrap Icons</h1>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
          <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
        </svg>
      </div>

      <div className="mt-3 container">
        <h1 className="text-center">Table Demo</h1>
        {/* <!-- Below given table:
        * Is bordered
        * Is striped
        * It has hover effects
        * It is compact
    * And Responsive --> */}
        <div className="table-responsive">
          <table className="table table-bordered table-hover table-striped table-sm">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Address</th>
              </tr></thead><tbody>
              <tr>
                <td>Bruce</td>
                <td>Wayne</td>
                <td>Gotham City</td>
              </tr>
              <tr>
                <td>Clark</td>
                <td>Kent</td>
                <td>Krypton</td>
              </tr>
              <tr>
                <td>Alan</td>
                <td>Scott</td>
                <td>New York City</td>
              </tr>
              <tr>
                <td>Barry</td>
                <td>Allan</td>
                <td>Central City</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* <!--Form without form-control class--> */}
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-4 offset-md-4">
            <h4>Without Form Control in bootstrap</h4><br />
            Name :<input type="text" /><br /><br />
            Place :<select>
              <option>Karnataka</option>
              <option>Odisha</option>
              <option>Delhi</option>
            </select><br /><br />
            About yourself: <textarea></textarea>
          </div>
        </div>
      </div><br />
      {/* <!--Form with form-control class--> */}
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-4 offset-md-4" >
            <h4>Using Form control</h4>
            Name :<input type="text" class="form-control" />
            Place :<select class="form-control">
              <option>Karnataka</option>
              <option>Odisha</option>
              <option>Delhi</option>
            </select>
            About yourself :<textarea class="form-control"></textarea>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-md-4 offset-md-4">
            <h3>Form - Without form group</h3>
            <div>
              <label>Username</label>
              <input type="text" class="form-control" />
            </div>
            <div>
              <label>Password</label>
              <input type="password" class="form-control" />
            </div>
            <button type="submit" class="btn btn-primary">Login</button>
          </div>
        </div>
        <br />
        <div class="row">
          <div class="col-md-4 offset-md-4" >
            <h3>Form Group</h3>
            <div class="form-group">
              <label>Username</label>
              <input type="text" class="form-control" />
            </div>
            <div class="form-group">
              <label>Password</label>
              <input type="password" class="form-control" />
            </div>
            <button type="submit" class="btn btn-primary">Login</button>
          </div>
        </div>
      </div>

      <div class="">
        {/* <!--Inline form--> */}
        <div class="row">
          <div class="col-md-4 offset-md-4">
            <h4>Inline form</h4>
            <form class="form-inline">
              <div class="form-group">
                <label for="username">Username</label>
                <input type="text" class="form-control" id="username" placeholder="Enter Username" />
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input type="password" class="form-control" id="password" placeholder="Enter Password" />
              </div>
              <div>
                <button type="submit" class="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
        <br />
        {/* <!--Vertical form - default alignment--> */}
        <div class="row">
          <div class="col-md-4 offset-md-4" >
            <h4>Vertical form</h4>
            <form>
              <div class="form-group">
                <label for="username">Username</label>
                <input type="text" class="form-control" id="username" placeholder="Enter Username" />
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input type="password" class="form-control" id="password" placeholder="Enter Password" />
              </div>
              <button type="submit" class="btn btn-primary">Login</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
