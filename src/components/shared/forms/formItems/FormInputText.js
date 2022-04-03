import {InputText} from 'primereact/inputtext';

export default function FormInputText({ field, isDisabled, formik, noLabel = false }) {

    const inputValue = (!!field.extraName)
        ? `${formik.values[field.name]} (${formik.values[field.extraName]})`
        : formik.values[field.name]

    const handleChange = ({ target }) => {
        const value = (!!field.uppercase) ? target.value.toUpperCase() : target.value
        formik.setFieldValue(field.name, value)
    }

    return (
        <div
            className={`col-${field.col || '12'} flex flex-column ${isDisabled && "gmc-cur-not-allowed"}`}
        >
            {
                // (!field.noLabel && noLabel) &&
                (!field.noLabel) &&
                    <label
                        htmlFor={`${field.name}`}
                        className={field?.class}
                    >
                        {field.label}
                    </label>
            }
            <InputText
                id={`${field.name}`}
                type={field.type}
                className={`${field?.class}-input`}
                value={inputValue || ''}
                onChange={handleChange}
                disabled={isDisabled}
                placeholder={field.label}

            />
            {
                (formik.touched[field.slug] && Boolean(formik.errors[field.slug])) &&
                <span className="gmc-text-error mt-1">
                    {formik.touched[field.slug] && formik.errors[field.slug]}
                </span>
            }
        </div>
    )
}