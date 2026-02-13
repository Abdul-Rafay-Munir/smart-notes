import { useState } from "react";
import { LogInIcon, EyeIcon, EyeOffIcon } from "lucide-react";
import api from "../lib/axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
const SignInPage = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      if (!email || !password) {
        return toast.error("All fields are required");
      }
      const res= await api.post("/auth/signup", {
        email,
        password,
      });

      toast.success("Welcome back!");
      navigate("/home");
    } catch (error) {
      toast.error("Invalid credentials");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="min-h-screen bg-base-200 flex justify-center items-center">
      <div className="card w-full bg-base-100 max-w-md shadow-xl">
        <div className="card-body">
          <div className="text-center mb-6">
            <div className="bg-primary/10 p-4 rounded-full w-fit mx-auto mb-4">
              <LogInIcon className="size-8 text-primary" />
            </div>
            <h1 className="text-3xl font-mono text-primary font-bold">
              SmartNotes
            </h1>
            <p className="text-xl font-semibold">Welcome Back</p>
            <p className="text-base-content/70">
              Sign in to access your account
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
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
            <button type="submit" className="btn btn-primary w-full">
              {isLoading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Sign In"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
