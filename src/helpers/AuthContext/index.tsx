import { createContext, useEffect, useState } from "react";
import Cookies from "js-cookie";

const initialState = {
  isAuthenticated: false,
  name: "",
};

const defaultVal = {
  auth: initialState,
  setAuth: (auth: any) => {},
};

const AuthContext = createContext(defaultVal);

const AuthProvider = ({ children }) => {
  const [auth, setAuthState] = useState(initialState);

  const getAuthState = () => {
    const authDataString = Cookies.get("sessionID");
    console.log("This is get Auth State");
    console.log(authDataString);
    if (authDataString) {
      const newData = {
        isAuthenticated: true,
        name: "hello",
      };
      setAuthState(newData);
    } else {
      setAuthState(initialState);
    }
  };

  const setAuth = (auth) => {
    try {
      // Cookies.set("sessionID", "", {
      // 	expires: 7,
      // 	sameSite: "strict",
      // });

      setAuthState(auth);
    } catch (error) {
      Promise.reject(error);
    }
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
