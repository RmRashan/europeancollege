import { Box } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import './Accreditation.css'

export default function Accreditation() {
    useEffect(() => {

        window.scrollTo({

            top: 0,
            left: 0,
        });
    }, []);
    return (
        <div>
            <Accreditation_Header_section />
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />

        </div>
    )
}

const Accreditation_Header_section = () => {



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


        <div data-aos="fade-right" className="h-100svh flex flex-col poppins">
            <div className={screenSize.width <= 933 ? "h-16" : "h-20"}></div>            <div className="Accreditation_Header_img flex flex-col justify-center relative rounded-bl-250 md:rounded-bl-500 ">
                <Box className="absolute bottom-32 sm:bottom-16 md:bottom-28 lg:bottom-20 px-5 sm:px-0 sm:left-16 md:left-40 lg:left-48 lg:w-3/5     flex flex-col items-center  justify-end">
                    <div>
                        <h2 data-aos="fade-right" data-aos-duration="1000" className="text-white font_w_800 text-f-48  mb-5 sm:mb-0 ">Accreditation</h2>
                        <p data-aos="fade-right" data-aos-duration="1000" className="text-white font_w_400 text-f-20   mb-10 sm:mb-10 md:text-f-24">The Oxford Study Abroad Programme (OSAP) is the trading name and a division of the Washington International Studies Council (WISC).</p>
                    </div>

                </Box>
            </div>

        </div>

    )
}


const Section1 = () => {
    return (
        <Box data-aos="fade-down" className="flex justify-center  my-8">
            <div className=" w-full max-w-max-1650 px-5 md:px-20 poppins ">
                <p className="font_w_500  text-f-16  md:text-f-20   " >
                    The Washington International Studies Council (WISC) holds accreditation from both the Quality Assurance Agency for Higher Education (QAA) and the British Accreditation Council (BAC), as well as a Tier 4 Sponsor Licence from U.K. Visas and Immigration. Details for all of these can be found below.
                </p>
            </div>
        </Box>
    )
}

const Section2 = () => {
    return (
        <Box data-aos="fade-down" className="flex justify-center text-white py-20 bg-c-b-blue-7 ">
            <div className=" w-full max-w-max-1650 px-5 md:px-20 poppins my-7 ">
                <h3 className="font_w_700 text-f-20 md:text-f-24">The Quality Assurance Agency for Higher Education (QAA)</h3>
                <p className="font_w_500  text-f-16  md:text-f-20  mt-8 " >
                    WISC has undergone a review for educational oversight by the Quality Assurance Agency for Higher Education (QAA) and has received its final report, which is available in full at: link
                </p>
                <p className="font_w_500  text-f-16  md:text-f-20  mt-8 " >
                    We have received the following judgements from QAA: link
                </p>
                <p className="font_w_500  text-f-16  md:text-f-20  mt-8 " >
                    From the evidence provided in the annual return and at the monitoring visit, the review panel concludes that Washington International Studies Council (WISC) has made acceptable progress with continuing to monitor, review and enhance its higher education provision since the June 2018 monitoring visit.
                </p>
            </div>
        </Box>
    )
}


const Section3 = () => {
    return (
        <Box data-aos="fade-down" className="flex justify-center  py-10">
            <div className=" w-full max-w-max-1650 px-5 md:px-20 poppins my-7 ">
                <h3 className="font_w_700 text-f-20 md:text-f-24">The European Accreditation Council (EAC)</h3>
                <p className="font_w_500  text-f-16  md:text-f-20  mt-8 " >
                    WISC holds accreditation from the British Accreditation Council (BAC). For more details, including the accreditation report, visit the BAC website.
                </p>

            </div>
        </Box>
    )
}
const Section4 = () => {
    return (
        <Box data-aos="fade-down" className="flex justify-center pb-10 ">
            <div className=" w-full max-w-max-1650 px-5 md:px-20 poppins my-7 ">
                <h3 className="font_w_700 text-f-20 md:text-f-24">Romanian Visas and Immigration</h3>
                <p className="font_w_500  text-f-16  md:text-f-20  mt-8 " >
                    WISC holds a Tier 4 Sponsor Licence from Romanian Visas and Immigration (licence number M4VR330V0).
                </p>

            </div>
        </Box>
    )
}


