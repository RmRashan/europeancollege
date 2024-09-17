/* eslint-disable react-refresh/only-export-components */
import { Box } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import './Honorary.css'
import { Link } from "react-router-dom";

export default function Honorary_Doctorate() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,

        });
    }, []);
    return (
        <div>
            <Honorary_Doctorate_Header_section />
            <Sectionimg />
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <Section6 />
            <Section7 />
            <Section8 />
            <Section9 />
            <Section10 />


        </div>
    )
}

const Honorary_Doctorate_Header_section = () => {



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
            <div className={screenSize.width <= 933 ? "h-16" : "h-20"}></div>            <div className="Honorary_Header_img flex flex-col justify-center relative  rounded-bl-250 md:rounded-bl-500 ">
                <Box className="absolute bottom-36  px-5 sm:px-0 sm:left-16 lg:w-3/5  md:left-40  lg:left-40 xl:left-60 flex flex-col items-center  justify-end">
                    <div>
                        <h2 data-aos="fade-right" data-aos-duration="3000" className="text-white font_w_800 text-f-48  mb-5  leading-10 ">Honorary Doctorate</h2>
                        <p data-aos="fade-right" data-aos-duration="3000" className="poppins font_w_400 text-f-20 md:text-f-24 text-white"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                        </p>
                    </div>

                </Box>
            </div>

        </div>

    )
}

const Sectionimg = () => {
    return (
        <>
            <Box className="bgimg rounded-bl-100 md:rounded-bl-250 rounded-tr-100 md:rounded-tr-250 mt-10 mb-10 flex  items-center">
                <div className="text-white ms-3 sm:ms-10 md:ms-28 md:max-w-max-700 lg:max-w-max-800">
                    <ul className="text-f-16 sm:text-f-20 md:text-f-24">
                        <li data-aos="fade-right" data-aos-duration="1000" className="my-2 flex flex-row items-center">
                            <KeyboardArrowRightIcon fontSize="large" />

                            <div>  <h3 className="poppins   font_w_700">HONORARY DOCTORATE</h3>
                                <p className="poppins   font_w_400">PRINCIPLES & CRITERIA FOR CANDIDATE SELECTION GENERAL PRINCIPLES</p></div>
                        </li>
                        <li data-aos="fade-right" data-aos-duration="1000" className="my-2 flex flex-row items-center">
                            <KeyboardArrowRightIcon fontSize="large" />
                            <h3 className="poppins   font_w_700">CRITERIA FOR SELECTION</h3>
                        </li>
                        <li data-aos="fade-right" data-aos-duration="1000" className="my-2 flex flex-row items-center">
                            <KeyboardArrowRightIcon fontSize="large" />
                            <h3 className="poppins   font_w_700">PROCEDURES</h3>
                        </li>
                        <li data-aos="fade-right" data-aos-duration="1000" className="my-2 flex flex-row items-center">
                            <KeyboardArrowRightIcon fontSize="large" />
                            <h3 className="poppins   font_w_700">FORMAT OF NOMINATIONS</h3>
                        </li>
                        <li data-aos="fade-right" data-aos-duration="1000" className="my-2 flex flex-row items-center">
                            <KeyboardArrowRightIcon fontSize="large" />
                            <h3 className="poppins   font_w_700">HONORARY DEGREES COMMITTEE</h3>
                        </li>
                        <li data-aos="fade-right" data-aos-duration="1000" className="my-2 flex flex-row items-center">
                            <KeyboardArrowRightIcon fontSize="large" />
                            <h3 className="poppins   font_w_700">RECOMMENDATIONS TO SENATE</h3>
                        </li>
                        <li data-aos="fade-right" data-aos-duration="1000" className="my-2 flex flex-row items-center">
                            <KeyboardArrowRightIcon fontSize="large" />
                            <div><h3 className="poppins   font_w_700">DOCUMENT CHECKLIST</h3>
                                <p className="poppins   font_w_400">(Common for Honorary Doctorate & Honorary Awards)</p></div>
                        </li>
                        <li data-aos="fade-right" data-aos-duration="1000" className="my-2 flex flex-row items-center">
                            <KeyboardArrowRightIcon fontSize="large" />
                            <h3 className="poppins  font_w_700">AWARDING</h3>
                        </li>
                        <li data-aos="fade-right" data-aos-duration="1000" className="my-2 flex flex-row items-center">
                            <KeyboardArrowRightIcon fontSize="large" />
                            <div>       <h3 className="poppins  font_w_700">REVOKING </h3>
                                <p className="poppins  font_w_400">(Common for Honorary Doctorate & Award)</p></div>
                        </li>
                        <li data-aos="fade-right" data-aos-duration="1000" className="my-2 flex flex-row items-center">
                            <KeyboardArrowRightIcon fontSize="large" />
                            <h3 className="poppins  font_w_700">Honorary Doctorate Disciplines Offered</h3>
                        </li>
                    </ul>
                </div>

            </Box>
        </>
    )
}

