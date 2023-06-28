import { useEffect, useState } from "react";


function TypeUseEffect2 () {
    const [ counter, setCounter] =useState(0);

    useEffect (() => {
        console.log("Inside useEffect")
    }, [])

    function addnew() {
        setCounter((preValue) => preValue +1)
    }
    return(
        <div>
            <h1>Use Effect2</h1>
            <h1>{ counter }</h1>
            <button onClick={addnew}>Add count</button>
        </div>
    )
}

export default TypeUseEffect2;