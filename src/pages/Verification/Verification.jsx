import { Box } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import './Verification.css'

export default function Verification() {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,

        });
    }, []);
    return (
        <div>
            <Verification_Header_section />
            <VerificationsandReferences />
            <Verificationforthirdparties />
            <Submittinganenquiry />
            <Help />
            <UniversityAccommodationelp />
            <Acceptableconsent />
            <Help2 />
        </div>
    )
}
const Verification_Header_section = () => {



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
            <div className={screenSize.width <= 933 ? "h-16" : "h-20"}></div>            <div className="Verification_Header_img flex flex-col justify-center relative  rounded-bl-250 md:rounded-bl-500 ">
                <Box className="absolute bottom-32 sm:bottom-16 md:bottom-28 lg:bottom-20 px-5 sm:px-0 sm:left-16 md:left-40 lg:left-32 lg:w-3/5     flex flex-col items-center  justify-end">
                    <div>
                        <h2 data-aos="fade-right" data-aos-duration="3000" className="text-white font_w_800 text-f-48  ms-10 mb-5 sm:mb-0 ">Verifications</h2>
                    </div>

                </Box>
            </div>

        </div>

    )
}


const VerificationsandReferences = () => {
    return (

        <Box className="flex justify-center mb-0 py-5 mt-10 ">
            <div className=" w-full max-w-max-1650 px-5 md:px-20 poppins ">
                <h2 data-aos="fade-right" className="font_w_700 text-f-20  md:text-f-24 " >Verifications and References</h2>

                <p data-aos="fade-right" className="font_w_500  text-f-16  md:text-f-20  mt-3" >
                    The Student Information Desk can provide degree verifications (via Prospects Hedd) and landlord / tenancy references relating to university accommodation (via email).
                </p>

                <p data-aos="fade-right" className="font_w_500  text-f-16  md:text-f-20  mt-5" >
                    Please ensure you are submitting your request via the correct route and that appropriate consent has been provided.
                </p>
                <p data-aos="fade-right" className="font_w_500  text-f-16  md:text-f-20  mt-5" >
                    See below for details {">>"}
                </p>





            </div>
        </Box>

    )
}

const Verificationforthirdparties = () => {
    return (

        <Box className="flex justify-center mb-10 py-5 mt-5 ">
            <div className=" w-full max-w-max-1650 px-5 md:px-20 poppins ">
                <h2 data-aos="fade-right" className="font_w_700 text-f-20  md:text-f-24 " >Verification for third parties <span className="font_w_500"> (such as employers, agencies and embassies)</span></h2>

                <p data-aos="fade-right" className="font_w_500  text-f-16  md:text-f-20  mt-3" >
                    Third party enquirers such as employers, agencies and embassies must verify attendance and awards from our university with Prospects Hedd. A Hedd verification confirms the candidate’s name, qualification type, course name, year of award, classification obtained and dates of attendance.   </p>

                <p data-aos="fade-right" className="font_w_500  text-f-16  md:text-f-20  mt-3" >
                    Prospects Hedd is managed by Jisc and has been providing a secure verification service for employers, screening agencies, embassies, councils and other institutions for over 9 years. Verification requests through Prospects Hedd can be made to over 125 UK Higher education institutions.   </p>






            </div>
        </Box>

    )
}

const Submittinganenquiry = () => {
    return (

        <Box className="flex justify-center mb-10 py-5 mt-5 ">
            <div className=" w-full max-w-max-1650 px-5 md:px-20 poppins ">
                <h2 data-aos="fade-right" className="font_w_700 text-f-20  md:text-f-24 " >Submitting an enquiry</h2>

                <p data-aos="fade-right" className="font_w_500  text-f-16  md:text-f-20  mt-3" >
                    You’ll need the individual’s name, date of birth, course and qualification. For graduates {"you'll"} also need their year of graduation and degree result. To prevent delays, please enter the candidate’s details as they appear on their degree certificate. Enquiries are checked and completed by the university’s Student Information Desk team. The due date will be listed on your enquiry.    </p>

            </div>
        </Box>

    )
}

