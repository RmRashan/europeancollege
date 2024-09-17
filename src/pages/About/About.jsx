/* eslint-disable react/no-unescaped-entities */
import { Box } from "@mui/material";
import { Image } from "@nextui-org/react";
import { useState } from "react";
import { useEffect } from "react";

import r1 from "../../assets/images/Home/r1.png";
import r2 from "../../assets/images/Home/r2.png";
import r3 from "../../assets/images/Home/r3.png";
import r4 from "../../assets/images/Home/r4.png";
import r5 from "../../assets/images/Home/r5.png";
import logo from "../../assets/images/logo.png";

import about_1 from '../../assets/images/About/aoutUs-1.png'
import about_2 from '../../assets/images/About/aoutUs-2.png'
import { Link } from "react-router-dom";

import './about.css'


export default function About() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,

    });
  }, []);

  return (
    <div>
      <Home_Header_section />
      <Home_Section_1 />
      <About_section />
      <Home_Section_2 />
      <Home_Section_3 />
      <Ourvm />

    </div>
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


    <div className="h-100svh flex flex-col " data-aos="fade-right"  >
      <div className={screenSize.width <= 933 ? "h-16" : "h-20"}></div>      <div className="Home_Header_img flex flex-col justify-center relative  rounded-bl-250 md:rounded-bl-500 ">
        <Box className="absolute bottom-40 sm:bottom-24 md:bottom-36 lg:bottom-36 px-5 sm:px-0 sm:left-16 lg:w-3/5  md:left-36  lg:left-40 xl:left-60 flex flex-col items-center  justify-end">
          <div>
            <h2 className="text-white font_w_800 text-f-48  mb-5 sm:mb-0 " data-aos="fade-right" data-aos-duration="2000">About Us</h2>
            <p className="poppins font_w_400 text-f-20 md:text-f-24 text-white" data-aos="fade-right" data-aos-duration="3000">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
          </div>

        </Box>
      </div>

    </div>

  )
}


const Home_Section_1 = () => {
  return (
    <div data-aos="fade-top" data-aos-duration="3000" className="py-10 px-5 sm:px-10 md:px-20 poppins font_w_400  text-c-blue flex justify-center">
      <div className="max-w-max-1060">

        <p className=" text-f-18 sm:text-f-24">European International College education offers “Online Education”, non-academic & non-UGC on Management, Marketing, Human Resources and other “Tailor Model” Diploma, Graduation and PG Graduation courses, Honorary Doctorate & Social Award Winners. The certificate helps candidates seeking career advancement or higher pay in private sectors to settle in life well.</p>
        <p className="mt-10  text-f-18 sm:text-f-24">The certificates awarded by European International College are based on work and life experience certificates. The degrees awarded by European International College with International Standards with an intention to equip and empower people irrespective of age, cast, creed and religion</p>
      </div>
    </div>
  )
}

