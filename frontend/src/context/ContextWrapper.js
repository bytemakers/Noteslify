import React, { useEffect, useState } from 'react';
import  GlobalContext  from './GlobalContext'

export default function ContextWrapper(props) {
  const [theme, setTheme] = useState("light");

 useEffect(()=>{
   const ToggleColor = () => setTheme("light" ? "dark" : "light")
 },[theme]);
 
  return (
    <GlobalContext.Provider value={{ theme,setTheme }}>
      {props.children}
    </GlobalContext.Provider>
  );
}