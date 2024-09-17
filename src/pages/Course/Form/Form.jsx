import { useFormik } from "formik"
import { validationSchema } from "./validationSchema"


export default function Form() {
    const onSubmit = (values, action) => {

        action.resetForm()

    }

    const formik = useFormik({
        initialValues: {
            fullname: '',
            email: '',

        },
        validationSchema: validationSchema,
        onSubmit,
    })

    console.log(formik.errors)
    return (
        
        <div className="bg_form flex justify-end my-20" data-aos="fade-up"
            data-aos-duration="1000">

                <div className=" md:w-2/3 lg:w-7/12 xl:w-1/2 flex justify-center items-center ">

                    <div className="w-10/12">
                        <div className="mb-10">
                            <span className="Montserrat font_w_400 text-f-20">Wanna Know More Details ?</span>
                            <h2 className="poppins font_w_700  text-f-24 sm:text-f-32 text-c-blue">Request Information Now...</h2>

                        </div>
                        <form onSubmit={formik.handleSubmit}>
                            <div className="border w-full   border-c-blue px-3 py-1 my-3">
                                <input type="text" id="fullname" value={formik.values.fullname} onChange={formik.handleChange} className=" w-full  bg-transparent border-none outline-none text-f-20 poppins font_w_300 accent-c-blue text-c-blue placeholder-c-blue" placeholder="Full Name" />
                            </div>
                            {formik.errors.fullname ? <p className="text-red-700 ">{formik.errors.fullname}</p> : ''}
                            <div className="border w-full   border-c-blue px-3 py-1 my-3">
                                <input type="email" id="email" value={formik.values.email} onChange={formik.handleChange} className=" w-full bg-transparent border-none outline-none text-f-20 poppins font_w_300 accent-c-blue text-c-blue placeholder-c-blue" placeholder="Email" />
                            </div>
                            <div className="border w-full   border-c-blue px-3 py-1 my-3">
                                <select className="w-full text-c-blue bg-transparent border-none outline-none text-f-20 poppins font_w_300 accent-c-blue placeholder-c-blue">
                                    <option>Country</option>
                                    <option >1</option>
                                    <option >2</option>
                                    <option >3</option>
                                    <option >4</option>
                                </select>
                            </div>
                            <div className="border w-full   border-c-blue px-3 py-1 my-3">
                                <input type="number" id="mobile" value={formik.values.mobile} onChange={formik.handleChange} className="text-c-blue w-full bg-transparent border-none outline-none text-f-20 poppins font_w_300 accent-c-blue placeholder-c-blue" placeholder="Mobile Number" />
                            </div>
                            <div className="border w-full   border-c-blue px-3 py-1 my-3">
                                <select className="w-full text-c-blue bg-transparent border-none outline-none text-f-20 poppins font_w_300 accent-c-blue placeholder-c-blue">
                                    <option>Course Programe</option>
                                    <option >1</option>
                                    <option >2</option>
                                    <option >3</option>
                                    <option >4</option>

                                </select>
                            </div>
                            <div className="border w-full   border-c-blue px-3 py-1 my-3">
                                <textarea placeholder="Message..." id="msg" value={formik.values.msg} onChange={formik.handleChange} className="text-c-blue w-full bg-transparent border-none outline-none text-f-20 poppins font_w_300 accent-c-blue placeholder-c-blue h-52">


                                </textarea>
                            </div>



                            <div className="text-f-16 font_w_400">
                                We value and respect your privacy. By continuing, you agree to
                                EUROPEAN INTERNATIONAL COLLEGE ROMANIA’s
                                <b> <span className="underline">Data Protection </span></b>policy.

                                <p className="mt-5">*You’ll receive required information via email.</p>


                            </div>

                            <div className="flex justify-between mt-5">
                                <button className="text-red-700 poppins font_w_500 text-f-16" >Clear Form</button>
                                <div>
                                    <button className="text-white py-1 px-4 poppins text-f-20 font_w_700 bg-c-blue-light" type="submit">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        
    )
}




