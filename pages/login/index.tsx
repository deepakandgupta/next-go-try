import React from 'react'
import LoginForm from '../../src/components/LoginForm'
import Cookies from 'js-cookie'
import router from 'next/router';
import {login} from "../../src/helpers/handlers/auth"

export default function Login() {
const submitHandler = async (email: string, password: string ) => {
    const response = await login(email, password);
    
    if(response.status < 300){
    const myAuthHeader = response.headers.get("Authorization")
    
    Cookies.set('sessionID', myAuthHeader, { expires: 7, sameSite: "strict" })
    router.push("dashboard");
    }
    const res = await response.json()
    
    console.log(res);

}

    return (
        <LoginForm submitHandler = {submitHandler}/>
    )
}
