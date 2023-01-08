
import { useContext, useEffect } from "react"
import DataProvider from "../context/UserContext"
import ModalDelete from "../pures/modals/ModalDelete"
import ModalEdit from "../pures/modals/ModalEdit"
import ModalLogout from "../pures/modals/ModalLogout"
import ModalRegister from "../pures/modals/ModalRegister"
import NavbarComponent from "../pures/NavbarComponent"
import TopBarComponent from "../pures/TopBarComponent"
import UsersComponent from "../pures/UsersComponent"
import { useNavigate } from "react-router-dom"
import { TOKEN_USER } from "../utils/api.utils"




function Users() {

	const navigate = useNavigate()

    const token = window.localStorage.getItem(TOKEN_USER)

	useEffect(() => {
		if(!token){
			navigate('/')
		}
	}, [])
	

    return (
        <DataProvider>
            <div id="wrapper">

            <NavbarComponent></NavbarComponent>

            <div id="content-wrapper" className="d-flex flex-column">

                <div id="content">
                    <TopBarComponent></TopBarComponent>
                    <div className="container-fluid">

                        <div className="d-sm-flex align-items-center justify-content-between mb-4">
                            <h1 className="h3 mb-0 text-gray-800">Gestión de usuario</h1>
                            <button data-toggle="modal" data-target="#registerModal"  className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
                                <i className="fas fa-download fa-sm text-white-50"></i>Registrar usuario</button>
                        </div>

                        <div className="row">
                            <UsersComponent></UsersComponent>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <ModalLogout></ModalLogout>
            <ModalRegister></ModalRegister>
            <ModalEdit></ModalEdit>
            <ModalDelete></ModalDelete>
        </DataProvider>
    )
}

export default Users