import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function TypeUseEffect4 () {
    const [counter, setCounter] = useState(0);
    const [counter2, setCounter2] = useState(10);
    const [counter3, setCounter3] = useState(20);

    const router = useNavigate();


    useEffect (() => {
        console.log("Inside use effect")
        if (counter == 2) {
            router('/home')
        }
        if (counter2 == 12) {
            router('/login')
        }
        if ( counter3 == 22) {
            router('/welcome')
        }
    },[counter2,counter3])

    return(
        <div>
            <h2> Use Effect Type 4</h2>
            <h3>{counter}</h3>
            <button onClick={ () => setCounter ((preValue) => preValue + 1 )}>Add by +1</button>
            <h3>{counter2}</h3>
            <button onClick={ () => setCounter2((preValue) => preValue+1)}>Add by +1</button>
            <h3>{counter3}</h3>
            <button onClick={ () => setCounter3((preValue) => preValue +1)}>Add by +1</button>
        </div>
    )
}

export default TypeUseEffect4;