/* eslint-disable react-refresh/only-export-components */
import { Box } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";

export default function Honorary_doctorate_disciplines_offered() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,

        });
    }, []);
    return (
        <div >
            <Header_section />
            <Table />
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


const Table = () => {

    const data = [
        {
            course: "Doctor of Divinity",
            prefix: "DDV",
            experience: "10 Years",
        }
        ,
        {
            course: "Doctor of Humanity",
            prefix: "DHM",
            experience: "10 Years",
        },
        {
            course: "Doctor of Literature",
            prefix: "DLT",
            experience: "05 Years",
        },
        {
            course: "Doctor of Commerce",
            prefix: "DCO",
            experience: "05 Years",
        },
        {
            course: "Doctor of theology",
            prefix: "DTHE",
            experience: "05 Years",
        },
        {
            course: "Doctor of Astrology",
            prefix: "DAS",
            experience: "05 Years",
        },
        {
            course: "Doctor of Social works",
            prefix: "DSW",
            experience: "10 Years",
        },
        {
            course: "Doctor of fine arts",
            prefix: "DFA",
            experience: "05 Years",
        },
        {
            course: "Doctor of culture",
            prefix: "DCU",
            experience: "10 Years",
        },
        {
            course: "Doctor of letters",
            prefix: "DLT",
            experience: "10 Years",
        },
        {
            course: "Doctor of music",
            prefix: "DMU",
            experience: "05 Years",
        },
        {
            course: "Doctor of philosophy",
            prefix: "DPH",
            experience: "05 Years",
        },
        {
            course: "Doctor of arts",
            prefix: "DAR",
            experience: "05 Years",
        },
        {
            course: "Doctor of honors",
            prefix: "DHO",
            experience: "05 Years",
        },
        {
            course: "Doctor of business",
            prefix: "DBU",
            experience: "05 Years",
        },
        {
            course: "Doctor of business administration",
            prefix: "DBA",
            experience: "05 Years",
        },
        {
            course: "Doctor of performing arts",
            prefix: "DPA",
            experience: "05 Years",
        },
        {
            course: "Doctor of Vedic science",
            prefix: "DVS",
            experience: "05 Years",
        },
        {
            course: "Doctor of science",
            prefix: "DSC",
            experience: "05 Years",
        },
        {
            course: "Doctor of spiritualism",
            prefix: "DSP",
            experience: "05 Years",
        },
        {
            course: "Doctor of human rights",
            prefix: "DHR",
            experience: "05 Years",
        },
        {
            course: "Doctor of education",
            prefix: "DED",
            experience: "05 Years",
        },
        {
            course: "Doctor of sports",
            prefix: "DSP",
            experience: "10 Years",
        },
        {
            course: "Doctor of information technology",
            prefix: "DIT",
            experience: "05 Years",
        },
        {
            course: "Doctor of peace studies",
            prefix: "DPS",
            experience: "10 Years",
        },
        {
            course: "Doctor of international relations",
            prefix: "DIR",
            experience: "10 Years",
        },
        {
            course: "Doctor of law",
            prefix: "DLW",
            experience: "10 Years",
        },
        {
            course: "Doctor of agriculture",
            prefix: "DAG",
            experience: "05 Years",
        },
        {
            course: "Doctor of psychology",
            prefix: "DPS",
            experience: "05 Years",
        },
        {
            course: "Doctor of traditional medicine",
            prefix: "DTM",
            experience: "05 Years",
        },
        {
            course: "Doctor of alternative medicine",
            prefix: "DAM",
            experience: "10 Years",
        },
        {
            course: "Doctor of martial arts",
            prefix: "DMA",
            experience: "10 Years",
        },
        {
            course: "Doctor of journalism",
            prefix: "DJO",
            experience: "10 Years",
        },
        {
            course: "Doctor of Social service",
            prefix: "dSS",
            experience: "05 Years",
        },

        {
            course: "Doctor of sociology",
            prefix: "DSO",
            experience: "05 Years",
        },

    ]

    return (
        <Box data-aos="flip-down" className="flex justify-center px-2 my-10">
            <div className="md:px-10 w-full max-w-max-1250 overflow-x ">
                <h2 className="text-c-blue w-full text-f-24 md:text-f-40 font_w_800 my-3">Honorary Doctorate Disciplines Offered</h2>
                <table className="overflow-x-auto  border  text-left  border-c-blue border-collapse table-auto overflow-scroll w-full">
                    <tr className="text-f-18 md:text-f-24 bg-c-b-blue-6  text-left font_w_800 text-c-blue">
                        <th className="border  px-2 border-c-blue">No</th>
                        <th className=" border py-2 px-2 border-c-blue">Course name</th>
                        <th className=" border py-2 px-2 border-c-blue">prefix</th>
                        <th className=" border py-2 px-2 border-c-blue">Req. Experience</th>
                    </tr>

                    {data.map((item, index) =>
                        <tr key={index} className="text-f-18 md:text-f-24text-left font_w_500">
                            <td className="border py-2  px-2  border-c-blue">{index = index + 1}</td>
                            <td className="border py-2 px-2 border-c-blue">{item.course}</td>
                            <td className=" border py-2  px-2 border-c-blue">{item.prefix}</td>
                            <td className=" border py-2  px-2 border-c-blue">{item.experience}</td>
                        </tr>
                    )}

                </table>
            </div>
        </Box>
    )
}
