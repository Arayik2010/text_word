import React, { useState } from "react";
import AutoLayout from "../Layouts/autoLayout";
import { Layout } from "../Layouts/layout";
import Link from "next/link";

const Login = () => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('')

             
  const handlerAction = async (e)=>{
    e.preventDefault()
    try {
        await fetch("http://localhost:3001/login", {
          method: "post",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            email: userEmail,
            password: userPassword

          }),
        });
      
      } catch (error) {
        console.log(error);
      }
  } 
  return (
    <div>
      <form action="#" method="POST"  onSubmit={handlerAction} >
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            required
            onChange={(e) => setUserEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            required
            onChange={(e) => setUserPassword(e.target.value)}
          />
        </div>
        <input type="submit" />
      </form>
      <Link href={"/posts/register"}>Register</Link>
    </div>
  );
};

export default Login;
