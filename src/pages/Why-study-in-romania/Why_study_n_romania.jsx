/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { Box } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import { Image } from "@nextui-org/react";
import img1 from "../../assets/images/Why-Study-in-Romania/img1.png";
import img2 from "../../assets/images/Why-Study-in-Romania/img2.png";
import img3 from "../../assets/images/Why-Study-in-Romania/img3.png";
import img4 from "../../assets/images/Why-Study-in-Romania/img4.png";
import img5 from "../../assets/images/Why-Study-in-Romania/img5.png";
import img6 from "../../assets/images/Why-Study-in-Romania/img6.png";
import img7 from "../../assets/images/Why-Study-in-Romania/img7.png";
import img8 from "../../assets/images/Why-Study-in-Romania/img8.png";
import img9 from "../../assets/images/Why-Study-in-Romania/img9.png";
import img10 from "../../assets/images/Why-Study-in-Romania/img10.png";

import './why_study.css'


export default function Why_study_n_romania() {
    const [data, setData] = useState([""]);
    useEffect(() => {
        setData([
            {
                id: 1,
                image: img1,
                title: "Romania is member of EU and EEA countries",
                descrpition:
                    "Study in Romania is studying in European Union (EU), in European Economic Area (EEA). All diplomas from EU and EEA accredited Universities are automatically recognised in all Europe and beyond.",
            },
            {
                id: 2,
                image: img2,
                title: "Excellent quality of education in Romania",
                descrpition:
                    "Traditionally, Higher Education in Romania has a world-wide reputation as a centre of excellence in learning, teaching and practice. Romanian Universities and Colleges have been receiving thousands and thousands of students from all over the world, especially from developing countries. Today all most all Romanian Universities are partners with thousands of well-known Universities in all over the world. And Romania has become one of countries offering state-of-the-art facilities and cutting-edge research opportunities together with the chance to walk in the footsteps of so many of the world’s most influential thinkers.",
            },
            {
                id: 3,
                image: img3,
                title: "Reasonable tuition fees and living expenses in Romania",
                descrpition:
                    "Romanian Higher education and living cost are the cheapest in all European Union. The excellent academic standards are achieved with reasonable tuition fees and daily costs while the education sector being a top priority for Europe’s competitiveness.",
            },
            {
                id: 4,
                image: img4,
                title: "Rich academic heritage in Romania",
                descrpition:
                    "Romania boasts many centuries of academic excellence. A rich academic heritage is based around many landmarks in human knowledge, and today’s Romania higher education institutions benefit from this lasting legacy. In Romanian, international students get advantage of wonderful blend of tradition and modernity, vitality and performance, along with traditional and new campuses at low cost.",
            },
            {
                id: 5,
                image: img5,
                title: "Great Choice of University programs in Romania",
                descrpition:
                    "There are more than 70 Romanian state universities or private Romanian universities in Romanian, with a supplementary preparatory year for learning Romanian language. All those universities offer a great variety of degree programs (bachelor, Master, PhD /Doctorate) in different languages (Romania, English, French, German, and Hungarian). From leading research universities to small, friendly teaching colleges, the degree program or course choice seems to be unlimited especially in national language.",
            },
            {
                id: 6,
                image: img6,
                title: "Multicultural environment in Romanian Universities",
                descrpition:
                    "Study in Romania offers a unique cultural experience in a dynamic and multinational environment. Besides earning a world-class qualification, international students in Romania have the chance to learn new languages, get international intercultural skills that are of great value to future employers and an essential advantage in a dynamic world, build a friend and professional network lasting forever, to travel and make practice or exchange studies in other countries, etc. So higher education in Romania makes international students grow a lot and quickly thanks to multicultural experience.",
            },
            {
                id: 7,
                image: img7,
                title: "University Quality and Transferability in Romania",
                descrpition:
                    "the qualifications of Higher education must be internationally recognised. Transferable qualifications aid mobility, making it easier for students to further study or to transfer achieved credits to other higher education institution or to move from studying to launching a career elsewhere. To facilitate and ensure that the quality and transferability of higher education qualifications mean something and are recognised all over the world, a number of instruments have been developed among which: European Credit Transfer and Accumulation System(ECTS), The Diploma Supplement(DS), The European Quality Charter for Mobility, The European Qualifications Framework for Lifelong Learning(EQF), The ENIC Network(European Network of Information Centres on academic recognition and mobility), The NARIC Network(National Academic Recognition Information Centres).",
            },
            {
                id: 8,
                image: img8,
                title: "European Credit Transfer and Accumulation System(ECTS) in Romania",
                descrpition:
                    "The ECTS was introduced to ensure that period of study abroad were recognised, thereby enhancing the quality and volume of student mobility in Europe. Recently, the ECTS has been developing into an accumulation system and is increasingly becoming a general reference for national credit systems. It supports the objectives of the Bologna Process by making study programs easy to read and compare for local and foreign students and by facilitating mobility and academic recognition.",
            },
            {
                id: 9,
                image: img9,
                title: "Diploma Supplement (DS)",
                descrpition:
                    "The non-recognition and poor evaluation of qualifications is now a global problem. The Diploma Supplement is a document attached to a higher education diploma that provides a standardised description of the nature, level, context, content and status of the studies that were successfully completed by the graduate. The Diploma Supplement provides transparency and facilitates academic and professional recognition of qualifications (diplomas, degrees, certificates). The DS offers students: a diploma that is more readable and easily comparable abroad; a precise description of their academic career and the competencies acquired during the study period; an objective description of their achievements and competencies; easier access to opportunities for work or further study abroad; improved employability.",
            },
            {
                id: 10,
                image: img10,
                title: "Career Opportunities",
                descrpition:
                    "Studying in Romania increase the Career Opportunities Studying in Europe gives you a top-quality education which will be respected the world over. Throughout the study period, the students are distributed for their practical activities in institutions specialized in the field, they are getting trained, so after graduating the faculty, they have the best prospects of employment.",
            },
        ]);
    }, []);
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,

        });
    }, []);

    return (
        <div>
            <Home_Header_section />
            {data.map((data) => (
                <Home_section2 key={data.id} data={data} />
            ))}



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


        <div className="h-100svh flex flex-col ">
            <div className={screenSize.width <= 933 ? "h-16" : "h-20"}></div>            <div className="why_study_Header_img flex flex-col justify-center relative  rounded-bl-250 md:rounded-bl-500 ">
                <Box className="absolute bottom-36  px-5 sm:px-0 sm:left-16 lg:w-3/5  md:left-40  lg:left-40 xl:left-60 flex flex-col items-center  justify-end">
                    <div>
                        <h2 className="text-white font_w_800 text-f-48  mb-5 leading-10">Why Study in Romania ?</h2>
                        <p className="poppins font_w_400 text-f-20 md:text-f-24 text-white">Whoever you are, European or non-European citizen, choosing to study abroad in European Union, especially in Romania, is the best choice you can make: vast cultural diversity, access to all European countries, heart of research and conferences centers and possibility of easily being involved into community, meeting people from all over the world and possibility of making network useful lasting for the rest of live, etc. Studying in Romania makes students grow a lot and quickly.</p>
                    </div>

                </Box>
            </div>

        </div>

    )
}



