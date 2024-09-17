/* eslint-disable react/no-unknown-property */
/* eslint-disable no-undef */
import { Box, Grid } from "@mui/material";
import { useEffect, useState } from "react";

import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Image } from "@nextui-org/react";
import lecturer1 from "../../../../assets/images/CourseSingaleView/lecturer1.png";
import lecturer2 from "../../../../assets/images/CourseSingaleView/lecturer2.png";
import lecturer3 from "../../../../assets/images/CourseSingaleView/lecturer3.png";
import lecturer4 from "../../../../assets/images/CourseSingaleView/lecturer4.png";
import { useLocation } from "react-router-dom";
import './CourseSingaleView.jsx.css'







export default function CourseSingaleView() {


    // useEffect(() => {
    //     window.scrollTo({
    //         top: 0,
    //         left: 0,

    //     });
    // }, []);


    return (
        <div>

            <Home_Header_section />
            <FirstSelectSection />
            <CoureInDepth />
            <EntryReq />
            <Fees />
            <Subject />

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

        <div className="h-100svh flex flex-col " data-aos="fade-right">
            <div className={screenSize.width <= 933 ? "h-16" : "h-20"}></div>            <div className="Home_Header_img flex flex-col justify-center relative  rounded-bl-250 md:rounded-bl-500 ">
                <Box className="absolute bottom-32 sm:bottom-16 md:bottom-28 lg:bottom-20 px-5 sm:px-0 sm:left-16 lg:w-3/5  md:left-28  lg:left-40 xl:left-60 flex flex-col items-center  justify-end">
                    <div>
                        <h2 className="text-white font_w_800 text-f-36 sm:text-f-48 leading-10  mb-5  " data-aos="fade-right" data-aos-duration="3000" >Diploma in Business managemen</h2>
                        <p className="poppins font_w_400 text-f-20 md:text-f-24 text-white" data-aos="fade-right" data-aos-duration="3000" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                    </div>

                    <div className="flex w-full sm:w-9/12 md:w-1/2  justify-center items-center mb-5 flex-col mt-5 ">
                        <div className="border-2 w-full p-3 py-2 flex justify-between mb-10" data-aos="fade-right" data-aos-duration="3000" >
                            <input type="text" className="bg-transparent border-none w-2/3 outline-none font-poppins placeholder-white font_w_300 text-white accent-white text-f-20" placeholder="Search Courses" />
                            <button className=" bg-transparent"><SearchIcon className="text-white" fontSize="large" /></button>
                        </div>
                    </div>
                </Box>
            </div>

        </div>

    )
}


const FirstSelectSection = () => {

    return (
        <Box data-aos="fade-top" className="py-10  md:px-10 lg:px-20  justify-between Montserrat hidden  md:flex md:text-f-16 lg:text-f-18 xl:text-f-24 font_w_600">
            <a href="#CoureInDepth"> <div className="text-white bg-c-b-blue py-1 px-2" >Course In Depth</div></a>
            <a href="#EntryReq"> <div className="text-c-blue">Entry Requirements</div></a>
            <a href="#Fees"> <div className="text-c-blue">Fees & How to Apply</div></a>
            <a href="#Subject"> <div className="text-c-blue">Facilities & Staff</div></a >
        </Box>
    )
}


