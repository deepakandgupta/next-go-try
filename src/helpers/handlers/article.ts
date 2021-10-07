import { backendURL } from "../../../constants/routes";

export const addArticle = async (title: string, content: string) => {
  const loginURL = `${backendURL}/article`;

  return await fetch(loginURL, {
    credentials: "include",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title: title, content: content }),
  });
  
};