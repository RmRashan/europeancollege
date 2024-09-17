
import { Routes, Route, Navigate } from "react-router-dom";
// import Guest from "../layout/guest";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Course from './../pages/Course/Course';
import SubCourse from "../pages/Course/SubCourse/SubCourse";
import CourseSingaleView from "../pages/Course/SubCourse/CourseSingaleView/CourseSingaleView";
// import Maintenace from "../pages/Other/Maintenance";
import NotFoundPagee from "../pages/404/NotFoundPagee";
import Why_study_n_romania from './../pages/Why-study-in-romania/Why_study_n_romania';
import ContactUs from "../pages/ContactUs/ContactUs";
import Why_we from "../pages/Why-we/Why_we";
import Doctoral_studies from './../pages/Doctoral-studies/Doctoral_studies';
import Honorary_Doctorate from "../pages/Honorary-Doctorate/Honorary_Doctorate";
import Honorary_doctorate_disciplines_offered from "../pages/Honorary-Doctorate/Honorary_doctorate_disciplines_offered/Honorary_doctorate_disciplines_offered";
import Privacy_Policy from "../pages/Privacy-Policy/Privacy-Policy";
import Admission from "../pages/Admission/Admission";
import Verification from "../pages/Verification/Verification";
import Accreditation from "../pages/Accreditation/Accreditation";
import Our_Partners from "../pages/Our-Partners/Our_Partners";
import Gallery from './../pages/Gallery/Gallery';
export default function Router_Index() {
  return (

    <Routes>
      <Route index element={<Home />} />
      <Route path="/aboutUs" element={<About />} />
      <Route path="/course" element={<Course />} />
      <Route path="/contact-us" element={<ContactUs/>} />
      <Route path="/admission" element={<Admission />} />
      <Route path="/course/:id" element={<SubCourse />} />
      <Route path="/course/:id/:id" element={<CourseSingaleView />} />
      <Route path="/Gallery" element={<Gallery />} />

      <Route path="/Our-Partners" element={<Our_Partners />} />
      <Route path="/Why-Study-in-Romania-?-" element={<Why_study_n_romania/>} />
      <Route path="/Why-we-?-" element={<Why_we />} />
      <Route path="/Doctoral-Studies" element={<Doctoral_studies />} />
      <Route path="/Honorary-Doctorate" element={<Honorary_Doctorate/>} />
      <Route path="/Honorary-Doctorate/honorary-doctorate-disciplines-offered" element={<Honorary_doctorate_disciplines_offered />} />
      <Route path="/Privacy-Policy" element={<Privacy_Policy />} />
      <Route path="/Verifications" element={<Verification />} />
      <Route path="/Accreditation" element={<Accreditation />} />
      
      <Route path="/404" element={<NotFoundPagee />} />
      <Route path="*" element={<Navigate to="/404" replace />} />
    </Routes>

  )
}
