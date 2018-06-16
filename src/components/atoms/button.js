import React from 'react'

export default function Button({ text = '', onClick, onSubmit }) {
  if (onSubmit) {
    return <button onSubmit={onSubmit}>{text}</button>
  } else if (onClick) {
    return <button onClick={onClick}>{text}</button>
  } else {
    return <button>{text}</button>
  }
}
