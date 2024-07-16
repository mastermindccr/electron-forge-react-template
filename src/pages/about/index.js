import React from 'react';
import { Link } from 'react-router-dom';

export default function About(){
  return (
    <div>
      <h1>About</h1>
      <p>This is the about page.</p>
      <span>Click <Link to="/">here</Link> to goto the Home page</span>
    </div>
  );
}