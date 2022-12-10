import { ErrorMessage, FastField } from "formik";
import FormikError from "./FormikError";

const Select = ({ option1, option2, option3, name, label}) => {
    return (
        <div className='row'>
            <div className="input-field col s4">
                <FastField as="select" name={name}>
                    <option value="" >{option1}</option>
                    <option value="1">{option2}</option>
                    <option value="2">{option3}</option>
                </FastField>
                <label>{label}</label>
            </div>
            <ErrorMessage name={name} component={FormikError} />
        </div>
    );
};

export default Select;