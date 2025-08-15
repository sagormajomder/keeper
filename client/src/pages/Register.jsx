import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import Button from "../components/common/Button";
import Form from "../components/common/Form";

const API_URL = import.meta.env.VITE_API_URL;

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function handleRegisterSubmit(e) {
    try {
      e.preventDefault();

      if (!email || !password) return;

      const res = await fetch(`${API_URL}/register`, {
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

      if (!res.ok && res.status !== 409)
        throw new Error("Failed to user register");

      const data = await res.json();

      // console.log(data);

      if (!data.success) {
        navigate("/");
        throw new Error(data.message);
      }

      if (data.success) {
        navigate("/login");
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
            navigate("/register");
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
        console.log(error);
      }
    },
    [navigate],
  );

  return (
    <>
      <form onSubmit={handleRegisterSubmit}>
        <p>Enter Register Details</p>
        <Form
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          buttonText="Register"
        />

        <Link to="/login">
          <Button type="button" style=" ml-2 px-4 py-1 rounded-sm">
            Login
          </Button>
        </Link>
      </form>
    </>
  );
}
