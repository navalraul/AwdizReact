import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function TypeUseEffect3() {
    const [ counter, setCounter] = useState(0);
    const [ counter2, setCounter2] = useState(0);

    const router = useNavigate();


    useEffect (() => {
        console.log("Inside use Effect")

        if( counter2 == 10) {
            router('/')
        }
    },[counter])
    return(
        <div>
            <h2>Use Effect Type 3</h2>
            <h2>{counter}</h2>
            <button onClick={ () => setCounter((preValue) => preValue + 1)}>+1</button>
            <h2>{counter2}</h2>
            <button onClick={ () => setCounter2((preValue) => preValue + 1)}>+1</button>
        </div>
    )
}

export default TypeUseEffect3;