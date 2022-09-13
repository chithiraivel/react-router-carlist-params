import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
const MoreInfo = () => {
  const params = useParams();
  useEffect(() => {
    getPost();
  }, [params]);

  const getPost = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
      .then((response) => response.json())
      .then((json) => console.log(json));
  };
  return <div>MoreInfo</div>;
};

export default MoreInfo;