const Section1 = () => {
    return (

        <Box className="px-3 md:px-10  flex justify-center">

            <Box className="max-w-max-1250 w-full">
                <h2 data-aos="fade-down" className="poppins text-f-20 md:text-f-24 font_w_700 my-10">HONORARY DOCTORATE – PRINCIPLES & CRITERIA FOR CANDIDATE SELECTION GENERAL PRINCIPLES</h2>
                <p data-aos="fade-down" className="poppins text-f-16 md:text-f-20 font_w_400 my-10"> <FiberManualRecordIcon className="mx-2" style={{ fontSize: '0.6rem' }} /> The awarding of an honorary degree is an important symbol in the life of the University. An honorary degree recognizes uncommonly meritorious accomplishments and activity, both in the academic arena and in broader areas of benefit to society that reflect the values esteemed by a great university. Honorary degrees are conferred on those whose achievements are of such excellence that they provide, through example, inspiration and leadership to the graduates of the University</p>
                <p data-aos="fade-down" className="poppins text-f-16 md:text-f-20 font_w_400 my-10"> <FiberManualRecordIcon className="mx-2" style={{ fontSize: '0.6rem' }} /> In choosing recipients for this honor the University is also guided by the principle that in honoring individuals for their contributions, the University is also honoring itself by its association with people of such special merit.</p>

            </Box>
        </Box>
    )
}

const Section2 = () => {
    return (

        <Box className="px-3 md:px-10 bg-c-b-blue-7 flex justify-center">
            <Box className="max-w-max-1250 w-full">
                <h2 data-aos="fade-down" className="poppins text-f-20 md:text-f-24 font_w_700 my-10">CRITERIA FOR SELECTION</h2>
                <p data-aos="fade-down" className="poppins text-f-16 md:text-f-20 font_w_400 my-10"> <FiberManualRecordIcon className="mx-2" style={{ fontSize: '0.6rem' }} />The following specific criteria are used by the Honorary Degrees Committee in its consideration of candidates. The Committee’s goal each year is to present a slate of recipients across a range of academic disciplines and non-academic areas of achievement. Honorary degree recipients, when possible, will be chosen to match the purposes of the Convocation at which the degree is to be granted. Those in category (a). Will predominate if possible; Those in categories (b) and (c) will normally number less than half of the recipients in category (a) unless the Convocation is being called for a special reason</p>
                <p data-aos="fade-down" className="poppins text-f-16 md:text-f-20 font_w_400 my-10"> a. The University normally will give preference to honoring individuals who have made outstanding contributions in the sciences, humanities, and professions in which the University itself is active.</p>
                <p data-aos="fade-down" className="poppins text-f-16 md:text-f-20 font_w_400 my-10"> b. Recognition will be given to those whose exceptional accomplishments have contributed to enhancing culture and society in Romania or elsewhere in the world.</p>
                <p data-aos="fade-down" className="poppins text-f-16 md:text-f-20 font_w_400 my-10"> c. The University on occasion will honor those who have made extraordinary contributions to the development of the University or the region or have achieved international standards of excellence.</p>

            </Box>
        </Box>
    )
}

