import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";
import authService from "../api/authService";
import AuthLayout from "../components/AuthLayout";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await authService.login(formData);

      localStorage.setItem("token", response.data.token);

      toast.success("Login successful!");

      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      toast.error("Invalid email or password");
    }
  };
return (
  <AuthLayout>

    <div
  className="
    backdrop-blur-2xl
    bg-white/5
    border
    border-white/10
    rounded-3xl
    p-8

    shadow-[0_20px_60px_rgba(0,0,0,0.5)]

    hover:border-yellow-400/30

    transition-all
    duration-300
  "
>
<div className="mb-8">

  <span
    className="
      inline-flex
      items-center

      px-3
      py-1

      rounded-full

      text-xs
      font-medium

      text-yellow-300

      bg-yellow-400/10

      border
      border-yellow-400/20

      mb-5
    "
  >
    Welcome Back
  </span>

        

       <h2 className="text-3xl font-bold text-white">
  Sign in to DevFlow
</h2>

      </div>


      <form onSubmit={handleSubmit} className="space-y-5">


        <div>

          <label className="block text-sm font-medium text-gray-300 mb-2">
            Email
          </label>


          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
            className="
              w-full
              rounded-xl
              px-4
              py-3

              bg-white/5
              border
              border-white/10

              text-white
              placeholder:text-gray-500

              focus:outline-none
              focus:border-yellow-400
              focus:ring-2
              focus:ring-yellow-400/20

              transition
            "
          />

        </div>



        <div>

          <label className="block text-sm font-medium text-gray-300 mb-2">
            Password
          </label>


          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            required
            className="
              w-full
              rounded-xl
              px-4
              py-3

              bg-white/5
              border
              border-white/10

              text-white
              placeholder:text-gray-500

              focus:outline-none
              focus:border-yellow-400
              focus:ring-2
              focus:ring-yellow-400/20

              transition
            "
          />

        </div>



        <button
          type="submit"
          className="
            w-full
            py-3
            rounded-xl

            font-semibold
            text-black

            bg-gradient-to-r
            from-yellow-400
            via-yellow-500
            to-amber-500

            hover:from-yellow-300
            hover:to-amber-400

            transition-all
            duration-300

            hover:scale-[1.02]
            active:scale-95

            shadow-lg
            hover:shadow-yellow-500/30
          "
        >
         Continue to Dashboard
        </button>



        <p className="text-center text-gray-400">

          Don't have an account?{" "}

          <Link
            to="/register"
            className="
              text-yellow-400
              font-semibold
              hover:text-yellow-300
              transition
            "
          >
            Create Account
          </Link>

        </p>


      </form>

    </div>

  </AuthLayout>
);
};

export default Login;