import React from 'react'

export default function Text({ children, ...props }) {
  return (
    <p {...props}>
      {children}
    </p>
  )
};