const About_section = () => {

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
    <div className="px-3 sm:px-10 flex justify-center my-20">
      <Box className="">
        {screenSize.width >= 850 ? <Box className="flex">



          <Box className="">
            {/* logo */}
            <Box className="flex items-center  h-fit py-3 lg:py-5">
              <Image
                width={142}
                alt="European International College Logo"
                src={logo}
                className=""
              />
              <Box className="poppins">
                <h6>More About Us </h6>
                <p className=" font_w_300 lg:w-72 xl:w-96 text-f-16">
                  Experience the life at
                  European International Collage
                  Romania
                </p>
              </Box>
            </Box>

            <Box className="relative">

              <Link to={'/Why-we-?-'}>
                <Image
                  width={560}

                  alt="European International College Logo"
                  src={r2}
                  className=""
                />

                <p className="text-white absolute bottom-0 mb-3 ms-3 left-0 z-50 font_w_800 text-f-32 leading-9">
                  <span className="text-f-16">about-us</span> <br />
                  Why We ?</p>
              </Link>
            </Box>
            <Box className="relative">
              <Link to={'/Accreditation'}>
                <Image
                  width={560}

                  alt="European International College Logo"
                  src={r3}
                  className="rounded-bl-200"

                />
                <p className="text-white absolute bottom-0 mb-3 text-right me-3 right-0 z-50 font_w_800 text-f-32 leading-9">
                  <span className="text-f-16 b "> about-us</span> <br />
                  Accreditation </p>
              </Link>





            </Box>
          </Box>


          <Box>
            <Box className="relative">
              <Link to={'/Why-Study-in-Romania-?-'}>  <Image
                width={560}
                alt="European International College Logo"
                src={r1}
                className="rounded-tr-200"
              />

                <p className="text-white absolute bottom-0 mb-3 ms-3 left-0 z-50 font_w_800 text-f-32 leading-9">
                  <span className="text-f-16">upcoming</span> <br />
                  Why STUDY IN Romania ?</p></Link>
            </Box>

            <Box className=" flex">
              <Box className="relative">
                <Link to={'/Doctoral-Studies'}>
                  <Image
                    width={280}

                    alt="European International College Logo"
                    src={r4}
                    className=""
                  />
                  <p className="text-white absolute bottom-0 mb-3 ms-3 left-0 z-50 font_w_800 text-f-32 leading-9">
                    <span className="text-f-16">  about-us</span> <br />
                    Doctoral  <br /> Studies</p>



                </Link>
              </Box>
              <Box className="relative">
                <Link to={'/Honorary-Doctorate'}>

                  <Image
                    width={280}

                    alt="European International College Logo"
                    src={r5}
                    className=""
                  />
                  <p className="text-white absolute bottom-0 mb-3 ms-3 left-0 z-50 font_w_800 text-f-32 leading-9">
                    <span className="text-f-16">about-us</span> <br />
                    Honorary <br /> Doctorate</p>
                </Link>
              </Box>
            </Box>
          </Box>



        </Box> :



          <Box className="flex flex-col justify-center items-center">


            <Box className="flex items-center  h-fit py-3 lg:py-5">
              <Image
                width={142}
                alt="European International College Logo"
                src={logo}
                className=""
              />
              <Box className="poppins">
                <h6>More About Us </h6>
                <p className=" font_w_300  text-f-16">
                  Experience the life at
                  European International Collage
                  Romania
                </p>
              </Box>
            </Box>


            <Box className="relative">
              <Link to={'/Why-Study-in-Romania-?-'}>
                <Image
                  width={560}
                  alt="European International College Logo"
                  src={r1}
                  className="rounded-tr-200"
                />

                <p className="text-white absolute bottom-0 mb-3 ms-3 left-0 z-50 font_w_800 text-f-24 leading-9">
                  <span className="text-f-16">upcoming</span> <br /> Why STUDY IN Romania ?</p>
              </Link>
            </Box>

            <Box className="relative">

              <Link to={'/Why-we-?-'}>
                <Image
                  width={560}

                  alt="European International College Logo"
                  src={r2}
                  className=""
                />

                <p className="text-white absolute bottom-0 mb-3 ms-3 left-0 z-50 font_w_800 text-f-32 leading-9">
                  <span className="text-f-16">about-us</span> <br />
                  Why We ?</p>
              </Link>
            </Box>

            <Box className=" flex">
              <Box className="relative">
                <Link to={'/Doctoral-Studies'}>
                  <Image
                    width={280}

                    alt="European International College Logo"
                    src={r4}
                    className=""
                  />
                  <p className="text-white absolute bottom-0 mb-3 ms-3 left-0 z-50 font_w_800 text-f-32 leading-9">
                    <span className="text-f-16">  about-us</span> <br />
                    Doctoral  <br /> Studies</p>



                </Link>
              </Box>
              <Box className="relative">
                <Link to={'/Honorary-Doctorate'}>

                  <Image
                    width={280}

                    alt="European International College Logo"
                    src={r5}
                    className=""
                  />
                  <p className="text-white absolute bottom-0 mb-3 ms-3 left-0 z-50 font_w_800 text-f-32 leading-9">
                    <span className="text-f-16">about-us</span> <br />
                    Honorary <br /> Doctorate</p>
                </Link>
              </Box>
            </Box>


            <Box className="relative">
              <Link to={'/Accreditation'} >
                <Image
                  width={560}

                  alt="European International College Logo"
                  src={r3}
                  className="rounded-bl-200"

                />
                <p className="text-white absolute bottom-0 mb-3 text-right me-3 right-0 z-50 font_w_800 text-f-32 leading-9">
                  <span className="text-f-16 b "> about-us</span> <br />
                  Accreditation </p>
              </Link>


            </Box>


          </Box>
        }

      </Box>
    </div>
  );
};


const Home_Section_2 = () => {
  return (
    <div data-aos="fade-left" className="py-10  px-8 md:px-16 lg:px-24 poppins font_w_400 text-f-24 text-c-blue flex justify-center">
      <div className="w-full flex  flex-col lg:flex-row justify-center lg:justify-between">
        <div className="flex justify-center my-3" >
          <Image
            src={about_1}
            width={430}
          />
        </div>
        <div className="lg:w-[calc(100%-430px)] lg:ps-10">


          <h2 data-aos="fade-left" data-aos-duration="1000" className="text-f-24  lg:text-f-32 font_w_700 text-end text-c-blue">Ambitions of European International College</h2>


          <p data-aos="fade-left" data-aos-duration="2000" className="Montserrat text-f-18 md:text-f-20 font_w_600 mt-5 text-end text-black ">EIC is accredited by the Romanian Accreditation Council and is internationally recognised. Our rigorous quality standards ensure your degree hold weight globally.</p>
          <p data-aos="fade-left" data-aos-duration="3000" className="Montserrat text-f-18 md:text-f-20 font_w_600 text-end text-black mt-5">
            Through its research, EIC seeks to make an important contribution to solving major social problems. Just as important is our task to train young people into critical academics who, motivated by their social involvement, will be able to occupy leading positions in the international and intercultural society of the future. This is why EIC places a strong emphasis on the academic formation of students, with a focus on the core values of EIC. Education and research are directly linked. EIC educates students in the research fields in which its strengths lie, and for which there is a significant demand for well educated professionals.
          </p>

        </div>
      </div>
    </div>
  )
}

