import React from 'react'

function MyArray(props) {
  return (
    <div>
        <h1>This is MyArray component</h1>
        <button>{props.array}</button>
    </div>
  )
}

export default MyArray