import { useContext } from 'react';

// PrimeReact UI
import {Button} from "primereact/button";

// Formik
import { useFormik } from 'formik';

// Context
import AuthContext from 'context/auth/authContext';
import ErrorsContext from 'context/errors/errorsContext';

// Custom Components
import Custommessage from "components/messages/Custommessage";
import FormInputText from "components/shared/forms/formItems/FormInputText";

// Custom Constants
import { loginValidations, newVillaForm, loginFields } from 'types/forms/login';


export default function LoginForm() {

    const errorsContext = useContext(ErrorsContext)
    const { hasError, errorText } = errorsContext

    const authContext = useContext(AuthContext)
    const { doLogin } = authContext

    const formik = useFormik({
        // enableReinitialize: true,
        initialValues: newVillaForm,
        validationSchema: loginValidations,
        onSubmit: values => {
            doLogin(values)
        }
    })

    return (
        <form
            className="flex flex-column w-full"
            // className={classes.formContainer}
            onSubmit={formik.handleSubmit}
        >
            {
                (hasError) &&
                    <Custommessage
                        severity="error"
                        message={errorText}
                        closable={true}
                    />
            }

            {
                loginFields.map( item => (
                    <FormInputText
                        key={item.slug}
                        field={item}
                        formik={formik}
                    />
                ))
            }

            <Button
                className="mt-2"
                label="Login"
            />

        </form>
    )
}