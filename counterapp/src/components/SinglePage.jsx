import React from "react";
import { useParams } from "react-router-dom";


function SinglePage () {
    const data = useParams();
    console.log(data, "data")

    return(
        <div>
            Singlepage 
            <h2>{data.id && data.id}</h2>
        </div>
    )
}

export default SinglePage;