import React, {useState, useEffect, useRef} from 'react';
function MyComponent(){
    const inputRef1=  useRef(null);
    const inputRef2=  useRef(null);
    const inputRef3=  useRef(null);
    
    useEffect(() =>{
        console.log("COMPONENT RE-RENDERED");

    })
    function handleClick1(){
       inputRef1.current.focus();
       inputRef1.current.style.backgroundcolor= "yellow";
    }

    function handleClick2(){
        inputRef2.current.focus();
        inputRef2.current.style.backgroundcolor= "yellow";
     }

     function handleClick3(){
        inputRef3.current.focus();
        inputRef3.current.style.backgroundcolor= "yellow";
     }
    return(<div>
        <button onClick={handleClick1} >
            Click Me 1!
            </button><br/>
        <input ref={inputRef1} /><br />

        <button onClick={handleClick2} >
            Click Me 2!
            </button><br/>
        <input ref={inputRef2} /><br />

        <button onClick={handleClick3} >
            Click Me 3!
            </button><br/>
        <input ref={inputRef3} /><br />
    </div>)
}
export default MyComponent;
