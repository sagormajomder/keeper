import { useNavigate } from "react-router";
import Button from "./common/Button";

export default function User() {
  const navigate = useNavigate();
  function handleLogout() {
    localStorage.removeItem("token");
    navigate("/login");
  }
  return (
    <div className="bg-primary/10 flex items-center gap-3 rounded-sm px-4 py-1 text-[0.8rem]">
      <img
        className="w-8 rounded-full"
        src="https://i.pravatar.cc/100?u=zz"
        alt="User Profile Picture"
      />
      <p>User</p>
      <Button type="button" style="px-3 py-1 rounded-sm" onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
}