const Section3 = () => {
    return (

        <Box className="px-3 md:px-10 flex justify-center">
            <Box className="max-w-max-1250 w-full">
                <h2 data-aos="fade-down" className="poppins text-f-20 md:text-f-24 font_w_700 my-10">PROCEDURES</h2>
                <p data-aos="fade-down" className="poppins text-f-16 md:text-f-20 font_w_400 my-10"> <FiberManualRecordIcon className="mx-2" style={{ fontSize: '0.6rem' }} />Nominations: At least once annually, a call for nominations will be broadcast widely by the University Secretariat to the university community, using the traditional outlets and any additional avenues suggested by members of the Honorary Degrees Committee. Nominations may be submitted at any time to the University Secretary using the form</p>
                <p data-aos="fade-down" className="poppins text-f-16 md:text-f-20 font_w_400 my-10"> <FiberManualRecordIcon className="mx-2" style={{ fontSize: '0.6rem' }} />Maintenance of Lists: The initial screening of the nomination will be made by the Senate Secretariat to ensure that the nomination adheres to these guidelines. Names will be added to the list for a period of three years from the date of nomination, at which time if the nominee has not been selected, the name will be deleted. If the person is re-nominated, and if the nomination is still valid according to these guidelines, the name will again be added to the list for an additional three year period.</p>
                <p data-aos="fade-down" className="poppins text-f-16 md:text-f-20 font_w_400 my-10"> <FiberManualRecordIcon className="mx-2" style={{ fontSize: '0.6rem' }} />From the active list of nominations, the Honorary Degrees Committee will select prospective degree recipients as required in the annual convocation cycles. Once a prospective degree recipient has been identified and agreed upon by the Committee, two members of the committee will be assigned to the nomination file in order to execute due diligence, based on publicly available information, to ensure that the nomination conforms fully to the selection principles and criteria.</p>
                <p data-aos="fade-down" className="poppins text-f-16 md:text-f-20 font_w_400 my-10"> <FiberManualRecordIcon className="mx-2" style={{ fontSize: '0.6rem' }} />Nominators will be invited to participate in the conferral of the degree as holders, presenters or hosts, where and when possible, on the basis of their relevant relationship to the field of accomplishment of the nominee. Selection of these invitees will be determined by a group comprising the President, Director of Convocation, Provost and Secretary of Senate</p>
                <p data-aos="fade-down" className="poppins text-f-20 font_w_400"></p>
            </Box>
        </Box>
    )
}


const Section4 = () => {
    return (

        <Box className="px-3 md:px-10 flex bg-c-b-blue-7  justify-center">
            <Box className="max-w-max-1250 w-full">
                <h2 data-aos="fade-down" className="poppins text-f-20 md:text-f-24 font_w_700 my-10">FORMAT OF NOMINATIONS</h2>
                <p data-aos="fade-down" className="poppins text-f-16 md:text-f-20 font_w_400 my-10"> <FiberManualRecordIcon className="mx-2" style={{ fontSize: '0.6rem' }} />This nomination must be written under Freedom of Information guidelines. Please try and restrict your information to what is available in the public domain. Where it is necessary to include private information this must be clearly marked as such, i.e. “Information not in the public domain”. Nominations should be submitted on the forms provided by the Co- Coordinator (Nomination Committee) (please note that a nomination not submitted in this format is difficult to assess and the nomination is thus likely to be undermined)</p>
                <p data-aos="fade-down" className="poppins text-f-16 md:text-f-20 font_w_400 my-10">(a) a completed nomination form (copy attached)</p>
                <div className="poppins text-f-16 md:text-f-20 font_w_400 my-10 flex flex-row">
                    <p data-aos="fade-down">(b) </p>
                    <div className="flex flex-col">
                        <p data-aos="fade-down">(i) a supporting submission on the form provided (copy attached) which contains an introductory statement setting
                            forth the principal grounds for the distinction</p>
                        <p data-aos="fade-down">(ii) a brief chronological, narrative account of the nominee’s life and work.</p>
                        <p data-aos="fade-down">(iii) an outline of the nominee’s most significant academic or other achievements.</p>
                        <p data-aos="fade-down">(iv) an assessment of his/her standing on a basis of international comparison or in the life of the nation.</p>
                        <p data-aos="fade-down">(v) any other information the proposer would wish to bring to the attention of the Committee..</p>
                    </div>





                </div>
                <p data-aos="fade-down" className="poppins text-f-16 md:text-f-20 font_w_400 my-10">(c) Nominations should be accompanied by details of the nominees’ published works in an Appendix.</p>


            </Box>
        </Box>
    )
}


const Section5 = () => {
    return (

        <Box className="px-3 md:px-10 flex justify-center">
            <Box className="max-w-max-1250 w-full">
                <h2 data-aos="fade-down" className="poppins text-f-20 md:text-f-24 font_w_700 my-10">HONORARY DEGREES COMMITTEE</h2>
                <p data-aos="fade-down" className="poppins text-f-16 md:text-f-20 font_w_400 my-10"> <FiberManualRecordIcon className="mx-2" style={{ fontSize: '0.6rem' }} />The Honorary Degrees Committee is appointed annually by Senate and consists of the Registrar and such other members of Senate as determined from time to time by Senate. The duty of the Committee is to select persons to be recommended to Senate for the conferment of Honorary Degrees.</p>

            </Box>
        </Box>
    )
}

