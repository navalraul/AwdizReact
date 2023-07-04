

import React, { useState } from 'react'
import './DynaicClasses.css'

const DynamicClasses = () => {

    const [isButtonactive, setIsButtonActive] = useState(false);
    console.log(isButtonactive,"-isButtonactive")
    const handleButtonClick = () => {
        setIsButtonActive(!isButtonactive);
    }

  return (
    <button className={isButtonactive ? 'active-button' : 'inactive-button'} onClick={handleButtonClick}>
        Login
    </button>
  )
}

export default DynamicClasses;