import React from 'react'
import LoginForm from '../../src/components/LoginForm'
import Cookies from 'js-cookie'
import router from 'next/router';

export default function Login() {
const submitHandler = async (email: string, password: string ) => {
    const backendURL = "http://www.localhost:5000/";
	const loginURL = `${backendURL}login`;
    console.log(loginURL);
    
    const response = await fetch(loginURL, {
        credentials: "include",
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({"username": email, "password": password})
    })

    const myAuthHeader = response.headers.get("Authorization")
    console.log(myAuthHeader);
    
    Cookies.set('sessionID', myAuthHeader, { expires: 7 })

    router.push("dashboard");
    return await response.json()
}

    return (
        <LoginForm submitHandler = {submitHandler}/>
    )
}
