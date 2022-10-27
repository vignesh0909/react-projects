import React, { useRef } from "react";
const CustomTextInput = () => {
    const textInput = useRef(null);
    const focusTextInput = () => {
        textInput.current.focus();
    }
    return (
        <>
            Username:<input type="text" ref={textInput} /><br /><br />
            <button onClick={focusTextInput}>Focus the text input</button>
        </>
    );
}
export default CustomTextInput
