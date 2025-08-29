import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/LocalStorage'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState([])

  useEffect(() => {
    // ✅ Only seed once if no employees exist
    let stored = getLocalStorage()
    if (!stored.employees) {
      setLocalStorage()
      stored = getLocalStorage()
    }

    setUserData(stored.employees)
  }, [])

  return (
    <AuthContext.Provider value={[userData, setUserData]}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
