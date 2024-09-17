/* eslint-disable react/prop-types */
import { Box } from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useEffect, useState } from "react";
import SearchIcon from '@mui/icons-material/Search';

import { Image } from "@nextui-org/react";
import { Link } from "react-router-dom";
import './Course.css'

import Form from "./Form/Form";
import dipImage from './../../assets/images/Course/dipImage.png';
import degreeImage from './../../assets/images/Course/degreeImage.png';
import phdImage from './../../assets/images/Course/phdImage.png';
import pstgraduateImage from './../../assets/images/Course/PostgraduateImage.png';






export default function Course() {


  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,

    });
  }, []);

  return (
    <>
      <Home_Header_section />

      <ProgrameSectiopn />

      <Form />
    </>
  )
}



const Home_Header_section = () => {



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
      <div className={screenSize.width <= 933 ? "h-16" : "h-20"}></div>      <div className="Home_Header_img flex flex-col justify-center relative  rounded-bl-250 md:rounded-bl-500 ">
        <Box className="absolute bottom-32 sm:bottom-16 md:bottom-28 lg:bottom-20 px-5 sm:px-0 sm:left-16 lg:w-3/5  md:left-28  lg:left-40 xl:left-60 flex flex-col items-center  justify-end">
          <div>
            <h2 data-aos="fade-right" data-aos-duration="1000" className="text-white font_w_800 text-f-48  mb-5 sm:mb-0 ">Course</h2>
            <p data-aos="fade-right" data-aos-duration="2000" className="poppins font_w_400 text-f-20 md:text-f-24 text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
          </div>

          <div className="flex w-full sm:w-9/12 md:w-1/2  justify-center items-center mb-5 flex-col mt-5 ">
            <div data-aos="fade-right" data-aos-duration="3000" className="border-2 w-full p-3 py-2 flex justify-between mb-10">
              <input type="text" className="bg-transparent border-none w-2/3 outline-none font-poppins placeholder-white font_w_300 text-white accent-white text-f-20" placeholder="Search Courses" />
              <button className=" bg-transparent"><SearchIcon className="text-white" fontSize="large" /></button>
            </div>
          </div>
        </Box>
      </div>

    </div>

  )
}



const ProgrameSectiopn = () => {

  const programes = [
    {
      id: 1,
      img: dipImage,
      alt: "Diploma Course",
      title: 'Diploma Course',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation.',
      subCourse: [
        {
          id: 1,
          courses: 'Six Month Diploma Programmes'
        },
        {
          id: 2,
          courses: 'One Year Diploma Programmes'

        },
        {
          id: 3,
          courses: 'Eighteen Month Diploma Programmes'
        }
      ]
    },
    {
      id: 2,
      img: degreeImage,
      alt: "Undergraduate Programmes",
      title: 'Undergraduate Programmes',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation.',
      subCourse: [
        {
          id: 1,
          courses: 'B.A. Degree Programmes'
        },
        {
          id: 2,
          courses: 'B.Sc. Degree Programmes'
        },
        {
          id: 3,
          courses: 'B.Com. Degree Programmes'
        },
        {
          id: 4,
          courses: 'B.C.A. Degree Programmes'
        },
        {
          id: 5,
          courses: 'B.B.A. Degree Programmes'
        },
        {
          id: 6,
          courses: 'B.S.W. Degree Programmes'
        },

      ]
    },
    {
      id: 3,
      img: pstgraduateImage,
      alt: "Postgraduate Programmes",
      title: 'Postgraduate Programmes',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation.',
      subCourse: [
        {
          id: 1,
          courses: 'M.A. Degree Programmes'
        },
        {
          id: 2,
          courses: 'M.Sc. Degree Programmes'
        },
        {
          id: 3,
          courses: 'M.C.A. Degree Programmes'
        },
        {
          id: 4,
          courses: 'M.B.A. Degree Programmes'
        },
        {
          id: 5,
          courses: 'M.Com. Degree Programmes'
        },
        {
          id: 6,
          courses: 'M.S.W. Degree Programmes'
        },

      ]
    },
    {
      id: 4,
      img: phdImage,
      alt: "Ph.D Programmes",
      title: 'Ph.D Programmes',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation.',
      subCourse: [
        {
          id: 1,
          courses: 'Research Programmes'
        },
        {
          id: 2,
          courses: 'Ph.D. Art Programmes'
        },
        {
          id: 3,
          courses: 'Ph.D. Science Programmes'
        },

      ]
    }
  ];


  return (
    <>

      {programes.map((item) =>


        <div key={item.id} className={item.id % 2 == 0 ? "bg-c-b-blue" : ''}>
          <Box className={`${item.id % 2 == 0 ? 'text-white' : 'text-c-blue'} px-3 md:px-10 lg:px-18 py-20 flex flex-col justify-between items-center sm:flex-row`}>
            <Box data-aos={item.id % 2 == 0 ? "fade-left" : "fade-right"} className={item.id % 2 == 0 ? "sm:w-2/3 md:w-1/2 p-2 flex justify-center md:order-1" : " sm:w-2/3 md:w-1/2 p-2 flex justify-center"}>
              <Image
                width={550}
                alt="European International College Logo"
                src={item.img}
                className=""
              />
            </Box>
            <Box className={item.id % 2 == 0 ? "sm:w-1/2 p-2 flex flex-col  justify-center " : "sm:w-1/2 p-2 flex flex-col  justify-center "}>
              <div data-aos={item.id % 2 == 0 ? "fade-right" : "fade-left"} className={item.id % 2 == 0 ? 'w-full flex flex-col justify-end items-end' : ' w-full '}>

                <div className="w-full  md:w-10/12 ">
                  <h2 className="poppins font_w_700 text-f-32">{item.title}</h2>
                  <p className="poppins font_w_400 text-f-20  lg:text-f-22 mt-5">{item.description}</p>
                  <div className="mt-10">
                    <ul>

                      {item.subCourse.map((subItem) => {
                        const path = item.title.replace(/ /g, "-"); // Replace all spaces with hyphens globally
                        const path2 = subItem.courses.replace(/ /g, "-"); // Replace all spaces with hyphens globally

                        return (
                          <li className="my-1" key={subItem.id}>
                            <Link to={`/course/${path}/${path2}`}>
                              <ArrowForwardIosIcon fontSize="" /> {subItem.courses}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  <Box className="mt-5">

                    <Link to={`/course/${item.title.replace(/ /g, "-")}`}>


                      <button className="bg-c-blue text-white py-2 px-3 font_w_700 text-f-18 poppins">
                        More Details
                      </button>
                    </Link>
                  </Box>
                </div>

              </div>

            </Box>


          </Box>
        </div>
      )}




    </>

  )
}

