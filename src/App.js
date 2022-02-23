import React from "react";
import Home from './components/Home';
import About from "./components/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import JoinUs from "./components/JoinUs"
import SocialMedia from "./components/SocialMedia";
import Blog from "./components/Blog";
import Courses from "./components/Courses";
const App = () => {
  return (
    <div>
          <Navbar/>
          <Home id="home"/>
          <JoinUs/>
          <About id="about"/>
          <SocialMedia/>
          <Courses/>
          <Blog/>
          <Footer/>
          
      </div>
  )
}
export default App;
