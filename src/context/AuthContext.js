import { createContext, useState } from "react";


const AuthContext = createContext({
  token: null,
  setToken: () => {},
  user: null,
  setUser: () => {},
});

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState('token');
  const [user, setUser] = useState("user");
  const [day, setDay] = useState(new Date());
  const [schedulings, setSchedulings] = useState([]);
  const [scheduling, setScheduling] = useState({
    user_id: "",
    date: "",
    workstation: "",
    office: "São Paulo",
  });

  return (
    <AuthContext.Provider
      value={{
        token,
        setToken,
        user,
        setUser,
        day,
        setDay,
        scheduling,
        setScheduling,
        schedulings,
        setSchedulings,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
