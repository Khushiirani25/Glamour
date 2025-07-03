import React, { useEffect } from "react";
import Header from "./components/Header";
import Hero from './components/Hero';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Services from "./components/Services";
import About from "./components/About";

const App = () => {
  useEffect(()=>{
     AOS.init({
      duration: 1000,
     });
  },[]);
  return (
    <div>
      <Header />
      <Hero />
      <Services />
      <About />
      </div>
  )
}

export default App;