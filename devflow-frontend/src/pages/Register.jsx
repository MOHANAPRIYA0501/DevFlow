import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";
import authService from "../api/authService";
import AuthLayout from "../components/AuthLayout";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
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
      const response = await authService.register(formData);

      toast.success(response.data.message);

      navigate("/login");
    } catch (error) {
      console.error(error);

      toast.error(
        error.response?.data?.message || "Registration failed"
      );
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
          Join DevFlow
        </span>


        <h2 className="text-3xl font-bold text-white">
          Create your workspace
        </h2>


        <p className="text-gray-400 mt-2">
          Build, organize and manage your developer workflow.
        </p>

      </div>


      <form onSubmit={handleSubmit} className="space-y-5">


        <div>

          <label className="block text-sm font-medium text-gray-300 mb-2">
            Name
          </label>


          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
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
            placeholder="Create a password"
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
            from-yellow-300
            via-yellow-400
            to-amber-500

            hover:from-yellow-200
            hover:to-amber-400

            transition-all
            duration-300

            hover:scale-[1.02]
            active:scale-95

            shadow-lg
            hover:shadow-yellow-500/30
          "
        >
          Create Account
        </button>



        <p className="text-center text-gray-400">

          Already have an account?{" "}

          <Link
            to="/login"
            className="
              text-yellow-400
              font-semibold
              hover:text-yellow-300
              transition
            "
          >
            Sign In
          </Link>

        </p>


      </form>

    </div>

  </AuthLayout>
);
};

export default Register;