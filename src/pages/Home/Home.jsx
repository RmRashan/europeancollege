/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

import "./index.css";
import { Image } from "@nextui-org/react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Home_Section_3 from "../../assets/images/Home/Home_Section_3.png";
import Home_Section_4 from "../../assets/images/Home/Home_Section_4.png";
import home_Section_5 from "../../assets/images/Home/Home_Section_5.png";
import logo from "../../assets/images/logo.png";
import findCourse from "../../assets/images/Home/findCourse.png";
import flag from "../../assets/images/flag2.png";
import r1 from "../../assets/images/Home/r1.png";
import r2 from "../../assets/images/Home/r2.png";
import r3 from "../../assets/images/Home/r3.png";
import r4 from "../../assets/images/Home/r4.png";
import r5 from "../../assets/images/Home/r5.png";
import r1_1 from "../../assets/images/Home/r1 (1).png";
import r4_1 from "../../assets/images/Home/r4 (1).png";
import science_img from "../../assets/images/Home/r2 (1).png";
import d_ca from "../../assets/images/Home/r5.png";
import SearchIcon from "@mui/icons-material/Search";

import Icon1 from '../../assets/images/Home/icons/Icon.png'
import Icon2 from '../../assets/images/Home/icons/Icon (1).png'
import Icon3 from '../../assets/images/Home/icons/Icon (2).png'
import Icon4 from '../../assets/images/Home/icons/Icon (3).png'
import u1 from '../../assets/images/Home/u1.png'
import u2 from '../../assets/images/Home/u2.png'




import { Box } from "@mui/material";
import { Link } from "react-router-dom";


import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";


import { Swiper, SwiperSlide } from 'swiper/react';


import './index.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';
import { Pagination } from 'swiper/modules';


export const subNews = [
  {
    title: "Lorem ipsium2",
    news: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    date: "12th Nov 2023",
  },
  {
    title: "Lorem ipsium3",
    news: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    date: "12th Nov 2023",
  },
];
export default function Home() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const action = (
    <>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );


  // Home Section Content API
  const [data, setData] = useState([""]);




  // ourt patner
  const [ourpatner, setOurpatner] = useState(['']);




  useEffect(() => {

    window.scrollTo({

      top: 0,
      left: 0,
    });
    setOurpatner([
      {
        id: 1,
        title: "The University of Edinburgh",
        img: u1
      },
      {
        id: 2,

        title: "The University of Edinburgh",
        img: u2
      }, {
        id: 3,

        title: "The University of Edinburgh",
        img: u1
      },
      {
        id: 4,

        title: "The University of Edinburgh",
        img: u2
      }, {
        id: 5,

        title: "The University of Edinburgh",
        img: u1
      },
      {
        id: 6,

        title: "The University of Edinburgh",
        img: u2
      },
    ])

    setData([
      {
        id: 1,
        image: Home_Section_3,
        title: "Accredited & Globally Recognized",
        descrpition:
          "EIC is accredited by the Romanian Accreditation Council and is internationally recognised. Our rigorous quality standards ensure your degree hold weight globally.",
      },
      {
        id: 2,
        image: Home_Section_4,
        title: "100% Flexible & Online",
        descrpition:
          "Study when and where suits you with our fully online degree programs. Whether fulltime or part-time, benefit from our flexible learning schedules, online exams, and full support throughout your studies.",
      },
      {
        id: 3,
        image: home_Section_5,
        title: "100% Job Success",
        descrpition:
          "Our graduates are equipped with the latest industry know-hows and land a job within their field of study.",
      },
    ]);


    handleClick();

  }, []);
  return (
    <>
      <Snackbar
        open={open}
        autoHideDuration={8000}
        onClose={handleClose}
        anchorOrigin={{ open: false, vertical: "bottom", horizontal: "right" }}
        TransitionComponent={Slide}
        className="md:w-1/2"
        message="Please note that this website is currently undergoing maintenance and is in the development stage. The content on this site is not real and is part of the ongoing development process. We appreciate your patience and understanding as we work to enhance your experience. Thank you."
        action={action}
      />
      {/* Home_Header */}
      <Home_Header_section />

      {/* Course Find Section */}
      <CourseFindSection />

      {/* Home 2nd section */}

      <Home_section2 data={data} />


      <Home_Section3 />

      <About_section />


      {/* Home Our Event Section */}


      {/* letter Section */}
      <LetterSection />

      {/* Home Section 5 */}
      <Home_Section_5 />

      {/* Home Section 6 */}
      <Home_Section_6 />


      {/* NewsSection */}

      <Home_Section7 />

      <Our_Partner ourpatner={ourpatner} />


      <OurEvent_section />



      {/* EmailSendSection */}
      <EmailSendSection />
    </>
  );
}

