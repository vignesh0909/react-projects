import { useEffect, useState } from "react";

function Counter(props) {
    const [name, setName] = useState("Micky");
    useEffect(() => { console.log("Line 1") })
    useEffect(() => { console.log("Line 2") }, [])
    useEffect(() => { console.log("Line 3") }, [name])
    const setNameState = () => { console.log("Line 4"); setName("Jil");  }
    return (
        <> 
            <h1>This is the state {name}</h1>
            <button onClick={setNameState}>Change Name</button>
        </>
    )

}
export default Counter