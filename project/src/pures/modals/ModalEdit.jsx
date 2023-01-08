import axios from "axios";
import { ErrorMessage, Field, Formik,Form } from "formik"
import { useContext, useEffect, useState } from "react";
import Select from "react-select";
import INSTANCE from "../../config/config";
import { DataContext } from "../../context/UserContext";
import { schemaEditUser } from "../../model/EditUserSchema";
import { BASE, BASE_JSON } from "../../utils/api.utils";


function ModalEdit() {

    const {dataModalEdit,getUsers} = useContext(DataContext)

    // const [selectData, setSelectData] = useState({})
    
    // if(dataModalEdit.status==="inactive"){
    //     setSelectData({value: 'inactive', label: 'INACTIVO' })

    // }else{
    //     setSelectData({value: 'active', label: 'ACTIVO' })
    // }

    // useEffect(() => {
    //     if(dataModalEdit.status==="active"){
    //         setSelectData({...selectData, value: 'active', label: 'ACTIVE'})
    //     }else{
    //         setSelectData({...selectData, value: 'inactive', label: 'INACTIVO'})
    //     }
    // }, [])
    
    // console.log(selectData)


    const options = [
        { value: 'inactive', label: 'INACTIVO' },
        { value: 'active', label: 'ACTIVE' }
    ];

    return (
        <>
            <div className="modal fade" id="editModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div className="modal-dialog" role="document">

                    <Formik
                        enableReinitialize

                        initialValues={{
                            name:dataModalEdit.name,
                            email:dataModalEdit.email,
                            status:dataModalEdit.status,
                            level:dataModalEdit.level}}

                        validationSchema={schemaEditUser}

                        onSubmit={async(values,{resetForm})=>{

                            const dataSet={
                                name:values.name,
                                email:values.email,
                                status:(values.status.value)?values.status.value:values.status,
                                level:values.level
                            }

                            if (INSTANCE==="NO_BACKEND") {
                                await axios.put(`${BASE_JSON}/edit-user/${dataModalEdit.id}`,dataSet)
                                .then((result) => {
                                    getUsers()
                                    // resetForm({values:''}) //opcional, la recarga de la pagina evita la permanencia de los valores
                                    window.location.reload()
                                }).catch((err) => {
                                    console.error(err)
                                });
                            }else{
                                await axios.put(`${BASE}/edit-user/${dataModalEdit.id}`,dataSet)
                                .then((result) => {
                                    getUsers()
                                    // resetForm({values:''}) //opcional, la recarga de la pagina evita la permanencia de los valores
                                    window.location.reload()
                                }).catch((err) => {
                                    console.error(err)
                                });
                            }
                            
                        }}
                    >

                        {({ values,touched,errors,handleChange,setFieldValue,isSubmitting,field })=>{
                            
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

                                            <div className="form-group mb-4">
                                                <Select
                                                    name="status"
                                                    onChange={(option) => setFieldValue("status", option)}
                                                    options={options}
                                                    placeholder="Seleccione un nuevo estado"
                                                    required
                                                >
                                                </Select>
                                                <span  className="text-danger"><ErrorMessage  name="status"></ErrorMessage></span>
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
                                        <button type="submit" className="btn btn-primary" >Guardar cambios</button>
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

export default ModalEdit