const Help = () => {
    return (

        <Box className="flex justify-center mb-10 py-5 mt-5 ">
            <div className=" w-full max-w-max-1650 px-5 md:px-20 poppins  ">
                <h2 data-aos="fade-right" className="font_w_700 text-f-20  md:text-f-24 " >Help</h2>

                <p data-aos="fade-right" className="font_w_500  text-f-16  md:text-f-20  mt-3" >
                    If you have any problems or queries, please email
                    <a title="Email" className="text-c-blue underline ms-1  break-words"
                        target="_blank" href="mailto: help@europeancollage.ro"
                        rel="noreferrer">  help@europeancollage.ro</a>
                </p>

                <hr data-aos="fade-right" className="mt-5 border border-black" />
            </div>
        </Box>

    )
}

const UniversityAccommodationelp = () => {
    return (

        <Box className="flex justify-center mb-10 py-5 mt-5 ">
            <div className=" w-full max-w-max-1650 px-5 md:px-20 poppins  ">
                <h2 data-aos="fade-right" className="font_w_700 text-f-20  md:text-f-24 " >Landlord /Tenancy references relating to University Accommodation</h2>

                <p data-aos="fade-right" className="font_w_500  text-f-16  md:text-f-20  mt-3" >
                    Third parties should submit requests for landlord/tenancy references via  <a title="Email" className="text-c-blue underline break-words" target="_blank" href="mailto: uniaccommodations@europeancollage.ro" rel="noreferrer">uniaccommodations@europeancollage.ro </a>
                    To meet our Data Protection obligations, each request must include written consent from the individuals concerned (see Acceptable Consent below). Without the required information your request cannot be processed.
                </p>


            </div>
        </Box>

    )
}

const Acceptableconsent = () => {
    return (

        <Box className="flex justify-center mb-10 py-20 mt-5 text-white bg-c-b-blue-7">
            <div className=" w-full max-w-max-1650 px-5 md:px-20 poppins  ">


                <h2 data-aos="fade-right" className="font_w_700 text-f-20  md:text-f-24 " >Acceptable consent</h2>




                <p data-aos="fade-right" className="font_w_500  text-f-16  md:text-f-20  mt-3" >
                    An acceptable consent to release this data should include the following.
                </p>
                <p data-aos="fade-right" className="font_w_500  text-f-16  md:text-f-20  " >
                    Please ensure all requests are written in English {">>"}
                </p>





                <div className="ms-0 md:ms-36">
                    <p data-aos="fade-right" className="font_w_500  text-f-16  md:text-f-20 my-5 " >
                        <FiberManualRecordIcon className="mx-2" style={{ fontSize: '0.5rem' }} /> Please ensure all requests are written in English {">>"}
                    </p>
                    <p data-aos="fade-right" className="font_w_500  text-f-16  md:text-f-20 my-5 " >
                        <FiberManualRecordIcon className="mx-2" style={{ fontSize: '0.5rem' }} />
                        Student Date of Birth (IN FULL – Day/Month/Year)
                    </p>
                    <p data-aos="fade-right" className="font_w_500  text-f-16  md:text-f-20 my-5 " >
                        <FiberManualRecordIcon className="mx-2" style={{ fontSize: '0.5rem' }} />
                        Student Number
                    </p>
                    <p data-aos="fade-right" className="font_w_500  text-f-16  md:text-f-20 my-5 " >
                        <FiberManualRecordIcon className="mx-2" style={{ fontSize: '0.5rem' }} />
                        Full details of University address concerned and residency dates
                    </p>
                    <p data-aos="fade-right" className="font_w_500  text-f-16  md:text-f-20 my-5 " >
                        <FiberManualRecordIcon className="mx-2" style={{ fontSize: '0.5rem' }} />
                        Hand written signature
                    </p>
                    <p data-aos="fade-right" className="font_w_500  text-f-16  md:text-f-20 my-5 " >
                        <FiberManualRecordIcon className="mx-2" style={{ fontSize: '0.5rem' }} />
                        Date of consent given
                    </p>
                    <p data-aos="fade-right" className="font_w_500  text-f-16  md:text-f-20 my-5 " >
                        <FiberManualRecordIcon className="mx-2" style={{ fontSize: '0.5rem' }} />
                        The name of your organisation as the intended recipient of the information/Data
                    </p>

                </div>



                <p data-aos="fade-right" className="font_w_500  text-f-16  md:text-f-20 my-5 " >

                    To be considered acceptable, the consent would need to be ‘hand signed’. We would only accept one of the following:
                </p>




                <div className="ms-0 md:ms-36">
                    <p data-aos="fade-right" className="font_w_500  text-f-16  md:text-f-20 my-5 " >
                        <FiberManualRecordIcon className="mx-2" style={{ fontSize: '0.5rem' }} />
                        Student name (including middle names where possible)
                    </p>
                    <p data-aos="fade-right" className="font_w_500  text-f-16  md:text-f-20 my-5 " >
                        <FiberManualRecordIcon className="mx-2" style={{ fontSize: '0.5rem' }} />
                        (Wet signature) signing a consent form in paper form using a pen / pencil etc which can then be scanned and uploaded to electronic document (such as a PDF or an image file)
                    </p>
                    <p data-aos="fade-right" className="font_w_500  text-f-16  md:text-f-20 my-5 " >
                        <FiberManualRecordIcon className="mx-2" style={{ fontSize: '0.5rem' }} />
                        (E-Signature) signing an electronic copy of a consent form using their finger, stylus or other method where the candidate uses a free hand motion to sign and provide authorisation.
                    </p>

                </div>



                <p data-aos="fade-right" className="font_w_500  text-f-16  md:text-f-20 my-5 " >
                    If your standard form does not permit hand-drawn signatures, then you can ask your candidate to provide you with an image of the below, hand-written, to submit to us as an image attached to your request:   </p>




                <ul className="font_w_600  text-f-16  md:text-f-20 ">
                    <li data-aos="fade-right" className="my-5">
                        I [Name] [Student Number] give my express consent for [Your company] to request my information as the intended recipient from the University of Exeter for the following programme(s):
                    </li>
                    <li data-aos="fade-right" className="my-5">Programme Name: </li>
                    <li data-aos="fade-right" className="my-5"> Date of Study:</li>
                    <li data-aos="fade-right" className="my-5"> Date of Award:</li>
                    <li data-aos="fade-right" className="my-5"> Signed,</li>
                    <li data-aos="fade-right" className="my-5">[Print Name] </li>
                    <li data-aos="fade-right" className="my-5"> [Candidate’s hand-drawn signature]</li>
                    <li data-aos="fade-right" className="my-5">[Date of Birth] </li>
                    <li data-aos="fade-right" className="my-5">[Date of Consent / Signature] </li>
                </ul>
            </div>
        </Box>

    )
}



