

import React from 'react'


function MyComponentWithWrapper ({ name }) {
    return (
        <div style={{ backgroundColor: 'lightgrey', padding: '20px'}}>
            {name}
        </div>
    )
}

function Wrapper() {
    return <MyComponentWithWrapper name= "Naval"/>
}

export default Wrapper;