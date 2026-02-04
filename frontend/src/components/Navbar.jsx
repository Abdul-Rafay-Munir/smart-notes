import { PlusIcon } from "lucide-react";
import { Link } from "react-router";
const Navbar = () => {
  return (
    <header className="bg-base-300 border-b border-base-content">
      <div className="mx-auto max-w-6xl p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-primary font-mono tracking-tight">
            SmartNotes
          </h1>
          <Link to={"/create"} className="btn btn-primary">
            <PlusIcon className="size-5" />
            New Note
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
