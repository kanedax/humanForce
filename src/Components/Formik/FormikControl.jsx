import Input from '../Formik/Input';
import Checkbox from './Checkbox';

const FormikControl = (props)=>{
    switch (props.control) {
        case 'input':
            return <Input {...props}/>
        case 'Checkbox':
            return <Checkbox {... props}/>    
        default:
            return null
    }
}

export default FormikControl;