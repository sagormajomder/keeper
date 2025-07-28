import { useNavigate } from "react-router";
import { useAuth } from "../contexts/AuthContext";
import Button from "./common/Button";

export default function User() {
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/");
  }

  return (
    <div className="bg-primary/10 flex items-center gap-3 rounded-sm px-4 py-1 text-[0.8rem]">
      <img
        className="w-8 rounded-full"
        src={user?.avatar}
        alt="User Profile Picture"
      />
      <p>{user?.name}</p>
      <Button
        type="button"
        styles="px-3 py-1 rounded-sm"
        onClick={handleLogout}
      >
        Logout
      </Button>
    </div>
  );
}
