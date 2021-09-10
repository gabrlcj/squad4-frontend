import { createContext, useState } from 'react'

const AuthContext = createContext({})

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null)
  const [user, setUser] = useState(null)
  const [day, setDay] = useState(new Date())

  return <AuthContext.Provider value={{ token, setToken, user, setUser, day, setDay }}>{children}</AuthContext.Provider>
}

export { AuthContext, AuthProvider }
