import * as Yup from  "yup";
export const validationComponent= Yup.object({
    name:Yup.string().min(2).max(25).required("Please enter your name"),
    email:Yup.string().email().required("enter your email"),
    password: Yup.string().min(6).required("enter your password"),
    confirm_password: Yup.string().required().oneOf([Yup.ref("password"),null],"password doesn't match")
    
})