import { createContext, useState } from "react";
import useStorage from "../utils/useStorage";

const AuthContext = createContext({
  token: null,
  setToken: () => {},
  user: null,
  setUser: () => {},
});

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState('');
  const [user, setUser] = useStorage("user");
  const [day, setDay] = useState(new Date());
  const [schedulings, setSchedulings] = useState([]);
  const [scheduling, setScheduling] = useState({
    user_id: "",
    date: "",
    workstation: "",
    office: "São Paulo",
  });
  const [roomScheduling, setRoomScheduling] = useState({
    user_id: "",
    date: "",
    room: "",
    office: "São Paulo",
    time_zone:""
  });
  const [roomSchedulings, setRoomSchedulings] = useState()

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
        roomScheduling,
        setRoomScheduling,
        roomSchedulings,
        setRoomSchedulings
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
