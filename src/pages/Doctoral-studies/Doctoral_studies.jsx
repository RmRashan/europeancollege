import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import './Doctoral_studies.css'

export default function Doctoral_studies() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,

        });
    }, []);
    return (
        <div>
            <Doctoral_studies_Header_section />
            <Before_Image_Sectiones />
            <Image_Section />
            <After_Image_Sectiones />
        </div>
    )
}




const Doctoral_studies_Header_section = () => {



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
            <div className={screenSize.width <= 933 ? "h-16" : "h-20"}></div>            <div className="Doctoral_studies_Header_img flex flex-col justify-center relative  rounded-bl-250 md:rounded-bl-500 ">
                <Box className="absolute bottom-36 px-5 sm:px-0 sm:left-16 lg:w-3/5  md:left-40  lg:left-40 xl:left-60 flex flex-col items-center  justify-end">
                    <div>
                        <h2 data-aos="fade-right" data-aos-duration="3000" className="text-white font_w_800 text-f-48  mb-5  leading-10 ">Doctoral studies</h2>
                        <p data-aos="fade-right" data-aos-duration="3000" className="poppins font_w_400 text-f-20 md:text-f-24 text-white"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                        </p>
                    </div>

                </Box>
            </div>

        </div>

    )
}

const Before_Image_Sectiones = () => {

    const data = [
        {
            id: 1,
            title: " DOCTORATE DISSERTATION PROJECT",
            description: [
                {
                    id: 1,
                    content: "All candidates within the European International College must submit a comprehensive personal profile describing their learning and work function in order to earn credit units towards the award. ",
                }, {
                    id: 2,
                    content: "The candidates who wish to earn the EIC qualifications are hereby requested to submit a compulsory Reflective Work Experience Accomplishment Assignment (RWEAA) in order to gain the desired award. This is a research paper, with a minimum of 25,000 words in length. It should be typewritten, double-spaced, bound and should reflect the candidate’s own choice of subject matter related to the work experience. ",
                }, {
                    id: 3,
                    content: "The Doctorate Dissertation grade will be included on your final submission for the academic panel to determine your official transcript.",
                }
            ]
        }, {
            id: 2,
            title: " FINAL ASSESSMENT",
            description: [
                {

                    id: 1,
                    content: "After the completion of all requirements, the Graduate Review Committee (GRC) will conduct a final assessment of each candidate’s performance, taking all the results of Viva (oral) examinations, into consideration. ",

                }, {

                    id: 2,
                    content: "The Final Assessment Report will then be placed into the candidate’s permanent file to document the rationale of awarding the Professional Knowledge Doctorate Degree. ",

                }, {

                    id: 3,
                    content: "This will be carried out by the GAC Commission for Consistent Learning, which performs their assessment and verification.",

                },
            ]
        }, {
            id: 3,
            title: " WRITING A DOCTORATE RESEARCH",
            description: [
                {

                    id: 1,
                    content: "The purpose of a research is to provide the University with a clear indication of the topic in which the candidate is interested and also give an indication on the candidate’s ability to identify and develop an interesting research question. ",

                }, {

                    id: 2,
                    content: "Most potential supervisors will consider research as preliminary indicators of the applicant’s area of interest and will not necessarily assume that the research defines exactly the candidate’s confirmation of undertaking. Thus, the main concern when preparing a research is to indicate the area in which the research will be undertaken and to point out the significant and original issues which arise in that area. ",

                }, {

                    id: 3,
                    content: "However, it should avoid making any substantial changes to the broad direction of their search after acceptance; it will be based on both academic ability and the availability of interested and suitably qualified supervisors. A significant change to the research plans without consultation with the nominated supervisor may not be considered for the said qualification.",

                },
            ]
        }
    ]

    return (
        <Box >
            {data.map((data) => (<Box key={data.id} className={data.id % 2 == 0 ? "flex justify-center bg-c-b-blue-7 text-white px-3 md:px-10" : "flex justify-center  px-3 md:px-10"}>
                <div className="max-w-max-1250 xl:max-w-max-1450 w-full poppins my-10">
                    <h2 data-aos="fade-right" className="font_w_700 text-f-24 my-5">{data.title}</h2>
                    <ul>

                        {data.description.map((data) => (
                            <li data-aos="fade-right" data-aos-duration="1000" key={data.id} className="font_w_400 my-10 text-f-20">{data.content}</li>
                        ))}
                    </ul>
                </div>
            </Box>))}
        </Box>
    )
}

const Image_Section = () => {
    return (
        <Box data-aos="flip-down" className="bgImage">
            i
        </Box>
    )
}

