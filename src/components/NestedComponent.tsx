import React, { ReactNode } from 'react'

// ReactNode - Represents all of the things React can render.
interface NestedComponentProp {
    children: ReactNode
}

const NestedComponent = (props: NestedComponentProp) => {
  return (
    <div>
        <div>TOP OF NESTED COMPONENT</div>
            {props.children}
        <div>BOTTOM OF NESTED COMPONENT</div>
    </div>
  )
}

export default NestedComponent