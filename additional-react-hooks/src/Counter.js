import React, { useRef, useState } from "react";
const Counter = () => {
    const [age, setAge] = useState(0)
    const counter = useRef(0);
    const handleClick = () => {
        counter.current = counter.current + 1;
        setAge(age + 1)
    }

    return (
        <div>
            <h1>{counter.current}</h1>
            <h1>{age}</h1>
            <button onClick={() => handleClick()}>Click</button>
        </div>
    );
};
export default Counter;
