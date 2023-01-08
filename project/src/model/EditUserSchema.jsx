import * as Yup from 'yup'

export const schemaEditUser = Yup.object().shape({
    name: Yup
        .string()
        .min(5,"Debe tener al menos 5 caracteres")
        .required("El campo nombre es requerido"),
    email: Yup
        .string()
        .email("El campo tiene que ser tipo email")
        .required("El campo contraseña es requerido"),
    level: Yup
        .number()
        .typeError('El campo tiene que ser numérico')
        .min(0, 'Min value 0.')
        .max(50, 'Max value 50.')
        .required("El campo nivel es requerido"),
})