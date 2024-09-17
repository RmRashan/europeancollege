import { Box, Grid } from "@mui/material";
import "./index.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className="footer_banner h-800 md:h-614 flex flex-col justify-around bg-left md:bg-right  px-3">
        <Box className="text-white h-580 flex items-center">
          <Grid container flexWrap={"wrap"}>
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              className="lg:justify-center ps-3 sm:ps-20 lg:ps-0 py-3"
              display={"flex"}
            >
              <Box className="inline-block">
                <h2 className="text-f-20 sm:text-f-24font_w_800 poppins ">
                  Study with us
                </h2>
                <ul className="text-f-18 sm:text-f-20 font_w_300 mt-4">
                  <li>Diploma Programmes</li>
                  <li>Undergraduate Programmes</li>
                  <li>Postgraduate</li>
                  <li>ph.D Programmes</li>
                </ul>
              </Box>
            </Grid>

            <Grid
              item
              xs={6}
              sm={6}
              md={4}
              className=" ps-3 sm:ps-0 sm:justify-center  lg:justify-center py-3"
              display={"flex"}
            >
              <Box className="inline-block">
                <h2 className="text-f-20 sm:text-f-24 font_w_800 poppins ">
                  Quick Links
                </h2>
                <ul className="text-f-18 sm:text-f-20 font_w_300 mt-4">
                  <li><Link to={'/'}>Home</Link> </li>
                  <li><Link to={'/course'}>Courses</Link></li>
                  <li><Link to={'/aboutUs'}>About us</Link></li>
                  <li><Link to={'/aboutUs'}>Our Vision and Mission</Link></li>
                  <li><Link to={'/gallery'}>Gallery</Link></li>
                  <li><Link to={'/admission'}>Admission</Link></li>
                  <li><Link to={'/contact-us'}>Contact us</Link></li>
                  <li className="border-t-2 border-white"><Link to={'Privacy-Policy'}>Privacy Policy</Link></li>
                </ul>
              </Box>
            </Grid>

            <Grid
              item
              xs={12}
              sm={11}
              md={4}
              className="ps-3 sm:ps-20 lg:ps-0  lg:justify-center py-3"
              display={"flex"}
            >
              <Box className="inline-block">
                <h2 className="text-f-20 sm:text-f-24 font_w_800 poppins ">
                  Contact us
                </h2>
                <p className="text-f-18 sm:text-f-20 font_w_300 mt-4">
                  University Marketing and Communications, EUROPEAN
                  INTERNATIONAL COLLEGE PARTESH DE JOS, JUD. SUCEAVA ,
                  STR.PRINCIPALA NR.79 COD POSTAL 727425 Romania
                </p>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </div>
      <div className="w-full bg-c-gray flex flex-col md:flex-row items-center justify-between py-5 px-10">
        <div className="text-center mb-5 md:mb-0">
          © 2022 European International College. All Rights Reserved.
        </div>

        <div className="flex flex-col justify-center items-center md:items-start">
          <span className="mb-2 text-center">Official Technology Partner</span>
          <a target="_blank" href="https://safenax.com/" rel="noreferrer">
            <img src="/Safenax.png" alt="Safenax_Software_IT_Company" width={150} />
          </a>
        </div>
      </div>
    </>
  );
}
