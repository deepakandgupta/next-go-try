import { createContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { dashboard } from "../handlers/auth";

interface AuthState{
  isAuthenticated: boolean,
  name: string,
  username: string
}

const initialState: AuthState = {
  isAuthenticated: false,
  name: "",
  username: "",
};

const defaultVal = {
  auth: initialState,
  setAuth: (auth: AuthState) => {},
};

const AuthContext = createContext(defaultVal);

const AuthProvider = ({ children }) => {
  const [auth, setAuthState] = useState(initialState);

  const getAuthState = async () => {
    const authDataString = Cookies.get("sessionID");
    if (authDataString) {
      const res = await dashboard();
      const data = await res.json();
      
      if (res.status <= 300) {
        const newData = {
          isAuthenticated: true,
          name: data.name,
          username: data.username
        };
        setAuth(newData);
      } else {
        setAuth(initialState);
      }
    } else {
      setAuth(initialState);
    }
  };

  const setAuth = (auth: AuthState) => {
    setAuthState(auth);
  };

  useEffect(() => {
    getAuthState();
  }, []);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext };
export default AuthProvider;
