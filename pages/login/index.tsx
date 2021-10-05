import React, { useContext } from "react";
import LoginForm from "../../src/components/LoginForm";
import Cookies from "js-cookie";
import router from "next/router";
import { login } from "../../src/helpers/handlers/auth";
import { AuthContext } from "../../src/helpers/AuthContext";

export default function Login() {
  const authContext = useContext(AuthContext);

  const submitHandler = async (email: string, password: string) => {
    const data = await login(email, password);

    if (data) {
      if (!data.error) {
        authContext.setAuth({ isAuthenticated: true, name: "hello" });
      }
      return data;
    }
  };

  return <LoginForm submitHandler={submitHandler} />;
}
