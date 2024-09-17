/* eslint-disable react/prop-types */
import { Box } from "@mui/material";
import { useEffect, useState } from "react";

import { Link, useLocation } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import Form from "../Form/Form";
import { Image } from "@nextui-org/react";


import PostgraduateProgrammes from '../../../assets/images/SubCourse/PostgraduateProgrammes.png';
import PhDProgrammes from '../../../assets/images/SubCourse/Ph.D. Programmes.png';
import UndergraduateProgrammes from '../../../assets/images/SubCourse/UndergraduateProgrammes.png';
import DiplomaProgrammes from '../../../assets/images/SubCourse/DiplomaProgrammes.png';




export default function SubCourse() {
  let path = useLocation().pathname;

  const diploma =
  {
    id: 1,
    courseTitle: 'Diploma Programe',
    courseDetails: [{
      id: 1,
      courseoptions: 'Six Month Diploma Programmes',
      courselist: [
        'Diploma in Business Management ',
        'Diploma in Business Administration ',
        'Diploma in Business Organization & Management ',
        'Diploma in Business Office Administration',
        'Diploma in Business Sales & Marketing Management',

      ]
    },
    {
      id: 2,
      courseoptions: 'One Year Diploma Programmes',
      courselist: [
        'Diploma in Business Management 1',
        'Diploma in Business Administration 1',
        'Diploma in Business Organization & Management 1',
        'Diploma in Business Office Administration',
        'Diploma in Business Sales & Marketing Management',

      ]
    },
    {
      id: 3,
      courseoptions: 'Eighteen Month Diploma Programmes',
      courselist: [
        'Diploma in Business Management 2',
        'Diploma in Business Administration 2',
        'Diploma in Business Organization & Management 2',
        'Diploma in Business Office Administration',
        'Diploma in Business Sales & Marketing Management',

      ]
    }]
  }

  const undergraduate =
  {
    id: 1,
    courseTitle: 'Undergraduate Programmes',
    courseDetails: [{
      id: 1,
      courseoptions: 'B.A. Degree Programmes',
      courselist: [
        'B.A. English ',
        'B.A. English ( C.A. ) ',
        'B.A. Economic ',
        'B.A. History',
        'B.A. Political Science',

      ]
    },
    {
      id: 2,
      courseoptions: 'B.Sc. Degree Programmes',
      courselist: [
        'B.A. English ',
        'B.A. English ( C.A. ) ',
        'B.A. Economic ',
        'B.A. History',
        'B.A. Political Science',

      ]
    },
    {
      id: 3,
      courseoptions: 'B.Com. Degree Programmes',
      courselist: [
        'B.A. English ',
        'B.A. English ( C.A. ) ',
        'B.A. Economic ',
        'B.A. History',
        'B.A. Political Science',

      ]
    },
    {
      id: 4,
      courseoptions: 'B.C.A. Degree Programmes',
      courselist: [
        'B.A. English ',
        'B.A. English ( C.A. ) ',
        'B.A. Economic ',
        'B.A. History',
        'B.A. Political Science',

      ]
    },
    {
      id: 5,
      courseoptions: 'B.B.A. Degree Programmes',
      courselist: [
        'B.A. English ',
        'B.A. English ( C.A. ) ',
        'B.A. Economic ',
        'B.A. History',
        'B.A. Political Science',

      ]
    },
    {
      id: 6,
      courseoptions: 'B.S.W. Degree Programmes',
      courselist: [
        'B.A. English ',
        'B.A. English ( C.A. ) ',
        'B.A. Economic ',
        'B.A. History',
        'B.A. Political Science',

      ]
    },
    ]
  }





  let data;

  path == "/course/Diploma-Course" ? data = diploma : ""
  path == "/course/Undergraduate-Programmes" ? data = undergraduate : ""
  path == "/course/Postgraduate-Programmes" ? data = undergraduate : ""
  path == "/course/Ph.D-Programmes" ? data = undergraduate : ""
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,

    });
  }, []);


  return (

    <div>
      <Home_Header_section />
      <CourseSection data={data} />

      <MoreCourseSection />
      <Form />
    </div>
  )
}


