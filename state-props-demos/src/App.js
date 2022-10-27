import './App.css';
import Employees from './Employees'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

import PropTypes from 'prop-types';

// function App() {
//   const [name, setName] = useState("Vignesh Doddi");
//   const [age, setAge] = useState(0);

//   const handleChange = () => {
//     setName("Vignesh Doddi")
//   }
//   return (
//     <>
//       <center>
//         <h1>Your Name is : {name} and Your age is : {age}</h1>
//         <br />
//         <button className="btn btn-success" onClick={() => setName("Doddi Vignesh")}>Click Me</button>
//         &nbsp;
//         &nbsp;
//         <button className="btn btn-primary" onClick={handleChange}>Click Me</button>
//       </center>
//     </>
//   );
// }

// // //for default props
// App.defaultProps = {
//   element1 : "Hello",
//   element2: "default value", 
// }

App.defaultProps = {
  productName: "iPhone",
  price: "36000",
  colors: ["Black"],
  availability: true,
  feedback: {
    rating: 4,
    comments: "good",
  },
  addToCart: function (e) {

  }
};

// //for propTypes
App.propTypes = {
  productName: PropTypes.string.isRequired,
  price: PropTypes.number,
  colors: PropTypes.array,
  availability: PropTypes.bool,
  feedback: PropTypes.object,
  addToCart: PropTypes.func
};

function App(props) {
  const [counter, setCounter] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const [employees, setEmployees] = useState([
    { empId: 1234, name: 'John', designation: 'SE' },
    { empId: 4567, name: 'Tom', designation: 'SSE' },
    { empId: 8910, name: 'Kevin', designation: 'TA' },
    { empId: 2354, name: 'Tom', designation: 'DSE' }
  ])

  const addEmployee = () => {
    setEmployees([...employees, { empId: 6789, name: "Sam", designation: "TL" }]);
  };

  return (
    <div>
      <div className="card w-25">
        <div className="card-body">
          <h5 className="card-title">{props.productName} - {props.colors} </h5>
          <p className="card-text">Price:
            {props.price}
          </p>
          {props.availability ? null : <p className="text-danger">Product out of stock</p>}
          <p>Rating: {props.feedback.rating}</p>
          <button onClick={props.addToCart} className="btn btn-primary">Add to Cart</button>
        </div>
      </div>
      <br/> <br/> <br/>
      <h1>{props.element1}</h1> {/*default prop1 */}
      <h1> {props.element2} </h1> {/*default prop2 */}
      <br/> <br/> <br/>
      Counter: {counter}<br />
      <button className="btn btn-primary" onClick={() => setCounter(() => counter + 1)}>Increment</button>
      <br/> <br/> <br/>
      <Employees employees={employees} addEmployee={addEmployee} />
    </div>
  );
}

export default App;
