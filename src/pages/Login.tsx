import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Button from "../components/common/Button";
import { useAuth } from "../contexts/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("jack@example.com");
  const [password, setPassword] = useState("qwerty");

  const { login, isAuthenticated } = useAuth();

  const navigate = useNavigate();

  function handleLoginSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (email && password) {
      login(email, password);
    }
  }

  useEffect(
    function () {
      if (isAuthenticated) navigate("/app", { replace: true });
    },
    [isAuthenticated, navigate],
  );

  return (
    <form onSubmit={handleLoginSubmit}>
      <p>Enter Login Details</p>
      <div className="mb-4">
        <label htmlFor="email">Email: </label>
        <input
          value={email}
          type="email"
          name=""
          id="email"
          className="bg-primary/10 focus:outline-primary/75 p rounded-lg px-3 py-2"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="pass">Password: </label>
        <input
          value={password}
          type="password"
          required
          name=""
          id="pass"
          className="bg-primary/10 focus:outline-primary/75 rounded-lg px-3 py-2"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <Button type="submit" styles="px-4 py-1 rounded-sm">
        Login
      </Button>
    </form>
  );
}
