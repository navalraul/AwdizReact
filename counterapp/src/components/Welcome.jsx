import { useState } from "react";


function Welcome () {

    const [naval, setCount] = useState("Njcnkj");
    console.log(naval, "- naval")
    return (
        <div>
            <h2>Welcome </h2>
            <button onClick={ ()=> setCount(true)}>Click to change data</button>
        </div>
    )
}

export default Welcome;