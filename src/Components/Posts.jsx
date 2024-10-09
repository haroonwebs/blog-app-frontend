import React from "react";
import { useNavigate } from "react-router-dom";

const Posts = ({postId, post, description, postedby }) => {
  const navigate = useNavigate();

  const handleComment = (postId) => {
    navigate(`/comments/${postId}`);
  };

  return (
    <div className="bg-slate-200 mb-8 w-1/2 h-auto flex flex-col items-center rounded-md shadow-lg p-4">
      <div className="bg-blue-50 w-5/6 h-12 mt-2 mb-4 rounded-md flex justify-center items-center font-semibold text-lg text-black">
        Posted by : {postedby}
      </div>

      <div className="overflow-hidden bg-blue-50 w-10/12 h-60 flex justify-center rounded-sm items-center p-2">
        <img
          src={post}
          alt="Post"
          className="max-w-full max-h-full rounded-md object-cover"
        />
      </div>

      <div className="bg-blue-50 w-11/12 min-h-32 mt-2 rounded-md p-4 text-black">
        <h1 className="font-semibold mb-2 text-xl">Description:</h1>
        <p className="leading-relaxed">{description}</p>
      </div>

      <button
        onClick={() => handleComment(postId)}
        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
      >
        Comment Here
      </button>
    </div>
  );
};

export default Posts;