const Home_Header_section = () => {

  let path = useLocation();
  let programe = path.pathname.replace("-", " ").replace("/course/", " ");

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
            <h2 data-aos="fade-right" data-aos-duration="1000" className="text-white font_w_800 text-f-48  mb-5 sm:mb-0 ">{programe}</h2>
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


const CourseSection = ({ data }) => {



  // const [id, setId] = useState(1);
  const [index, setIndex] = useState(0);


  let path = useLocation().pathname;


  var item = data.courseDetails[index];
  var item2 = item.courseoptions;
  const programe = item2.replace(/ /g, "-");



  return (
    <div className="" data-aos="zoom-in-down">
      <Box className="py-10 px-3 md:px-10 xl:px-0  max-w-max-1220 mx-auto">
        {/* select course deuration */}



        <div className="">
          <select onChange={(e) => setIndex(e.target.value)} className="w-full  bg-transparent Montserrat font_w_600 text-f-20 md:text-f-32 text-c-blue border-none outline-none">


            {data.courseDetails.map((item, index) => {

              return (

                <option value={index} className="Montserrat font_w_600  text-f-18 text-c-blue" key={index} >{item.courseoptions}</option>
              )
            }
            )}

          </select>

        </div>


        {/* course details */}
        <Box className="">
          <div className="  mt-5  px-2 py-1">

            <ul>
              {item.courselist.map((item, index) => {



                return (
                  <li className={`${index % 2 === 0 ? 'bg-y2' : 'bg-c-b-blue text-white'} py-1 Montserrat text-f-24 font_w_600 px-1 `} key={index}><span className="cursor-pointer"> <Link to={`${path}/${programe}`}>{item}</Link></span></li>
                )
              }

              )}
            </ul>

          </div>
        </Box>
      </Box>
    </div>
  )
}

const MoreCourseSection = () => {



  const path = useLocation().pathname
  const data = [
    {
      id: 1,
      title: ' Diploma Programmes',
      pname: 'Diploma-Programmes',
      img: DiplomaProgrammes,
    },
    {
      id: 2,
      title: ' Undergraduate Programmes ',
      pname: 'Undergraduate-Programmes',
      img: UndergraduateProgrammes,
    },
    {
      id: 3,
      title: 'Postgraduate Programmes',
      pname: 'Postgraduate-Programmes',
      img: PostgraduateProgrammes,
    },
    {
      id: 4,
      title: 'Ph.D. Programmes',
      pname: 'Ph.D-Programmes',
      img: PhDProgrammes,
    }
  ]
  return (
    <div className=" px-3 md:px-10 xl:px-0 mt-20 max-w-max-1220 mx-auto " >


      <div className="text-end flex flex-col  items-end text-c-blue" >
        <h2 data-aos="zoom-in-left" data-aos-duration="1000" className="poppins font_w_700 italic text-f-24 md:text-f-36 border-b-2 border-c-blue w-full lg:w-2/3">More Course</h2>
        <p data-aos="zoom-in-left" data-aos-duration="1100" className="mt-5 font_w_300 poppins text-f-16 md:text-f-22 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
      </div>



      <div>


        <Box className="flex justify-center gap-5 flex-col mt-10 md:flex-row">
          <div className="flex flex-row  items-center  justify-center gap-5" data-aos="zoom-in-up" data-aos-duration="1000">
            {data.map((item) => {
              return (
                <div key={item.id} className="relative  group text-end ">

                  {path.includes(item.pname) ? '' : <><Image
                    width={365}
                    alt="European International College Logo"
                    src={item.img}
                    className=" transition delay-10 duration-500 group-hover:brightness-50" />

                    <h6 className="break-normal absolute transition delay-100 duration-1000 group-hover:-translate-y-10 group-hover:translate-x-10 me-3 mt-2 bottom-3  ps-3    text-white text-f-16 sm:text-f-18 md:text-f-24 z-10 font_w_700 left-0 text-start">
                      {item.title}</h6></>}

                </div>
              )
            })}


          </div>





        </Box>



      </div>

    </div>

  )
}



