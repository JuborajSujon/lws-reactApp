import React from "react";
import { useEffect, useState } from "react";
const GetPost = () => {
  // data fetching
  const [loading, setLoading] = useState(true);
  // error handle
  const [error, setError] = useState("");
  // data fetching from api
  const [post, setPost] = useState({});

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setPost(data);
        setError("");
      })
      .catch(() => {
        setLoading(false);
        setPost({});
        setError("Something went wrong");
      });
  }, []);

  return (
    <div>
      {loading ? "Loading" : post.title}
      {error || null}
    </div>
  );
};

export default GetPost;
