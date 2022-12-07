import Input from '../Formik/Input';
import Checkbox from './Checkbox';
import Input1 from './Input1';
import Select from './Select';

const FormikControl = (props) => {
    switch (props.control) {
        case 'input':
            return <Input {...props} />
        case 'input1':
            return <Input1 {...props} />
        case 'Checkbox':
            return <Checkbox {...props} />
        case 'select':
            return <Select {...props} />
        default:
            return null
    }
}

export default FormikControl;