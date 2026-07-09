import { useState } from "react";
import authService from "../api/authService";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await authService.login({
    email,
    password
});

localStorage.setItem("token", response.data.token);

console.log("Login successful");

        } catch (error) {
            console.log(error.response?.data || error.message);
        }
    };


    return (
        <div>
            <h2>DevFlow Login</h2>

            <form onSubmit={handleLogin}>

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button type="submit">
                    Login
                </button>

            </form>

        </div>
    );
}

export default Login;