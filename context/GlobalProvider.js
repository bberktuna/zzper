import React, { createContext, useContext, useEffect, useState } from "react"

const GlobalContext = createContext()
export const useGlobalContext = () => useContext(GlobalContext)

const GlobalProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(true)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (1) {
      setIsLogged(true)
    } else {
      setIsLogged(false)
    }
  }, [])

  return (
    <GlobalContext.Provider
      value={{
        isLogged,
        setIsLogged,
        loading,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalProvider
