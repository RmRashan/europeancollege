/* eslint-disable react-refresh/only-export-components */
import { Box } from "@mui/material";

import { useState } from "react";
import { useEffect } from "react";

export default function Our_Vision_and_Mission() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,

        });
    }, []);

    return (
        <div>
            <Home_Header_section />

            <div className=" px-5 md:px-24">
                <Vision />

                <Mission />
            </div>

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


        <div data-aos="fade-left" className="h-100svh flex flex-col ">
            <div className={screenSize.width <= 933 ? "h-16" : "h-20"}></div>            <div className="Home_Header_img flex flex-col justify-center relative  rounded-bl-250 md:rounded-bl-500 ">
                <Box className="absolute bottom-48 sm:bottom-36 px-5 sm:px-0 sm:left-16 lg:w-3/5  md:left-36  lg:left-40 xl:left-60 flex flex-col items-center  justify-end">
                    <div>
                        <h2 data-aos="fade-left" data-aos-duration="1000" className="text-white font_w_800 text-f-36 md:text-f-48  mb-5  leading-10">Our Vision and Mission</h2>
                        <p data-aos="fade-left" data-aos-duration="2000" className="poppins font_w_400 text-f-20 md:text-f-24 text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                    </div>

                </Box>
            </div>

        </div>

    )
}


const Vision = () => {
    return (
        <div data-aos="fade-left" className="bg-c-b-blue-6 poppins my-20 rounded-md border border-c-blue p-10 flex justify-center flex-col text-c-blue">
            <div className="text-center"><h4 className="text-center font_w_700  text-f-24">Our Vision</h4></div>
            <div className="text-center flex justify-center">
                <p className="text-center font_w_400 mt-7 text-f-20 md:text-f-24 max-w-max-800">
                    Education is available for anybody, anywhere, anytime, leading to well settled life and knowledge. Our Vision Is to be excellent, engaged and accessible we aim to be internationally recognized for our leadership in, empowering our student to grow their capabilities and transforms their lives.</p>

            </div>
        </div>
    )
}



const Mission = () => {
    return (
        <div data-aos="fade-right" className="bg-c-b-blue-6 poppins my-20 rounded-md border border-c-blue p-10 flex justify-center flex-col text-c-blue">
            <div className="text-center"><h4 className="text-center font_w_700  text-f-24">Our Mission</h4></div>
            <div className="text-center flex justify-center">
                <p className="text-center font_w_400 mt-7 text-f-20 md:text-f-24 max-w-max-800">
                    EIC’s goal is to provide an opportunity to deliver a Lifelong learning programs of world-class. To provide an opportunity to deliver a lifelong learning, flexible learning process and achieve the life goals of the people irrespective of their age or qualification, who otherwise could not attend colleges or universities due to various compulsions, The International designed curriculum, supported by a world-based faculty, permits students to actively engage in an active educational dialogue. Further, this allows students to explore a selected grouping of studies that prepares them for a dynamic and changing environment. European International College, Virtual Mode contributes to promote the equal opportunities internationally by providing high-quality of Lifelong education to all who wish to meet their ambitions and fulfil their potentials.</p>

            </div>
        </div>
    )
}