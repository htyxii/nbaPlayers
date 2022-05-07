import React from "react";
import { useState, useEffect } from "react";

import { MDBDataTable } from "mdbreact";

import queryString from "query-string";

export default function App() {

  const parsed = queryString.parse(window.location.search);
  console.log(parsed.keyword);
  const keyword = parsed.keyword;

  const [posts, setPosts] = useState([]);
  const fetchPost = async () => {
  const response = await fetch(
      `http://localhost:9999/${keyword}`
    );
   const data = await response.json();
   console.log(data) //
    setPosts(data);
  };

  useEffect(() => {
    fetchPost();
  }, []);
  return (
    <div className="App">
    <p> {posts.value} </p>
      <button onClick={fetchPost}> get new joke </button>
    </div>
  );



}