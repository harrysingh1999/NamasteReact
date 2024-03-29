import React, { memo, useState } from 'react'

 function Optimization() {
    const[counter, setCounter] = useState(0)
  return (
    <div>
        <p>Value is: {counter} </p>
        <button onClick={() => setCounter(counter+1)}> Click </button>
    </div>
  )
}

export default memo(Optimization)