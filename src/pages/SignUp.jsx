import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";



const SignUp = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const navigateTo = useNavigate();
  

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://information-tan.vercel.app/api/v1/user/register",
        {
          username,
          email,
          password,
          role,
        }
      );
      

      
      toast.success(response.data.message);
      navigateTo("/");
      setUserName("");
      setEmail("");
      setPassword("");
      setRole("");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="h-screen w-screen bg-gray-400 flex items-center justify-center">
      <div className="h-4/4 w-1/4 bg-white rounded-md">
        <div className="h-1/4">
          <p className="text-3xl font-semibold w-full h-full flex justify-center items-center">
            {"SignUp Form"}
          </p>
        </div>
        <form onSubmit={handleRegister}>
          <div className="h-2/4 flex flex-col justify-center p-2">
            <label className="text-lg font-semibold py-2 text-gray-600">
              Username
            </label>
            <input
              className="bg-gray-200 border-2 p-2 outline-none border-gray-300 rounded-md"
              type="text"
              placeholder="username"
              required
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            />

            <label className="text-lg font-semibold py-2 text-gray-600">
              Email
            </label>
            <input
              className="bg-gray-200 border-2 p-2 outline-none border-gray-300 rounded-md"
              type="email"
              placeholder="Enter Your Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label className="text-lg font-semibold py-2 text-gray-600">
              Password
            </label>
            <input
              className="bg-gray-200 border-2 p-2 outline-none border-gray-300 rounded-md"
              type="password"
              placeholder="Enter Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <p className="h-2/4 flex flex-col justify-center p-2">
              <label className="text-lg font-semibold py-2 text-gray-600">
                Select Role:
              </label>
              <select value={role} onChange={(e) => setRole(e.target.value)}>
                <option value=""> select your role</option>
                <option value="teacher">Teacher</option>
                <option value="student">Student</option>
              </select>
            </p>

            <p>
              {"Have an account?"}{" "}
              <span className="hover:underline hover:text-blue-400 cursor-pointer">
                <NavLink to="/">Login</NavLink>
              </span>
            </p>

            <div className="w-full flex justify-center items-center p-2">
              <button
                type="submit"
                className="bg-blue-500 w-full text-white py-2 rounded-md text-xl font-semibold"
              >
                SignUp
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
