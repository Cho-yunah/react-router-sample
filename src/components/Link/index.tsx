import React, { FC, ReactNode, useContext } from 'react'
import './styles.css'
import { SwitchContext } from '../../utils/Switch';

interface Props {
  children: ReactNode;
  to: string;
}

const Link:FC<Props> = ({children, to, ...props}) => {
  
  const navigationEvent = new PopStateEvent("navigate");
  
  const handleClick = (e: any) => {
    e.preventDefault();
    window.history.replaceState({},"",to)
    window.dispatchEvent(navigationEvent);
  }

  return (
    <a onClick={handleClick} className='link' href={to} {...props}>
      {children}
    </a>
  )
}

export default Link;