import React from "react";
import useFetch from "../hooks/useFetch";

function CustomHookExample() {
  const { data, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/posts",
    {}
  );

  if (loading) {
    return <h3>Loading...</h3>;
  }

  if (!data || data.length === 0) {
    return <h3> No Post Found.</h3>;
  }

  //   console.log(res);

  return (
    <div>
      {data.map((post) => (
        <h3 key={post.id}>{post.title}</h3>
      ))}
    </div>
  );
}

export default CustomHookExample;
