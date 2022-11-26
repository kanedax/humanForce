import { Form, Formik } from 'formik';
import React from 'react';
import FormikControl from '../../Components/Formik/FormikControl';
import * as Yup from 'yup';

const initialValues = {
    userName: "",
    password: "",
    remember: false,
}

const onSubmit = () => {
    console.log(onSubmit);
}

const validationSchema = Yup.object({
    userName: Yup.string()
        .required("لطفا این قسمت را پر کنید"),

    password: Yup.string()
        .required("لطفا این قسمت را پر کنید")
        .matches(
            /^(?=.*[0-9])(?=.{8,})/,
            "حداقل از هشت عدد استفاده شود"
        ),
    remember: Yup.boolean(),
})

const Login = () => {
    return (
        <Formik

            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {(formik)=>{
                console.log(formik);
                return(
                <div className='main-container'>
                    <div className="row ">
                        <Form className="col s4 form-handler">
                            <div className="logo-container"></div>
                            <FormikControl
                                control="input"
                                id="last_name"
                                type="text"
                                name="userName"
                                InputClassName="validate"
                                htmlFor="last_name"
                                label="نام کاربری"
                                icon="fas fa-user prefix"
                            />
                            <FormikControl
                                control="input"
                                id="password"
                                type="password"
                                name="password"
                                InputClassName="validate"
                                htmlFor="last_name"
                                label="کلمه عبور"
                                icon="fas fa-lock prefix icon-handler"
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
