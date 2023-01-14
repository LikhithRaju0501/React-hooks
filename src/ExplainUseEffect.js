import React, { useState, useEffect } from "react";

const ExplainUseEffect = () => {
  const [resourceType, setResourceType] = useState("posts");

  useEffect(() => {
    console.log("Changed state");

    return () => {
      console.log(
        "This runs when the component De-mounts or when useEffect is cleaned up"
      );
    };
  }, [resourceType]);

  return (
    <>
      <div>
        <button onClick={() => setResourceType("posts")}>posts</button>
        <button onClick={() => setResourceType("users")}>users</button>
        <button onClick={() => setResourceType("comments")}>comments</button>
      </div>
      <h1>{resourceType}</h1>
    </>
  );
};

export default ExplainUseEffect;
