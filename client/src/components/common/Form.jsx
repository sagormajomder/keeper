import Button from "./Button";

export default function Form({
  email,
  setEmail,
  password,
  setPassword,
  buttonText,
}) {
  return (
    <>
      <div className="mb-4">
        <label htmlFor="email">Email: </label>
        <input
          value={email}
          type="email"
          name=""
          id="email"
          className="bg-primary/10 focus:outline-primary/75 p rounded-lg px-3 py-2"
          // required
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="pass">Password: </label>
        <input
          value={password}
          type="password"
          // required
          name=""
          id="pass"
          className="bg-primary/10 focus:outline-primary/75 rounded-lg px-3 py-2"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <Button type="submit" style="px-4 py-1 rounded-sm">
        {buttonText}
      </Button>
    </>
  );
}