const Home_Header_section = () => {
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

    <div data-aos="fade-right"
      className="h-100svh flex flex-col bg-white">

      <div className={screenSize.width <= 933 ? "h-16" : "h-20"}></div>

      <div className="Home_Header_img flex flex-col justify-center relative  rounded-bl-250 md:rounded-bl-500 ">
        <Box className="absolute bottom-32 sm:bottom-16 md:bottom-28 lg:bottom-20 px-5 sm:px-0 sm:left-16 lg:w-3/5  md:left-36 flex flex-col md:items-center lg:items-end justify-end">
          <div className=" text-f-28 sm:text-f-40 md:text-f-48 mb-5 sm:mb-0  " >
            <h1 className="text-white  " data-aos="fade-right" data-aos-duration="3000" >
              EUROPEAN INTERNATIONAL COLLEGE ROMANIA
            </h1>
          </div>

          <div className="flex justify-items-end items-center mb-5 flex-col mt-5 ">
            <div className="px-3">
              <h2 className="text-white text-f-24 md:text-f-32 font-poppins " data-aos="fade-right" data-aos-duration="3000" >
                Our Next Intake - 21st Nov 2023
              </h2>
            </div>
            <div className="flex  flex-col md:flex-row justify-start" data-aos="fade-right"
              data-aos-duration="3000"
              data-aos-easing="ease-in-out">
              <button className=" bg-gray-300 text-f-2 md:text-f-24  px-20 py-2 me-10">
                Apply Now
              </button>
              <h5 className="text-gray-300 text-f-20 md:text-f-24  pt-5 md:pt-0 text-center my-auto font-poppins me-5">
                Request Information
              </h5>
            </div>
          </div>
        </Box>
      </div>
    </div>

  );
};

const CourseFindSection = () => {
  return (



    <div className="px-3 sm:px-10 poppins " data-aos="fade-left">
      <div className="flex w-full justify-between items-start sm:items-end py-10 md:justify-around lg:justify-center flex-col sm:flex-row">
        <div className="sm:w-1/2 md:w-1/3 flex justify-center py-3 order-1 px-3 sm:order-2">
          <Image
            width={430}
            alt="European International College Logo"
            src={findCourse}
            className=""
          />
        </div>
        <div className="flex w-full sm:w-1/2 lg:w-1/3 justify-end sm:justify-start order-2 sm:order-1 ">
          <div className="w-11/12 sm:w-full xl:ps-10 flex flex-col px-3 py-3 ps-3">
            <h4 className="text-c-blue text-f-28  font_w_400 Montserrat">
              Find Your
            </h4>
            <p className=" w-auto xl:w-96 text-f-32 text-c-blue font_w_700">
              Dream Course
            </p>
            <div className="border border-c-blue  p-3 py-2 flex justify-between mb-10">
              <input
                type="text"
                className="bg-transparent border-none w-2/3 outline-none font-poppins placeholder-c-blue font_w_300 text-c-blue accent-c-bl text-f-20"
                placeholder="Your Email"
              />
              <button className=" bg-white">
                <SearchIcon className="text-c-blue" fontSize="large" />
              </button>
            </div>

            <Box className="flex flex-col text-c-blue text-f-18 font_w_500 gap-1">
              <Link className="w-fit" to={"course/Diploma-Course"}>
                Diploma Programmes{" "}
                <ArrowForwardIosIcon className="ms-3" fontSize="inherit" />
              </Link>
              <Link className="w-fit" to={"course/Undergraduate-Programmes"}>
                Undergraduate Programmes{" "}
                <ArrowForwardIosIcon className="ms-3" fontSize="inherit" />
              </Link>
              <Link className="w-fit" to={"course/Postgraduate-Programmes"}>
                Postgraduate{" "}
                <ArrowForwardIosIcon className="ms-3" fontSize="inherit" />
              </Link>
              <Link className="w-fit" to={"course/Ph.D-Programmes"}>
                PHD Programmes{" "}
                <ArrowForwardIosIcon className="ms-3" fontSize="inherit" />
              </Link>
            </Box>
          </div>
        </div>
      </div>
    </div>

  );
};

