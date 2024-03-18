import React, { FC, ReactNode } from 'react'
import './styles.css'

interface Props {
  children: ReactNode;
  to: string;
}

const Link:FC<Props> = ({children, to, ...props}) => {
  const handleClick = (e: any) => {
    e.preventDefault();
    window.history.replaceState({},"",to)
  }

  return (
    <a onClick={handleClick} className='link' href={to} {...props}>
      {children}
    </a>
  )
}

export default Link;