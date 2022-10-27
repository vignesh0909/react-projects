import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [tickets, setTickets] = useState(0);
  const increment = () => {
    setTickets(tickets+1);
  }

  return (<>
    <button onClick={increment}>Cuttent : {tickets}</button>
  </>)
}
export default App