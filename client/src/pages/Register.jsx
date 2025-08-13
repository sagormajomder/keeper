import { useState } from "react";
import { useNavigate } from "react-router";
import Form from "../components/common/Form";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleRegisterSubmit(e) {
    e.preventDefault();

    if (!email || !password) return;
    console.log("hello");

    navigate("/app");

    // clear values
    setEmail("");
    setPassword("");
  }
  return (
    <form onSubmit={handleRegisterSubmit}>
      <p>Enter Register Details</p>
      <Form
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
      />
    </form>
  );
}
