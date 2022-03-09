import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SocialMedia from "./components/SocialMedia";
import Blog from "./components/Blog";
import Courses from "./components/Courses";
const App = () => {
  return (
    <div>
      <Navbar />
      <Home id="home" />
      <About id="about" />
      <Courses />
      <Blog />
      <SocialMedia />
      <Footer />
    </div>
  );
};
export default App;