const Home_section2 = ({ data }) => {

  return (

    <div className="px-3 sm:px-10 py-20 poppins bg-c-b-blue flex flex-col text-white poppins"  >
      <Box className="flex flex-col gap-3 md:flex-row pb-10">
        <Box className=" flex flex-col md:w-1/2 px-2">
          <p className="text-white poppins font_w_700 text-f-40">Why Choose Us ?</p>
          <p className="poppins font_w_400 text-f-22">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </Box>
        <Box className="  md:w-1/2  px-2">
          <Box className=" flex flex-col gap-3 max-w-lg ">
            <p className="poppins font_w_400 text-f-16">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.”</p>
            <p className="font_w_700 text-f-16">Alizeh SHAH</p>
            <p className="font_w_300 text-base">Electronic Engineering Student</p>
          </Box>
        </Box>

      </Box>
      <Box>
        <Swiper
          slidesPerView={'auto'}
          // centeredSlides={true}
          spaceBetween={50}
          grabCursor={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}


          className="mySwiper"
        >

          {data.map((data) =>
            <SwiperSlide className="bg-transparent py-20" key={data.id}>


              <Box className="relative flex justify-end items-start  text-black  w-[695px]  h-[508px]">
                <Image
                  src={data.image}

                />

                <Box className=" absolute z-50 w-[260px]  md:w-[388px] h-[190px] md:h-[308px] bottom-0 left-0 flex justify-center items-center  flex-col bg-yellow-400 p-2">
                  <p className="font_w_700 text-f-16 md:text-f-28 mb-2">{data.title}</p>
                  <p className="text-f-12 md:text-f-16  font_w_500">{data.descrpition}</p>
                </Box>
              </Box>
            </SwiperSlide>
          )}

        </Swiper>

      </Box>
    </div>

  );
};


