
import React from "react";


const Map = (props) => {
    console.log(props.myUsers, "Here")
    return (
        <div>
            {props.kuchBhi && props?.kuchBhi.map((str) => (
                <div key={str}>
                    <h2>{str}</h2>
                </div>
            ))}

            <button onClick={ () => props?.setMyUsers([...props.myUsers, "Awdiz"])}>Add users</button>
        </div>
    )
}

export default Map;