import { Form, Formik } from 'formik';
import React from 'react';
import FormikControl from '../../Components/Formik/FormikControl';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';




const initialValues = {
    personalCode: "",
    password: "",
    // remember: false,
}

const onSubmit = async (values, navigate) => {
   await axios.post('http://45.138.135.108:8080/api/Auth/login' , values).then(res=>{
    console.log(res);
        if(res.status == 200){
            localStorage.setItem('loginToken', JSON.stringify(res.data));
            navigate('/');
            console.log(res.data.data.token);
        }
   }).catch(error=>{
    console.log(error);
   })
}

const validationSchema = Yup.object({
    personalCode: Yup.string()
        .required("لطفا این قسمت را پر کنید"),

    password: Yup.string()
        .required("لطفا این قسمت را پر کنید")
        .matches(
            /^(?=.*[0-9])(?=.{8,})/,
            "حداقل از هشت عدد استفاده شود"
        )
    // remember: Yup.boolean(),
})

const Login = () => {
    const navigate = useNavigate()
    return (
        <Formik

            initialValues={initialValues}
            onSubmit={(values)=>onSubmit(values, navigate)}
            validationSchema={validationSchema}
        >
            {(formik) => {
                return (
                    <div className='main-container'>
                        <div className="row ">
                            <Form className="col s4 form-handler">
                                <div className="logo-container"></div>
                                <FormikControl
                                    control="input"
                                    id="last_name"
                                    type="text"
                                    name="personalCode"
                                    InputClassName="validate"
                                    htmlFor="last_name"
                                    label="نام کاربری"
                                    icon="fas fa-user prefix"
                                    className=" input-field col s12"
                                />
                                <FormikControl
                                    control="input"
                                    id="password"
                                    type="password"
                                    name="password"
                                    InputClassName="validate"
                                    htmlFor="password"
                                    label="کلمه عبور"
                                    icon="fas fa-lock prefix"
                                    className=" input-field col s12"
                                />
                                <div className="row flex-display">
                                    <FormikControl
                                        control="Checkbox"
                                        label="مرا به خاطر بسپار"
                                        type="checkbox"
                                        name="remember"
                                    />
                                    <div className='col s3'>
                                        <button className="waves-effect waves-light btn btn-handler" type='submit'
                                            disabled={formik.isSubmitting} >
                                            {
                                                formik.isSubmitting ? <i className="fa fa-spinner fa-spin"></i> : "ورود"
                                            }
                                        </button>
                                    </div>
                                </div>
                            </Form>
                            <div className='col s8 image-handler'></div>
                        </div>
                    </div>
                );
            }}
        </Formik>
    );
}

export default Login;
