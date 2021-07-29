import React from 'react'
import LoginForm from '../../src/components/LoginForm'

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
    console.log(response);
    
    response.headers.forEach(console.log);
    
    return await response.json()
}

    return (
        <LoginForm submitHandler = {submitHandler}/>
    )
}
