/* eslint-disable react-refresh/only-export-components */
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';


export default function Privacy_Policy() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,

        });
    }, []);
    return (
        <div>
            <Header_section />
            <PrivacyStatement />
            <GDPRstatement />
            <Cookies />
            <OnlineTracking />
            <ThirdPartyWebsites />
            <Security />
            <Accessibility />
            <LimitedtoOnlinePrivacyStatement />
            <ContactUs />
        </div>
    )
}

const Header_section = () => {



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



        <div className={screenSize.width <= 933 ? "h-16" : "h-20"}></div>
    )
}



const PrivacyStatement = () => {
    return (

        <Box className="flex justify-center  ">
            <div className=" w-full max-w-max-1650 px-5 md:px-20 poppins ">
                <h2 data-aos="fade-right" className="font_w_700 text-f-20   md:text-f-40 my-10" >PRIVACY AND LEGAL STATEMENT</h2>
                <h2 data-aos="fade-right" className="font_w_800  text-f-20  md:text-f-24 my-10">Privacy Statement</h2>
                <h4 data-aos="fade-right" ><FiberManualRecordIcon className="mx-2" style={{ fontSize: '0.59rem' }} /> <span className="underline  text-f-16  md:text-f-20  font_w_700">GDPR statement</span> </h4>

                <p data-aos="fade-right" className="font_w_400  text-f-16  md:text-f-20  mt-3 indent-20" >
                    This Privacy Statement {("Statement")} applies to your use of the <b> European International College</b> (europeancollege.ro)This Statement describes how European may collect, share, and use personal information about you based on your interaction with our websites. Personal information that you share on European -managed social media pages, such as Facebook and Twitter, are subject to the privacy policies and terms of use of those platforms. Please refer to those policies before posting any content to those pages.
                </p>

                <h2 data-aos="fade-right" className="font_w_600  text-f-16  md:text-f-20  underline my-10" >What Information Do We Collect?</h2>


                <div className="flex">
                    <FiberManualRecordIcon className="mx-2 mt-2" style={{ fontSize: '0.59rem' }} />
                    <p data-aos="fade-right" className="font_w_400  text-f-16  md:text-f-20  indent-20">
                        We collect personal information that you voluntarily submit using our online applications, surveys, and other contact and submission forms. This information may include but is not necessarily limited to your name, address, telephone numbers, e-mail, student ID, and password.
                    </p>
                </div>

                <div className="flex mt-2">
                    <FiberManualRecordIcon className="mx-2 mt-2" style={{ fontSize: '0.59rem' }} />
                    <p data-aos="fade-right" className="font_w_400  text-f-16  md:text-f-20  indent-20">
                        If you visit our website, we automatically gather and store information about your visit including the IP address from which you access our site; browser information; computer operating system information; the date and time you access our site; the pages, files, and links you visit; and the web address of the site from which you linked to our site. Additional information that you supply to European college, including search terms and data entered in web forms, may be correlated with this visit data.
                    </p>
                </div>
            </div>
        </Box>

    )
}
const GDPRstatement = () => {
    return (

        <Box className="flex justify-center my-10 py-20 text-white bg-c-b-blue-7">
            <div className=" w-full  max-w-max-1650 px-5 md:px-20 poppins ">
                <h2 data-aos="fade-right" className="font_w_700 text-f-20  md:text-f-24 " >GDPR Statement</h2>

                <p data-aos="fade-right" className="font_w_400  text-f-16  md:text-f-20  mt-3 indent-20" >
                    The European Union’s General Data Protection Regulation (EU GDPR) broadly applies to personal data collected from persons while they are in the European Union. GDPR limits when and how organizations worldwide can collect, store, process, and use personal data. It also provides individuals with certain rights related to their personal data, including notice or consent, rights of access, and in some cases, requests for deletion.
                </p>

            </div>
        </Box>

    )
}
const Cookies = () => {
    return (

        <Box className="flex justify-center my-10 py-5">
            <div className=" w-full  max-w-max-1650 px-5 md:px-20 poppins ">
                <h2 data-aos="fade-right" className="font_w_700 text-f-20  md:text-f-24 " >Cookies</h2>

                <p data-aos="fade-right" className="font_w_400  text-f-16  md:text-f-20  mt-3 indent-20" >
                    The European Union’s General Data Protection Regulation (EU GDPR) broadly applies to personal data collected from persons while they are in the European Union. GDPR limits when and how organizations worldwide can collect, store, process, and use personal data. It also provides individuals with certain rights related to their personal data, including notice or consent, rights of access, and in some cases, requests for deletion.
                </p>

                <h3 data-aos="fade-right" className="underline font_w_600  text-f-16  md:text-f-20  mt-2">How do we use your information ?</h3>
                <p data-aos="fade-right" className="font_w_400  text-f-16  md:text-f-20  mt-3 indent-20 " >
                    Unless otherwise described below, we use the information that we collect for internal purposes only, such as to send service notifications, to customize the advertising and content you see, to fulfill your requests, to improve the site, to conduct research, to solicit you feedback and input about the site, and to provide more relevant and effective products, services and advertisements on or through the site.
                </p>

            </div>
        </Box>

    )
}
const OnlineTracking = () => {
    return (

        <Box className="flex justify-center  bg-c-b-blue text-white mb-10 py-20">
            <div className=" w-full max-w-max-1650 px-5 md:px-20 poppins ">
                <h2 data-aos="fade-right" className="font_w_700 text-f-20  md:text-f-24 " >Online Tracking</h2>

                <p data-aos="fade-right" className="font_w_400  text-f-16  md:text-f-20  mt-3 indent-20" >
                    <b>European International College </b>contracts with advertising companies to advertise our products and services on unaffiliated websites and mobile apps.<b>European International College </b> and/or its approved advertising companies also may place cookies during your visit. These companies will have access to the information needed to perform their functions, but cannot use that information for any other purpose. In addition, we may provide aggregated statistical data as well as personal identifiable information to reputable third-party vendors and consultants for analytics purposes or direct marketing. <b>European International College </b> may use these third party advertising and analytics companies to provide ads on and about our website. These companies may use this information to provide relevant ads and offers that may be of interest to you.
                </p>
                <p data-aos="fade-right" className="font_w_400  text-f-16  md:text-f-20  " >Currently, <b>European International College </b> is not able to respond to browser {"do not track signals,"} however, consumers are reminded that they have the option through advertiser supplied opt-out tools to do so on their own accord.</p>

            </div>
        </Box>

    )
}
const ThirdPartyWebsites = () => {
    return (

        <Box className="flex justify-center mb-10 py-5">
            <div className=" w-full max-w-max-1650 px-5 md:px-20 poppins ">
                <h2 data-aos="fade-right" className="font_w_700 text-f-20  md:text-f-24 " >Third Party Websites</h2>

                <p data-aos="fade-right" className="font_w_400  text-f-16  md:text-f-20  mt-3" >
                    We may provide links to third-party sites from our  <b>European International College </b> sites. This Statement applies solely to sites on the europeancollege.ro domain. Please be aware that we are not responsible for the privacy practices of such other sites. We encourage you to be aware when leaving our site of the privacy statements as well as the terms & conditions of other sites that may collect your personal information.  </p>

            </div>
        </Box>

    )
}
const Security = () => {
    return (

        <Box className="flex justify-center text-white bg-c-b-blue mb-10 py-20">
            <div className=" w-full max-w-max-1650 px-5 md:px-20 poppins ">
                <h2 data-aos="fade-right" className="font_w_700 text-f-20  md:text-f-24 " >Security</h2>

                <p data-aos="fade-right" className="font_w_400  text-f-16  md:text-f-20  mt-3" >
                    European International College uses website security measures consistent with industry best practices to protect its website, email, and mailing lists. These measures include technical, procedural, monitoring and tracking steps intended to safeguard data from misuse, unauthorized access or disclosure, loss, alteration or destruction.
                </p>
                <p data-aos="fade-right" className="font_w_400  text-f-16  md:text-f-20  mt-3" >
                    Please keep in mind that no data transmission over the Internet can be guaranteed to be 100% secure. Consequently, we cannot ensure or warrant the security of any information provided to us through your use of the European International College websites and any information that you submit is done at your own risk.
                </p>

            </div>
        </Box>

    )
}
const Accessibility = () => {
    return (

        <Box className="flex justify-center mb-10 py-5 ">
            <div className=" w-full max-w-max-1650 px-5 md:px-20 poppins ">
                <h2 data-aos="fade-right" className="font_w_700 text-f-20  md:text-f-24 " >Accessibility</h2>

                <p data-aos="fade-right" className="font_w_400  text-f-16  md:text-f-20  mt-10" >
                    <b>European International College </b>is committed to providing equal opportunities and equal access to education, employment, programs, and activities to individuals with disabilities. This includes providing equal access to <b>European International College </b>website and subsites. It is important to <b>European International College </b>that web resources be in an accessible format and we encourage contact from individuals having difficulty accessing our website, subsites, or materials contained therein.
                </p>
                <p data-aos="fade-right" className="font_w_400  text-f-16  md:text-f-20  mt-5" >
                    For questions or concerns please contact: web-support @europeancollege.ro
                </p>

            </div>
        </Box>

    )
}
const LimitedtoOnlinePrivacyStatement = () => {
    return (

        <Box className="flex bg-c-b-blue text-white justify-center mb-10 py-20 ">
            <div className=" w-full max-w-max-1650 px-5 md:px-20 poppins ">
                <h2 data-aos="fade-right" className="font_w_700 text-f-20  md:text-f-24 " >Limited to Online Privacy Statement</h2>

                <p data-aos="fade-right" className="font_w_400  text-f-16  md:text-f-20  mt-3" >
                    <FiberManualRecordIcon className="mx-2" style={{ fontSize: '0.5rem' }} />  This Statement applies to information collected through our sites only. It does not apply to information collected offline. </p>

                <h6 data-aos="fade-right" className="font_w_500 underline  text-f-16  md:text-f-20  mt-3">Changes to this Statement</h6>
                <p data-aos="fade-right" className="font_w_400  text-f-16  md:text-f-20   mt-2" >
                    <FiberManualRecordIcon className="mx-2" style={{ fontSize: '0.5rem' }} />  This Statement is effective as of November 13, 2023. We will notify you if we make changes to this Statement, such as posting a notice on our homepage. Any changes will be effective as soon as they are published on this site.
                </p>

            </div>
        </Box>

    )
}
const ContactUs = () => {
    return (

        <Box className="flex justify-center mb-10 py-5 ">
            <div className=" w-full max-w-max-1650 px-5 md:px-20 poppins ">
                <h2 data-aos="fade-right" className="font_w_700 text-f-20  md:text-f-24 " >Contact Us</h2>

                <p data-aos="fade-right" className="font_w_400  text-f-16  md:text-f-20  mt-3" >

                    If you have any questions about this Statement, you can contact:
                </p>

                <p data-aos="fade-right" className="font_w_400  text-f-16  md:text-f-20  mt-3" >
                    University Marketing and Communications EUROPEAN INTERNATIONAL COLLEGE, <br />
                    PARTESH DE JOS, JUD.<br />
                    SUCEAVA , STR.PRINCIPALA NR.79 COD POSTAL 727425,<br />
                    Romania.
                </p>



            </div>
        </Box>

    )
}