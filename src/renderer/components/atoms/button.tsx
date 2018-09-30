import * as React from 'react'

export interface IButton {
  children: JSX.Element
  onClick?: () => void
  onSubmit?: () => void
}

export default function Button(props: IButton) {
  if (props.onSubmit) {
    return (
      <button className="button" onSubmit={props.onSubmit}>
        {props.children}
      </button>
    )
  } else if (props.onClick) {
    return (
      <button className="button" onClick={props.onClick}>
        {props.children}
      </button>
    )
  } else {
    return <button className="button">{props.children}</button>
  }
}
