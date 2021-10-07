import React, { useContext } from "react";
import LoginForm from "../../src/components/LoginForm";
import Cookies from "js-cookie";
import router from "next/router";
import { login } from "../../src/helpers/handlers/auth";
import { AuthContext } from "../../src/helpers/AuthContext";

export default function Login() {
  const authContext = useContext(AuthContext);

  const submitHandler = async (email: string, password: string) => {
    try {
      const res = await login(email, password);
      const data = await res.json();

      if (res.status < 300) {
        const myAuthHeader = res.headers.get("Authorization");

        Cookies.set("sessionID", myAuthHeader, {
          expires: 7,
          sameSite: "strict",
        });

        authContext.setAuth({ isAuthenticated: true, name: data.name, username: data.username });

        router.push("dashboard");
      }
      return data;
    } catch (error) {
      return error;
    }
  };

  return <LoginForm submitHandler={submitHandler} />;
}
