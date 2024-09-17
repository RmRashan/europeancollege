import { Box } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import './Admission.css'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';


export default function Admission() {
    useEffect(() => {

        window.scrollTo({

            top: 0,
            left: 0,
        });
    }, []);
    return (
        <div>
            <Admission_Header_section />
            <AdmissionTime />
            <Howtoapply />
            <AdmissionProcedure />
        </div>
    )
}
const Admission_Header_section = () => {



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
            <div className={screenSize.width <= 933 ? "h-16" : "h-20"}></div>            <div className="Admission_Header_img flex flex-col justify-center relative  rounded-bl-250 md:rounded-bl-500 ">
                <Box className="absolute bottom-32 sm:bottom-16 md:bottom-28 lg:bottom-20 px-5 sm:px-0 sm:left-16 md:left-40 lg:left-32 lg:w-3/5     flex flex-col items-center  justify-end">
                    <div>
                        <h2 data-aos="fade-right" data-aos-duration="1000" className="text-white font_w_800 text-f-48  ms-10 mb-5 sm:mb-0 ">Admission</h2>
                    </div>

                </Box>
            </div>

        </div>

    )
}

const AdmissionTime = () => {
    return (

        <Box className="flex justify-center mb-10 py-5 mt-10 ">
            <div className=" w-full max-w-max-1650 px-5 md:px-20 poppins ">
                <h2 data-aos="zoom-in" data-aos-duration="1000" className="font_w_700 text-f-20  md:text-f-24 " >Admission Time</h2>

                <p data-aos="zoom-in" data-aos-duration="2000" className="font_w_500  text-f-16  md:text-f-20  mt-3" >
                    As all the courses are distant education in nature, students are admitted throughout the year. They can commence their studies immediately after admission.

                </p>

                <p data-aos="zoom-in" data-aos-duration="3000" className="font_w_500  text-f-16  md:text-f-20  mt-3" >
                    However examination will be held only twice a year - FEBRUARY and AUGUST for Six Months / One Year Diploma Course and MAY and NOVEMBER for Post Graduate Diploma Courses.

                </p>





            </div>
        </Box>

    )
}

const Howtoapply = () => {
    return (

        <Box className="flex justify-center mb-10 py-5 mt-10 ">
            <div className=" w-full max-w-max-1650 px-5 md:px-20 poppins ">
                <h2 data-aos="zoom-in" data-aos-duration="1000" className="font_w_700 text-f-20  md:text-f-24 " >Admission Time</h2>

                <p data-aos="zoom-in" data-aos-duration="1000" className="font_w_500  text-f-16  md:text-f-20  mt-3" >
                    <FiberManualRecordIcon className="mx-2" style={{ fontSize: '0.59rem' }} /> Download The Application Form
                </p>
                <Box data-aos="zoom-in" data-aos-duration="1000" >
                    <button className="py-2 w-full bg-y2 font_w_700 text-f-18 md:text-f-20">Download The Application {'>>'}</button>
                </Box>
                <p data-aos="zoom-in" data-aos-duration="1000" className="font_w_500  text-f-16  md:text-f-20  mt-3" >
                    <FiberManualRecordIcon className="mx-2" style={{ fontSize: '0.59rem' }} />Take a Printout.
                </p>
                <p data-aos="zoom-in" data-aos-duration="1000" className="font_w_500  text-f-16  md:text-f-20  mt-3" >
                    <FiberManualRecordIcon className="mx-2" style={{ fontSize: '0.59rem' }} /> Fill it.
                </p>
                <p data-aos="zoom-in" data-aos-duration="1000" className="font_w_500  text-f-16  md:text-f-20  mt-3" >
                    <FiberManualRecordIcon className="mx-2" style={{ fontSize: '0.59rem' }} /> Send to us with the Required Fee (online) and Required Enclosures.
                </p>







            </div>
        </Box>

    )
}


const AdmissionProcedure = () => {
    return (
        <Box className="flex justify-center mb-0 py-5 mt-10 ">
            <div className=" w-full max-w-max-1650 px-5 md:px-20 poppins ">
                <h2 data-aos="zoom-in-left" data-aos-duration="1000" className="font_w_700 text-f-20  md:text-f-24 " >ADMISSION PROCEDURE</h2>

                <p data-aos="zoom-in-left" data-aos-duration="1000" className="font_w_500  text-f-16  md:text-f-20  mt-3" >
                    Students on receiving the application form and prospectus, should go through them carefully and then fill up the application form. The filled-in application form along with the prescribed fee should be sent to the Institute before the last date. The last date is mentioned in the application form.   </p>

                <p data-aos="zoom-in-left" data-aos-duration="1000" className="font_w_500  text-f-16  md:text-f-20  mt-3" >
                    On receiving the application form, the Institute will scrutinize the same and students who fulfill the admission criteria will be admitted. </p>


                <h5 data-aos="zoom-in-left" data-aos-duration="1000" className="font_w_600  text-f-18  mt-6 md:text-f-20">The Student will get the following on admission</h5>
                <ul data-aos="zoom-in-left" data-aos-duration="1000" className="md:ms-36">
                    <li className="font_w_500 text-f-18 md:text-f-20 my-7"><FiberManualRecordIcon className="mx-2" style={{ fontSize: '0.59rem' }} />Admission Intimation.</li>
                    <li className="font_w_500 text-f-18 md:text-f-20 my-7"><FiberManualRecordIcon className="mx-2" style={{ fontSize: '0.59rem' }} />A set of Study Materials along with Question Bank Book.</li>
                    <li className="font_w_500 text-f-18 md:text-f-20 my-7"><FiberManualRecordIcon className="mx-2" style={{ fontSize: '0.59rem' }} />Application form for registering the {"student's"} name for the examination.</li>

                </ul>

            </div>
        </Box>
    )
}