const Home_Section3 = () => {
  return (
    <Box className="Homesection3 flex items-end justify-end px-5 py-5">
      <Box className="bg-yellow-400 inline-block p-11 poppins font_w_700 text-f-24 " >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </Box>
    </Box>
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

              <Link to={'Why-we-?-'}>
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
              <Link to={'Accreditation'}>
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
              <Link to={'aboutUs'}>  <Image
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
                <Link to={'Doctoral-Studies'}>
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
                <Link to={'Honorary-Doctorate'}>

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
              <Link to={'aboutUs'}>
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

              <Link to={'Why-we-?-'}>
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
                <Link to={'Doctoral-Studies'}>
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
                <Link to={'Honorary-Doctorate'}>

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
              <Link to={'Accreditation'} >
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





const LetterSection = () => {
  return (

    <div className="bg-c-b-blue w-full py-16 mt-10 px-5 sm:px-10 md:px-20 lg:px-28" data-aos="zoom-out">
      <div className="flex flex-wrap md:flex-nowrap justify-between">
        <Box className=" md:w-170 order-1 flex items-center ">
          <Image
            alt="European International College Logo"
            src={logo}
            className="w-w80 md:w-170"
          />
        </Box>
        <Box className="block order-3 md:order-2 w-full text-white py-3 px-0 md:px-5">
          <Box className="border-b-2 h-full flex flex-col justify-between">
            <h2 className="mb-5 md:mb-0">
              EUROPEAN INTERNATIONAL COLLEGE ROMANIA
            </h2>
            <h2>
              {" "}
              <i>Vice Chancellor’s Message</i>
            </h2>
          </Box>
        </Box>
        <Box className="flex order-2 md:order-3 items-center  md:w-170">
          <Image
            // height={100}
            alt="European International College Logo"
            src={flag}
            className="w-w80 md:w-170"
          />
        </Box>
      </div>

      <div className="mt-5">
        <p className="text-white text-f-18 md:text-f-20 font_w_700 text-start">
          Dear Students,
        </p>
        <h6 className="text-white text-f-20 md:text-f-22 font_w_700 Montserrat mt-3">
          “{" "}
          <i>
            An investment in knowledge pays the best interest “ – Benjamin
            Franklin.
          </i>{" "}
        </h6>
      </div>

      <Box className="text-c-gray text-f-16 sm:text-f-18  md:text-f-20 font_w_400">
        <p className="mt-8">
          European International College aims to provide innovative and
          globally acclaimed programs to equip the students with thorough
          knowledge of the novel and latest techniques of management. The
          Institute believes that “Creativity & Knowledge” is the courage to
          know and we ensure that in learning with us, people gain the edge
          that makes them invincible when they come face to face with today’s
          world of competition.
        </p>
        <p className="mt-5">
          The University aims to impart quality education to the students and
          motivate them to mobilise their intrinsic abilities to leap ahead in
          the field of management and imbibe in them the importance of
          humanitarian value based education.
        </p>
        <p className="mt-5">
          EIC will mentor the students to develop and conceptualize corporate
          ideas for the benefit of their Organisation and the society at
          large.
        </p>
        <p className="mt-5">
          EIC is imparting the quality education to its students all over the
          country including the remote areas. With its highly flexible mode of
          education, Virtual University enables its students to manage studies
          at their own convenience and provides opportunities to harness their
          untapped talents. European International College is playing its due
          role in promoting education in our Country Romania. I hope that the
          University will continue to ensure best quality in education and
          research. I wish this University success in the years ahead.
        </p>
        <p className="mt-5">Thank You!</p>
        <p>Dr. Gabriel Vincent Moral </p>{" "}
        <p> Vice Chancellor - European International College</p>
      </Box>
    </div>

  );
};

const Home_Section_5 = () => {
  return (

    <div className="px-3 sm:px-10  md:px-28  mt-20" data-aos="zoom-out-up">
      <div className="home_section_5_bg flex justify-center md:justify-end  h-580 lg:h-600 xl:h-700">

        <Box className="py-5 md:pe-20 h-full flex flex-col justify-between gap-2 ">
          <div data-aos="fade-left" data-aos-easing="linear" data-aos-duration="1000" className="bg-blue-50 transition delay-10 duration-500 ease-in-out poppins font_w_500 text-f-24  shadow-[0_25px_5px_-15px_rgba(0,0,0,0.3)] flex justify-center items-center bg-opacity-50 hover:bg-opacity-100 h-120 w-280 md:w-300 rounded-bl-60  rounded-tr-60">
            <span className="w-164 text-cente">
              {" "}
              78 Years of Excellence
            </span>
          </div>
          <div data-aos="fade-left" data-aos-easing="linear" data-aos-duration="1050" className="bg-blue-50 transition delay-10 duration-500 ease-in-out poppins font_w_500 text-f-24  shadow-[0_25px_5px_-15px_rgba(0,0,0,0.3)] flex justify-center items-center bg-opacity-50 hover:bg-opacity-100 h-120 w-280 md:w-300 rounded-bl-60  rounded-tr-60">
            <span className="w-[209px] text-center">
              {" "}
              123 in QS World University Ranking
            </span>
          </div>
          <div data-aos="fade-left" data-aos-easing="linear" data-aos-duration="1100" className="bg-blue-50 transition delay-10 duration-500 ease-in-out poppins font_w_500 text-f-24  shadow-[0_25px_5px_-15px_rgba(0,0,0,0.3)] flex justify-center items-center bg-opacity-50 hover:bg-opacity-100 h-120 w-280 md:w-300 rounded-bl-60  rounded-tr-60">
            <span className="w-[209px] text-center">
              {" "}
              Motto <br /> “Mens et manus”
            </span>
          </div>
          <div data-aos="fade-left" data-aos-easing="linear" data-aos-duration="1100" className="bg-blue-50 transition delay-10 duration-500 ease-in-out poppins font_w_500 text-f-24  shadow-[0_25px_5px_-15px_rgba(0,0,0,0.3)] flex justify-center items-center bg-opacity-50 hover:bg-opacity-100 h-120 w-280 md:w-300 rounded-bl-60  rounded-tr-60">
            <span className="w-[209px] text-center">
              {" "}
              Nobel <br /> laureates 100
            </span>
          </div>
        </Box>

      </div>
    </div>

  );
};

const Home_Section_6 = () => {
  return (
    <div className="px-3 sm:px-10  md:px-28  mt-20">

      <div className="text-end flex flex-col  items-end text-c-blue">
        <h2 data-aos="fade-up" data-aos-duration="1000"
          className="poppins font_w_700 italic text-f-24 md:text-f-36 border-b-2 border-c-blue w-full lg:w-2/3">
          Why Study in Romania ?
        </h2>
        <p data-aos="fade-up" data-aos-duration="1100"
          className="mt-5 font_w_300 poppins text-f-16 md:text-f-22 ">
          Whoever you are, European or non-European citizen, choosing to study
          abroad in European Union, especially in Romania, is the best choice
          you can make: vast cultural diversity, access to all European
          countries, heart of research and conferences centers and possibility
          of easily being involved into community, meeting people from all
          over the world and possibility of making network useful lasting for
          the rest of live, etc. Studying in Romania makes students grow a lot
          and quickly.
        </p>
      </div>


      <div>

        <Box className="flex justify-center gap-2 flex-col mt-10 lg:flex-row">
          <div className="flex flex-row justify-center gap-2">
            <div className="relative  group text-end flex justify-end" data-aos="zoom-in-up" data-aos-duration="1000">
              <Image
                width={265}
                alt="European International College Logo"
                src={r1_1}
                className=" transition delay-10 duration-500 group-hover:brightness-50"
              />

              <h6 className="absolute transition delay-100 duration-1000 group-hover:translate-y-10 group-hover:-translate-x-10 me-3 mt-2 top-0  ps-3   w-[150px] text-white text-f-16 sm:text-f-24  font_w_700">
                Member of EU and EEA
              </h6>
            </div>
            <div className="relative  group text-end flex justify-end" data-aos="zoom-in-up" data-aos-duration="1050">
              <Image
                width={265}
                alt="European International College Logo"
                src={science_img}
                className=" transition delay-10 duration-500 group-hover:brightness-50"
              />

              <h6 className="absolute transition delay-100 duration-1000 group-hover:translate-y-10 group-hover:-translate-x-10 me-3 mt-2 top-0  ps-3   w-[200px] text-white text-f-16 sm:text-f-24  font_w_700">
                Excellent quality of education
              </h6>
            </div>
          </div>

          <div className="flex flex-row justify-center gap-2" >
            <div className="relative  group text-end flex justify-end" data-aos="zoom-in-up" data-aos-duration="1100">
              <Image
                // width={265}
                height={20}
                alt="European International College Logo"
                src={d_ca}
                className="h-full transition delay-10 duration-500 group-hover:brightness-50"
              />

              <h6 className="absolute transition delay-100 duration-1000 group-hover:translate-y-10 group-hover:-translate-x-10 me-3 mt-2 top-0  ps-3   w-[200px] text-white text-f-16 sm:text-f-24 font_w_700">
                Reasonable tuition fees and living expenses
              </h6>
            </div>
            <div className="relative  group text-end flex justify-end" data-aos="zoom-in-up" data-aos-duration="1150">
              <Image
                width={265}
                alt="European International College Logo"
                src={r4_1}
                className=" transition delay-10 duration-500 group-hover:brightness-50"
              />

              <h6 className="absolute transition delay-100 duration-1000 group-hover:translate-y-10 group-hover:-translate-x-10 me-3 mt-2 top-0  ps-3   w-[200px] text-white text-f-16 sm:text-f-24  font_w_700">
                Rich academic heritage
              </h6>
            </div>
          </div>
        </Box>

      </div>
    </div>
  );
};



const Home_Section7 = () => {
  return (
    <Box className="bg-c-b-blue px-5 mt-20 py-20 poppins text-white flex flex-col items-center justify-center">
      <Box className=" text-center max-w-max-1250 w-full ">
        <p className="text-f-24 font_w_700">Lorem ipsum dolor sit amet</p>
        <p className="font_w_400 text-f-20 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
      </Box>
      <Box className="w-full flex justify-around mt-20">
        <Box>
          <Image
            src={Icon1}
            className="w-12 md:w-24"
          />
          <h2 className="text-y2  text-f-32 md:text-f-48">34</h2>
          <p className=" text-f-12 md:text-f-20">Loremipsum</p>
        </Box>
        <Box>
          <Image
            src={Icon2}
            className="w-12 md:w-24"
          />
          <h2 className="text-y2  text-f-32 md:text-f-48">34</h2>
          <p className=" text-f-12 md:text-f-20">Loremipsum</p>
        </Box>
        <Box>
          <Image
            src={Icon3}
            className="w-12 md:w-24"
          />
          <h2 className="text-y2  text-f-32 md:text-f-48">34</h2>
          <p className=" text-f-12 md:text-f-20">Loremipsum</p>
        </Box>
        <Box>
          <Image
            src={Icon4}
            className="w-12 md:w-24"
          />
          <h2 className="text-y2  text-f-32 md:text-f-48">34</h2>
          <p className=" text-f-12 md:text-f-20">Loremipsum</p>
        </Box>

      </Box>
    </Box>
  )
}



const Our_Partner = ({ ourpatner }) => {

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
    <Box className="px-3 md:px-10 py-20 lg:px-32">
      

      <h2 className="text-c-blue poppins font_w_700 text-f-36 ">Our Partners</h2>
      <hr className="w-fullv  border-2 border-c-blue mt-3" />

      {screenSize.width >= 500 ?
        <Swiper
        slidesPerView={'auto'}
        spaceBetween={30}
        centeredSlides={false}

        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}

        className="mySwiper mt-10"
      >
        {ourpatner.map(ourpatner => {
          return (
            <SwiperSlide key={ourpatner.id} className="flex  py-20  flex-col  w-full max-w-300">
              <Box className="h-[200px] w-[200px]">
                <Image
                  src={ourpatner.img}
                  className="h-[200px]"
                />

              </Box>
              <h2>{ourpatner.title}</h2>
            </SwiperSlide>
          )
        }


        )}

      </Swiper>
 : 
        <Swiper
          slidesPerView={'auto'}
          spaceBetween={50}
          centeredSlides={true}

          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}

          className="mySwiper mt-10"
        >
          {ourpatner.map(ourpatner => {
            return (
              <SwiperSlide key={ourpatner.id} className="flex  py-20  flex-col  w-full max-w-300">
                <Box className="h-[200px] w-[200px]">
                  <Image
                    src={ourpatner.img}
                    className="h-[200px]"
                  />

                </Box>
                <h2>{ourpatner.title}</h2>
              </SwiperSlide>
            )
          }


          )}

        </Swiper>

      
      }



      <Box className=" flex justify-center mt-10">
        <Link className="text-f-20 font_w_700 text-c-blue poppins">{'> '}  View All</Link>
      </Box>
    </Box>
  )
}


