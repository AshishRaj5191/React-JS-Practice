import React from 'react'

// Destructure Way
function MyComponent({caption}) {
  return (
    <div>
        <h1>This is MyComponent</h1>
        <button>{caption}</button> 
    </div>
  )
}

export default MyComponent