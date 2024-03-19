import React, { FC, ReactElement, ReactNode, createContext, useContext, useEffect, useState } from 'react'

interface SwitchContextType {
  setCurrentPathname: React.Dispatch<React.SetStateAction<string>>;
  currentPathname: string;
}
export const SwitchContext = createContext<SwitchContextType>({} as SwitchContextType);

interface SwitchProps {
  children: ReactElement[];
}

const Switch:FC<SwitchProps> = ({children}) => {
  const {pathname} = window.location
  const [currentPathname, setCurrentPathname] = useState(pathname)

  console.log(window.location.pathname, currentPathname)
  const onLocationChange=()=> {
    setCurrentPathname(window.location.pathname)
  }
  
  useEffect(() => {
    onLocationChange();
    window.addEventListener("navigate", onLocationChange);
    return () => window.removeEventListener("navigate", onLocationChange);
  },[])

  return (
    <SwitchContext.Provider value={{currentPathname,setCurrentPathname}}>
        {children}
    </SwitchContext.Provider>
  )
}
export default Switch;


interface RouteProps {
  children?: any;
  path: string;
  component: ()=> JSX.Element;
}

export const Route:FC<RouteProps> = ({path, component, children}) => {
  const {currentPathname} = useContext(SwitchContext);
  
  return currentPathname === path ? component() : null;
}


