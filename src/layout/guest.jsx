// import Home from '../pages/Home'
import Router_Index from "../Routers/Router_Index";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./../components/common/Footer/Footer";
import Navbar from "./../components/common/NavBar/Navbar";
import { useEffect, useState } from "react";

export default function Guest() {
  const [screenSize, setScreenSize] = useState(getCurrentDimension());

  function getCurrentDimension() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  useEffect(() => {

    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenSize]);
  return (
    <Router>
      <Navbar />
      <Router_Index />
      <Footer />
    </Router>
  );
}
