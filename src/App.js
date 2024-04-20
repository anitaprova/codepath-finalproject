import './App.css';
import React from 'react';
import { useRoutes } from 'react-router-dom'
import { useState } from 'react'
import ReadPosts from './pages/ReadPosts'
import CreatePost from './pages/CreatePost'
import EditPost from './pages/EditPost'
import View from "./pages/View";
import Navbar from "./components/NavBar.js";

const App = () => {
  const [searchQuery, setSearchQuery] = useState(""); // State for search query
  const posts = [];

  // Sets up routes
  let element = useRoutes([
    {
      path: "/",
      element: <ReadPosts data={posts} searchQuery={searchQuery} />,
    },
    {
      path: "/edit/:id",
      element: <EditPost data={posts} />,
    },
    {
      path: "/new",
      element: <CreatePost />,
    },
    {
      path: "/view/:id",
      element: <View data={posts} />,
    },
  ]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className="App">
      <div className="header">
        <Navbar data={posts} onSearch={handleSearch} />
      </div>
      {element}
    </div>
  );
}

export default App;