const Section6 = () => {
    return (

        <Box className="px-3 md:px-10 flex justify-center">
            <Box className="max-w-max-1250 w-full">
                <h2 data-aos="fade-down" className="poppins text-f-20 md:text-f-24 font_w_700 my-10">RECOMMENDATIONS TO SENATE</h2>
                <p data-aos="fade-down" className="poppins text-f-16 md:text-f-20 font_w_400 my-10"> (1) The Honorary Degrees Committee shall submit a Motion for the award of Honorary Degrees in the form of a written report which shall be made available to members of Senate at least two weeks before the Ordinary Meeting at which it is to be presented.</p>
                <p data-aos="fade-down" className="poppins text-f-16 md:text-f-20 font_w_400 my-10">(2) The names of those recommended for Honorary Degrees are confidential until approved by Senate and offers have been accepted by candidates.</p>
                {/*  <p className="poppins text-f-16 md:text-f-20 font_w_400 my-10"> <FiberManualRecordIcon className="mx-2"  style={ { fontSize: '0.6rem' }} /></p>
                 <p className="poppins text-f-16 md:text-f-20 font_w_400 my-10"> <FiberManualRecordIcon className="mx-2"  style={ { fontSize: '0.6rem' }} /></p> */}

            </Box>
        </Box>
    )
}

const Section7 = () => {
    return (

        <Box className="px-3 md:px-10 bg-c-b-blue-7  flex justify-center">
            <Box className="max-w-max-1250 w-full">
                <h2 data-aos="fade-down" className="poppins text-f-20 md:text-f-24 font_w_700 my-10">DOCUMENT CHECKLIST <span className="font_w_400">(Common for Honorary Doctorate & Honorary Awards)</span></h2>
                <p data-aos="fade-down" className="poppins text-f-16 md:text-f-20 font_w_400 my-10"> Nominations submitted without the following documents will be returned to the Nominator</p>
                <p data-aos="fade-down" className="poppins text-f-16 md:text-f-20 font_w_400 my-10"> <FiberManualRecordIcon className="mx-2" style={{ fontSize: '0.6rem' }} />A letter from the Nominator describing reasons for nominating the Nominee, including contributions or special accomplishments of the Nominee, and any other information which the Nominator feels may be pertinent to the nomination.</p>
                <p data-aos="fade-down" className="poppins text-f-16 md:text-f-20 font_w_400 my-10"> <FiberManualRecordIcon className="mx-2" style={{ fontSize: '0.6rem' }} />Letters of Support (no more than three).</p>
                <p data-aos="fade-down" className="poppins text-f-16 md:text-f-20 font_w_400 my-10"> <FiberManualRecordIcon className="mx-2" style={{ fontSize: '0.6rem' }} />Nominee’s abridged curriculum vitae containing details such as education, a field of endeavor a short description of publications (if any), specials awards, and distinguished service.</p>
                <p data-aos="fade-down" className="poppins text-f-16 md:text-f-20 font_w_400 my-10"> <FiberManualRecordIcon className="mx-2" style={{ fontSize: '0.6rem' }} />A short biographical summary (maximum 500 words), which will form the basis of the citation at convocation should the Nominee be chosen as an honorary degree recipient.</p>

            </Box>
        </Box>
    )
}



