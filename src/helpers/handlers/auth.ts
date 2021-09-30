import Cookies from 'js-cookie'
import { route } from 'next/dist/next-server/server/router';
import router from 'next/router';
import { routes } from '../../../constants/routes';

export const login = async (email: string, password: string) => {
    
    const backendURL = "http://www.localhost:5000/";
	const loginURL = `${backendURL}login`;
    console.log(loginURL);
    
    return await fetch(loginURL, {
        credentials: "include",
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({"username": email, "password": password})
    })
    
}

export const register = async (name:string, email: string, password: string) => {
    const backendURL = "http://www.localhost:5000/";
	const loginURL = `${backendURL}register`;
    console.log(loginURL);
    
    return await fetch(loginURL, {
        credentials: "include",
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({"name": name,"username": email, "password": password})
    })
    
}

export const logout = async () => {
    const backendURL = "http://localhost:5000";
    const url = `${backendURL}/logout`;
    console.log(url);

    const res = await fetch(url, {
        credentials: "include",
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
        },
        mode: "cors"
    });

    const data = await res.json()
    console.log(data);
    if(data){
        router.push(routes.Home);
    }
    
}