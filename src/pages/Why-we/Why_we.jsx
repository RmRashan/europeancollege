/* eslint-disable react-refresh/only-export-components */
import { Box } from "@mui/material";
import { Image } from "@nextui-org/react";
import { useEffect, useState } from "react";
import whywe1 from '../../assets/images/Why-we/why-we1.png'
import whywe2 from '../../assets/images/Why-we/why-we2.png'
import whywe3 from '../../assets/images/Why-we/why-we3.png'
import whywe4 from '../../assets/images/Why-we/why-we4.png'
import whywe5 from '../../assets/images/Why-we/why-we5.png'


export default function Why_we() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,

        });
    }, []);

    return (
        <div>
            <Why_we_Header_section />
            <ProgrameSectiopn />
        </div>
    )
}

const Why_we_Header_section = () => {



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
            <div className={screenSize.width <= 933 ? "h-16" : "h-20"}></div>            <div className="Home_Header_img flex flex-col justify-center relative  rounded-bl-250 md:rounded-bl-500 ">
                <Box className="absolute bottom-32 sm:bottom-36 left-5 px-5 sm:px-0 sm:left-16 lg:w-3/5  md:left-40  lg:left-40 xl:left-60 flex flex-col items-center  justify-end">
                    <div>
                        <h2 data-aos="fade-right" data-aos-duration="1000" className="text-white font_w_800 text-f-48  mb-5 sm:mb-0 ">Why We ?</h2>
                        <p data-aos="fade-right" data-aos-duration="1000" className="poppins font_w_400 text-f-20 md:text-f-24 text-white"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                        </p>
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
            img: whywe1,
            alt: "Cost Effective",
            title: 'Cost Effective',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation.',

        },
        {
            id: 2,
            img: whywe2,

            alt: "anytime, anywhere atlearner’s choice",
            title: "anytime, anywhere atlearner’s choice",
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation.',
        },
        {
            id: 3,
            img: whywe3,
            alt: "Self Paced Learing",
            title: "Self Paced Learing",
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation.',
        },
        {
            id: 4,
            img: whywe4,
            alt: "Access To Global Resources",
            title: "Access To Global Resources",
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation.',

        },
        {
            id: 5,
            img: whywe5,
            alt: "Learing On Demand",
            title: "Learing On Demand",
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation.',

        }
    ];


    return (
        <>

            {programes.map((item) =>


                <div key={item.id} className={item.id % 2 == 0 ? "bg-c-b-blue flex justify-center  text-white" : '  text-c-blue flex justify-center'}>
                    <Box className="px-3 py-20 max-w-max-1220 flex flex-col justify-between items-center sm:flex-row">
                        <Box data-aos="zoom-in-right" className={item.id % 2 == 0 ? "w-3/4 sm:w-1/2 p-2 flex justify-center  md:order-1" : "w-3/4 sm:w-1/2 p-2 flex justify-center"}>
                            <Image
                                width={550}
                                alt="European International College Logo"
                                src={item.img}
                                className=""
                            />
                        </Box>
                        <Box data-aos="zoom-in-left" className={item.id % 2 == 0 ? "sm:w-1/2 p-2 flex flex-col  justify-center " : "sm:w-1/2 p-2 flex flex-col  justify-center "}>
                            <div className={item.id % 2 == 0 ? 'w-full flex flex-col justify-end items-end ' : 'text-end w-full '}>

                                <div className="w-full ">

                                    <h2 className="poppins font_w_700 text-f-28 md:text-f-32">{item.title}</h2>
                                    <p className="poppins font_w_400  text-f-18 md:text-f-22 mt-5">{item.description}</p>

                                </div>

                            </div>

                        </Box>


                    </Box>
                </div>
            )}



        </>

    )
}

