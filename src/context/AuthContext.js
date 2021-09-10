import { createContext, useState } from 'react'

const AuthContext = createContext({

});

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [day, setDay] = useState(new Date())
  const [scheduling, setNewScheduling] = useState({
    id: 1,
    user_id: 2,
    date: "2021-09-11",
    workstation: 4,
    office: ""
  })

  return (
    <AuthContext.Provider value={{ token, setToken, user, setUser, day, setDay, scheduling, setNewScheduling }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider }
