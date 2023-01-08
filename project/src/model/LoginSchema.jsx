import * as Yup from 'yup'

export const schema = Yup.object().shape({
    username: Yup
            .string()
            .required("El campo usuario es requerido"),
    password: Yup
            .string()
            .required("El campo contraseña es requerido")
            .min(3),
})