const CoureInDepth = () => {

    let path = useLocation().pathname;

    const [clsf, setClsf] = useState(false);
    const [clss, setClss] = useState(false);
    const [clst, setClst] = useState(false);
    const [clsfo, setClsfo] = useState(false);


    return (
        <Box id="CoureInDepth" data-aos="fade-top" className={path.includes('/Diploma-Course') ? " py-10 px-5 md:px-10 lg:px-20" : " py-10 px-5 md:px-10 lg:px-20 "}>
            <h4 className="poppins font_w_700 mb-3 text-c-blue text-f-22 ">Course in Depth</h4>
            <p className="py-2 poppins text-f-22 font_w_400 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
            </p>
            <p className="py-2 poppins text-f-22 font_w_400 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
            </p>


            {path == "/course/Diploma-Course/Six-Month-Diploma-Programmes" ? <>

                <ul className="Montserrat font_w_500 text-f-20 mt-3">
                    <li>Paper I - Elements of Management</li>
                    <li>Paper II - Office Administration - Methods & Systems</li>
                    <li>Paper III - Financial Management</li>
                    <li>Paper IV - Marketing Management</li>
                </ul>
            </> : ""}

            {path == "/course/Diploma-Course/One-Year-Diploma-Programmes" ? <><Box>
                <h4 className="font_w_600 text-f-20 Montserrat mt-2">Semester 1</h4>
                <ul className="Montserrat font_w_500 text-f-20 mt-3">
                    <li>Paper I - Elements of Management</li>
                    <li>Paper II - Office Administration - Methods & Systems</li>
                    <li>Paper III - Financial Management</li>
                    <li>Paper IV - Marketing Management</li>
                </ul>
            </Box><Box className="mt-5">
                    <h4 className="font_w_600 text-f-20 Montserrat mt-2">Semester 2</h4>
                    <ul className="Montserrat font_w_500 text-f-20 mt-3">
                        <li>Paper I - Elements of Management</li>
                        <li>Paper II - Office Administration - Methods & Systems</li>
                        <li>Paper III - Financial Management</li>
                        <li>Paper IV - Marketing Management</li>
                    </ul>
                </Box></> : ""}


            {path == "/course/Diploma-Course/Eighteen-Month-Diploma-Programmes" ? <><Box>
                <h4 className="font_w_600 text-f-20 Montserrat mt-2">Semester 1</h4>
                <ul className="Montserrat font_w_500 text-f-20 mt-3">
                    <li>Paper I - Elements of Management</li>
                    <li>Paper II - Office Administration - Methods & Systems</li>
                    <li>Paper III - Financial Management</li>
                    <li>Paper IV - Marketing Management</li>
                </ul>
            </Box><Box className="mt-5">
                    <h4 className="font_w_600 text-f-20 Montserrat mt-2">Semester 2</h4>
                    <ul className="Montserrat font_w_500 text-f-20 mt-3">
                        <li>Paper I - Elements of Management</li>
                        <li>Paper II - Office Administration - Methods & Systems</li>
                        <li>Paper III - Financial Management</li>
                        <li>Paper IV - Marketing Management</li>
                    </ul>
                </Box>
                <h4 className="poppins font_w_600 mt-3 Montserrat text-c-blue text-f-24 ">Reference Books</h4>
                <ul id="EntryReq">
                    <li className="text-f-20 font_w_500 Montserrat"><b>Principles & Practice of Management </b> by Dr.L.M.Prasad - Sultan Chand & Sons</li>
                    <li className="text-f-20 font_w_500 Montserrat"><b> Principles of Management </b> by pagare & Dinkar-Sultan Chand & Sons</li>
                    <li className="text-f-20 font_w_500 Montserrat"><b> Management - Theory & Practice </b> by Dr. C.B. Gupta - Sultan Chand & Co </li>
                    <li className="text-f-20 font_w_500 Montserrat"><b> Management</b> by Hampton - Tata McGraw Hill </li>

                </ul>

            </> : ""}

            {path.includes('/Diploma-Course') ? "" : <Box className="animition11">

                <div className="flex flex-col items-center w-full justify-center animition11 poppins py-3 overflow-y-hidden">
                    <div onClick={() => { setClsf(!clsf) }} className="flex text-f-20 cursor-pointer  text-white z-10  font_w_700 text-c-blue justify-between px-2 md:px-20 w-full bg-c-b-blue-6 py-2">
                        <div>First Year</div>
                        <div><KeyboardArrowDownIcon style={{ fontSize: '2rem' }} /></div>
                    </div>


                    <div className={clsf == true ? "w-full lg:w-3/4 showhide  flex-col my-2 " : "w-full lg:w-3/4 hide  flex-col my-2 "}>
                        <div className={clsf == true ? "relative " : "absolute hide w-full"}>
                            <div className="w-full  flex flex-col my-2 ">
                                <div className="flex border border-c-blue justify-between text-f-16 md:text-f-20 font_w_500 py-2 px-2 md:px-20">
                                    <div>Subject or Model Name</div>
                                    <div>20 Credits</div>
                                </div>
                            </div>
                            <div className="w-full   flex flex-col my-2 ">
                                <div className="flex border border-c-blue justify-between text-f-16 md:text-f-20 font_w_500 py-2 px-2 md:px-20">
                                    <div>Subject or Model Name</div>
                                    <div>20 Credits</div>
                                </div>
                            </div>
                            <div className="w-full  flex flex-col my-2 ">
                                <div className="flex border border-c-blue justify-between text-f-16 md:text-f-20 font_w_500 py-2 px-2 md:px-20">
                                    <div>Subject or Model Name</div>
                                    <div>20 Credits</div>
                                </div>
                            </div>
                            <div className="w-full   flex flex-col my-2 ">
                                <div className="flex border border-c-blue justify-between text-f-16 md:text-f-20 font_w_500 py-2 px-2 md:px-20">
                                    <div>Subject or Model Name</div>
                                    <div>20 Credits</div>
                                </div>
                            </div>
                        </div>
                    </div>





                </div>

                <div className="flex flex-col items-center w-full justify-center animition11 poppins py-3 overflow-hidden">
                    <div onClick={() => { setClss(!clss) }} className="flex text-f-20 cursor-pointer text-white  z-10  font_w_700 text-c-blue justify-between px-2 md:px-20 w-full bg-c-b-blue-6 py-2">
                        <div>Second Year</div>
                        <div><KeyboardArrowDownIcon style={{ fontSize: '2rem' }} /></div>

                    </div>


                    <div className={clss == true ? "w-full lg:w-3/4 showhide  flex-col my-2 " : "w-full lg:w-3/4 hide  flex-col my-2 "}>
                        <div className={clss == true ? "relative " : "absolute hide w-full"}>
                            <div className="w-full  flex flex-col my-2 ">
                                <div className="flex border border-c-blue justify-between text-f-16 md:text-f-20 font_w_500 py-2 px-2 md:px-20">
                                    <div>Subject or Model Name</div>
                                    <div>20 Credits</div>
                                </div>
                            </div>
                            <div className="w-full   flex flex-col my-2 ">
                                <div className="flex border border-c-blue justify-between text-f-16 md:text-f-20 font_w_500 py-2 px-2 md:px-20">
                                    <div>Subject or Model Name</div>
                                    <div>20 Credits</div>
                                </div>
                            </div>
                            <div className="w-full  flex flex-col my-2 ">
                                <div className="flex border border-c-blue justify-between text-f-16 md:text-f-20 font_w_500 py-2 px-2 md:px-20">
                                    <div>Subject or Model Name</div>
                                    <div>20 Credits</div>
                                </div>
                            </div>
                            <div className="w-full   flex flex-col my-2 ">
                                <div className="flex border border-c-blue justify-between text-f-16 md:text-f-20 font_w_500 py-2 px-2 md:px-20">
                                    <div>Subject or Model Name</div>
                                    <div>20 Credits</div>
                                </div>
                            </div>
                        </div>
                    </div>





                </div>

                <div className="flex flex-col items-center w-full justify-center animition11 poppins py-3 overflow-hidden">
                    <div onClick={() => { setClst(!clst) }} className="flex text-f-20  text-white z-10  cursor-pointer font_w_700 text-c-blue justify-between px-2 md:px-20 w-full bg-c-b-blue-6 py-2">
                        <div>Third Year</div>
                        <div><KeyboardArrowDownIcon style={{ fontSize: '2rem' }} /></div>

                    </div>


                    <div className={clst == true ? "w-full lg:w-3/4 showhide  flex-col my-2 " : "w-full lg:w-3/4 hide  flex-col my-2 "}>

                        <div className={clst == true ? "relative " : "absolute hide w-full"}>
                            <div className="w-full  flex flex-col my-2 ">
                                <div className="flex border border-c-blue justify-between text-f-16 md:text-f-20 font_w_500 py-2 px-2 md:px-20">
                                    <div>Subject or Model Name</div>
                                    <div>20 Credits</div>
                                </div>
                            </div>
                            <div className="w-full   flex flex-col my-2 ">
                                <div className="flex border border-c-blue justify-between text-f-16 md:text-f-20 font_w_500 py-2 px-2 md:px-20">
                                    <div>Subject or Model Name</div>
                                    <div>20 Credits</div>
                                </div>
                            </div>
                            <div className="w-full  flex flex-col my-2 ">
                                <div className="flex border border-c-blue justify-between text-f-16 md:text-f-20 font_w_500 py-2 px-2 md:px-20">
                                    <div>Subject or Model Name</div>
                                    <div>20 Credits</div>
                                </div>
                            </div>
                            <div className="w-full   flex flex-col my-2 ">
                                <div className="flex border border-c-blue justify-between text-f-16 md:text-f-20 font_w_500 py-2 px-2 md:px-20">
                                    <div>Subject or Model Name</div>
                                    <div>20 Credits</div>
                                </div>
                            </div>
                        </div>
                    </div>





                </div>

                <div id="EntryReq" className="flex flex-col items-center w-full justify-center animition11 poppins py-3 overflow-hidden">
                    <div onClick={() => { setClsfo(!clsfo) }} className="flex cursor-pointer text-white z-10  text-f-20 font_w_700 text-c-blue justify-between px-2 md:px-20 w-full bg-c-b-blue-6 py-2">
                        <div>Fourth Year</div>
                        <div><KeyboardArrowDownIcon style={{ fontSize: '2rem' }} /></div>

                    </div>


                    <div className={clsfo == true ? "w-full lg:w-3/4 showhide  flex-col my-2 " : "w-full lg:w-3/4 hide  flex-col my-2 "}>
                        <div className={clsfo == true ? "relative " : "absolute hide w-full"}>
                            <div className="w-full  flex flex-col my-2 ">
                                <div className="flex border border-c-blue justify-between text-f-16 md:text-f-20 font_w_500 py-2 px-2 md:px-20">
                                    <div>Subject or Model Name</div>
                                    <div>20 Credits</div>
                                </div>
                            </div>
                            <div className="w-full   flex flex-col my-2 ">
                                <div className="flex border border-c-blue justify-between text-f-16 md:text-f-20 font_w_500 py-2 px-2 md:px-20">
                                    <div>Subject or Model Name</div>
                                    <div>20 Credits</div>
                                </div>
                            </div>
                            <div className="w-full  flex flex-col my-2 ">
                                <div className="flex border border-c-blue justify-between text-f-16 md:text-f-20 font_w_500 py-2 px-2 md:px-20">
                                    <div>Subject or Model Name</div>
                                    <div>20 Credits</div>
                                </div>
                            </div>
                            <div className="w-full   flex flex-col my-2 ">
                                <div className="flex border border-c-blue justify-between text-f-16 md:text-f-20 font_w_500 py-2 px-2 md:px-20">
                                    <div>Subject or Model Name</div>
                                    <div>20 Credits</div>
                                </div>
                            </div>
                        </div>
                    </div>





                </div>
            </Box>}



        </Box>
    )
}


