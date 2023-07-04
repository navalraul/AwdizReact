
import React from 'react'


const Naval = ({ children }) => {
    return (
        <button>
            { children }
        </button>
    )
}

const ChildrenProp = () => {
  return (
    <div>
        <Naval> Login </Naval>
    </div>
  )
}

export default ChildrenProp;