const OurEvent_section = () => {

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
    <div className="px-3 sm:px-10 flex justify-center mt-10">
      <Box className="">
        {screenSize.width >= 850 ?
          <Box className="flex">



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

                <Image
                  width={560}

                  alt="European International College Logo"
                  src={r2}
                  className=""
                />

                <p className="text-white absolute bottom-0 mb-3 ms-3 left-0 z-50 font_w_800 text-f-32 leading-9"><span className="text-f-16">upcoming</span> <br />
                  Virtual Reality <br /> Day 2022</p>
              </Box>
              <Box className="relative">
                <Image
                  width={560}

                  alt="European International College Logo"
                  src={r3}
                  className="rounded-bl-200"

                />
                <p className="text-white absolute bottom-0 mb-3 text-right me-3 right-0 z-50 font_w_800 text-f-32 leading-9">
                  <span className="text-f-16 b "> 12th feb 2023</span> <br />
                  FOE <br />  New Physics  <br /> Laboratory <br />Opening </p>





              </Box>
            </Box>


            <Box>
              <Box className="relative">
                <Image
                  width={560}
                  alt="European International College Logo"
                  src={r1}
                  className="rounded-tr-200"
                />

                <p className="text-white absolute bottom-0 mb-3 ms-3 left-0 z-50 font_w_800 text-f-32 leading-9"><span className="text-f-16">upcoming</span> <br />
                  Undergraduate Open Day <br /> 2024</p>
              </Box>

              <Box className=" flex">
                <Box className="relative">
                  <Image
                    width={280}

                    alt="European International College Logo"
                    src={r4}
                    className=""
                  />
                  <p className="text-white absolute bottom-0 mb-3 ms-3 left-0 z-50 font_w_800 text-f-32 leading-9"><span className="text-f-16">30th apr 2023</span> <br />
                    UNight Camp  <br /> Day 2022</p>
                </Box>
                <Box className="relative">

                  <Image
                    width={280}

                    alt="European International College Logo"
                    src={r5}
                    className=""
                  />
                  <p className="text-white absolute bottom-0 mb-3 ms-3 left-0 z-50 font_w_800 text-f-32 leading-9"><span className="text-f-16">13th sep 2023</span> <br />
                    Graduation 2023 <br /> 2023</p>
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
              <Image
                width={560}
                alt="European International College Logo"
                src={r1}
                className="rounded-tr-200"
              />

              <p className="text-white absolute bottom-0 mb-3 ms-3 left-0 z-50 font_w_800 text-f-24 leading-9"><span className="text-f-16">upcoming</span> <br />
                Undergraduate Open Day <br /> 2024</p>
            </Box>

            <Box className="relative">

              <Image
                width={560}

                alt="European International College Logo"
                src={r2}
                className=""
              />

              <p className="text-white absolute bottom-0 mb-3 ms-3 left-0 z-50 font_w_800 text-f-24 leading-9"><span className="text-f-16">upcoming</span> <br />
                Virtual Reality <br /> Day 2022</p>
            </Box>

            <Box className=" flex">
              <Box className="relative">
                <Image
                  width={280}

                  alt="European International College Logo"
                  src={r4}
                  className=""
                />
                <p className="text-white absolute bottom-0 mb-3 ms-3 left-0 z-50 font_w_800 text-f-24 leading-9"><span className="text-f-16">30th apr 2023</span> <br />
                  UNight Camp  <br /> Day 2022</p>
              </Box>
              <Box className="relative">

                <Image
                  width={280}

                  alt="European International College Logo"
                  src={r5}
                  className=""
                />
                <p className="text-white absolute bottom-0 mb-3 ms-3 left-0 z-50 font_w_800 text-f-24 leading-9"><span className="text-f-16">13th sep 2023</span> <br />
                  Graduation 2023 <br /> 2023</p>
              </Box>
            </Box>


            <Box className="relative">
              <Image
                width={560}

                alt="European International College Logo"
                src={r3}
                className="rounded-bl-200"

              />
              <p className="text-white absolute bottom-0 mb-3 text-right me-3 right-0 z-50 font_w_800 text-f-24 leading-9">
                <span className="text-f-16 b "> 12th feb 2023</span> <br />
                FOE <br />  New Physics  <br /> Laboratory <br />Opening </p>





            </Box>


          </Box>
        }

      </Box>
    </div>
  );
};

const EmailSendSection = () => {
  return (

    <div data-aos="flip-down" className="emailsenderBG mb-16 flex justify-center items-center mt-16">
      <Box>
        <h2 className="text-white text-center text-f-32">
          Get Notified with our NewsLetter
        </h2>
        <form>
          <div className="border-2 p-3 py-2 flex justify-between">
            <input
              type="email"
              className="bg-transparent border-none w-2/3 outline-none font-poppins placeholder-white font_w_300 text-white accent-white"
              placeholder="Your Email"
            />
            <button className="px-10 py-1 bg-white">Enter</button>
          </div>
        </form>
      </Box>
    </div>

  );
};
