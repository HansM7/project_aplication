import axios from "axios";
import { useContext } from "react"
import INSTANCE from "../../config/config";
import { DataContext } from "../../context/UserContext"
import { BASE, BASE_JSON } from "../../utils/api.utils";


function ModalDelete() {

    const {dataModalEdit,getUsers} = useContext(DataContext)

	const handleDelete=async()=>{
        if(INSTANCE==="NO_BACKEND"){
            await axios.delete(`${BASE_JSON}/delete-user/${dataModalEdit.id}`)
            .then((result) => {
                getUsers()
                // resetForm({values:''}) //opcional, la recarga de la pagina evita la permanencia de los valores
                window.location.reload()
            }).catch((err) => {
                alert("Error en procesar la petición")
            });
        }else{
            await axios.delete(`${BASE}/delete-user/${dataModalEdit.id}`)
            .then((result) => {
                getUsers()
                // resetForm({values:''}) //opcional, la recarga de la pagina evita la permanencia de los valores
                window.location.reload()
            }).catch((err) => {
                alert("Error en procesar la petición")
            });
        }
		
	}


    return (
		<>
			<div className="modal fade" id="deleteModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Eliminar usuario</h5>
                            <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">Está seguro que desea eliminar a <strong>{dataModalEdit.name}</strong></div>
                        <div className="modal-footer">
                            <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                            <button onClick={()=>{handleDelete()}} className="btn btn-danger" >Eliminar</button>
                        </div>
                    </div>
                </div>
            </div>
		</>
    )
}

export default ModalDelete