const Section8 = () => {
    return (

        <Box className="px-3 md:px-10 flex justify-center">
            <Box className="max-w-max-1250 w-full">
                <h2 data-aos="fade-down" className="poppins text-f-20 md:text-f-24 font_w_700 my-10">AWARDING</h2>
                <p data-aos="fade-down" className="poppins text-f-16 md:text-f-20 font_w_400 my-10"> <FiberManualRecordIcon className="mx-2" style={{ fontSize: '0.6rem' }} />Honorary degree recipients are invited to give the Convocation address but may decline the invitation to do so. </p>
                <p data-aos="fade-down" className="poppins text-f-16 md:text-f-20 font_w_400 my-10"> <FiberManualRecordIcon className="mx-2" style={{ fontSize: '0.6rem' }} />Honorary degrees are not awarded in absentia.</p>

                <p data-aos="fade-down" className="poppins text-f-16 md:text-f-20 font_w_400 my-10"> <FiberManualRecordIcon className="mx-2" style={{ fontSize: '0.6rem' }} />Honorary degrees are not awarded posthumously. An exception may be made in the case of the honor having been accepted and arrangements made for its awarding prior to the death of the nominee.</p>
                <p data-aos="fade-down" className="poppins text-f-16 md:text-f-20 font_w_400 my-10"> <FiberManualRecordIcon className="mx-2" style={{ fontSize: '0.6rem' }} />The citation for the honorary degree should be no longer than three minutes in length. In accordance with Council Bylaws, “each recipient of an honorary degree shall be presented for admission [to the degree] by the Director or by a person designated for that purpose by the Director”</p>
            </Box>
        </Box>
    )
}


const Section9 = () => {
    return (

        <Box className="px-3 md:px-10 flex  bg-c-b-blue-7 justify-center">
            <Box className="max-w-max-1250 w-full">
                <h2 data-aos="fade-down" className="poppins text-f-20 md:text-f-24 font_w_700 my-10">REVOKING <span className="font_w_400">(Common for Honorary Doctorate & Award)</span></h2>
                <p data-aos="fade-down" className="poppins text-f-16 md:text-f-20 font_w_400 my-10"> The Senate may revoke an honorary degree and all the rights and privileges connected therewith.” The Senate would consider revoking the degree on the recommendation of the Honorary Degrees Committee, by means of a vote.</p>
                <p data-aos="fade-down" className="poppins text-f-16 md:text-f-20 font_w_600 my-10"> Degree Certificates and Letters Policy</p>
                <p data-aos="fade-down" className="poppins text-f-16 md:text-f-20 font_w_400 my-10"> <FiberManualRecordIcon className="mx-2" style={{ fontSize: '0.6rem' }} />Once your Doctorate degree has been conferred at a Doctorate ceremony either in person or in absentia, you will automatically receive a Doctorate degree certificate. This will be either presented to you by your Co-Coordinator on the day of the Convocation ceremony or posted to you after the event. For all ceremonies, if you have not received your degree certificate within three months of the date of your ceremony and you fail to notify us of this within that period, you will be charged for a replacement certificate.</p>
                <p data-aos="fade-down" className="poppins text-f-16 md:text-f-20 font_w_400 my-10"> <FiberManualRecordIcon className="mx-2" style={{ fontSize: '0.6rem' }} />Students who have completed an award bearing non-matriculated course (certificate or diploma) with the Department for Continuing Education will receive an award certificate from the Department.</p>
                <p data-aos="fade-down" className="poppins text-f-16 md:text-f-20 font_w_500 my-10"> <FiberManualRecordIcon className="mx-2" style={{ fontSize: '0.6rem' }} />Electronic copies, PDFs or scanned versions of certificates cannot be issued at any time.</p>
                <p data-aos="fade-down" className="poppins text-f-16 md:text-f-20 font_w_600 my-10"> Replacement Certificates</p>
                <p data-aos="fade-down" className="poppins text-f-16 md:text-f-20 font_w_400 my-10"> <FiberManualRecordIcon className="mx-2" style={{ fontSize: '0.6rem' }} />If your Doctorate degree certificate is lost, stolen or damaged, you can order a replacement certificate at a cost. Please note that students are only permitted to have one copy of their certificate in their possession at any one time, so multiple copies cannot be requested.</p>
                <p data-aos="fade-down" className="poppins text-f-16 md:text-f-20 font_w_400 my-10"> <FiberManualRecordIcon className="mx-2" style={{ fontSize: '0.6rem' }} />Certificates can be ordered through the University email system. Certificates ordered for delivery to the Romania will be sent by Professional Courier, orders for overseas locations will be sent by a tracked and signed for courier service at a cost of £20 for European addresses and £25 for rest of world. You may also choose to collect your order from the Regional Centers of European International College</p>


            </Box>
        </Box>
    )
}


const Section10 = () => {
    return (
        <Box data-aos="fade-down" className="poppins text-c-blue text-f-20 md:text-f-24 font_w_700 py-10 ps-3 md:ps-28 lg:ps-60">
            <Link to={"honorary-doctorate-disciplines-offered"}> Honorary Doctorate Disciplines Offered {'>>'}</Link>
        </Box>
    )
}
