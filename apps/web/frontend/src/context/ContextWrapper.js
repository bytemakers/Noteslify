import React, { useEffect, useState } from 'react';
import  GlobalContext  from './GlobalContext'
import { NotesProvider } from './NotesContext';

export default function ContextWrapper(props) {
  const [theme, setTheme] = useState("light");

 useEffect(()=>{
   const ToggleColor = () => setTheme("light" ? "dark" : "light")
 },[theme]);
 
  return (
    <GlobalContext.Provider value={{ theme,setTheme }}>
      <NotesProvider>
        {props.children}
      </NotesProvider>
    </GlobalContext.Provider>
  );
}