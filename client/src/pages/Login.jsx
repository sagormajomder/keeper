import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Form from "../components/common/Form";

const API_URL = import.meta.env.VITE_API_URL;

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function handleLoginSubmit(e) {
    try {
      e.preventDefault();

      if (!email || !password) return;

      const res = await fetch(`${API_URL}/login`, {
        method: "POST",
        body: JSON.stringify({
          email,
          password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      // console.log(res);

      if (!res.ok && res.status !== 404 && res.status !== 401)
        throw new Error("Failed to Login user");

      const data = await res.json();
      // console.log(data);

      if (!data.success) {
        navigate("/login");
        throw new Error(data.message);
      }

      if (data.success) {
        localStorage.setItem("token", data.token);
        navigate("/app");

        // clear values
        setEmail("");
        setPassword("");
      }
    } catch (error) {
      console.log(error.message);
    }
  }
  // Check authorization
  useEffect(
    function () {
      try {
        const token = localStorage.getItem("token");

        async function checkAuth() {
          const res = await fetch(`${API_URL}/app`, {
            method: "GET",
            headers: {
              Authorization: token,
            },
          });

          if (!res.ok) {
            navigate("/login");
            throw new Error(
              `You are not authorize to access the dashboard page. StatusCode : ${res.status}`,
            );
          }

          await res.json();
          // console.log(auth);
          navigate("/app");
        }

        if (token) {
          checkAuth();
        }
      } catch (error) {
        console.log(error.message);
      }
    },
    [navigate],
  );

  return (
    <form onSubmit={handleLoginSubmit}>
      <p>Enter Login Details</p>
      <Form
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        buttonText="Login"
      />
    </form>
  );
}
