/* eslint-disable react-refresh/only-export-components */
import { Box } from "@mui/material";
import { Image } from "@nextui-org/react";
import { useEffect, useState } from "react";
import logo from "../../assets/images/logo.png";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import u1 from '../../assets/images/patner/u1.png'
import u2 from '../../assets/images/patner/u2.png'
import { Link } from "react-router-dom";

export default function Our_Partners() {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,

    });
  }, []);
  return (
    <Box>
      <Our_Partners_Header_section />
      <Data />
    </Box>
  )
}


const Our_Partners_Header_section = () => {



  const [screenSize, setScreenSize] = useState(getCurrentDimension());


  function getCurrentDimension() {
    return {
      width: window.innerWidth,
      height: window.innerHeight
    }
  }

  useEffect(() => {
    const updateDimension = () => {

      setScreenSize(getCurrentDimension())
    }
    window.addEventListener('resize', updateDimension);


    return (() => {
      window.removeEventListener('resize', updateDimension);
    })
  }, [screenSize])



  return (


    <div data-aos="fade-right" className="h-100svh flex flex-col ">
      <div className={screenSize.width <= 933 ? "h-16" : "h-20"}></div>            <div className="Verification_Header_img flex flex-col justify-center relative  rounded-bl-250 md:rounded-bl-500 ">
        <Box className="absolute bottom-32 sm:bottom-16 md:bottom-28 lg:bottom-20 px-5 sm:px-0 sm:left-16 md:left-40 lg:left-32 lg:w-3/5     flex flex-col items-center  justify-end">
          <div>
            <h2 data-aos="fade-right" data-aos-duration="3000" className="text-white font_w_800 text-f-48  ms-10 mb-5 sm:mb-0 ">Our Partners</h2>
          </div>

        </Box>
      </div>

    </div>

  )
}



const Data = () => {

  const [data, setData] = useState(['']);

  useEffect(() => {

    setData([

      {
        id: 1,
        img: u1,
        title: "The University of Edinburgh",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",

      },
      {
        id: 2,
        img: u2,
        title: "The University of Edinburgh",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",

      }

    ])

  }, [])

  return (
    <Box className="px-3 md:px-10 lg:px-20 xl:px-32 mt-10 mb-10 poppins">

      <Box >
        <Box className="flex gap-2">
          <Box>
            <Image
              width={100}
              src={logo}
            />
          </Box>

          <Box className="flex flex-col  text-f-32">
            <h3 className="font_w_400">Partners</h3>
            <h2 className="font_w_700">EUROPEAN INTERNATIONAL COLLEGE ROMANIA</h2>
          </Box>
        </Box>








        {data.map((data) =>
          <Box key={data.id} className="mt-10 mb-10 flex flex-col md:flex-row  justify-between items-center ">

            <Box className="h-full">
              <Image
                className="block  w-[300px]"
                src={data.img}
              />
            </Box>





            <Box className="h-56 w-1 hidden md:block  px-10" >
              <hr className="h-full border border-black" />
            </Box>




            <Box className="flex h-fit flex-col ">


              <Box className="flex justify-between flex-col md:flex-row">
                <Box>
                  <h2 className="text-f-22 md:text-f-32 font_w_700">{data.title}</h2>
                </Box>
                <Box className="flex gap-2">
                  <FacebookIcon />
                  <InstagramIcon />
                  <LinkedInIcon />
                  <YouTubeIcon />
                </Box>
              </Box>


              <Box>
                <p className="text-f-20 font_w_400 my-6 max-w-max-730">{data.description}</p>
              </Box>



              <Box>
                <p>
                  <Link>view website <OpenInNewIcon /></Link>
                </p>
              </Box>


            </Box>
          </Box>


        )}









      </Box>

    </Box>
  )
}