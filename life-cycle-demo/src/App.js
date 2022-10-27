import './App.css';
import { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  const [name, setName] = useState("Jack")
  const [age, setAge] = useState(20)

  // useEffect(() => {
  //   console.log("use Effect called")
  // })

  // useEffect(() => {
  //   console.log("use Effect called")
  // }, [])

  useEffect(() => {
    console.log("use Effect called")
  }, [age, name])

  return (
    <div>
      <h1>Your Name is: {name}</h1><br />
      <h1>Your Age is: {age} </h1><br />
      <button className="btn btn-primary" onClick={() => setName("Tom")}>Update Name</button>&nbsp;&nbsp;
      <button className="btn btn-primary" onClick={() => setAge(age + 1)}>Increment Age</button>
    </div>
  );
}
export default App;
