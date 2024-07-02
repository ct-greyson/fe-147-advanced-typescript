import React, {MouseEvent} from 'react'

// event is type MouseEvent
// MouseEvent is type HTMLButtonElement

interface ButtonProps {
    buttonClick: (event: MouseEvent<HTMLButtonElement>) => void
}

const Button = (props: ButtonProps) => {
  return (
    <button onClick={props.buttonClick}>Click Me</button>
  )
}

export default Button