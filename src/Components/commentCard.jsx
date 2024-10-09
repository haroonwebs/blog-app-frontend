import React from "react";

const CommentCard = ({ username, content }) => {
  return (
    <div className="bg-white p-4 rounded-md shadow-md w-1/2 mb-4">
      <h2 className="text-lg font-semibold text-gray-900">
        Comment by: {username}
      </h2>
      <p className="text-gray-700 mb-2">{content}</p>
    </div>
  );
};

export default CommentCard;
