import './App.css';
import React from 'react';
import { useRoutes } from 'react-router-dom'
import ReadPosts from './pages/ReadPosts'
import CreatePost from './pages/CreatePost'
import EditPost from './pages/EditPost'
import View from "./pages/View";
import Navbar from "./components/NavBar.js";

const App = () => {
  const posts = [
  ]

  // Sets up routes
  let element = useRoutes([
    {
      path: "/",
      element: <ReadPosts data={posts} />,
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
      element: <View data={posts}/>
    }
  ]);

  return (
    <div className="App">
      <div className="header">
        <Navbar/>
        <h2>Come here and discuss all sorts of games!</h2>
      </div>
      {element}
    </div>
  );
}

export default App;
