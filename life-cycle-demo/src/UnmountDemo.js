import './App.css';
import { useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
// import React from 'react';
// import ReactDOM from 'react-dom/client';

function UnmountDemo() {
    useEffect(() => {
        return () => console.log("component will unmount")
    }, [])
    return (
        <>
            <h1>Component mounted</h1>
        </>
    )
}
export default UnmountDemo;

