import Cookies from "js-cookie";
import router from "next/router";
import { routes } from "../../../constants/routes";

const backendURL = "http://localhost:5000";

export const login = async (email: string, password: string) => {
  const loginURL = `${backendURL}/login`;
  console.log(loginURL);

  const res = await fetch(loginURL, {
    credentials: "include",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username: email, password: password }),
  });

  if (res.status < 300) {
    const myAuthHeader = res.headers.get("Authorization");

    Cookies.set("sessionID", myAuthHeader, {
      expires: 7,
      sameSite: "strict",
    });

    router.push("dashboard");
  }

  const data = await res.json();
  console.log(data);
  return data;
};

export const register = async (
  name: string,
  email: string,
  password: string
) => {
  const loginURL = `${backendURL}/register`;
  console.log(loginURL);

  return await fetch(loginURL, {
    credentials: "include",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      username: email,
      password: password,
    }),
  });
};

export const logout = async () => {
  const url = `${backendURL}/logout`;

  const res = await fetch(url, {
    credentials: "include",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    mode: "cors",
  });

  if (res.status < 300) {
    Cookies.remove("sessionID", {
      expires: 7,
      sameSite: "strict",
    });
  }

  const data = await res.json();
  console.log(data);
  if (data) {
    router.push(routes.Home);
  }

  return data;
};
