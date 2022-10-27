import logo from './logo.svg';
import React from 'react'
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function App() {
  let count = 5; // variable
  let name = {  //object
    firstName: "John",
    lastName: "Doe",
  };
  //dynamic values 
  let highlight = {
    color: "blue",
    backgroundColor: "yellow",
  };
  var x = 25, y = 30

  let element = null;
  let isLoggedIn = false;

  if (isLoggedIn) {
    element = <h2>Welcome Admin</h2>;
  } else {
    element = <h2>Please Login</h2>;
  }

  var employees = [
    { empId: 1234, name: "John", designation: "SE" },
    { empId: 4567, name: "Tom", designation: "SSE" },
    { empId: 8910, name: "Kevin", designation: "TA" },
  ];

  var names = ["Ember", "BackboneJS", "ReactJS", "Jasmine"];


  return (
    <>
      <img src={logo} className="App-logo" alt="logo" />
      <h1> {3 + 4} </h1>
      <h1> {" Content to be displayed "} </h1>
      <h1>{count}</h1>
      <h2>{count * count}</h2>
      <h1>
        {name.firstName} {name.lastName}
      </h1>
      <h1 style={highlight}>Welcome to React</h1>
      <h3> {x} {">"}{y} {":"} {x > y ? 'True' : 'False'} </h3>
      {element}
      <p> {isLoggedIn ? <h2>Welcome Admin</h2> : <h2>Please Login</h2>} </p>
      <table>
        <thead>
          <tr>
            <th>EmpID</th>
            <th>Name</th>
            <th>Designation</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(employee => {
            return (<tr key={employee.empId}>
              <td>{employee.empId}</td>
              <td>{employee.name}</td>
              <td>{employee.designation}</td>
            </tr>)
          })
          }
        </tbody>
      </table>
      <div>Hello, {names} </div>
    </>
  )
}

export default App;