const After_Image_Sectiones = () => {

    const data = [
        {
            id: 1,
            title: "RESEARCH SYNOPSIS",
            description: [
                {
                    id: 1,
                    content: "The synopsis will be considered in conjunction with the academic qualifications by the University. The qualifications will provide the University and potential supervisors with evidence of ability confirmation to proceed for the doctoral award.  ",
                }, {
                    id: 2,
                    content: "The research synopsis will be used at first, to determine whether there are staffs in the University who are qualified and willing to supervise in the area chosen and secondly, to give an indication on the aptitude for research. The applicant needs to demonstrate to the supervisor the fact of understanding the area which has been chosen for the said research. Must be able to identify an interesting and original research question and have some understanding as to how the research must be conducted. ",
                }, {
                    id: 3,
                    content: "A typical research synopsis will be somewhere between 6,000 and 8,500 words. While there is no definitive format, the following guidelines should help in the preparation of a research synopsis. ",
                }, {
                    id: 4,
                    content: "The synopsis should begin by identifying the subject for research both in terms of theoretical issues and relevant empirical applications. This will serve as an introduction to the research synopsis. ",
                }, {
                    id: 5,
                    content: "The synopsis should then briefly review relevant literature and theories relating to the research area. At this stage, it is important to be able to demonstrate familiarity with the major line of argument which has been developed in your area and to demonstrate an understanding of the ideas and findings of key researchers working on your topic.",
                },
            ]
        }, {
            id: 2,
            title: " RESEARCH METHODOLOGY",
            description: [
                {
                    id: 1,
                    content: "Depending on the nature of the subject, it will then usually be desirable to give some indication of the research methods that will be used in the conduct of research.",
                }, {
                    id: 2,
                    content: "Clearly a variety of different research methods exist and it should seek to identify the approach that is most suited to the area of research – (for example, they are experimentation, participant observation, forms of textual analysis, econometric modeling, ethnography, survey data analysis, the analysis of historical records etc.). ",
                }, {
                    id: 3,
                    content: "Subsequently, where the thesis involves empirical work, it should provide some indication of the form and location of that empirical work and where and how it might collect any relevant data. For example, it might like to say something about access to particular sources of information (whether we need on-line access to databases, or whether we can use relevant archives etc.). ",
                }, {
                    id: 4,
                    content: "It could also comment on the country or geographical area in which the learning will take place (whether we have made a choice, if so why and the advantages and disadvantages of this choice). It is also worth saying something about the subjects of the research (are you looking at individuals, groups, texts, companies, etc.) and provide some justification for the choices. Obviously, the actual experimental work that will be undertaken may well be rather different for that outlined in the research synopsis, depending on the findings of detailed literature reviews. ",
                }, {
                    id: 5,
                    content: "However, the purpose of such a section in a research synopsis is to provide an indication that the applicant has an understanding of the issues, associated with the conduct of research and the ability to design a research learning to address a specific set of issues.",
                },
            ]
        }, {
            id: 3,
            title: "RESEARCH FINDINGS",
            description: [
                {
                    id: 1,
                    content: "Finally, although no indication of the research findings can be presented, it is often beneficial to conclude the research synopsis by indicating how to envisage that the research will contribute to debates and discussions in particular subject area. ",
                }, {
                    id: 2,
                    content: "This means providing some indication of how it will help the research and can make an original contribution, how it may fill gaps in existing work and how it may extend understanding of particular topics. ",
                }, {
                    id: 3,
                    content: "Always include a bibliography with the research synopsis, which lists books and articles to make references in the discussion of the proposed research. The applicant must be able to defend on a professional note as to how the thesis will be effective in practice.",
                },
            ]
        }, {
            id: 4,
            title: "Doctorate Candidates",
            description: [
                {
                    id: 1,
                    content: "An honorary degree or a degree honoris causa (Latin: “for the sake of the honor”) is an academic degree for which a university (or other degree-awarding institution) has waived the usual requirements, such as matriculation, residence, study and the passing of examinations. ",
                }, {
                    id: 2,
                    content: "The degree is typically a doctorate or, less commonly, a master’s and bachelor’s degree, and may be awarded to someone who has no prior connection with the academic institution. The degree is often conferred as a way of honoring a distinguished visitor’s contributions to a specific field or to society in general.",
                }
            ]
        }
    ]

    return (
        <Box>
            {data.map((data) => (<Box key={data.id} className={data.id % 2 == 0 ? "flex justify-center text-white bg-c-b-blue-7 px-3 md:px-10" : "flex justify-center  px-3 md:px-10"}>
                <div className="max-w-max-1250 xl:max-w-max-1450 w-full poppins my-10">
                    <h2 data-aos="fade-right" className="font_w_700 text-f-24 my-5">{data.title}</h2>
                    <ul>

                        {data.description.map((data) => (
                            <li data-aos="fade-right" data-aos-duration="1000" key={data.id} className="font_w_400 my-10 text-f-20">{data.content}</li>
                        ))}
                    </ul>
                </div>
            </Box>))}
        </Box>
    )
}