const EntryReq = () => {
    return (
        <Box data-aos="fade-bottom" className=" py-10 px-5 md:px-10 lg:px-20">
            <h3 className="poppins text-f-22 font_w_700 text-c-blue">Entry Requirements</h3>
            <ul className="poppins font_w_400  text-f-22 mt-5">
                <li className="py-3">1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</li>
                <li id="Fees" className="py-3">2. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. </li>
                <li className="py-3">3. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</li>
                <li className="py-3">4. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</li>


            </ul>





        </Box>
    )
}


const Fees = () => {
    let path = useLocation().pathname;
    return (
        <Box data-aos="fade-left" className=" py-10 px-5 md:px-10 lg:px-20">
            <Box>
                <h2 className=" text-center poppins font_w_700 text-f-22 text-c-blue">Fees & How to Apply</h2>


                {path.includes('/Diploma-Course') ?
                    <div>  <div className="border rounded-lg mt-5 border-c-b-bl py-4 px-4 flex justify-between poppins text-f-20 md:text-f-22 font_w_600 bg-c-b-blue-6 text-white">
                        <div>Full Payment</div>
                        <div>$1200 /-</div>
                    </div>
                        <div className="flex justify-center mt-5">
                            <div className="w-1/3 flex items-center justify-center"><hr className="w-full border-black" /></div>
                            <div className="px-3 poppins font_w_600 text-f-16">Instalments</div>
                            <div className="w-1/3 flex items-center justify-center"><hr className="w-full border-black" /></div>
                        </div>
                        <div className="border rounded-lg mt-5 border-c-b-blue py-4 px-4 flex justify-between poppins  text-f-18 md:text-f-22  font_w_600 bg-c-b-blue-6 text-white">
                            <div>2x Instalments</div>
                            <div className="flex flex-wrap justify-center">$620 /- <span className="text-f-16 font_w_300">per Instalment</span></div>
                        </div></div>
                    : <div>

                        <div className="border  rounded-lg mt-5 border-c-b-bl py-4 px-4 flex justify-between poppins text-f-20 md:text-f-22 font_w_600 bg-c-b-blue-6 text-white">
                            <div>Full Payment</div>
                            <div>$1200 /-</div>
                        </div>
                        <div className="flex justify-center mt-5 " >
                            <div className="w-1/3 flex items-center justify-center"><hr className="w-full border-black" /></div>
                            <div className="px-3 poppins font_w_600 text-f-16">Instalments</div>
                            <div className="w-1/3 flex items-center justify-center"><hr className="w-full border-black" /></div>
                        </div>

                        <Grid container justifyContent={'space-between'}>
                            <Grid item xs={12} sm={4} className="p-3">
                                <div className="bg-c-b-blue-6 text-white border h-full flex flex-col items-center justify-center border-c-blue p-3">
                                    <div className="w-full poppins font_w_600 text-f-22 text-center">2 Instalments</div>
                                    <div className="w-full poppins font_w_600 text-f-22 text-center">$510 /-</div>
                                    <div className="w-full poppins font_w_600 text-f-15 text-center">per Instalment</div></div>
                            </Grid>
                            <Grid item xs={12} sm={4} className="p-3">
                                <div className="bg-c-b-blue-6 text-white border h-full flex flex-col items-center justify-center border-c-blue p-3">
                                    <div className="w-full poppins font_w_600 text-f-22 text-center">Yearly <span className="text-f-16">(4 Instalments)</span> </div>
                                    <div className="w-full poppins font_w_600 text-f-22 text-center">$260 /- </div>
                                    <div className="w-full poppins font_w_600 text-f-15 text-center">per Instalment</div></div>
                            </Grid>
                            <Grid item xs={12} sm={4} className="p-3" >
                                <div className="bg-c-b-blue-6 text-white border  h-full flex flex-col items-center justify-center border-c-blue p-3">
                                    <div className="w-full poppins font_w_600 text-f-22 text-center">Pay per Semester <span className="text-f-16">(12*)</span></div>
                                    <div className="w-full poppins font_w_600 text-f-22 text-center">$100 /-</div>
                                    <div className="w-full poppins font_w_600 text-f-15 text-center">per Instalment</div></div>
                            </Grid>
                        </Grid>



                    </div>}

                <p className="py-5 poppins text-f-22 font_w_400">*Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                <p id="Subject" className="py-5 poppins text-f-22 font_w_400">*Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>

            </Box>


            <Box className='flex flex-wrap  justify-between mt-5'>
                <h2 className="poppins text-f-22 font_w_600 text-c-blue">You can simply apply for this course by clicking this.</h2>
                <button className="poppins text-f-18 font_w_700 bg-c-b-blue text-white py-2 px-4">Apply Now</button>
            </Box>
        </Box>
    )
}

const Subject = () => {

    return (
        <Box data-aos="fade-right" className=" py-10 px-5 md:px-10 lg:px-20 mb-20 bg-c-b-blue-5">
            <h2 className="poppins font_w_700 text-f-22 text-c-blue text-center">Subject or Model Name</h2>
            <div className="flex flex-wrap md:flex-nowrap justify-center lg:justify-between mt-10 mb-10 gap-4">
                <Image
                    src={lecturer1}
                    width={220}
                />
                <Image
                    src={lecturer2}
                    width={220}
                />
                <Image
                    src={lecturer3}
                    width={220}
                />
                <Image
                    src={lecturer4}
                    width={220}
                />

            </div>

            <p className="py-5 poppins text-f-22 font_w_400">*Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
            <p className="py-5 poppins text-f-22 font_w_400">*Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
        </Box>
    )
}