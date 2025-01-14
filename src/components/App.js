import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import ProjectList from "./ProjectList";
import user from "../data/user";

const App = () => {
  // Sample project data (replace this with your actual project data)
  const projects = [
    {
      id: 1,
      technologies: ['React', 'JavaScript', 'CSS'],
    },
    {
      id: 2,
      technologies: ['Node.js', 'Express', 'MongoDB'],
    },
    {
      id: 3,
      technologies: ['HTML', 'CSS', 'JavaScript'],
    },
  ];
}

function App() {
  return (
    <div>
      <NavBar />
      <Home username={user.name} city={user.city} color={user.color} />
      <About bio={user.bio} links={user.links} />
      <ProjectList projects={user.projects} />
    </div>
  );
}

export default App;
