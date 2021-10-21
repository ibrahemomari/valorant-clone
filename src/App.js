import React from "react";
import Main from "./components/main/Main";
import { ParallaxProvider } from "react-scroll-parallax";
import Header from "./components/header/Header";
import "./App.css";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <>
      <Header />
      <ParallaxProvider>
        <Main />
      </ParallaxProvider>
      <Footer/>
    </>
  );
}

export default App;
