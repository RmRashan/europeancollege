import { Box } from "@mui/material";
import { Image } from "@nextui-org/react";
import { useEffect, useState } from "react";

import logo from "../../assets/images/logo.png";

import r1 from "../../assets/images/Home/r1.png";
import r2 from "../../assets/images/Home/r2.png";
import r3 from "../../assets/images/Home/r3.png";
import r4 from "../../assets/images/Home/r4.png";
import r5 from "../../assets/images/Home/r5.png";


export default function Gallery() {
  return (
    <div>
          <Gallery_Header_section />
          <OurEvent_section/>
    </div>
  )
}


const Gallery_Header_section = () => {



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


        <div data-aos="fade-right" className="h-100svh flex flex-col bg-white ">
            <div className={screenSize.width <= 933 ? "h-16" : "h-20"}></div>      <div className="Home_Header_img flex flex-col justify-center relative  rounded-bl-250 md:rounded-bl-500 ">
                <Box className="absolute bottom-32 sm:bottom-16 md:bottom-28 lg:bottom-20 px-5 sm:px-0 sm:left-16 lg:w-3/5  md:left-28  lg:left-40 xl:left-60 flex flex-col items-center  justify-end">
                    <div>
                        <h2 data-aos="fade-right" data-aos-duration="1000" className="text-white font_w_800 text-f-48  mb-5 sm:mb-0 ">Course</h2>
                        <p data-aos="fade-right" data-aos-duration="2000" className="poppins font_w_400 text-f-20 md:text-f-24 text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                    </div>

                   
                </Box>
            </div>

        </div>

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
