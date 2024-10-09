import React, { useState, useEffect } from "react";
import axios from "axios";
import CommentCard from "../Components/commentCard";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const { postId } = useParams();

  const userid = useSelector((state) => state.auth.user?._id);

  const getAllComments = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:4000/api/v1/comments/allcomments/${postId}`
      );
      if (data.success) {
        setComments(data?.Comments);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();

    
    

    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/comments/newcomments", 
        {
          comments: newComment,
          commtby: userid,
          commtPost: postId,
        }
      );

      if(data?.success) {
        setComments([data.commt, ...comments]);
        setNewComment("");
      }
    } catch (error) {
      console.log("error submitting comment:", error);
    }
  };

  useEffect(() => {
    getAllComments();
  }, [postId, newComment]);

  return (
    <div className="w-screen h-auto flex flex-col justify-center items-center p-6">
      <h1 className="text-2xl font-bold mb-4">Comments</h1>

      <form onSubmit={handleCommentSubmit} className="mb-6 w-1/2">
        <textarea
          className="w-full p-2 border border-gray-300 rounded-md"
          rows="4"
          placeholder="add your comment......."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2"
        >
          Submit Comment
        </button>
      </form>

      {comments && comments.length > 0 ? (
        comments.map((comment) => (
          <CommentCard
            key={comment._id}
            username={comment.commtby?.username}
            content={comment.comments}
          />
        ))
      ) : (
        <p>No comments available.</p>
      )}
    </div>
  );
};

export default Comments;