const Home_section2 = ({ data }) => {
    return (

        <div className="px-3  poppins flex justify-center">
            <div
                className={
                    data.id % 2 == 1
                        ? "flex w-full justify-between items-end md:items-center py-10 max-w-max-1250    flex-col md:flex-row"
                        : "flex w-full justify-between items-start md:items-center py-10 max-w-max-1250    flex-col md:flex-row"
                }
            >
                <div data-aos={data.id % 2 == 1 ? "zoom-in-left" : "zoom-in-right"}
                    className={
                        data.id % 2 == 0
                            ? "md:w-1/3   flex justify-between items-center py-3 order-1 md:order-2"
                            : "md:w-1/3   flex justify-between items-center py-3 order-2 md:order-1"
                    }
                >
                    <Image width={430} alt={data.title} src={data.image} className="" />
                </div>
                <div data-aos={data.id % 2 == 1 ? "zoom-in-left" : "zoom-in-right"}
                    className={
                        data.id % 2 == 0
                            ? " text-left sm:text-left md:w-1/2  lg:pe-10 flex flex-col justify-end py-3 px-3 order-1"
                            : " order-2 text-right md:text-left md:w-1/2 lg:ps-10 flex flex-col justify-end py-3 "
                    }
                >
                    <h4 className="text-c-blue text-f-32 font_w_700"> {data.title}</h4>
                    <p className=" font_w_700  text-f-18 md:text-f-20 Montserrat">
                        {data.descrpition}
                    </p>
                </div>
            </div>
        </div>

    );
};