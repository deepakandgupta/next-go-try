import React from 'react'
import RegistrationForm from '../../src/components/RegistrationForm'
import router from 'next/router';
import {register} from "../../src/helpers/handlers/auth"

export default function Register() {
    const submitHandler = async (name:string, email: string, password: string ) => {
        const response = await register(name, email, password);
        if(response.status < 300){
            router.push("login");
        }
        const res = await response.json()
        
        console.log(res);
    
    }

    return (
        <RegistrationForm submitHandler = {submitHandler}/>
    )
}