 "use client";

import { useRef } from "react";
import { users } from "../data";



 export default function Signin(){
 

    let emailRef = useRef();
    let passwordRef = useRef();

    const saveUser = ()=>{
        let user = {
            email: emailRef.current.value,
            password: passwordRef.current.value,

        }
        users.push(user);
        console.log(user);
        
    }



    return <div>
     
        <input ref={emailRef} placeholder="Email"></input>
        <input ref={passwordRef} placeholder="Password"></input>
       <button onClick={saveUser}>submit</button>
      
       

    </div>

 }