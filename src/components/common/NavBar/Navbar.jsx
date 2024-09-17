import { Link, useLocation } from "react-router-dom";
import logo from '../../../assets/images/logo.png';
import CloseIcon from '@mui/icons-material/Close';
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import { Image,Button } from "@nextui-org/react";

import SearchIcon from "@mui/icons-material/Search";


export default function Navbar() {

  return (
    <NewBar />
  )
}




const NewBar = () => {
  const path = useLocation()

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


  const [open, setOpen] = useState(false);


  return (

    <nav className="fixed w-full z-100 drop-shadow-lg">
      {screenSize.width <= 933 ?



        <Box className=" flex justify-end w-full px-10 lg:px-20 xl:px-36 py-4 lg:py-3 bg-white">


          <Box className=' flex justify-end max-w-max-800 w-full absolute   z-100 top- right-1/4 sm:right-1/3'>
            <Box className=" relative w-[200px]  ">

              <Box className="  flex justify-center ">

                <div className="logocontainer2 flex justify-center items-center">

                  <Image
                    width={80}
                    src={logo}
                    className=""

                  />
                </div>

              </Box>
            </Box>
        </Box>


          <Box className='w-4/12 flex justify-end'>
            <MenuIcon fontSize="large" onClick={() => setOpen(!open)} className=" " /> 
          </Box>






          {/* MOBILE VIVEW MENU BAR */}
          {open == true ?
            <div onClick={() => setOpen(!open)} className="absolute left-0 top-0  h-100svh w-screen z-100">
              <div className=" p-2 py-10 bg-white  h-full w-full text-f-16 flex flex-col items-center justify-between px-3">
                <Box>
                  <CloseIcon/>
                </Box>

                <Box className='flex  flex-col items-center'>
                  <Image
                    width={100}
                    src={logo}
                    className=""

                  />
                  <h2 className="font_w_700 text-f-24 text-center">
                    EUROPEAN  <br /> INTERNATIONAL  COLLAGE <br/>
                    ROMANIA
                  </h2>
                </Box>


           
                  <Box className="overflow-y-scroll w-full  h-2/6 ">
                  <ul className="text-center   px-2">
                    <li className="poppins font_w_400 text-f-28 my-3 "><Link className={path.pathname == '/' ? ' bg-c-b-blue block text-white ' : ''} to={'/'}>Home</Link> </li>
                    <li className="poppins font_w_400 text-f-28 my-3"><Link className={path.pathname.includes('/course') ? ' bg-c-b-blue block text-white ' : ''} to={'/course'}>Course</Link> </li>
                    <li className="poppins font_w_400 text-f-28 my-3 "><Link className={path.pathname == '/aboutUs' ? 'bg-c-b-blue block text-white' : ''} to={'/aboutUs'}>About us</Link>   </li>
                    <li className="poppins font_w_400 text-f-28 my-3"><Link className={path.pathname == '/Our-Partners' ? 'bg-c-b-blue block text-white' : ''} to={'/Our-Partners'}>Our Partners</Link></li>
                    <li className="poppins font_w_400 text-f-28 my-3"><Link className={path.pathname == '/gallery' ? 'bg-c-b-blue block text-white' : ''} to={'/gallery'}>Gallery</Link>  </li>
                    <li className="poppins font_w_400 text-f-28 my-3"><Link className={path.pathname == '/admission' ? 'bg-c-b-blue block text-white' : ''} to={'/admission'}>Admission</Link> </li>
                    <li className="poppins font_w_400 text-f-28 my-3"><Link className={path.pathname == '/contact-us' ? 'bg-c-b-blue block text-white' : ''} to={'contact-us'}>Contact us</Link></li>

                    </ul>
                  </Box>
           

                <Box className="w-full flex  flex-col items-center">
                  <p className="text-c-b-blue text-f-20 font_w_700">Our Next Intake</p>
                  <p className="text-c-b-blue text-f-20 font_w_700">21st Nov 2023</p>
                  <button className="border-2 py-2 w-full block rounded-md border-c-b-blue text-c-b-blue text-f-24 font_w_700"> Apply Now</button>
       </Box>

            </div>
          </div> : ''}


        </Box>

        


        


        :


        <Box>
          <Box className="bg-c-b-blue  flex items-center justify-between px-10 lg:px-10  xl:px-32">

            <Box className="text-white py-1.5 flex gap-2 text-f-12 h-fit font_w_400 items-center">
              <span>( +40 ) 123 45 67 89</span>
              <span className='text-white text-2xl'>|</span>
              <p className="[word-spacing:200px]">contact@europeancollege.ro</p>
            </Box>

            <Box className="flex items-center gap-2">
              <Box className="border border-white flex gap-1 px-1 items-center text-white rounded-lg">
                {/* <Box><input type="text" placeholder="Search..." className="border-none bg-transparent outline-none accent-white"/></Box> */}
                <Box><SearchIcon fontSize="" className="cursor-pointer"/></Box>
              </Box>
              <span className='text-white font_w_400  text-2xl'>|</span>
              <Box className="h-full"><Button className="font_w_500 text-f-12 h-8 border-2 border-y3  text-y2  px-3">Student Protal</Button></Box>
            </Box>

          </Box>

          <Box className="flex w-full px-10 lg:px-10 xl:px-32 py-3  bg-white">
            <Box className="w-1/2">
              <ul className="list-none font_w_700 flex gap-5  lg:gap-10 text-c-blue text-f-16 ">
                <li className=""> <Link className={path.pathname == '/' ? 'text-blue-400' : ''} to={'/'}>Home</Link></li>
                <li className="">  <Link className={path.pathname.includes('/course') ? 'text-blue-400' : ''} to={'/course'}>Course</Link></li>
                <li className="">  <Link className={path.pathname == '/aboutUs' ? 'text-blue-400' : ''} to={'/aboutUs'}>About us</Link></li>
                <li className="">  <Link className={path.pathname == '/Our-Partners' ? 'text-blue-400' : ''} to={'/Our-Partners'}>Our Partners</Link></li>
              </ul>
            </Box>

            <Box className=" relative w-[200px]  ">

              <Box className="w-full absolute  z-100 -top-3 flex justify-center ">

                <div className="logocontainer flex justify-center items-center">

                  <Image
                    width={85}
                    src={logo}
                    className=""

                  />
                </div>

              </Box>
            </Box>

            <Box className="w-1/2 flex justify-end m0">
              <ul className="list-none font_w_700 flex  gap-5 lg:gap-10 text-c-blue text-f-16 ">            <li className="">  <Link className={path.pathname == '/gallery' ? 'text-blue-400' : ''} to={'/gallery'}>Gallery</Link></li>
                <li className="">  <Link className={path.pathname == '/admission' ? 'text-blue-400' : ''} to={'/admission'}>Admission</Link></li>
                <li className="">  <Link className={path.pathname == '/contact-us' ? 'text-blue-400' : ''} to={'/contact-us'}>Contact us</Link></li>
              </ul>
            </Box>
          </Box>
        </Box>

      }



    </nav>


  )
}