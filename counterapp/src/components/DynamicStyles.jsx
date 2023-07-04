

import React, { useState } from 'react'

const DynamicStyles = () => {

    const [backgroundColor, setbackgroundColor] = useState('red')
    const handleButtonClick = () => {
        setbackgroundColor ('blue');
    };

    const styles = {
        backgroundColor: backgroundColor,
        color: 'white',
        padding: '10px',
        borderRadius: '5px',
        curser: 'pointer'
    }

  return (
    <div style={styles} onClick={handleButtonClick}>
        Click to me change background-color
    </div>
  )
}

export default DynamicStyles;