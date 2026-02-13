import { useState } from "react";
import { UserPlus, EyeIcon, EyeOffIcon } from "lucide-react";
import api from "../lib/axios";
import toast from "react-hot-toast";
import { useNavigate, Link } from "react-router";

const SignUpPage = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      if (!username || !email || !password || !confirmPassword) {
        return toast.error("All fields are required");
      }

      if (password.length < 6) {
        return toast.error("Password must be at least 6 characters");
      }

      if (password !== confirmPassword) {
        return toast.error("Passwords do not match");
      }
      const res = await api.post("/auth/signup", {
        username,
        email,
        password,
      });

      toast.success("Welcome back!");
      navigate("/home");
    } catch (error) {
      console.log("Error Signing Up", error);
      toast.error("Invalid credentials");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="min-h-screen bg-base-200 flex justify-center items-center p-4">
      <div className="card w-full bg-base-100 max-w-md shadow-xl">
        <div className="card-body">
          <div className="text-center mb-6">
            <div className="bg-primary/10 p-4 rounded-full w-fit mx-auto mb-4">
              <UserPlus className="size-8 text-primary" />
            </div>
            <h1 className="text-3xl font-mono text-primary font-bold">
              SmartNotes
            </h1>
            <p className="text-xl font-semibold">Create Account</p>
            <p className="text-base-content/70">
              Sign up to start organizing your thoughts
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Full username</span>
              </label>
              <input
                type="text"
                className="input input-bordered w-full"
                placeholder="Jhon Doe"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                className="input input-bordered w-full"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className="relative">
                {" "}
                <input
                  type={showPassword ? "text" : "password"}
                  className="input input-bordered w-full pr-10"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-base-content/60"
                  onClick={() => {
                    setShowPassword(!showPassword);
                  }}
                >
                  {showPassword ? (
                    <EyeOffIcon className="size-5" />
                  ) : (
                    <EyeIcon className="size-5" />
                  )}
                </button>
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                className="input input-bordered w-full"
                placeholder="••••••••"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            <button type="submit" className="btn btn-primary w-full">
              {isLoading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Create Account"
              )}
            </button>
          </form>
          <div className="divider">OR</div>
          <p className="text-center text-base-content/70">
            Already have an account?{" "}
            <Link to="/signin" className="link link-primary font-semibold">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
