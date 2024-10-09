import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const AddPost = () => {
  const [file, setFile] = useState(null);
  const [description, setDescription] = useState("");
  const id = useSelector((state) => state.auth.user?._id);

  const navigateTo = useNavigate();

  const handlePostSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file", file);
    formData.append("description", description);
    formData.append("postedBy", id);

    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/post/upload",
        formData,
        { withCredentials: true }
      );

      toast.success(data.message);
      setDescription("");
      setFile(null);
      navigateTo("/News");
    } catch (error) {
      toast.error(error.response?.data?.message);
    }
  };

  return (
    <div className="h-screen w-screen bg-white flex items-center justify-center">
      <div className="h-5/6 w-1/3 bg-gray-50 rounded-lg shadow-lg p-6">
        <div className="h-1/4">
          <p className="text-3xl font-bold w-full h-full flex justify-center items-center text-blue-600">
            Add Post
          </p>
        </div>
        <form onSubmit={handlePostSubmit}>
          <div className="h-3/4 flex flex-col justify-center space-y-4 p-4 overflow-hidden">
            <label className="text-lg font-semibold text-gray-600">
              Select Photo
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setFile(e.target.files[0])}
              required
              className="border-2 p-2 outline-none border-gray-300 rounded-md bg-blue-600"
            />

            <label className="text-lg font-semibold text-gray-600">
              Description
            </label>
            <textarea
              className="bg-gray-200 border-2 p-3 outline-none border-gray-300 rounded-md resize-none h-32"
              placeholder="Write your ideas..."
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>

            <div className="w-full flex justify-center items-center p-2">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-800  w-full text-white py-3 rounded-md text-xl font-semibold transition-all duration-200"
              >
                Post
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPost;
