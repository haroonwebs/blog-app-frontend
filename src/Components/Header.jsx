import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { logout } from "../redux/Slices";
import { toast } from "react-toastify";

const Header = () => {
  const dispatch = useDispatch();
  const navigateTo = useNavigate();
  const userRole = useSelector((state) => state.auth.role);

  const handleLogout = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/user/logout"
      );
      toast.success(response.data.message);
      dispatch(logout());

      navigateTo("/");
    } catch (error) {
      toast.error(error.response?.data?.message || "Logout failed");
    }
  };

  return (
    <div className="w-full h-10 flex bg-blue-500">
      <div className="w-1/4 sm:w-1/2 h-full flex justify-center ">
        <div className="w-3/4 h-full flex items-center">
          {userRole === "teacher" ? (
            <p className="text-lg font-semibold text text-white cursor-pointer">
              Teacher
            </p>
          ) : (
            <p className="text-lg font-semibold text text-white cursor-pointer">
              Student
            </p>
          )}
        </div>
      </div>

      <div className="w-3/4 sm:w-1/2 h-full flex justify-center ">
        <div className="w-4/5 sm:w-3/4 h-full flex justify-end ">
          <div className="w-4/5 h-full flex items-center justify-between">
            <p className="text-xl font-semibold text text-white cursor-pointer">
              <NavLink
                to="/News"
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-100 border-b-2 border-yellow-100 pb-1"
                    : "text-gray-200 hover:text-white"
                }
              >
                News
              </NavLink>
            </p>

            {userRole === "teacher" && (
              <p className="text-xl font-semibold text text-white cursor-pointer">
                <NavLink
                  to="/addpost"
                  className={({ isActive }) =>
                    isActive
                      ? "text-yellow-100 border-b-2 border-yellow-100 pb-1"
                      : "text-gray-200 hover:text-white"
                  }
                >
                  Add Post
                </NavLink>
              </p>
            )}

            <p
              className="text-xl font-bold bg-white hover:bg-blue-500 cursor-pointer py-1 px-2 text-blue-800 rounded-lg"
              onClick={handleLogout}
            >
              Logout
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
