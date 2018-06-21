import * as React from 'react'

export type ButtonProps = {
  children: Node
  onClick?: () => void
  onSubmit?: () => void
}

export default function Button(props: ButtonProps) {
  if (props.onSubmit) {
    return <button onSubmit={props.onSubmit}>{props.children}</button>
  } else if (props.onClick) {
    return <button onClick={props.onClick}>{props.children}</button>
  } else {
    return <button>{props.children}</button>
  }
}
