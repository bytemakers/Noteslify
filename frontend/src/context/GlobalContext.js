import React from 'react'

const GlobalContext = React.createContext({
    theme: "light",
    setTheme: () => {}
})

export default GlobalContext