const Help2 = () => {
    return (

        <Box className="flex justify-center mb-10 py-5 mt-5 ">
            <div className=" w-full max-w-max-1650 px-5 md:px-20 poppins  ">


                <h2 data-aos="fade-right" className="font_w_700 text-f-20  md:text-f-24 " >Hellp</h2>
                <p data-aos="fade-right" className="font_w_500  text-f-16  md:text-f-20  mt-3" >
                    If you have any problems or queries, please email {">>"}
                </p>
                <div className="md:ms-36">
                    <p data-aos="fade-right" className="font_w_500  text-f-16  md:text-f-20  mt-3" >
                        General enquiries - <a title="Email" className="text-c-blue  break-words" target="_blank" href="mailto: reception@europeancollage.ro" rel="noreferrer">reception@europeancollage.ro</a>
                    </p>
                    <p data-aos="fade-right" className="font_w_500  text-f-16  md:text-f-20  mt-3" >
                        course enquiries - <a title="Email" className="text-c-blue  break-words"
                            target="_blank" href="mailto: academic@europeancollage.ro"
                            rel="noreferrer">academic@europeancollage.ro</a>
                    </p>

                </div>


                <p data-aos="fade-right" className="font_w_500  text-f-16  md:text-f-20  mt-10" >
                    Phone: +40 123 45 67 89 (Romania)
                </p>
                <p data-aos="fade-right" className="font_w_500  text-f-16 ms-[75px]  md:text-f-20  mt-3" >
                    +40 123 67 89 67 45 (International) to escalate urgent requests.
                </p>
                <p data-aos="fade-right" className="font_w_500  text-f-16  ms-[75px]  md:text-f-20  mt-3" >
                    Please note we cannot provide tenancy references over the phone.
                </p>



            </div>
        </Box>

    )
}