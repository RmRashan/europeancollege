import { useEffect, useState } from "react";
import Guest from "./layout/guest";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Box } from "@mui/material";
import { Image } from "@nextui-org/react";
import logo from "../src/assets/images/logo.png";

function App() {


  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);



  useEffect(() => {
    AOS.init({

      delay: 50, // values from 0 to 3000, with step 50ms
      duration: 1000, // values from 0 to 3000, with step 50ms
      easing: 'ease-in-out', // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them

    });
  }, [])
  return (
    <Box className="overflow-x-hidden">

      {loading ? (
        <div className="loader-container flex flex-col justify-center items-center">
          <Image
            width={150}
            src={logo}
          />
          <Box className="loder">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </Box>
        </div>
      ) : (
        <Guest />

      )}


    </Box>
  );
}

export default App;
