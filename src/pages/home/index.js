import React from "react";
import { Link } from "react-router-dom";

export default function Home(){
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to the Electron Template!</p>
      <span>Click <Link to="/about">here</Link> to goto the About page</span>
    </div>
  );
}