const backendURL = "http://localhost:5000";

export const login = async (email: string, password: string) => {
  const loginURL = `${backendURL}/login`;

  return await fetch(loginURL, {
    credentials: "include",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username: email, password: password }),
  });
  
};

export const register = async (
  name: string,
  email: string,
  password: string
) => {
  const loginURL = `${backendURL}/register`;

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

  return await fetch(url, {
    credentials: "include",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    mode: "cors",
  });

};

export  const dashboard = async () => {
		const url = `${backendURL}/dashboard`;

		return await fetch(url, {
			credentials: "include",
			method: "GET",
			headers: {
				'Content-Type': 'application/json',
			},
			mode: "cors"
		});
}
