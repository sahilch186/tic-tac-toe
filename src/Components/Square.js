import React from 'react'

const Square = (props) => {
  return (
    <div
    onClick={props.onClick} className='square'>
        <h2>{props.value}</h2>
        {/* <p>{props.children}</p> */}
    </div>
  )
}

export default Square