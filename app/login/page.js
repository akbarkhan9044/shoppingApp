"use client";
import React from 'react'
import { useRouter } from 'next/navigation';
export default function LoginPage() {
    const router=useRouter();

    const navigation=()=>{
        router.push("/login/loginstudent");
    }
  return (
    <div>
      <h1>Login Page</h1>
      <br/>
      <br/>
      <button onClick={()=>{navigation()}}>Go to Student Login Page</button>
      <br/>
      <br/>
      <button 
      onClick={()=>{router.push("/login/loginteacher")}}
      
      >Go to Teacher Login Page</button>
    </div>
  )
}
