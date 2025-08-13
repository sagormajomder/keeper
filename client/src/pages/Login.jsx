import { useState } from "react";
import { useNavigate } from "react-router";
import Form from "../components/common/Form";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleLoginSubmit(e) {
    e.preventDefault();

    if (!email || !password) return;
    console.log("hello");

    navigate("/app");

    // clear values
    setEmail("");
    setPassword("");
  }
  return (
    <form onSubmit={handleLoginSubmit}>
      <p>Enter Login Details</p>
      <Form
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
      />
    </form>
  );
}
