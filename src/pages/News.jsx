import React, { useState, useEffect } from "react";
import Posts from "../Components/Posts";
import axios from "axios";

const News = () => {
  const [posts, setPosts] = useState([]);
  

  const getAllPosts = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:4000/api/v1/post/allposts",
        { withCredentials: true }
      );
      if (data?.success) {
        setPosts(data?.posts);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <div className="w-screen h-auto flex flex-col justify-center items-center">
      {posts &&
        posts.map((post) => (
          <Posts
            key={post._id}
            postId = {post._id}
            post={`http://localhost:4000/uploads/${post.file}`}
            description={post.description}
            postedby={post.postedBy?.username}
          />
        ))}
    </div>
  );
};

export default News;
