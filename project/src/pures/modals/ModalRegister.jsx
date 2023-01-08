import axios from "axios"
import { Formik, Field, ErrorMessage, Form } from "formik"
import { useContext } from "react"
import { DataContext } from "../../context/UserContext"
import { schemaUser } from "../../model/RegisterUserSchema"
import { BASE, BASE_JSON } from "../../utils/api.utils"
import INSTANCE from "../../config/config"

function ModalRegister() {

    const {getUsers} = useContext(DataContext)

    return (
        <>
            <div className="modal fade" id="registerModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div className="modal-dialog" role="document">

                    <Formik
                        initialValues={{name:"",email:"",level:""}}
                        validationSchema={schemaUser}
                        onSubmit={async(values,{resetForm})=>{

                            if(INSTANCE==="NO_BACKEND"){
                                await axios.post(`${BASE_JSON}/create-user`,values)
                                .then((result) => {
                                    getUsers()
                                    // resetForm({values:''}) //opcional, la recarga de la pagina evita la permanencia de los valores
                                    window.location.reload()
                                }).catch((err) => {
                                    
                                });

                            }else{
                                await axios.post(`${BASE}/create-user`,values)
                                .then((result) => {
                                    getUsers()
                                    // resetForm({values:''}) //opcional, la recarga de la pagina evita la permanencia de los valores
                                    window.location.reload()
                                }).catch((err) => {
                                    
                                });
                            }

                            
                        }}
                    >

                        {({ values,touched,errors,handleChange,handleBlur,isSubmitting })=>{
                            return(
                                 <Form className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Registrar usuario</h5>
                                        <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">×</span>
                                        </button>
                                    </div>
                                    <div className="modal-body ">
                                        <div>
                                            <div className="form-group mb-4">
                                                <Field 
                                                    className="form-control" 
                                                    placeholder="Ingrese el nombre"
                                                    name="name"
                                                    autoComplete="off"
                                                    type="text" />
                                                <span  className="text-danger"><ErrorMessage  name="name"></ErrorMessage></span>
                                                
                                            </div>
                                            
                                            <div className="form-group mb-4">
                                                <Field 
                                                    className="form-control" 
                                                    placeholder="Ingrese el correo"
                                                    name="email"
                                                    autoComplete="off"
                                                    type="email" />
                                                <span  className="text-danger"><ErrorMessage  name="email"></ErrorMessage></span>
                                            </div>
                                            
                                            <div className="form-group mb-4" >
                                                <Field 
                                                    className="form-control" 
                                                    placeholder="Ingrese el nivel"
                                                    autoComplete="off"
                                                    name="level"
                                                    type="text" />
                                                <span  className="text-danger"><ErrorMessage  name="level"></ErrorMessage></span>
                                            </div>
                                            
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancelar</button>
                                        <button type="submit" className="btn btn-success" >Registrar</button>
                                    </div>
                                </Form> 
                            )
                        }}
                        

                    </Formik>
                    
                </div>
            </div>
        </>
    )
}

export default ModalRegister