const Home_Section_3 = () => {
  return (
    <div className="py-10 mb-10 px-8 md:px-16 lg:px-24 poppins font_w_400 text-f-24 text-c-blue flex  justify-center">
      <div className="w-full flex j flex-col lg:flex-row justify-center lg:justify-between">

        <div className="lg:w-[calc(100%-430px)] order-2 lg:order-1 lg:pe-10">


          <h2 data-aos="fade-right" data-aos-duration="1000" className="text-f-24  lg:text-f-32 font_w_700  text-c-blue">Continuing Professional Development</h2>


          <p data-aos="fade-right" data-aos-duration="2000" className="Montserrat text-f-18  md:text-f-20 font_w_600 mt-5  text-black ">We provide flexible study options to continuing professional education. This
            is reflected in the diversity of our courses as well as our students who come from many different backgrounds. Our dedicated student support, effective
            teaching and learning techniques and practical links with employers internationally provide an opportunity to succeed both in our virtual campus and contact classes.
            The Certificate are strictly verified by the Academic board.</p>
          <p data-aos="fade-right" data-aos-duration="3000" className="Montserrat text-f-18  md:text-f-20 font_w_600  text-black mt-5">
            No upper age limits and previous qualifications required for your lifelong learning; in other words we work for knowledge-full new world for the sake of the whole humanity.
            We offer a variety of certificate courses across a wide range of disciplines. Our portfolios are consistently updated to provide the best skills
            training courses for professionals and academics all around the world.
          </p>

        </div>

        <div data-aos="fade-right" className="flex justify-center order-1 lg:order-2 my-3" >
          <Image
            src={about_2}
            width={430}
          />
        </div>
      </div>
    </div>
  )
}


const Ourvm = () => {
  return (
    <Box className="py-10 mb-10 px-8 md:px-16 lg:px-24 poppins font_w_400  flex flex-col gap-10 justify-center">


      <Box className="border py-10 px-5 md:px-36 rounded-lg relative border-black text-center ">
        <h2 className="poppins text-f-24 font_w_800 mb-10">Our Vision</h2>
        <h2 className="poppins text-5xl md:text-f-96 top-0 text-gray-200 -z-10 left-20 md:left-1/3 font_w_300 absolute">Our Vision</h2>


        <p className="text-f-24 font_w_400 text-center relative z-10 ">

          <blockquote className="text-xl italic inline-block font-semibold -z-10 text-gray-900 h-1 m-0  absolute top-0 -scale-x-100">
            <svg className="w-20 h-20 text-gray-400 mb-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
              <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
            </svg>
          </blockquote>

          <span className="z-50">Education is available for anybody, anywhere, anytime, leading to well settled life and knowledge. Our Vision Is to be excellent, engaged and accessible we aim to be internationally recognized
            for our leadership in, empowering our student to grow their capabilities and transforms their lives.</span>



          <blockquote className="text-xl italic inline-block font-semibold -z-10 text-gray-900 h-1  absolute bottom-9 ">
            <svg className="w-20 h-20 text-gray-400 mb-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
              <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
            </svg>
          </blockquote>

        </p>


      </Box>





      <Box className="border py-10 px-5 md:px-36 rounded-lg relative border-black text-center ">
        <h2 className="poppins text-f-24 font_w_800 mb-10">Our Mission</h2>
        <h2 className="poppins text-5xl md:text-f-96 top-0 text-gray-200 -z-10 left-20 md:left-1/3 font_w_300 absolute">Our Mission</h2>


        <p className="text-f-24 font_w_400 text-center relative z-10 ">

          <blockquote className="text-xl italic inline-block font-semibold -z-10 text-gray-900 h-1 m-0  absolute top-0 -scale-x-100">
            <svg className="w-20 h-20 text-gray-400 mb-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
              <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
            </svg>
          </blockquote>

          <span className="z-50">EIC’s goal is to provide an opportunity to deliver a Lifelong learning programs of world-class. To provide an opportunity to deliver a lifelong learning, flexible learning process and achieve the life goals of the people irrespective of their age or qualification, who otherwise could not attend colleges or universities due to various compulsions, The International designed curriculum, supported by a world-based faculty, permits students to actively engage in an active educational dialogue. Further, this allows students to explore a selected grouping of studies that prepares them for a dynamic and changing environment. European International College, Virtual Mode contributes to promote the equal opportunities internationally by providing high-quality of Lifelong education to all who wish to meet their ambitions and fulfil their potentials.</span>



          <blockquote className="text-xl italic inline-block font-semibold -z-10 text-gray-900 h-1  absolute bottom-9 ">
            <svg className="w-20 h-20 text-gray-400 mb-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
              <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
            </svg>
          </blockquote>

        </p>


      </Box>



    </Box>
  )
}