import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { TOKEN_USER } from "../../utils/api.utils"

function ModalLogout() {

    const navigate = useNavigate()

    const handleLogout=()=>{
        window.localStorage.removeItem(TOKEN_USER)
        navigate('/')
    }
    

    return (
        <>
            <div className="modal fade" id="logoutModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Salir del sistema</h5>
                            <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">Está seguro que desea cerrar su sesión</div>
                        <div className="modal-footer">
                            <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                            <button onClick={()=>{handleLogout()}} className="btn btn-primary" >Logout</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModalLogout