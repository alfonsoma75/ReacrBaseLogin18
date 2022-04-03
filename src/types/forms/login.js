// Yup Validations
import * as yup from 'yup';


// Form initial data
export const newVillaForm = {
    username: '',
    password: '',
}

// Validations
export const loginValidations = yup.object({
    username: yup
        .string('Enter an Email')
        // .email('Enter a valid email')
        .required('Username is required'),
    password: yup
        .string('Enter a password')
        // .email('Enter a valid email')
        .required('Password is required'),

})

export const loginFields = [
    {
        name: 'username',
        slug: 'username',
        label: 'Username or Email',
        type: 'text',
        noLabel: true
    },
    {
        name: 'password',
        slug: 'password',
        label: 'Password',
        type: 'password',
        noLabel: true
    }
]
