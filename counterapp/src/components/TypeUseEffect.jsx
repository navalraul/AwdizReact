import { useEffect, useState } from "react";


function TypeUseEffect () {
    const [ counter, setCounter] = useState(0);
    const [ naval, setnaval] = useState(12);

    useEffect(() => {
        console.log("Inside UseEffect")
    });

    function addnaval() {
        setnaval((preValue) => preValue +1)
    }

    return(
        <div>
            <h1>Use Effect</h1>
            <h1>{counter}</h1>
            <button onClick={() => setCounter((preValue) =>preValue + 1 )}>Add counter</button>
            <h1>{ naval }</h1>
            <button onClick={addnaval}>Add Naval</button>
        </div>
    )
}

export default TypeUseEffect;

