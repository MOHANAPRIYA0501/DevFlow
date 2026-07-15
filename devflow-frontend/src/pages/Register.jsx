import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";
import authService from "../api/authService";

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
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 flex items-center justify-center px-4">

      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8">

        {/* Logo */}
        <div className="text-center mb-8">

          <div className="w-14 h-16 bg-emerald-600 rounded-2xl mx-auto flex items-center justify-center shadow-lg">
            <span className="text-white text-3xl font-bold">D</span>
          </div>

          <h1 className="text-3xl font-bold text-slate-900 mt-5">
            DevFlow
          </h1>

          <p className="text-slate-500 mt-2">
           Start Building with DevFlow
          </p>

        </div>

        <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">
          Create Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
               Name
            </label>

            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Email
            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Password
            </label>

            <input
              type="password"
              name="password"
              placeholder="Create a password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-xl font-semibold shadow-md hover:shadow-lg transition duration-300"
          >
            Create Account
          </button>

          <p className="text-center text-slate-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-emerald-600 font-semibold hover:text-emerald-700"
            >
              Sign In
            </Link>
          </p>

        </form>

      </div>

    </div>
  );
};

export default Register;