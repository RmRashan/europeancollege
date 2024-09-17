import * as yup from 'yup'
export const validationSchema = yup.object().shape({
    fullname: yup.string().max(50, "Maximum 50 Char ").required('Name is Required *'),
    email: yup.string().email('Invalid email').required('Email is Required *'),
    mobile: yup.number().positive('Invalid Mobile Number').integer('Invalid Mobile Number').required('Mobile Number is Required *'),
    msg: yup.string().required('Message Number is Required *'),
});
