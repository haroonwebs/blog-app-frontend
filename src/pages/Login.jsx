import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/Slices";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigateTo = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/user/login",
        { email, password },
        { withCredentials: true }
      );

     
      dispatch(
        setUser({
          user: response.data.User,
          token: response.data.token,
          role: response.data.User.role, 
        })
      );


      toast.success(response.data.message);
      navigateTo("/News");
      setEmail("");
      setPassword("");
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="h-screen w-screen bg-gray-400 flex items-center justify-center">
      <div className="h-5/6 w-1/4 bg-white rounded-md">
        <div className="h-1/4">
          <p className="text-3xl font-semibold w-full h-full flex justify-center items-center">
            Login
          </p>
        </div>
        <form onSubmit={handleLogin}>
          <div className="h-2/4 flex flex-col justify-center p-2">
            <label className="text-lg font-semibold py-2 text-gray-600">
              Email
            </label>
            <input
              className="bg-gray-200 border-2 p-2 outline-none border-gray-300 rounded-md"
              type="email"
              placeholder="Email"
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

            <p>
              {"Don't have an account?"}{" "}
              <span className="hover:underline hover:text-blue-400 cursor-pointer">
                <NavLink to="/SignUp">Signup</NavLink>
              </span>
            </p>

            <div className="w-full flex justify-center items-center p-2">
              <button
                type="submit"
                className="bg-blue-500 w-full text-white py-2 rounded-md text-xl font-semibold"
              >
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
