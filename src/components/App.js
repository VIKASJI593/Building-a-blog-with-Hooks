import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Home, CreatePost, PostDetail } from './';

function App() {
  return (
    <div className="container">
      <Navbar />
      <Router>
      <Routes>
      <Route path="/" element={<Home/>} />
        <Route path="/post/:postId" element={<PostDetail/>} />
        <Route path="/create-post" element={<CreatePost/>} />

      </Routes>
      </Router>
    </div>
  );
}

export default App;