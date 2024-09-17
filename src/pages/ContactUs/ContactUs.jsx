/* eslint-disable react/prop-types */
import { Box } from "@mui/material";
import { Image } from "@nextui-org/react";
import { useEffect, useState } from "react";

import fb from "../../assets/images/Contact-Us/fb.png";
import inst from "../../assets/images/Contact-Us/inst.png";
import tw from "../../assets/images/Contact-Us/tw.png";
import yo from "../../assets/images/Contact-Us/youtube.png";

import MailIcon from '@mui/icons-material/Mail';
import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';


export default function ContactUs() {


    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,

        });

    }, []);



    return (
        <div>
            <Home_Header_section />
            <Form />
            <Social />



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


        <div data-aos="fade-right" className="h-100svh flex flex-col bg-white">
            <div className={screenSize.width <= 933 ? "h-16" : "h-20"}></div>   <div className="Home_Header_img flex flex-col justify-center relative  rounded-bl-250 md:rounded-bl-500 ">
                <Box className="absolute bottom-40 ms-2 sm:bottom-36 px-5 sm:px-0 sm:left-36 lg:w-3/5  md:left-36  lg:left-40 xl:left-60 flex flex-col items-center  justify-end">
                    <div>
                        <h2 data-aos="fade-right" data-aos-duration="1000" className="text-white font_w_800 text-f-48  mb-5 sm:mb-0 ">Contact Us</h2>
                        <p data-aos="fade-right" data-aos-duration="1000" className="poppins font_w_400 text-f-20 md:text-f-24 text-white">Stay Connected with European international collage Romania</p>
                    </div>

                </Box>
            </div>

        </div>

    )
}


const Form = () => {
    return (
        <Box className=" flex flex-col lg:flex-row px-5 justify-center items-center md:px-10 lg:px-16 xl:px-24  ">

            <Box className=" w-full  lg:w-1/2  flex flex-col items-center justify-center p-3 my-20">

                <h2 className="font_w_700 text-f-32 poppins">Stay connected with European International collage Romania</h2>

                <Box className="sm:w-2/3">

                    <Box className="text-f-20 font_w_600 mt-10 Montserrat border-b flex gap-5 border-black py-3">
                        <span><MailIcon fontSize="medium" fontWeight="800" className="font_w_800" /></span>
                        <span>reception@eicr.com</span>
                    </Box>
                    <Box className="text-f-20 font_w_600 mt-10 Montserrat border-b flex gap-5 border-black py-3">
                        <span><CallIcon fontSize="medium" fontWeight="800" className="font_w_800" /></span>
                        <span>(+40) 123 45 67 89</span>
                    </Box>
                    <Box className="text-f-20 font_w_600 mt-10 Montserrat border-b flex gap-5 border-black py-3">
                        <span><LocationOnIcon fontSize="medium" fontWeight="800" className="font_w_800" /></span>
                        <span className="Lato text-f-16 font_w_400">University Marketing and Communications,
                            EUROPEAN INTERNATIONAL COLLEGE
                            PARTESH DE JOS, JUD.
                            SUCEAVA , STR.PRINCIPALA NR.79 COD POSTAL 727425
                            Romania</span>
                    </Box>
                </Box>



            </Box>




            <Box className=" w-full  lg:w-1/2  p-3 my-20">
                <Box className="bg-white flex flex-col gap-5  shadow-lg p-5 poppins font_w_500 text-f-16 ">

                    <Box className="flex flex-col gap-2">
                        <label>Name *</label>
                        <input type="text" required className="bg-transparent  outline-none border-b border-black" />
                    </Box>
                    <Box className="flex flex-col gap-2">
                        <label>email *</label>
                        <input type="email" required className="bg-transparent  outline-none border-b border-black" />
                    </Box>
                    <Box className="flex flex-col gap-2">
                        <label>mobile *</label>
                        <input type="number" required className="bg-transparent  outline-none border-b border-black" />
                    </Box>
                    <Box className="flex flex-col gap-2">
                        <label>Enquiry Typ *</label>
                        <Box className="flex gap-3">
                            <button className="rounded-full border py-2 px-3 border-black">General Enquiry</button>
                            <button className="rounded-full border py-2 px-3 border-black">Course Enquiry</button>
                        </Box>
                    </Box>

                    <Box className="flex flex-col gap-2">
                        <label>Your Message**</label>
                        <input type="text" required className="bg-transparent  outline-none border-b border-black" />

                    </Box>
                    <Box className="w-1/2">
                        <button className="rounded-full border py-2  w-full border-black bg-black text-white text-f-20 Montserrat">Send Message</button>

                    </Box>


                </Box>
            </Box>


        </Box>
    )
}


const Social = () => {
    return (
        <div className="flex justify-center mb-10" data-aos="flip-left">
            <div className="max-w-max-1060">
                <h3 className="poppins font_w_700 text-f-32 text-center">Our Social media</h3>
                <p className="mt-5 poppins font_w_400 text-f-24 text-center">Follow us on :</p>
                <div className="flex flex-col md:flex-row text-c-blue gap-16 mt-5">
                    <div className="poppins font_w_600 text-f-24 flex items-center justify-center gap-2"><Image src={fb} /> Facebook</div>
                    <div className="poppins font_w_600 text-f-24 flex items-center justify-center gap-2"><Image src={inst} /> Instagram</div>
                    <div className="poppins font_w_600 text-f-24 flex items-center justify-center gap-2"><Image src={tw} /> Twitter</div>
                    <div className="poppins font_w_600 text-f-24 flex items-center justify-center gap-2"><Image src={yo} /> YouTube</div>
                </div>
            </div>
        </div>

    )
}