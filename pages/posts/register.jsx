import AutoLayout from "../../components/Layouts/autoLayout";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Label } from "recharts";

const Register = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const router = useRouter();

  const handlerAction = async (e) => {
    e.preventDefault();
    router.push("/");
    try {
      await fetch("http://localhost:3001/register", {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          name: userName,
          email: userEmail,
          password: userPassword,
        }),
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form action="#" method="POST" onSubmit={handlerAction}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            required
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
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
    </div>
  );
};

Register.getLayout = function getLayout(page) {
  return <AutoLayout>{page}</AutoLayout>;
};

export default Register;
