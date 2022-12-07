import React from 'react';
import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import FormikControl from '../../../Components/Formik/FormikControl';




const initialValues = {
    firstname: "",
    lastname: "",
    gender: "",
    nationalcode: "",
    BCnumber: "",
    mobile: "",
    birthday: "",
    educations: "",
    major: "",
    milistatus: "",
    isarmy: false,
}

const onSubmit = (values) => {

    console.log(values);
}

const validationSchema = Yup.object({
    firstname: Yup.string()
        .required("لطفا این قسمت را پر کنید")
        .matches(/^(?=.*[\u0600-\u06FF])/, "فقط حروف فارسی"),
    lastname: Yup.string()
        .required("لطفا این قسمت را پر کنید")
        .matches(/^(?=.*[\u0600-\u06FF])/, "فقط حروف فارسی"),
    gender: Yup.string()
        .required("لطفا این قسمت را پر کنید"),
    nationalcode: Yup.string()
        .required("لطفا این قسمت را پر کنید")
        .matches(/^(?=.*[0-9])(?=.{10,10})/, "طول اعداد نباید کمتر یا بیشتر از ده رقم باشد"),
    BCnumber: Yup.string()
        .required("لطفا این قسمت را پر کنید")
        .matches(/^(?=.*[0-9])(?=.{10,10})/, "طول اعداد نباید کمتر یا بیشتر از ده رقم باشد"),
    mobile: Yup.string()
        .required("لطفا این قسمت را پر کنید")
        .matches(/^(?=.*[0-9])(?=.{11,11})/, "طول اعداد نباید کمتر یا بیشتر از یازده رقم باشد"),
    // birthday: 
    educations: Yup.string()
        .required("لطفا این قسمت را پر کنید")
        .matches(/^(?=.*[\u0600-\u06FF])/, "فقط حروف فارسی"),
    major: Yup.string()
        .required("لطفا این قسمت را پر کنید")
        .matches(/^(?=.*[\u0600-\u06FF])/, "فقط حروف فارسی"),
    milistatus: Yup.string()
        .required("لطفا این قسمت را پر کنید")
        .matches(/^(?=.*[\u0600-\u06FF])/, "فقط حروف فارسی"),
    isarmy: Yup.boolean(),
})


const Forms = () => {
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={(values) => onSubmit(values)}
            validationSchema={validationSchema}
        >
            {
                (formik) => {
                    return (
                        <Form>
                            <div className="form-container">
                                <div className="row">
                                    <div className='title-container'>
                                        <h4>ثبت اولیه پرسنل</h4>
                                        <i className='fas fa-user'></i>
                                    </div>
                                    <FormikControl
                                        control="input1"
                                        name="firstname"
                                        type="text"
                                        className="validate"
                                        title="نام"
                                    />
                                    <FormikControl
                                        control="input1"
                                        name="lastname"
                                        type="text"
                                        className="validate"
                                        title="نام خانوادگی"
                                    />
                                    <FormikControl
                                        control="input1"
                                        name="gender"
                                        type="text"
                                        className="validate"
                                        title="جنسیت"
                                    />
                                    <FormikControl
                                        control="input1"
                                        name="nationalcode"
                                        type="text"
                                        className="validate"
                                        title="کد ملی"
                                    />
                                    <FormikControl
                                        control="input1"
                                        name="BCnumber"
                                        type="text"
                                        className="validate"
                                        title="شماره شناسنامه"
                                    />
                                    <FormikControl
                                        control="input1"
                                        name="mobile"
                                        type="text"
                                        className="validate"
                                        title="شماره موبایل"
                                    />
                                    <FormikControl
                                        control="input1"
                                        name="birthday"
                                        type="text"
                                        className="validate"
                                        title="تاریخ تولد"
                                    />
                                    <FormikControl
                                        control="input1"
                                        name="educations"
                                        type="text"
                                        className="validate"
                                        title="تحصیلات"
                                    />
                                    <FormikControl
                                        control="input1"
                                        name="major"
                                        type="text"
                                        className="validate"
                                        title="رشته تحصیلی"
                                    />
                                    <FormikControl
                                        control="input1"
                                        name="milistatus"
                                        type="text"
                                        className="validate"
                                        title="وضعیت نظام وظیفه"
                                    />
                                    <FormikControl
                                        control="input1"
                                        name="isarmy"
                                        type="text"
                                        className="validate"
                                        title="پرسنل نیروهای مسلح"
                                    />
                                    <div className='form-part col s5 submit-container'>
                                        <button className='btn waves-effect' type='submit'>
                                            <i className='fa-solid fa-check-double'> ثبت</i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Form>
                    )
                }
            }
        </Formik>
    );
}

export default Forms;
