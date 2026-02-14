import { PlusIcon, LogOutIcon } from "lucide-react";
import { Link, useNavigate } from "react-router";
import { isAuthenticated } from "../lib/utilis";

const Navbar = () => {
  const loggedIn = isAuthenticated();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/signin");
  };

  return (
    <header className="bg-base-300 border-b border-base-content">
      <div className="mx-auto max-w-6xl p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-primary font-mono tracking-tight">
            SmartNotes
          </h1>
          <div className="flex justify-center items-center gap-4">
            {" "}
            {loggedIn && (
              <Link to={"/create"} className="btn btn-primary">
                <PlusIcon className="size-5" />
                <span>New Note</span>
              </Link>
            )}
            {loggedIn && (
              <button className="btn btn-ghost" onClick={handleLogout}>
                {" "}
                <LogOutIcon className="size-5" /> Logout
              </button>
            )}
            {!loggedIn && (
              <Link to="/signin" className="btn btn-primary">
                Sign In
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
